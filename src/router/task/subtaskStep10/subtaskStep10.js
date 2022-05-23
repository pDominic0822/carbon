/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step10-01', // 销售主管-进行订单交付【决策】
		name: 'handle-step10-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep10/Step0101'], resolve)
	},
	{
		path: 'handle-step10-02', // 1.销售主管-填写订单交付作业【作业】
		name: 'handle-step10-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep10/Step0102'], resolve)
	},
	{
		path: 'handle-step10-03', // 1.财务主管-填写自有现金余额【作业】
		name: 'handle-step10-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep10/Step0103'], resolve)
	}
];
