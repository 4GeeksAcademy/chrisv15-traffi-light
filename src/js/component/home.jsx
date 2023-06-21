import React, { useState } from "react";


const Home = () => {
	const [colorRed, setcolorRed] = useState("danger")
	const [colorOrange, setcolorOrange] = useState("warning")
	const [colorGreen, setcolorGreen] = useState("success")

	const [colorRedWhite, setcolorRedWhite] = useState("rounded")
	const [colorOrangeWhite, setcolorOrangeWhite] = useState("rounded")
	const [colorGreenWhite, setcolorGreenWhite] = useState("rounded")

	const rounded = {
		width: "5rem",
		height: "5rem",	
	}
	const roundedWhite = {
		width: "5rem",
		height: "5rem",	
		boxShadow: "0px 0px 20px 15px #fff",
	}

	const changeState = (color) => {
		if(color = colorRed ){
			setcolorRedWhite("roundedWhite")
		}
	}

	
	return (
		<div>
			<div className="text-center bg-black">
				{/*palo semaforo*/}
				<div className="tex-center bg-black"></div>
				{/*contenedor luces*/}
				<div className="tex-center">
					<div className={"rounded-circle bg-" + colorRed} style={colorRedWhite} onClick={this.changeState("danger")}><br></br></div>
					<div className={"rounded-circle bg-" + colorOrange} style={colorOrangeWhite} onClick={this.changeState("warning")}><br></br></div>
					<div className={"rounded-circle bg-" + colorGreen} style={colorGreenWhite} onClick={this.changeState("success")}><br></br></div>

				</div>
			</div>
		</div>
	);
};

export default Home;
