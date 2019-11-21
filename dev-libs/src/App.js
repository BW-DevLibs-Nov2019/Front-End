import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import Categories from "./components/Catagories";
import DevLibForm from "./components/DevLibForm";
import MyLibs from "./components/MyLibs";
import PrivateRoute from "./components/PrivateRoute";


function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={LandingPage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={HomePage} />
      <PrivateRoute path="/catagories" component={Categories} />
      <PrivateRoute path="/devlib/:id" component={DevLibForm} />
      <PrivateRoute path="/my-libs" component={MyLibs} />
		</div>
	);
}

export default App;