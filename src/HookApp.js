import React from 'react';
import { BarraNav } from './components/BarraNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import { Saludo } from './Saludo';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWhitCustomHook } from './components/01-useState/CounterWhitCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWhitCustomHook } from './components/02-useEffect/FormWhitCustomHook';
import { MultipleCustomHook } from './components/03-ejemplos/MultipleCustomHook';
import { FocusSreen } from './components/04-useRef/FocusSreen';
import { RealEjemploRef } from './components/04-useRef/RealEjemploRef';
import { LayoutEffect } from './components/05-useLayouyEffect/LayoutEffect';
import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';
import { TodoAdd } from './components/08-useReducer/TodoAdd';
import { MainApp } from './components/09-useContext/MainApp';


export const HookApp = () => {
    return (
        <Router>
            <div className = "row mb-3">
            
                <BarraNav />
                <div className = "col-sm-9 col-xs-1">

                <Switch>
                    <Route exact path="/counterapp" component={ CounterApp } />
                    <Route exact path="/counterwhitcustomhook" component={ CounterWhitCustomHook } />
                    <Route exact path="/simpleform" component={ SimpleForm } />
                    <Route exact path="/formwhitcustomhook" component={ FormWhitCustomHook } />
                    <Route exact path="/multiplecustomhook" component={ MultipleCustomHook } />
                    <Route exact path="/focusscreen" component={ FocusSreen } />
                    <Route exact path="/realejemploref" component={ RealEjemploRef } />
                    <Route exact path="/layouteffect" component={ LayoutEffect } />
                    <Route exact path="/memorize" component={ Memorize } />
                    <Route exact path="/memohook" component={ MemoHook } />
                    <Route exact path="/callbackhook" component={ CallbackHook } />
                    <Route exact path="/padre" component={ Padre } />
                    <Route exact path="/todoapp" component={ TodoAdd } />
                    <Route exact path="/mainapp" component={ MainApp } />
                    <Route exact path="/" component={ Saludo } />
                    <Redirect to="/" />

                </Switch>

                </div>
            </div>
        </Router>
    )
}
