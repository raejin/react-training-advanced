import 'purecss/build/pure.css'
import React from 'react'
import { render } from 'react-dom'
import { unitedStates, matchUnitedStateToTerm, sortUnitedStates } from './lib/utils'

////////////////////////////////////////////////////////////////////////////////
// Requirements
//

class DataFilter extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

DataFilter.propTypes = { };

class App extends React.Component {

  render () {
    return (
      <div>
        <h1>DataFilter</h1>

        <DataFilter
          items={unitedStates}
          shouldItemRender={matchUnitedStateToTerm}
          sortItems={sortUnitedStates}
        >
          {(items) => items.map((state) => (
            <a
              style={{display: 'block'}}
              href={`http://www.50states.com/facts/${state.name}.htm`}
            >{item.name}</a>
          ))}
        </DataFilter>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
