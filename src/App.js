import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './views/Auth/Auth';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
