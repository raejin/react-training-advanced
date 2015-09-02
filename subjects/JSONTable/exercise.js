import 'purecss/build/pure.css'
import React from 'react'
import { render } from 'react-dom'
import getJSON from './lib/getJSON'

////////////////////////////////////////////////////////////////////////////////
// Requirements
//
// - fetch the src with `getJSON`
// - render the content of the th's from the field names (can just take it from
//   the first record)
// - render each result as a row in tbody

class JSONTable extends React.Component {
  render () {
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jack</td>
            <td>Bauer</td>
            <td>
              <img height="64" src="http://ryanflorence.com/jsconf-avatars/avatars/jack.jpg"/>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

JSONTable.propTypes = {
  src: React.PropTypes.string.isRequired,
  parse: React.PropTypes.func
};

class App extends React.Component {

  render () {
    return (
      <div>
        <h1>JSONTable</h1>

        <JSONTable
          src="https://addressbook-api.herokuapp.com/contacts"
          parse={(res) => res.contacts}
        />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
