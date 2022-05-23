/*
 * @Author: your name
 * @Date: 2021-07-19 18:10:13
 * @LastEditTime: 2021-07-26 16:18:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \liangzhi_packaged:\2021WebCode\educhainx_login_link2.0\src\router\link\class.js
 */
// 新学生端路由
export default [{
	path: '/student-class',
	name: 'student-class',
	redirect: '/student-class/student-course',
	component: resolve => require(['@@/link/classroom/studentClass/studentClass'], resolve),
	children: [{
		path: 'student-course',
		name: 'student-course',
		component: resolve => require(['@@/link/classroom/studentClass/children/CreatorCourse'], resolve)
	}]
},
{
	path: '/teacher-class',
	name: 'teacher-class',
	redirect: '/teacher-class/teacher-creator',
	title: '创建课程',
	component: resolve => require(['@@/link/classroom/teacherClass/TeacherClass'], resolve),
	children: [{
		path: 'teacher-course',
		name: 'teacher-course',
		meta: {
			title: '创建课程'
		},
		component: resolve => require(['@@/link/classroom/teacherClass/children/MyCourse'], resolve)
	}, {
		path: 'teacher-creator',
		name: 'teacher-creator',
		meta: {
			title: '创建的班级'
		},
		component: resolve => require(['@@/link/classroom/teacherClass/children/CreatorCourse'], resolve)
	}, {
		path: 'teacher-export',
		name: 'teacher-export',
		meta: {
			title: '创建的班级'
		},
		component: resolve => require(['@@/link/classroom/teacherClass/children/teacherExport'], resolve)
	}]
}
];
