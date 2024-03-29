import React, { Component } from 'react';
import Header from './header'
import AllTasks from './allTasks'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ marginTop: '50px' }}>
          <div className="row">
            <div className="col-md-12">
              {this.props.children}
            </div>
            <AllTasks />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
