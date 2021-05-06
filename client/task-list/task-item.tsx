/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';
import { Button, Tooltip } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';
import { __experimentalListItem as ListItem } from '@woocommerce/components';
import NoticeOutline from 'gridicons/dist/notice-outline';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './task-item.scss';
import sanitizeHTML from '../lib/sanitize-html';

type TaskLevel = 1 | 2 | 3;

type TaskItemProps = {
	title: string;
	completed: boolean;
	onClick?: () => void;
	isDismissable?: boolean;
	onDismiss?: () => void;
	additionalInfo?: string;
	time?: string;
	content: string;
	expanded?: boolean;
	level?: TaskLevel;
	action: ( event?: React.MouseEvent | React.KeyboardEvent ) => void;
	actionLabel?: string;
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
	isDismissable,
	onDismiss,
	onClick,
	additionalInfo,
	time,
	content,
	expanded = false,
	level = 3,
	action,
	actionLabel,
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
				<Text as="div" variant={ completed ? 'body.small' : 'button' }>
					<span className="woocommerce-task-list__item-title">
						{ title }
					</span>
					{ additionalInfo && (
						<div
							className="woocommerce-task__additional-info"
							dangerouslySetInnerHTML={ sanitizeHTML(
								additionalInfo
							) }
						></div>
					) }
					{ expanded && (
						<div className="woocommerce-task-list__item-content">
							{ content }
						</div>
					) }
					{ expanded && ! completed && (
						<Button
							className="woocommerce-task-list__item-action"
							isPrimary
							onClick={ (
								event: React.MouseEvent | React.KeyboardEvent
							) => {
								event.stopPropagation();
								action( event );
							} }
						>
							{ actionLabel || title }
						</Button>
					) }
					{ time && (
						<div className="woocommerce-task__estimated-time">
							{ time }
						</div>
					) }
				</Text>
			</div>
			{ onDismiss && isDismissable && ! completed && (
				<div className="woocommerce-task-list__item-after">
					<Button
						data-testid={ `dismiss-button` }
						isTertiary
						onClick={ (
							event: React.MouseEvent | React.KeyboardEvent
						) => {
							event.stopPropagation();
							onDismiss();
						} }
					>
						{ __( 'Dismiss', 'woocommerce-admin' ) }
					</Button>
				</div>
			) }
		</ListItem>
	);
};
