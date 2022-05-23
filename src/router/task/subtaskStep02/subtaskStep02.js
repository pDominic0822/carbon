/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step02-01', // 1.小组研讨确认绿贷金额
		name: 'handle-step02-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep02/Step0101'], resolve)
	},
	{
		path: 'handle-step02-02', // 1.财务主管-申请绿贷【决策】
		name: 'handle-step02-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep02/Step0102'], resolve)
	},
	{
		path: 'handle-step02-03', // 1.财务主管-填写绿贷作业【作业】
		name: 'handle-step02-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep02/Step0103'], resolve)
	}
];
