/*  !craco.config.js 以后将作为项目配置进行使用 */
const CracoLessPlugin = require("craco-less");

const path = require("path");
const resolvePath = dir => path.join(__dirname, dir);
module.exports = {
	eslint: {
		enable: true
	},
	devServer: {
		port: 8080
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
			"@v": resolvePath("src/views")
		}
	},
	// 全局配置antd的样式
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				cssLoaderOptions: {
					modules: { localIdentName: "[local]_[hash:base64:5]" }
				},
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#1DA57A",
							"@link-color": "#1DA57A",
							"@border-radius-base": "2px"
						},
						javascriptEnabled: true
					}
				}
			}
		}
	]
};
