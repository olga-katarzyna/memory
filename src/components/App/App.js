import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

/*  
    Poniższe importy są skonstruowane w taki sposób dlatego, że ES6 nie pozwala na `export default` w przypadku zwykłych funkcji.
    Mamy zatem dwa wyjścia:

        1. W każdym importowanym komponencie na końcu pliku dodać:
           `export default <nazwa_komponentu>;

        2. Importować konkretne komponenty poprzez notację `import { <nazwa_komponentu> } from './ścieżka/do/komponentu'`.
           W naszym przypadku na każdy główny komponent przypada akurat jeden, ale w przypadku rozbudowanej aplikacji notacja ta pozwoli
           importować nam tylko te komponenty, jakich potrzebujemy w tworzonym przez nas nowym komponencie.
*/

import { Nav } from '../Nav/Nav';
import Users from '../Users/Users';
import { UserView } from '../UserView/UserView';
import { Contact } from '../Contact/Contact';

/*  
    W poniższy sposób importujemy style do naszej aplikacji.

    Normalize.css to bardzo popularny stylesheet, który resetuje domyślne style przeglądarek i jednocześnie
    nastawia nowe zgodnie z powszechnie przyjętymi praktykami.

    Normalize można też pobrać z ich strony jako plik css i dodać ręcznie, albo wykorzystać CSS - my jednak korzystamy
    do tego z NPM i instalujemy Normalize.css jako paczkę. Stąd też nie musimy znać faktycznej ścieżki, gdyż import sam zajrzy
    do node_modules.
*/

import 'normalize.css';
import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navColorTheme: 'green'
        }
    }

    toggleNavColorTheme = () => {
        this.setState({
            navColorTheme: this.state.navColorTheme === 'green' ? 'blue' : 'green'
        });
    }
    
    render() {   
        return (
            <div className='container'>
                <h1 className='app-title'>Basic App</h1>
                <Nav colorTheme={this.state.navColorTheme}/>
                <main>
                    <Switch>
                        <Route exact path='/' render={
                            () => {
                                return (
                                    <div>
                                        <div>Hello, World!</div>
                                        <button style={{'marginTop': '10px'}} onClick={this.toggleNavColorTheme}>Toggle nav color theme</button>
                                    </div>
                                )
                            }
                        }></Route>
                        <Route exact path='/users/:userId' component={UserView}></Route>
                        <Route exact path='/users' component={Users}></Route>
                        <Route path='/contact' component={Contact}></Route>
                        <Route path='*' render={
                            () => <div>Nie znaleziono strony.</div>
                        }></Route>
                    </Switch>
                </main>
            </div>
        )
    }
};