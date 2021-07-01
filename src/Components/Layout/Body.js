import React, { Component } from 'react';
import Home from '../Home/Home';
import Investments from '../Investments/Investments';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';
import Accounting from '../Accounting/Accounting';

export default class Body extends Component {
    render() {
      if (this.props.selected === 'HOME') {
        return(
          <div>
            <Home
              getResFromServer={this.props.getResFromServer}
              response={this.props.response}
            />            
          </div>
        )
      }
      if (this.props.selected  === 'DASHBOARD') {
        return(
          <div>
              <Dashboard
              />
          </div>
        )
      }
      if (this.props.selected  === 'INVESTMENTS') {
        return(
          <div>
              <Investments
                user={this.props.user}
                authUser={this.props.authUser}
              />
          </div>
        )
      }
      if (this.props.selected  === 'ACCOUNTING') {
        return(
          <div>
              <Accounting
                user={this.props.user}
                authUser={this.props.authUser}
                update={this.props.update}
                budget={this.props.budget}
                setBudget={this.props.setBudget}
              />
          </div>
        )
      }
      if (this.props.selected  === 'SETTINGS') {
        return(
          <div>
              <Settings />
          </div>
        )
      }
    }
}