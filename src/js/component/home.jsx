import React, { useState } from "react";
import '/workspaces/chrisv15-traffi-light/src/styles/index.css';


const Home = () => {
	const [colorRed, setcolorRed] = useState("danger")
	const [colorOrange, setcolorOrange] = useState("warning")
	const [colorGreen, setcolorGreen] = useState("success")
	const [colorPink, setcolorPink] = useState("pink")

	const [colorRedWhite, setcolorRedWhite] = useState(rounded)
	const [colorOrangeWhite, setcolorOrangeWhite] = useState(rounded)
	const [colorGreenWhite, setcolorGreenWhite] = useState(rounded)
	const [colorPinkWhite, setcolorPinkWhite] = useState(rounded)
	
	const [colorNone, setcolorNoneWhite] = useState("none")
	
	const rounded = {
		width: "5rem",
		height: "5rem",	
	}
	const roundedWhite = {
		width: "5rem",
		height: "5rem",	
		boxShadow: "0px 0px 20px 15px #fff",
	}
	
	function changeState (source) {
		if(source == "red"){
			setcolorRedWhite(roundedWhite)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(rounded)
		}
		else if(source == "yellow"){
			setcolorRedWhite(rounded)
			setcolorOrangeWhite(roundedWhite)
			setcolorGreenWhite(rounded)
		}
		else if(source == "green"){
			setcolorRedWhite(rounded)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(roundedWhite)
		}
		else if(source == "pink"){
			setcolorRedWhite(rounded)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(rounded)
			setcolorPinkWhite(roundedWhite)
		}
	}
	function changeStateNext () {
		if(!colorRedWhite && !colorOrangeWhite && !colorGreenWhite){
			setcolorRedWhite(roundedWhite)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(rounded)
			setcolorPinkWhite(rounded)
		}
		else if(colorRedWhite.boxShadow){
			setcolorRedWhite(rounded)
			setcolorOrangeWhite(roundedWhite)
			setcolorGreenWhite(rounded)
			setcolorPinkWhite(rounded)
		}
		else if(colorOrangeWhite.boxShadow){
			setcolorRedWhite(rounded)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(roundedWhite)
			setcolorPinkWhite(rounded)
		}
		else if(colorNone == "block" && colorGreenWhite.boxShadow){
			setcolorRedWhite(rounded)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(rounded)
			setcolorPinkWhite(roundedWhite)
		}
		else if(colorGreenWhite.boxShadow || colorPinkWhite.boxShadow){
			setcolorRedWhite(roundedWhite)
			setcolorOrangeWhite(rounded)
			setcolorGreenWhite(rounded)
			setcolorPinkWhite(rounded)
		}
	}
	function addPink(){
		if(colorNone == "none"){
			setcolorNoneWhite("block")
		}
		else{
			setcolorNoneWhite("none")
		}
	}

	return (
		<div className="container">
			<div className="text-center">
				{/*palo semaforo*/}
				<div className="tex-center bg-black stick"></div>
				{/*contenedor luces*/}
				<div className="tex-center bg-black border">
					<div className={"rounded-circle bg-" + colorRed} style={colorRedWhite} onClick={() => changeState("red")}><br></br></div>
					<div className={"rounded-circle bg-" + colorOrange} style={colorOrangeWhite} onClick={() => changeState("yellow")}><br></br></div>
					<div className={"rounded-circle bg-" + colorGreen} style={colorGreenWhite} onClick={() => changeState("green")}><br></br></div>
					<div className={"rounded-circle bg-" + colorPink+' d-'+colorNone} style={colorPinkWhite} onClick={() => changeState("pink")}><br></br></div>
				</div>
				<button type="button" className="btn btn-dark" onClick={() => changeStateNext()}>Change</button>
				<button type="button" className="btn btn-dark" onClick={() => addPink()}>Pink</button>
			</div>
		</div>
	);
};

export default Home;
