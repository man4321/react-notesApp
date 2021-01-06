import logo from "./logo.svg";
import "./App.css";
import NotesHome from "./notes/notesHome";
import Layout from "./notes/layout";
import { Route, Switch } from "react-router-dom";
import Profile from "./profile/profile";

function App(props) {
  return (
    <Layout {...props}>
      <Switch>
        <Route path="/" exact component={NotesHome} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Layout>
  );
}

export default App;
