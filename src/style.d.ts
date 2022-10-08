// declare 声明 模块  css
declare module "*.css" {
	const classes: { readonly [key: string]: string };
	export default classes;
}
declare module "*.less" {
	const classes: { readonly [key: string]: string };
	export default classes;
}
declare module "*.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}
