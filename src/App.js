import React from "react";
import "./App.css";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";

let App = () => {
	return (
		<>
			<Multiplier x={ 10 } y={ 20 } />
			<EvenClicks />
			<CountBy step={ 5 } />
		</>
	);
}

export default App;
