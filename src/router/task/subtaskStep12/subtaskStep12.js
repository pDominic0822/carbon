/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step12-01', // 小组研讨确认配额交易
		name: 'handle-step12-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep12/Step0101'], resolve)
	},
	{
		path: 'handle-step12-02', // 1.销售主管-进行配额交易【决策】
		name: 'handle-step12-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep12/Step0102'], resolve)
	},
	{
		path: 'handle-step12-03', // 1.碳主管-填写配额作业【作业】
		name: 'handle-step12-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep12/Step0103'], resolve)
	},
	{
		path: 'handle-step12-04', // 1.财务主管-填写自有现金余额【作业】
		name: 'handle-step12-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep12/Step0104'], resolve)
	}
];
