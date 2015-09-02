import React, { PropTypes } from 'react';
import { render } from 'react-dom'

////////////////////////////////////////////////////////////////////////////////
// Requirements
//

class Slider extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

Slider.propTypes = { };

class SliderStage extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

class Slide extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

class SliderControls extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

class SliderPrevious extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

class SliderPlayPause extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

class SliderNext extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
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
      <div className="content">
        <h1>Slider</h1>

        <Slider
          initialSlide="./slides/hamburger.jpg"
          duration={5000}
          autoplay
        >
          <SliderStage>
            <Slide src="./slides/hamburger.jpg"/>
            <Slide src="./slides/chicken-nuggets.jpg"/>
            <Slide src="./slides/mcmuffin.jpg"/>
          </SliderStage>

          <SliderControls>
            <SliderPrevious/>
            <SliderPlayPause/>
            <SliderNext/>
          </SliderControls>
        </Slider>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

