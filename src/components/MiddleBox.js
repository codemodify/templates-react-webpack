import React from "react";
import ReactDOM from "react-dom";

import { default as MaterialUI_Grid } from "@material-ui/core/Grid";
import { default as MaterialUI_IconButton } from "@material-ui/core/IconButton";
import { default as MaterialUI_Typography } from "@material-ui/core/Typography";
import { default as MaterialUI_Card } from "@material-ui/core/Card";
import { default as MaterialUI_CardHeader } from "@material-ui/core/CardHeader";
import { default as MaterialUI_CardMedia } from "@material-ui/core/CardMedia";
import { default as MaterialUI_CardContent } from "@material-ui/core/CardContent";
import { default as MaterialUI_CardActions } from "@material-ui/core/CardActions";
import { default as MaterialUI_Avatar } from "@material-ui/core/Avatar";

class MiddleBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let thisRef = this;

		return (<div>
			<br /><br /><br /><br />
			<MaterialUI_Grid container spacing={0}>
				<MaterialUI_Grid container item xs={4}>
				</MaterialUI_Grid>

				<MaterialUI_Grid container item xs={4}>
					<MaterialUI_Card>
						<MaterialUI_CardHeader
							avatar={
								<MaterialUI_Avatar aria-label="recipe">
									R
								</MaterialUI_Avatar>
							}
							action={
								<MaterialUI_IconButton aria-label="settings">
									<i className="fas fa-bolt"></i>
								</MaterialUI_IconButton>
							}
							title="Shrimp and Chorizo Paella"
							subheader="September 14, 2016"
						/>

						<MaterialUI_CardContent>
							<MaterialUI_Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the mussels, if you like.
							</MaterialUI_Typography>
						</MaterialUI_CardContent>
						<MaterialUI_CardActions disableSpacing>
							<MaterialUI_IconButton aria-label="add to favorites">
								<i className="fas fa-bookmark"></i>
							</MaterialUI_IconButton>
							<MaterialUI_IconButton aria-label="share">
								<i className="fas fa-share-alt"></i>
							</MaterialUI_IconButton>
						</MaterialUI_CardActions>
					</MaterialUI_Card>
				</MaterialUI_Grid>

				<MaterialUI_Grid container item xs={4}>
				</MaterialUI_Grid>
			</MaterialUI_Grid>
		</div>)
	}
}

export default MiddleBox;