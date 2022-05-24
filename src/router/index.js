/*
 * @Author: zhangln
 * @Description: 项目主路由
 * @Date: 2018-12-14 20:33:08
 */
import Vue from 'vue';
import Router from 'vue-router';

// 老师端与学生端合二为一，不用老师端
import STUDENT_ROUTER from './student';
import TEACHER_ROUTER from './teacher';
import LINK from './link/link'; // 旧的登陆
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push (location) {
	return routerPush.call(this, location).catch(error => error);
};
Vue.use(Router);

const router = new Router({
	routes: [
		...STUDENT_ROUTER, // 学生端
		...TEACHER_ROUTER,
		...LINK,
		{
			path: '/', // 登录
			redirect: '/the-course'
		},
		// {
		// 	path: '/chainlarge-screen',
		// 	name: 'chainlarge-screen', // 运行大屏
		// 	component: resolve => require(['@@/student/work/subtask/common/chainLargeScreen/largeScreen'], resolve)
		// },
		// {
		// 	name: 'page-index',
		// 	path: '/page-index',
		// 	component: resolve => require(['#/page/student/work/TaskList/common/tableSave/tableSave'], resolve)
		// },
		// {
		// 	path: '/index-1',
		// 	name: 'index-1',
		// 	component: resolve => require(['@@/student/index/index1'], resolve)
		// },
		// {
		// 	path: '/index-2',
		// 	name: 'index-2',
		// 	component: resolve => require(['@@/student/index/index2'], resolve)
		// },
		// {
		// 	path: '/index-3',
		// 	name: 'index-3',
		// 	component: resolve => require(['@@/student/index/index3'], resolve)
		// },
		// {
		// 	path: '/index-4',
		// 	name: 'index-4',
		// 	component: resolve => require(['@@/student/index/index4'], resolve)
		// },
		{
			path: '/the-course', // 课程
			name: 'the-course',
			component: resolve => require(['@@/theCourse/theCourse'], resolve)
		}
		// {
		// 	path: '/the-work', // 课程
		// 	name: 'the-work',
		// 	component: resolve => require(['@@/theCourse/work'], resolve)
		// },
		// {
		// 	path: '/the-work2', // 课程
		// 	name: 'the-work2',
		// 	component: resolve => require(['@@/theCourse/work2'], resolve)
		// },
		// {
		// 	path: '/the-work3', // 课程
		// 	name: 'the-work3',
		// 	component: resolve => require(['@@/theCourse/work3'], resolve)
		// }
	],
	strict: process.env.NODE_ENV !== 'production'
});

// 导航加载前
// router.beforeEach(({ meta, name }, from, next) => {
// 	ajax({
// 		url: '/rtuser/inithomehead',
// 		method: 'get',
// 		params: {
// 			flag: 1
// 		}
// 	}).then(res => {
// 		const outMap = res.outMap;
// 		if (!outMap.success && name !== 'login') {
// 			return next('/');
// 		}
// 		storage.set('setting', JSON.stringify(outMap.setting));
// 		setThemeFont(outMap.setting);
// 		if (outMap.user) {
// 			storage.set('user', JSON.stringify(outMap));
// 			const userType = parseInt(outMap.user.userType, 10);
// 			if (name === 'login') {
// 				switch (userType) {
// 				case 2:
// 					next({ name: 'myClass' });
// 					break;
// 				case 1:
// 					next({ name: 'teacher' });
// 					break;
// 				case 5:
// 					next({ name: 'admin' });
// 					break;
// 				}
// 			} else {
// 				next();
// 			}
// 		}
// 		next();
// 	});
// });

router.afterEach(() => {
	window.scrollTo(0, 0);
});

export default router;
