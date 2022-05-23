/*
 * @Author: zhangln
 * @Description: 学生端路由
 * @Date: 2019-01-08 16:52:39
 */
import STUDENT_TASK from './task/task';

// 新学生端路由
export default [
	{
		path: '/work-index',
		name: 'work-index',
		component: resolve => require(['@@/student/index/index1'], resolve),
		children: [
			...STUDENT_TASK
		]
	},
	{
		path: '/student',
		name: 'student',
		component: resolve => require(['@@/student/student'], resolve),
		children: [
			{
				path: 'student-task', // 模块ID
				name: 'student-task',
				component: resolve => require(['@@/student/studentTask'], resolve),
				children: [
					{
						name: 'student-work',
						path: 'student-work',
						component: resolve => require(['@@/student/work/studentWork'], resolve),
						redirect: '/student/student-task/student-work/subtask-index',
						children: [
							{
								name: 'subtask-index',
								path: 'subtask-index',
								component: resolve => require(['@@/student/work/subtask/subtaskIndex'], resolve)
							},
							{
								name: 'select-org',
								path: 'select-org',
								component: resolve => require(['@@/student/selectOrg/selectOrg'], resolve)
							},
							{
								name: 'org-industry',
								path: 'org-industry',
								component: resolve => require(['@@/student/selectOrg/orgIndustry'], resolve)
							}

						]
					},
					{
						name: 'subtask-work',
						path: 'subtask-work',
						component: resolve => require(['@@/student/work/subtask/subtaskWork'], resolve)
						// children: [
						// 	...STUDENT_TASK
						// ]
					}
				]}
		]
	}];
