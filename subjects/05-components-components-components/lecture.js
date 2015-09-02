import React from 'react/addons'
import { render } from 'react-dom'
let { PureRenderMixin } = React.addons;

//var CreateClass = React.createClass({

  //mixins: [ PureRenderMixin ],

  //propTypes: {
    //someProp: React.PropTypes.string
  //},

  //getDefaultProps () {
    //return {
      //taco: 'carnitas'
    //};
  //},

  //getInitialState () {
    //return {
      //name: 'createClass'
    //};
  //},

  //render () {
    //return (
      //<div>
        //<p>I am a {this.state.name}.</p>
        //<p>Thanks for the Taco, its {this.props.taco}.</p>
        //<p>Mixins sure are nice for lifecycle hooks, aren’t they?</p>
      //</div>
    //)
  //}

//});

//render(<CreateClass/>, document.getElementById('app'))

////////////////////////////////////////////////////////////////////////////////
// React.Component
//
// mixins ...
//  - mixin function
//  - decorators
//  - imperative
//  - inheritence
//  - I'm sure several people today will be excited to tell us their solution,
//    feel free :)

//class SomeClass extends React.Component {

  //constructor(props, context) {
    //super(props, context);
    //this.state = {
      //name: 'createClass'
    //};
  //}

  //shouldComponentUpdate (nextProps, nextState) {
    //return PureRenderMixin.call(this, nextProps, nextState)
  //}

  //render () {
    //return (
      //<div>
        //<p>I am a {this.state.name}.</p>
        //<p>Thanks for the Taco, its {this.props.taco}.</p>
        //<p>Mixins sure are nice for lifecycle hooks, aren’t they?</p>
      //</div>
    //)
  //}
//}

//SomeClass.propTypes = {
  //someProp: React.PropTypes.string
//};

//SomeClass.defaultProps = {
  //taco: 'carnitas'
//};


//render(<SomeClass/>, document.getElementById('app'))

////////////////////////////////////////////////////////////////////////////////
// "Module Pattern" components

//function ModulePattern (props) {
  //var state = {
    //name: 'ModulePattern'
  //};

  //return {
    //shouldComponentUpdate: PureRenderMixin.shouldComponentUpdate,

    //render () {
      //return (
        //<div>
          //<p>I am a {state.name}.</p>
          //<p>Thanks for the Taco, its {props.taco}.</p>
        //</div>
      //)
    //}
  //};
//}

//ModulePattern.propTypes = {
  //someProp: React.PropTypes.string
//};

//ModulePattern.defaultProps = {
  //taco: 'carne asada'
//};

//render(<ModulePattern />, document.getElementById('app'))

////////////////////////////////////////////////////////////////////////////////
// Pure Functions

function StateHater (props) {
  return (
    <div>
      <p>I am a StateHater.</p>
      <p>Thanks for the Taco, its {props.taco}.</p>
    </div>
  )
}

StateHater.propTypes = {
  someProp: React.PropTypes.string
};

StateHater.defaultProps = {
  taco: 'carne asada'
};

render(<StateHater/>, document.getElementById('app'));
