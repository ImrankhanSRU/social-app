import './App.css';
import Login from './components/login/Login'
import NewsFeed from './components/news-feed/NewsFeed'

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Redirect exact from="/" to="login" />
      <Route path="/login" component={Login} />
      <Route path="/newsfeed" component={NewsFeed} />

    </Router>
  );
}

export default App;
