import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blip from './components/Blip'
import { AppKey } from './components';
import { Code } from './components';
import { MenuDown } from './components';
import { MenuUp } from './components';
import { ListColorHeader } from './components';
import { ListColorBackground } from './components';
import { ListColorSend } from './components';
import { ListColorReicived } from './components';
import { ChatIcon } from './components';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      
      <div className="container">  
      
      <AppKey></AppKey>   
      <Blip></Blip>   
        <Code></Code>
      <Router>
          <Switch>  
            <Route path="/ChatIcon" exact component={ChatIcon} />
            <Route path="/ListColorSend" exact component={ListColorSend} />
            <Route path="/ListColorReicived" exact component={ListColorReicived} />
            <Route path="/ListColorBackground" exact component={ListColorBackground} />
            <Route path="/ListColorHeader" exact component={ListColorHeader} />         
            
        
          </Switch>

          <MenuUp></MenuUp>  
           <MenuDown></MenuDown> 

           <a className="nav-link active" href="/ListColorHeader">    
                            <svg className="bi bi-card-heading" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clipRule="evenodd"/>
                              <path fillRule="evenodd" d="M3 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
                              <path d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1z"/>
                          </svg>
                          </a> 
        </Router> 
      
      </div>
    </div>
  );
}

export default App;
