/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step06-01', // 小组研讨技改次数
		name: 'handle-step06-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep06/Step0101'], resolve)
	},
	{
		path: 'handle-step06-02', // 1.生产主管-进行技改【决策】
		name: 'handle-step06-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep06/Step0102'], resolve)
	},
	{
		path: 'handle-step06-03', // 1.生产主管-填写技改作业【作业】
		name: 'handle-step06-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep06/Step0103'], resolve)
	},
	{
		path: 'handle-step06-04', // 1.财务主管-填写绿贷余额与自有现金余额【作业】
		name: 'handle-step06-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep06/Step0104'], resolve)
	},
	{
		path: 'handle-step06-05', // 1.财务主管-填写绿贷余额与自有现金余额【作业】
		name: 'handle-step06-05',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep06/Step0105'], resolve)
	}
];
