import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { UseSessionProvider } from 'react-session-hook'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NotFound from './components/notfound'

// store root
import rootReducer from './store'

// main
import Main from './components/main'
import Signup from './components/signup'
import Lists from './components/lists'
import CreateMeeting from './components/create-meeting'
import MadeList from './components/made-list'
import VisitList from './components/visit-list'
import VisitInfo from './components/visit-info'
import MeetingInfo from './components/meeting-info'

import Visit from './components/visit'
import VisitLogin from './components/visit-login'
import VisitProcUser from './components/visit-proc-user'
import VisitProcGuest from './components/visit-proc-guest'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <UseSessionProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            {/* normal incomming */}
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/lists" component={Lists} />
            <Route exact path="/create-meeting" component={CreateMeeting} />
            <Route exact path="/made-list" >
              <MadeList page="made-list" />
            </Route>
            <Route exact path="/visit-list" >
              <VisitList page="/visit-list" />
            </Route>
            <Route exact path="/visit-info/:id" component={VisitInfo} />
            <Route exact path="/meeting-info/:id" component={MeetingInfo} />
            {/* qr code or link incomming */}
            <Route exact path="/visit/:id" component={Visit} />
            <Route exact path="/visit-login/:id" component={VisitLogin} />
            <Route exact path="/visit-proc-user/:id" component={VisitProcUser} />
            <Route exact path="/visit-proc-guest/:id" component={VisitProcGuest} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </UseSessionProvider>
  );
}

export default App;
