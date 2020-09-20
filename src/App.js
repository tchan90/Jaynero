import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
	Arwes,
	ThemeProvider,
	createTheme,
	Button,
	Header,
	SoundsProvider,
	createSounds,
} from "arwes";

import Nav from "./Nav";
import Home from "./home/Home";
import BriefPage from "./brief/Briefpage";
import PostBrief from "./brief/PostBrief";

import background from "./static/img/background.jpg";
import clickSound from "./static/sounds/click.mp3";
import deploySound from "./static/sounds/deploy.mp3";
import typingSound from "./static/sounds/typing.mp3";
import errorSound from "./static/sounds/error.mp3";
import informationSound from "./static/sounds/information.mp3";
import "./App.css";

const myTheme = {
	color: {
		primary: {
			base: "#E4C100",
			dark: "#DFBD03",
			light: "#FFF3B3",
		},
		header: {
			base: "#FFF79B",
		},
	},
};

const mySounds = {
	shared: { volume: 1 }, // Shared sound settings
	players: {
		// The player settings
		click: {
			// With the name the player is created
			sound: { src: [clickSound] }, // The settings to pass to Howler
		},
		typing: {
			sound: { src: [typingSound] },
			settings: { oneAtATime: true }, // The custom app settings
		},
		deploy: {
			sound: { src: [deploySound] },
			settings: { oneAtATime: true },
		},
		alert: {
			sound: { src: [errorSound] },
		},
		information: {
			sound: { src: [informationSound] },
		},
	},
};

function App() {
	return (
		<Router>
			<ThemeProvider theme={createTheme(myTheme)}>
				<SoundsProvider sounds={createSounds(mySounds)}>
					<Arwes background={background} animate show>
						<div style={{ width: "100%", height: 1000 }}>
							<div className="navWrapper">
								<Header animate>
									<div className="navStyle">
										<Link to="/">
											<h1 className="headerStyle">J.A.Y.N.E.R.O</h1>
										</Link>
										<Link to="/post-brief">
											<Button
												layer="primary"
												animate
												style={{ paddingTop: "10px" }}
											>
												Post a brief
											</Button>
										</Link>
									</div>
								</Header>
							</div>
							<Nav />
							<div className="panel">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/brief" component={BriefPage} />
									<Route exact path="/post-brief" component={PostBrief} />
								</Switch>
							</div>
						</div>
					</Arwes>
				</SoundsProvider>
			</ThemeProvider>
		</Router>
	);
}

export default App;
