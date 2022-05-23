/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

export default[
	{
		path: 'handle-step03-01', // 1.碳主管-领取年度核定配额【决策】
		name: 'handle-step03-01',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep03/Step0101'], resolve)
	},
	{
		path: 'handle-step03-02', // 1.碳主管-填写碳配额作业【业务】
		name: 'handle-step03-02',
		component: resolve => require(['@@/student/work/TaskList/subtaskStep03/Step0102'], resolve)
	}
];
