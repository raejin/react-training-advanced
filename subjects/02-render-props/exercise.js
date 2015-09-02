////////////////////////////////////////////////////////////////////////////////
//
// Exercise:
//
// Write a <Tail/> that only logs the last `n` number of rows in a dataset,
// with an API that allows the developer to control the the rendering.
//
// Hint: You can use a prop that renders a single item, or you can pass all
// the items to the render prop handing over all rendering control to the
// developer
//
// Got extra time?
//
// - make the Tail scroll to the bottom when new rows come in
// - if you didn't already do it this way, make it declarative with a
//   <PinnedToBottom/> component.
// - now make sure if the user scrolls up, you don't scroll them down
// - make a <JSONP/> component that fetches data with the jsonp package used in
//   `lib/githubSearch` that uses a render prop to pass its data back up
//
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { render } from 'react-dom';
import { listen } from './lib/log';

var Tail = React.createClass({
  render () {
    return (
      <div style={{height: 400, overflow: 'auto', border: '1px solid'}}>

        {/* get this rendering outta here and into App */}
        <ul>
          {this.props.rows.map((row, index) => (
            <li key={index}>{row}</li>
          ))}
        </ul>

      </div>
    );
  }
});

var App = React.createClass({

  getInitialState() {
    return {
      rows: []
    }
  },

  componentDidMount () {
    listen((newRows) => {
      this.setState({
        rows: this.state.rows.concat(newRows)
      });
    });
  },

  render () {
    return (
      <div>
        <h1>Heads up Eggman, here comes <code>&lt;Tails&gt;</code>s!</h1>
        <Tail rows={this.state.rows}/>
      </div>
    );
  }

});

render(<App/>, document.getElementById('app'))

// don't let us forget to talk about `key` here, kthankx.
