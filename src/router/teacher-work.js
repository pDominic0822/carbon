/*
 * @Author: zhangln
 * @Description: 老师端路由
 * @Date: 2018-12-24 13:54:29
 */
export default [
	{
		path: 'teacher-work', // 老师操作主界面
		name: 'teacher-work',
		component: resolve => require(['@@/teacher/work/teacherWork'], resolve)
	},
	{
		path: 'push-org', // 团队推送
		name: 'push-org',
		component: resolve => require(['@@/teacher/orgAdmin/pushOrg'], resolve)
	},
	// {
	// 	path: 'org-admin', // 组织管理
	// 	name: 'org-admin',
	// 	component: resolve => require(['@@/teacher/orgAdmin/org-admin'], resolve)
	// },
	{
		path: 'class-admin', // 学生管理
		name: 'class-admin',
		component: resolve => require(['@@/teacher/classAdmin/classAdmin'], resolve)
	},
	{
		name: 'teacher-library',
		path: 'teacher-library', // 资源库
		component: resolve => require(['@@/student/Library/Library'], resolve)
	},
	{
		name: 'teacher-results',
		path: 'teacher-results', // 学生成果
		component: resolve => require(['@@/student/MyResults/MyResults'], resolve)
	},
	{
		path: 'teacher-sign', // 老师签到
		name: 'teacher-sign',
		component: resolve => require(['#/sign/teacherSign'], resolve)
	},
	{
		path: 'mold-weight', // 模块权重
		name: 'mold-weight',
		component: resolve => require(['@@/teacher/classScore/moldWeight'], resolve)
	},
	{
		path: 'class-score', // 班级分数-实训成绩
		name: 'class-score',
		component: resolve => require(['@@/teacher/classScore/classScore'], resolve)
	},
	{
		path: 'class-report', // 实训报告
		name: 'class-report',
		component: resolve => require(['@@/teacher/classScore/classReport'], resolve)
	},
	{
		name: 'teacher-ranking', // 排行榜
		path: 'teacher-ranking',
		component: resolve => require(['@@/student/ability/teacher-ranking'], resolve)
	},
	{
		path: 'task-progress', // 任务进度
		name: 'task-progress',
		component: resolve => require(['@@/teacher/taskProgress/taskProgress'], resolve)
	},
	{
		path: 'subtask-text', // 讲义
		name: 'subtask-text',
		component: resolve => require(['@@/teacher/subtaskText/subtaskText'], resolve)
	},
	{
		path: 'pack-person', // 风暴选人
		name: 'pack-person',
		component: resolve => require(['@@/teacher/packPerson/packPerson'], resolve)
	}
];
