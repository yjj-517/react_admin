import React from "react";
import LayoutMenu from "./LayoutMenu";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const Layouts: React.FC = () => {
	return (
		<Layout>
			<LayoutMenu></LayoutMenu>
			<Layout>
				<Header>Header</Header>
				<Content>Content</Content>
				<Footer>
					<h1>Footer</h1>
				</Footer>
			</Layout>
		</Layout>
	);
};

export default Layouts;
