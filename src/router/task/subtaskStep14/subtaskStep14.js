/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step14-01', // 财务主管-填写年末损益与年末权益作业【作业】
		name: 'handle-step14-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep14/Step0101'], resolve)
	},
	{
		path: 'handle-step14-02', // 财务主管-填写年末损益与年末权益作业【作业】
		name: 'handle-step14-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep14/Step0102'], resolve)
	}
];
