import React from "react";
import "./App.css";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";

let App = () => {
	return (
		<>
			<Multiplier x={ 10 } y={ 20 } />
			<EvenClicks />
			<CountBy step={ 5 } />
			<HideMe>Blah blah blah</HideMe>
		</>
	);
}

export default App;
