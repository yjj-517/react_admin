/*  !craco.config.js 以后将作为项目配置进行使用 */
const CracoAntDesignPlugin = require("craco-antd");

const path = require("path");
const resolvePath = dir => path.join(__dirname, dir);
module.exports = {
	eslint: {
		enable: true
	},
	devServer: {
		port: 8080
		// proxy: [
		// 	{
		// 		context: ["/data/api", "/api"],
		// 		target: "https://www.dcfsscan.io",
		// 		changeOrigin: true
		// 	}
		// ]
	},
	webpack: {
		devtool: false,
		alias: {
			"@": resolvePath("src"),
			"@api": resolvePath("src/api"),
			"@assets": resolvePath("src/assets"),
			"@img": resolvePath("src/assets/imgs"),
			"@c": resolvePath("src/components"),
			"@config": resolvePath("src/config"),
			"@router": resolvePath("src/router"),
			"@store": resolvePath("src/store"),
			"@v": resolvePath("src/views"),
			"@mixin": resolvePath("src/assets/css/mixin.less")
		}
	},
	// 全局配置antd的样式
	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				customizeTheme: {
					"@primary-color": "#00c299",
					"@border-radius-base": "10px"
				}
			}
		}
	]
};
