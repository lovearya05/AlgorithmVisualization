import React from "react";
import { makeStyles } from "@mui/styles";
import Circle from "./Circle";
// import { makeStyles } from "@material-ui/core/styles";
import Image from "./Image";

const Style = makeStyles({
	LinkListContainer: {
		width: "100%",
		padding: "0 5px 5px 5px",
		height: `${80}%`,
		// border: "2px solid #fff",
		display: "flex",
		background: "#f0f0f0",
		// background: "red",
		flexDirection: "row ",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "2px",
		overflow: "auto",
		flexWrap: "nowrap",
	},
});

function SinglyLinkListViewer({ heightInPercent, arr }) {
	// const valueSendToStyle = { height: heightInPercent };
	// const classes = Style(valueSendToStyle);
	// const { LinkListContainer } = classes;

	const classes = Style();

	return (
		<div className={classes.LinkListContainer}>
		{/* <div> */}
			{arr.map((e, i) => (
				<>
					<Circle key={`circle-singly-{i}`} element={e} length={arr.length} />
					<Image key={`img-singly-{i}`} />
				</>
			))}
		</div>
	);
}

export default SinglyLinkListViewer;
