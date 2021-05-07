/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';
import { Button, Tooltip } from '@wordpress/components';
import NoticeOutline from 'gridicons/dist/notice-outline';
import {
	EllipsisMenu,
} from '@woocommerce/components';
import classnames from 'classnames';
import { sanitize } from 'dompurify';

/**
 * Internal dependencies
 */
import { Text, ListItem } from '../';

const ALLOWED_TAGS = [ 'a', 'b', 'em', 'i', 'strong', 'p', 'br' ];
const ALLOWED_ATTR = [ 'target', 'href', 'rel', 'name', 'download' ];

const sanitizeHTML = ( html: string ) => {
	return {
		__html: sanitize( html, { ALLOWED_TAGS, ALLOWED_ATTR } ),
	};
};

type TaskLevel = 1 | 2 | 3;

type TaskItemProps = {
	title: string;
	completed: boolean;
	onClick: () => void;
	onDismiss?: () => void;
	remindMeLater?: () => void;
	additionalInfo?: string;
	time?: string;
	content?: string;
	expanded?: boolean;
	level?: TaskLevel;
};

const OptionalTaskTooltip: React.FC< {
	level: TaskLevel;
	completed: boolean;
	children: JSX.Element;
} > = ( { level, completed, children } ) => {
	let tooltip = '';
	if ( level === 1 && ! completed ) {
		tooltip = __(
			'This task is required to keep your store running',
			'woocommerce-admin'
		);
	} else if ( level === 2 && ! completed ) {
		tooltip = __(
			'This task is required to set up your extension',
			'woocommerce-admin'
		);
	}
	if ( tooltip === '' ) {
		return children;
	}
	return <Tooltip text={ tooltip }>{ children }</Tooltip>;
};

export const TaskItem: React.FC< TaskItemProps > = ( {
	completed,
	title,
	onDismiss,
	remindMeLater,
	onClick,
	additionalInfo,
	time,
	content,
	expanded = false,
	level = 3,
} ) => {
	const className = classnames( 'woocommerce-task-list__item', {
		complete: completed,
		'level-2': level === 2 && ! completed,
		'level-1': level === 1 && ! completed,
	} );

	return (
		<ListItem
			disableGutters
			className={ className }
			onClick={ onClick }
			animation="slide-right"
		>
			<OptionalTaskTooltip level={ level } completed={ completed }>
				<div className="woocommerce-task-list__item-before">
					{ level === 1 && ! completed ? (
						<NoticeOutline size={ 36 } />
					) : (
						<div className="woocommerce-task__icon">
							{ completed && <Icon icon={ check } /> }
						</div>
					) }
				</div>
			</OptionalTaskTooltip>
			<div className="woocommerce-task-list__item-text">
				<span className="woocommerce-task-list__item-title">
					<Text
						as="div"
						variant={ completed ? 'body.small' : 'button' }
					>
						{ title }
						{ additionalInfo && (
							<div
								className="woocommerce-task__additional-info"
								dangerouslySetInnerHTML={ sanitizeHTML(
									additionalInfo
								) }
							></div>
						) }
						{ expanded && content && (
							<div className="woocommerce-task-list__item-content">
								{ content }
							</div>
						) }
						{ time && ! completed && (
							<div className="woocommerce-task__estimated-time">
								{ time }
							</div>
						) }
					</Text>
				</span>
			</div>
			{ ( onDismiss || remindMeLater ) && ! completed && (
				<EllipsisMenu
					label={ __( 'Task Options', 'woocommerce-admin' ) }
					className="woocommerce-task-list__item-after"
					onToggle={ ( e: React.MouseEvent | React.KeyboardEvent ) =>
						e.stopPropagation()
					}
					renderContent={ () => (
						<div className="woocommerce-task-card__section-controls">
							{ onDismiss && (
								<Button
									onClick={ (
										e:
											| React.MouseEvent
											| React.KeyboardEvent
									) => {
										e.stopPropagation();
										onDismiss();
									} }
								>
									{ __( 'Dismiss', 'woocommerce-admin' ) }
								</Button>
							) }
							{ remindMeLater && (
								<Button
									onClick={ ( e: React.MouseEvent ) => {
										e.stopPropagation();
										remindMeLater();
									} }
								>
									{ __(
										'Remind me later',
										'woocommerce-admin'
									) }
								</Button>
							) }
						</div>
					) }
				/>
			) }
		</ListItem>
	);
};
