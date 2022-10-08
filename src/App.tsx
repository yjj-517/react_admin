import React from "react";
//router
import { HashRouter } from "react-router-dom";
import Router from "@/router/index";
// antd的多语言功能
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const App: React.FC = () => {
	return (
		<HashRouter>
			<ConfigProvider locale={zhCN}>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
};

export default React.memo(App);
