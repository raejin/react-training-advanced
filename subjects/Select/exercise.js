import React, { PropTypes } from 'react';
import { render } from 'react-dom'
let { func, any } = PropTypes

let styles = {}

////////////////////////////////////////////////////////////////////////////////
// Requirements
//
// Make this work like a normal <select><option/></select>

class Select extends React.Component {
  render () {
    return (
      <div/>
    )
  }
}

Select.propTypes = {
  onChange: func,
  value: any,
  defaultValue: any
};

class Option extends React.Component {
  render () {
    return (
      <div/>
    )
  }
}

// You can use these styles to not mess around w/ css if you'd like

styles.select = {
  border: '1px solid #ccc',
  display: 'inline-block',
  margin: '4px',
  cursor: 'pointer',
}

styles.label = {
  padding: '4px'
}

styles.arrow = {
  float: 'right',
  paddingLeft: 4
}

styles.options = {
  position: 'absolute',
  background: '#fff',
  border: '1px solid #ccc'
}

styles.option = {
  padding: '4px'
}

styles.optionHover = {
  background: '#eee',
  ...styles.option
}

class App extends React.Component {
  constructor (props) {

    super(props);
    this.state = {
      selectValue: 'dosa'
    };
  }

  render () {
    return (
      <div>
        <h1>Select/Option</h1>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>

        <h2>Controlled</h2>
        <Select
          value={this.state.selectValue}
          onChange={(selectValue) => this.setState({ selectValue })}
        >
          <Option value="tikka-masala">Tikka Masala</Option>
          <Option value="tandoori-chicken">Tandoori Chicken</Option>
          <Option value="dosa">Dosa</Option>
          <Option value="mint-chutney">Mint Chutney</Option>
        </Select>

        <h2>Uncontrolled</h2>
        <Select defaultValue="tikka-masala">
          <Option value="tikka-masala">Tikka Masala</Option>
          <Option value="tandoori-chicken">Tandoori Chicken</Option>
          <Option value="dosa">Dosa</Option>
          <Option value="mint-chutney">Mint Chutney</Option>
        </Select>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
