/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step09-01', // 生产主管-进行生产【决策】
		name: 'handle-step09-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0101'], resolve)
	},
	{
		path: 'handle-step09-02', // 1.采购主管-填写物料作业【作业】
		name: 'handle-step09-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0102'], resolve)
	},
	{
		path: 'handle-step09-03', // 1.电力主管-填写电力作业【作业】
		name: 'handle-step09-03',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0103'], resolve)
	},
	{
		path: 'handle-step09-04', // 1.生产主管-填写产品碳排放核算作业【作业】
		name: 'handle-step09-04',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0104'], resolve)
	},
	{
		path: 'handle-step09-05', // 1.碳主管-填写配额与碳汇作业
		name: 'handle-step09-05',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0105'], resolve)
	},
	{
		path: 'handle-step09-06', // 1.碳主管-填写配额与碳汇作业
		name: 'handle-step09-06',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0106'], resolve)
	},
	{
		path: 'handle-step09-07', // 1.碳主管-填写配额与碳汇作业
		name: 'handle-step09-07',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep09/Step0107'], resolve)
	}
];
