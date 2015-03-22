var React = require('react/addons');

var Notification = React.createClass({

  /**
   * @function show
   * @description Show the notification message.
   */
  show: function () {
    this.setState({
      active: true
    });
  },

  /**
   * @function hide
   * @description Hide the notification message.
   */
  hide: function () {
    this.setState({
      active: false
    });
  },

  propTypes: {
    message: React.PropTypes.string.isRequired,
    action: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      active: false
    };
  },

  getDefaultProps: function () {
    return {
      action: 'Dismiss',
      onClick: function () {
        this.hide();
      }
    };
  },

  render: function () {
    return (
      <div className="notificiation-bar">
        <div className="notification-bar-wrapper" onClick={this.props.onClick}>
          <span className="notification-bar-message">{this.props.message}</span>
          <span className="notification-bar-action">{this.props.action}</span>
        </div>
      </div>
    );
  }

});

module.exports = Notification;
