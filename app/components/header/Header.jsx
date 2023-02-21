import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>Todos</Text>
		</View>
	);
}

export default Header;

const styles = StyleSheet.create({
	header: {
		backgroundColor: "coral",
		padding: 10,
		paddingTop: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 25,
		color: "white",
		fontWeight: "bold",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
