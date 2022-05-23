/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step04-01', // 1.小组研讨一轮采购数量
		name: 'handle-step04-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep04/Step0101'], resolve)
	},
	{
		path: 'handle-step04-02', // 1.销售主管-碳汇采购申请一【决策】
		name: 'handle-step04-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep04/Step0102'], resolve)
	},
	{
		path: 'handle-step04-03', // 1.小组研讨二轮碳汇采购数量
		name: 'handle-step04-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep04/Step0103'], resolve)
	},
	{
		path: 'handle-step04-04', // 1.销售主管-碳汇采购申请二【决策】
		name: 'handle-step04-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep04/Step0104'], resolve)
	},
	{
		path: 'handle-step04-05', // 1.碳主管-填写碳汇作业【作业】
		name: 'handle-step04-05',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep04/Step0105'], resolve)
	},
	{
		path: 'handle-step04-06', // 1.财务主管-填写自有现金余额【作业】
		name: 'handle-step04-06',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep04/Step0106'], resolve)
	}
];
