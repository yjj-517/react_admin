// 侧边栏导航页面
import React from "react";
import Logo from "./components/Logo";
import { Layout } from "antd";
import "./index.less";

const { Sider } = Layout;
const LayoutMenu: React.FC = () => {
	return (
		<Sider className="menu">
			<Logo></Logo>
		</Sider>
	);
};

export default LayoutMenu;
