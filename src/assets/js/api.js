/*
 * @Author: zhangln
 * @Description: 公共api文件
 * import { encodeUnicode } from '_@/js/utils';
 * @Date: 2019-03-01 15:27:05
 */
import ajax from '_@/js/ajax';
import router from '@/router';
/**
 * @name: zhangln
 * @msg: 添加用户的某项能力值：
 * moldId   模块id
 * taskId   小任务id
 * atlasCode   图谱类型
 * ********************
 * *
 * businessValue 业务值
 * learnValue 学习值
 * answerValue 答题值
 * activeValue 活跃值
 * roadShowValue 路演值
 * *
 * ********************
 * purpose   值的来源：如ppt，系统奖励，交易等
 * score   得到的分值
 * *************************
 */

// 使用方法
// let arr = [
// 	{
// 		atlasCode: 'businessValue',
// 		purpose: '完成任务',
// 		score: 5
// 	}
// ];
// this.$addRecordTimes(this.$route.params.moldId, this.$route.query.chapterId, this.$route.query.taskId, arr);

export const addRecordTimes = (arr) => {
	console.log(arr);
	arr.forEach(element => {
		addRecord(element.atlasCode, element.purpose, element.score);
	});
};

export const addRecord = (atlasCode, purpose, score) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/atlas/atlasScore/insertUserModelAtlasRecord',
		params: {
			moldId: _route.params.moldId,
			chapterId: _route.query.chapterId,
			subtaskId: _route.query.subtaskId,
			taskId: _route.query.taskId,
			atlasCode: atlasCode,
			isLoading: true,
			purpose: purpose,
			isRepetition: 1, // 1 0
			score: score
		}
	}).then(res => {
		if (res.success) {
		} else {
		}
	}).catch(err => {
		throw new Error(err);
	});
};
