import React from "react";
import logoimg from "@/assets/logo.png";
const logo: React.FC = () => {
	return (
		<div className="logo_box">
			<img src={logoimg} alt="logoimg" className="logo_img" />
			<h1 className="logo_name">我爱一条柴</h1>
		</div>
	);
};

export default logo;
