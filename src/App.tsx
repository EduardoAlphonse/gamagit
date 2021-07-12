import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { User } from './pages/User';

import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/:username' component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
