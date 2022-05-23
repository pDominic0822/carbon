/*
 * @Author: zhangln
 * @Description: 小任务实战页
 * @Date: 2019-02-25 16:53:00
 */

import subtask01 from './subtask01/subtask01';
import subtaskStep01 from './subtaskStep01/subtaskStep01';
import subtaskStep02 from './subtaskStep02/subtaskStep02';
import subtaskStep03 from './subtaskStep03/subtaskStep03';
import subtaskStep04 from './subtaskStep04/subtaskStep04';
import subtaskStep05 from './subtaskStep05/subtaskStep05';
import subtaskStep06 from './subtaskStep06/subtaskStep06';
import subtaskStep07 from './subtaskStep07/subtaskStep07';
import subtaskStep08 from './subtaskStep08/subtaskStep08';
import subtaskStep09 from './subtaskStep09/subtaskStep09';
import subtaskStep10 from './subtaskStep10/subtaskStep10';
import subtaskStep11 from './subtaskStep11/subtaskStep11';
import subtaskStep12 from './subtaskStep12/subtaskStep12';
import subtaskStep13 from './subtaskStep13/subtaskStep13';
import subtaskStep14 from './subtaskStep14/subtaskStep14';
import subtaskStep15 from './subtaskStep15/subtaskStep15';
import subtaskStep16 from './subtaskStep16/subtaskStep16';

export default[
	...subtask01,
	...subtaskStep01,
	...subtaskStep02,
	...subtaskStep03,
	...subtaskStep04,
	...subtaskStep05,
	...subtaskStep06,
	...subtaskStep07,
	...subtaskStep08,
	...subtaskStep09,
	...subtaskStep10,
	...subtaskStep11,
	...subtaskStep12,
	...subtaskStep13,
	...subtaskStep14,
	...subtaskStep15,
	...subtaskStep16,
	{
		path: 'handle-pager', // 试卷
		name: 'handle-pager',
		component: resolve => require(['@@/student/work/TaskList/handlePager'], resolve)
	},
	{
		path: 'handle-task-answer', // 试卷
		name: 'handle-task-answer',
		component: resolve => require(['@@/student/work/TaskList/taskAnswer/taskAnswer'], resolve)
	},
	{
		path: 'handle-step-answer', // 试卷
		name: 'handle-step-answer',
		component: resolve => require(['@@/student/work/TaskList/stepAnswer/stepAnswer'], resolve)
	},
	{
		path: 'handle-pdf', // pdf
		name: 'handle-pdf',
		component: resolve => require(['@@/student/work/TaskList/handlePdf'], resolve)
	},
	{
		path: 'handle-markdown', // pdf
		name: 'handle-markdown',
		component: resolve => require(['@@/student/work/TaskList/handleMarkdown'], resolve)
	}
];
