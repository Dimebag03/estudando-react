import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import Home from './components/Home';
import Login from './components/Login';
import 'antd/dist/antd.css';
import './App.css';
import pt_BR from 'antd/lib/locale-provider/pt_BR';
import 'moment/locale/pt-br';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={pt_BR}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </LocaleProvider>
    );
  }
}

export default App;
