import React from 'react';

var ScrollBottomNotifier = React.createClass({

  propTypes: {
    onScrollBottom: React.PropTypes.func,
    buffer: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      buffer: 200
    };
  },

  handleScroll (event) {
    var { scrollTop, scrollHeight, clientHeight } = event.target;
    var hitBottom = scrollTop + clientHeight >= scrollHeight - this.props.buffer;
    if (hitBottom && this.props.onScrollBottom)
      this.props.onScrollBottom();
  },

  render () {
    var style = {...this.props.style, overflow: 'auto'};
    return <div
      {...this.props}
      style={style}
      onScroll={this.handleScroll}
    />;
  }

});

export default ScrollBottomNotifier;

