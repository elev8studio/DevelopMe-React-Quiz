import React, { Fragment } from "react";
import "./App.css";

import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";

import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";
import MinimumLength from "./MinimumLength";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Route exact path="/multiplier/:x/:y" render={ ({ match }) => (
					<Multiplier x={ match.params.x } y={ match.params.y } />
				) } />
				<Route exact path="/evenclicks" component={ EvenClicks } />
				<Route exact path="/count-by/:step" render={ ({ match }) => (
					<CountBy step={ match.params.step } />
				) } />
				<HideMe>Blah blah blah</HideMe>
				<MinimumLength length={ 30 } />
			</Fragment>
		</Router>
	);
}

export default App;
