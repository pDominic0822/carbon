/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step07-01', // 小组研讨确认采购物料数量
		name: 'handle-step07-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep07/Step0101'], resolve)
	},
	{
		path: 'handle-step07-02', // 采购主管-物料采购【决策】
		name: 'handle-step07-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep07/Step0102'], resolve)
	},
	{
		path: 'handle-step07-03', // 1.采购主管-填写物料作业【作业】
		name: 'handle-step07-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep07/Step0103'], resolve)
	},
	{
		path: 'handle-step07-04', // 1.财务主管-填写自有现金余额【作业
		name: 'handle-step07-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep07/Step0104'], resolve)
	}
];
