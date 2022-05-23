/*
 * @Author: your name
 * @Date: 2021-07-06 10:04:52
 * @LastEditTime: 2021-12-23 17:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blockchain_accounting2020d:\2021WebCode\blockChain_digitalCurrency1.0\src\components\page\student\work\json\json.js
 */

// 学生端顶部导航
export const studentTabsArr = [
	{
		routerName: 'subtask-index',
		name: '首页',
		isHref: false
	},
	// {
	// 	name: '团队',
	// 	routerName: 'select-org',
	// 	isHref: false,
	// 	icon: 'icon-xingqiu'
	// },
	{
		routerName: '',
		isHref: false,
		name: '团队',
		children: [
			{
				name: '团队组建',
				isHref: false,
				routerName: 'select-org',
				icon: 'icon-xingqiu'
			},
			{
				name: '团队上岗',
				isHref: false,
				routerName: 'org-industry',
				icon: 'icon-xingqiu'
			},
			{
				name: '单子（page）',
				isHref: false,
				routerName: 'page-index',
				icon: 'icon-xingqiu'
			}
		]
	}
	// {
	// 	routerName: '',
	// 	isHref: false,
	// 	name: '学习成绩',
	// 	children: [{
	// 		name: '实训成绩',
	// 		routerName: 'training-result',
	// 		icon: 'icon-xingqiu'
	// 	},
	// 	{
	// 		name: '实训报告',
	// 		routerName: 'training-report',
	// 		icon: 'icon-xingqiu',
	// 		isHref: true
	// 	},
	// 	{
	// 		name: '学习成果排行榜',
	// 		routerName: 'ability-ranking',
	// 		icon: 'icon-xingqiu'
	// 	},
	// 	// {
	// 	// 	name: '竞赛排行榜',
	// 	// 	routerName: 'ability-competation-ranking',
	// 	// 	icon: 'icon-xingqiu'
	// 	// },
	// 	{
	// 		name: '综合排行榜',
	// 		routerName: 'ability-all-ranking',
	// 		icon: 'icon-xingqiu'
	// 	}]
	// },
	// {
	// 	routerName: 'student-library',
	// 	name: '资源库',
	// 	isHref: false
	// }
];

// 老师端顶部导航
export const teacherTabsArr = [
	{
		routerName: 'teacher-index',
		name: '首页',
		isHref: false
	},
	{
		routerName: '',
		isHref: false,
		name: '班级管理',
		children: [
			{
				name: '学生管理',
				routerName: 'class-admin',
				icon: 'icon-book'
			},
			{
				name: '团队推送',
				routerName: 'push-org',
				icon: 'icon-book'
			},
			{
				name: '团队管理',
				routerName: 'org-admin',
				icon: 'icon-book'
			}
		]
	}
];
