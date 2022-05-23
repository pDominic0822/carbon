/*
 * @Author: zhangln
 * @Date: 2019-11-05 18:03:00
 * @Description: 旧的登陆
 */
import CLASS from './class.js';

export default [
	// {
	// 	path: '/', // 登录
	// 	redirect: '/chain-login'
	// },
	{
		path: '/chain-login', // 登录
		name: 'chain-login',
		component: resolve => require(['@@/link/login/Login'], resolve)
	},
	...CLASS
];
