/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step05-01', // 小组研讨选单
		name: 'handle-step05-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep05/Step0101'], resolve)
	},
	{
		path: 'handle-step05-02', // 1.销售主管-选择订单【决策】
		name: 'handle-step05-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep05/Step0102'], resolve)
	}
];
