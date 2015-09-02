import React, { PropTypes } from 'react'
import { render } from 'react-dom'
let { func, any } = PropTypes

////////////////////////////////////////////////////////////////////////////////
// Requirements

let styles = {}

class Select extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: this.props.defaultValue || null,
      showChildren: false
    }
    if (!this.isUncontrolled() && !this.props.onChange) {
      console.warn('This thing is gonna be read-only, etc. etc.')
    }
  }

  getLabel () {
    let label = null
    React.Children.forEach(this.props.children, (child) => {
      let childValue = child.props.value
      if (
        (this.isUncontrolled() && childValue === this.state.value) ||
        (child.props.value === this.props.value)
      ) {
        label = child.props.children
      }
    })
    return label
  }

  toggle () {
    this.setState({
      showChildren: !this.state.showChildren
    })
  }

  isUncontrolled () {
    return this.props.value == null
  }

  handleSelect (value) {
    let nextState = { showChildren: false }

    if (this.isUncontrolled())
      nextState.value = value

    this.setState(nextState, () => {
      if (this.props.onChange)
        this.props.onChange(value)
    })
  }

  renderChildren () {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onSelect: (value) => this.handleSelect(value)
      })
    })
  }

  render () {
    return (
      <div style={styles.select} onClick={() => this.toggle()}>
        <div style={styles.label}>{this.getLabel()} <span style={styles.arrow}>▾</span></div>
        {this.state.showChildren && (
          <div style={styles.options}>
            {this.renderChildren()}
          </div>
        )}
      </div>
    )
  }
}

Select.propTypes = {
  onChange: func,
  value: any,
  defaultValue: any
};

class Option extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = { hovering: false }
  }

  handleClick () {
    this.props.onSelect(this.props.value)
  }

  render () {
    return (
      <div
        style={this.state.hovering ? styles.optionHover : styles.option}
        onClick={() => this.handleClick()}
        onMouseEnter={() => this.setState({hovering: true})}
        onMouseLeave={() => this.setState({hovering: false})}
      >{this.props.children}</div>
    )
  }
}

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

styles.option = {
  padding: '4px'
}

styles.optionHover = {
  background: '#eee',
  ...styles.option
}

styles.options = {
  position: 'absolute',
  background: '#fff',
  border: '1px solid #ccc'
}

class App extends React.Component {

  constructor (props, context) {
    super(props, context);
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


