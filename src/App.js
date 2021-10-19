import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import Servicedetails from "./components/pages/Services/Servicedetails/ServiceDetail";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact/Contact/Contact";
import initializeAuthentication from "./Firebase/firebase.initilize";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./components/context/AuthProvider";
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import NotFound from './components/Notfound/NotFound';
initializeAuthentication();

function App() {
  return (
   <div>
     <AuthProvider>
     <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivetRoute exact path="/services">
          <Services></Services>
        </PrivetRoute>
        <Route exact path="/serviceDetails/:serviceId">
          <Servicedetails></Servicedetails>
        </Route>

        <Route exact path="/contact">
          <Contact></Contact>
        </Route>

        <Route exact path="/article">
          <Article></Article>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
     </AuthProvider>
   </div>
  );
}

export default App;
