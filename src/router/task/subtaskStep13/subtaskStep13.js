/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step13-01', // 碳主管-进行配额清缴【决策】
		name: 'handle-step13-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep13/Step0101'], resolve)
	},
	{
		path: 'handle-step13-02', // 1.碳主管-填写配额作业【作业】
		name: 'handle-step13-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep13/Step0102'], resolve)
	},
	{
		path: 'handle-step13-03', // 1.财务主管-填写自有现金余额【作业】
		name: 'handle-step13-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep13/Step0103'], resolve)
	}
];
