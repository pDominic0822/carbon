/*
 * @Author: zhangln
 * @Description: 学生端路由
 * @Date: 2019-01-08 16:52:39
 */

// 新学生端路由
export default [{
	path: '/teacher',
	name: 'teacher',
	component: resolve => require(['@@/teacher/teacher'], resolve),
	children: [
		{
			path: 'teacher-index2', // 模块首页
			name: 'teacher-index2',
			component: resolve => require(['@@/teacher/index/teacherIndex'], resolve)
		},
		{
			path: 'teacher-index', // 模块首页
			name: 'teacher-index',
			component: resolve => require(['@@/teacher/index/teacherIndex2'], resolve),
			children: [
				{
					name: 'teacher-mold',
					path: 'teacher-mold',
					component: resolve => require(['@@/teacher/work/teacher-mold'], resolve)
				},
				{
					name: 'teacher-ready',
					path: 'teacher-ready',
					component: resolve => require(['@@/teacher/work/teacher-ready'], resolve)
				}
			]
		},
		{
			path: 'push-org', // 团队推送
			name: 'push-org',
			component: resolve => require(['@@/teacher/orgAdmin/pushOrg'], resolve)
		},
		{
			path: 'org-admin', // 组织管理
			name: 'org-admin',
			component: resolve => require(['@@/teacher/orgAdmin/org-admin'], resolve)
		},
		{
			path: 'class-admin', // 学生管理
			name: 'class-admin',
			component: resolve => require(['@@/teacher/classAdmin/classAdmin'], resolve)
		}
	]
}];
