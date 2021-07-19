import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from './components/Welcome';
import AddContact from './components/addContact';
import EditContact from './components/editContact';
import store from './redux/store';
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <Router>

        <div className="App">
          <ToastContainer />
          < Navbar />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/add" component={AddContact} />
            <Route path="/edit/:id" component={EditContact} />

          </Switch>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
