/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-select-org', // 1.团队组建
		name: 'handle-select-org',
		component: resolve => require(['@@/student/selectOrg/selectOrg'], resolve)
	}
];
