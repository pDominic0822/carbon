/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step08-01', // 小组研讨确认采购绿电证书数量
		name: 'handle-step08-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep08/Step0101'], resolve)
	},
	{
		path: 'handle-step08-02', // 1.电力主管-采购电力【决策】
		name: 'handle-step08-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep08/Step0102'], resolve)
	},
	{
		path: 'handle-step08-03', // 1.电力主管-填写电力作业【作业】
		name: 'handle-step08-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep08/Step0103'], resolve)
	},
	{
		path: 'handle-step08-04', // 1.财务主管-填写自有现金余额【作业】
		name: 'handle-step08-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep08/Step0104'], resolve)
	}
];
