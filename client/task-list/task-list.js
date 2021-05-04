/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { Button, Card, CardBody, CardHeader } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { EllipsisMenu, Badge } from '@woocommerce/components';
import { updateQueryString } from '@woocommerce/navigation';
import { OPTIONS_STORE_NAME, ONBOARDING_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import {
	Text,
	List,
	CollapsibleList,
	TaskItem,
} from '@woocommerce/experimental';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const TaskList = ( {
	query,
	name = 'task_list',
	isComplete,
	dismissedTasks,
	remindMeLaterTasks,
	tasks,
	trackedCompletedTasks: totalTrackedCompletedTasks,
	title: listTitle,
} ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { profileItems } = useSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );

		return {
			profileItems: getProfileItems(),
		};
	} );

	const prevQueryRef = useRef( query );
	useEffect( () => {
		recordTaskListView();
	}, [] );

	useEffect( () => {
		const { task: prevTask } = prevQueryRef.current;
		const { task } = query;

		if ( prevTask !== task ) {
			window.document.documentElement.scrollTop = 0;
			prevQueryRef.current = query;
		}

		possiblyCompleteTaskList();
		possiblyTrackCompletedTasks();
	}, [ query ] );

	const possiblyCompleteTaskList = () => {
		const taskListVariableName = `woocommerce_${ name }_complete`;
		const taskListToComplete = isComplete
			? { [ taskListVariableName ]: 'no' }
			: { [ taskListVariableName ]: 'yes' };
		if ( name === 'task_list' ) {
			taskListToComplete.woocommerce_default_homepage_layout =
				'two_columns';
		}

		if (
			( ! getIncompleteTasks().length && ! isComplete ) ||
			( getIncompleteTasks().length && isComplete )
		) {
			updateOptions( {
				...taskListToComplete,
			} );
		}
	};

	const getCompletedTaskKeys = () => {
		return getVisibleTasks()
			.filter( ( task ) => task.completed )
			.map( ( task ) => task.key );
	};

	const getIncompleteTasks = () => {
		return tasks.filter(
			( task ) =>
				task.visible &&
				! task.completed &&
				! dismissedTasks.includes( task.key )
		);
	};

	const getTrackedIncompletedTasks = (
		partialCompletedTasks,
		allTrackedTask
	) => {
		return getVisibleTasks()
			.filter(
				( task ) =>
					allTrackedTask.includes( task.key ) &&
					! partialCompletedTasks.includes( task.key )
			)
			.map( ( task ) => task.key );
	};

	const possiblyTrackCompletedTasks = () => {
		const completedTaskKeys = getCompletedTaskKeys();
		const trackedCompletedTasks = getTrackedCompletedTasks(
			completedTaskKeys,
			totalTrackedCompletedTasks
		);

		const trackedIncompleteTasks = getTrackedIncompletedTasks(
			trackedCompletedTasks,
			totalTrackedCompletedTasks
		);

		if (
			shouldUpdateCompletedTasks(
				trackedCompletedTasks,
				trackedIncompleteTasks,
				completedTaskKeys
			)
		) {
			updateOptions( {
				woocommerce_task_list_tracked_completed_tasks: getTasksForUpdate(
					completedTaskKeys,
					totalTrackedCompletedTasks,
					trackedIncompleteTasks
				),
			} );
		}
	};

	const dismissTask = ( { key, onDismiss } ) => {
		createNotice( 'success', __( 'Task dismissed' ), {
			actions: [
				{
					label: __( 'Undo', 'woocommerce-admin' ),
					onClick: () => undoDismissTask( key ),
				},
			],
		} );

		recordEvent( 'tasklist_dismiss_task', { task_name: key } );

		updateOptions( {
			woocommerce_task_list_dismissed_tasks: [ ...dismissedTasks, key ],
		} );
		if ( onDismiss ) {
			onDismiss();
		}
	};

	const undoDismissTask = ( key ) => {
		const updatedDismissedTasks = dismissedTasks.filter(
			( task ) => task !== key
		);

		updateOptions( {
			woocommerce_task_list_dismissed_tasks: updatedDismissedTasks,
		} );
	};

	const remindTaskLater = ( { key, onDismiss } ) => {
		createNotice(
			'success',
			__( 'Task postponed until tomorrow', 'woocommerce-admin' ),
			{
				actions: [
					{
						label: __( 'Undo', 'woocommerce-admin' ),
						onClick: () => undoRemindTaskLater( key ),
					},
				],
			}
		);
		const isCoreTaskList = name === 'task_list';
		const taskListName = isCoreTaskList ? 'tasklist' : 'extended_tasklist';
		recordEvent( `${ taskListName }_task_remindmelater`, {
			task_name: key,
		} );

		const dismissTime = Date.now() + DAY_IN_MS;
		updateOptions( {
			woocommerce_task_list_remind_me_later_tasks: {
				...remindMeLaterTasks,
				[ key ]: dismissTime,
			},
		} );
		if ( onDismiss ) {
			onDismiss();
		}
	};

	const undoRemindTaskLater = ( key ) => {
		const {
			// eslint-disable-next-line no-unused-vars
			[ key ]: oldValue,
			...updatedRemindMeLaterTasks
		} = remindMeLaterTasks;

		updateOptions( {
			woocommerce_task_list_remind_me_later_tasks: updatedRemindMeLaterTasks,
		} );
	};

	const getVisibleTasks = () => {
		const nowTimestamp = Date.now();
		return tasks.filter(
			( task ) =>
				task.visible &&
				! dismissedTasks.includes( task.key ) &&
				( ! remindMeLaterTasks[ task.key ] ||
					remindMeLaterTasks[ task.key ] < nowTimestamp )
		);
	};

	const recordTaskListView = () => {
		if ( query.task ) {
			return;
		}

		const isCoreTaskList = name === 'task_list';
		const taskListName = isCoreTaskList ? 'tasklist' : 'extended_tasklist';

		const visibleTasks = getVisibleTasks();

		recordEvent( `${ taskListName }_view`, {
			number_tasks: visibleTasks.length,
			store_connected: profileItems.wccom_connected,
		} );
	};

	const hideTaskCard = ( action ) => {
		const isCoreTaskList = name === 'task_list';
		const taskListName = isCoreTaskList ? 'tasklist' : 'extended_tasklist';
		const updateOptionsParams = {
			[ `woocommerce_${ name }_hidden` ]: 'yes',
		};
		if ( isCoreTaskList ) {
			updateOptionsParams.woocommerce_task_list_prompt_shown = true;
			updateOptionsParams.woocommerce_default_homepage_layout =
				'two_columns';
		}

		recordEvent( `${ taskListName }_completed`, {
			action,
			completed_task_count: getCompletedTaskKeys().length,
			incomplete_task_count: getIncompleteTasks().length,
		} );
		updateOptions( {
			...updateOptionsParams,
		} );
	};

	const renderMenu = () => {
		return (
			<div className="woocommerce-card__menu woocommerce-card__header-item">
				<EllipsisMenu
					label={ __( 'Task List Options', 'woocommerce-admin' ) }
					renderContent={ () => (
						<div className="woocommerce-task-card__section-controls">
							<Button
								onClick={ () => hideTaskCard( 'remove_card' ) }
							>
								{ __( 'Hide this', 'woocommerce-admin' ) }
							</Button>
						</div>
					) }
				/>
			</div>
		);
	};

	const listTasks = getVisibleTasks().map( ( task ) => {
		if ( ! task.onClick ) {
			task.onClick = ( e ) => {
				if ( e.target.nodeName === 'A' ) {
					// This is a nested link, so don't activate this task.
					return false;
				}

				updateQueryString( { task: task.key } );
			};
		}

		return task;
	} );

	if ( ! listTasks.length ) {
		return <div className="woocommerce-task-dashboard__container"></div>;
	}

	const expandLabel = sprintf(
		/* translators: %i = number of hidden tasks */
		_n(
			'Show %i more task.',
			'Show %i more tasks.',
			listTasks.length - 2,
			'woocommerce-admin'
		),
		listTasks.length - 2
	);
	const collapseLabel = __( 'Show less', 'woocommerce-admin' );
	const ListComp = name === 'task_list' ? List : CollapsibleList;

	const listProps =
		name === 'task_list'
			? {}
			: {
					collapseLabel,
					expandLabel,
					show: 2,
					onCollapse: () =>
						recordEvent( 'extended_tasklist_collapse' ),
					onExpand: () => recordEvent( 'extended_tasklist_expand' ),
			  };

	return (
		<>
			<div className="woocommerce-task-dashboard__container">
				<Card
					size="large"
					className="woocommerce-task-card woocommerce-homescreen-card"
				>
					<CardHeader size="medium">
						<div className="wooocommerce-task-card__header">
							<Text variant="title.small">{ listTitle }</Text>
							<Badge count={ getIncompleteTasks().length } />
						</div>
						{ renderMenu() }
					</CardHeader>
					<CardBody>
						<ListComp animation="slide-right" { ...listProps }>
							{ listTasks.map( ( task ) => (
								<TaskItem
									key={ task.key }
									title={ task.title }
									completed={ task.completed }
									content={ task.content }
									onClick={ task.onClick }
									onDismiss={
										task.isDismissable
											? () => dismissTask( task )
											: undefined
									}
									remindMeLater={
										task.allowRemindMeLater
											? () => remindTaskLater( task )
											: undefined
									}
									time={ task.time }
									level={ task.level }
								/>
							) ) }
						</ListComp>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

function shouldUpdateCompletedTasks( tasks, untrackedTasks, completedTasks ) {
	if ( untrackedTasks.length > 0 ) {
		return true;
	}
	if ( completedTasks.length === 0 ) {
		return false;
	}
	return ! completedTasks.every(
		( taskName ) => tasks.indexOf( taskName ) >= 0
	);
}

function getTrackedCompletedTasks( completedTasks, trackedTasks ) {
	if ( ! trackedTasks ) {
		return [];
	}
	return completedTasks.filter( ( taskName ) =>
		trackedTasks.includes( taskName )
	);
}

function getTasksForUpdate(
	completedTaskKeys,
	totalTrackedCompletedTasks,
	trackedIncompleteTasks
) {
	const mergedLists = [
		...new Set( [ ...completedTaskKeys, ...totalTrackedCompletedTasks ] ),
	];
	return mergedLists.filter(
		( taskName ) => ! trackedIncompleteTasks.includes( taskName )
	);
}

export default TaskList;
