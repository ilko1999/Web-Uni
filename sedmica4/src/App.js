import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Sedmica4 from './Sedmica4';
import Sedmica5 from './Sedmica5';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <h3>Info List - седмица 4,5,6</h3>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/sedm4" component={Sedmica4} exact/>
        <Route path="/sedm5" component={Sedmica5} exact/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
