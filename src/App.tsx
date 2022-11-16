import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			<HomeScreen />
		</div>
	);
}

export default App;
