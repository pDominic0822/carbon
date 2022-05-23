/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step01-01', // 碳主管-填写配额与碳汇作业【作业】
		name: 'handle-step01-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0101'], resolve)
	},
	{
		path: 'handle-step01-02', // 1.电力主管-填写电力作业【作业】
		name: 'handle-step01-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0102'], resolve)
	},
	{
		path: 'handle-step01-03', // 1.生产主管-填写技改作业【作业】
		name: 'handle-step01-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0103'], resolve)
	},
	{
		path: 'handle-step01-04', // 1.财务主管-填写自有现金余额【作业】
		name: 'handle-step01-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0104'], resolve)
	},
	{
		path: 'handle-step01-05', // 1.采购主管-填写物料作业【作业】
		name: 'handle-step01-05',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0105'], resolve)
	},
	{
		path: 'handle-step01-06', // 1.采购主管-填写物料作业【作业】
		name: 'handle-step01-06',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0106'], resolve)
	},
	{
		path: 'handle-step01-07', // 1.采购主管-填写物料作业【作业】
		name: 'handle-step01-07',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep01/Step0107'], resolve)
	}
];
