import React, { PropTypes } from 'react';
import defaultPropTypes from './defaultPropTypes';
import StackedNotification from './stackedNotification';

/**
 * The notification list does not have any state, so use a
 * pure function here. It just needs to return the stacked array
 * of notification components.
 */
const NotificationStack = props => (
  <div className="notification-list">
    {props.notifications.map((notification, index) => {
      const dismissAfter = notification.dismissAfter || props.dismissAfter || 2000;
      const lastNotificationDismissAfter = 300;
      const isLast = index === 0 && props.notifications.length === 1;
      return (
        <StackedNotification
          {...notification}
          key={notification.key}
          isLast={isLast}
          action={notification.action || props.action}
          dismissAfter={isLast ? dismissAfter : dismissAfter + (index * 1000)}
          onClick={() => props.onDismiss(notification)}
          onDismiss={() => setTimeout(() => {
            setTimeout(props.onDismiss.bind(this, notification), lastNotificationDismissAfter);
          }, dismissAfter)}
          style={notification.style !== null ? notification.style : {
            bar: {
              bottom: `${2 + index * 4}rem`,
            }
          }}
        />
      );
    })}
  </div>
);

NotificationStack.propTypes = {
  notifications: PropTypes.array.isRequired,
  onDismiss: PropTypes.func
};

export default NotificationStack;
