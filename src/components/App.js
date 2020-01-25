import React from "react";
import ReactDOM from "react-dom";

import { default as MaterialUI_Box } from "@material-ui/core/Box";
import { default as MaterialUI_Toolbar } from "@material-ui/core/Toolbar";
import { default as MaterialUI_AppBar } from "@material-ui/core/AppBar";
import { default as MaterialUI_IconButton } from "@material-ui/core/IconButton";
import { default as MaterialUI_Typography } from "@material-ui/core/Typography";

import MiddleBox from "./MiddleBox"

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let thisRef = this;

		return (<div>
			<MaterialUI_Box boxShadow={3}>
				<MaterialUI_AppBar position="static">
					<MaterialUI_Toolbar>

						<MaterialUI_IconButton>
							<i className="fas fa-bars" style={{ color: "#ffffff" }}></i>
						</MaterialUI_IconButton>

						<MaterialUI_Typography variant="h6">
							Hello World
						</MaterialUI_Typography>

					</MaterialUI_Toolbar>
				</MaterialUI_AppBar>
			</MaterialUI_Box>

			<MiddleBox />
		</div>)
	}
}

export default App;