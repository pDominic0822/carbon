/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step11-01', // 财务主管-进行数据披露【决策】
		name: 'handle-step11-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep11/Step0101'], resolve)
	},
	{
		path: 'handle-step11-02', // 1.财务主管-填写数据披露作业【作业】
		name: 'handle-step11-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep11/Step0102'], resolve)
	},
	{
		path: 'handle-step11-03', // 1.财务主管-填写绿贷余额与自有现金余额【作业】
		name: 'handle-step11-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep11/Step0103'], resolve)
	},
	{
		path: 'handle-step11-04', // 1.财务主管-填写绿贷余额与自有现金余额【作业】
		name: 'handle-step11-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep11/Step0104'], resolve)
	}
];
