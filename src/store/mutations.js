/*
 * @Date: 2020-08-20 17:01:55
 */

import ajax from '_@/js/ajax';
import { storage } from '_@/js/utils';
import router from '@/router';

import axios from 'axios';
import { Cookie } from '_@/js/one';
import { commonFunction, modelatlasUrl } from '@/config';

// ======================

// ======================

// 设置任务访问次数
export const addUserTaskVisitCount = (state, taskId) => {
	const _route = router.app._route;
	axios
		.post(`${commonFunction}/function/userTaskVisitCount/addUserTaskVisitCount`, {
			sessionId: Cookie.get('sessionId'),
			isLoading: true,
			moldId: _route.params.moldId || '1',
			subtaskId: _route.query.subtaskId || '1',
			taskId: taskId || _route.query.taskId || '1'
		})
		.then(res => {
		}).catch(error => {
			console.log(error);
		});
};

// 小任务学习时长-毫秒
export const addUserSubtaskVisitDuration = (state, visitDuration) => {
	console.log(visitDuration);
	const _route = router.app._route;
	axios
		.post(`${commonFunction}/function/userSubtaskVisitDuration/addUserSubtaskVisitDuration`, {
			sessionId: Cookie.get('sessionId'),
			isLoading: true,
			moldId: _route.params.moldId || '1',
			subtaskId: _route.query.subtaskId || '1',
			subTaskId: _route.query.subtaskId || '1',
			visitDuration: visitDuration || '1000',
			taskId: _route.query.taskId || '1'
		})
		.then(res => {
		}).catch(error => {
			console.log(error);
		});
};

/*
*获取全部资产内容
this.$store.commit('getPropertyAllStatis', '');
*/
export const getPropertyAllStatis = (state) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/stOrgTotalPropertyStatistics/getOrgTotalPropertyStatisticsInfoMap',
		params: {
			moldId: _route.query.moldId || '',
			chapterId: _route.query.chapterId || '',
			clazzYearsPushId: _route.query.clazzYearsPushId || '',
			subtaskId: _route.query.subtaskId || '',
			taskId: _route.query.taskId || '',
			industryId: _route.query.industryId || ''
		}
	}).then(res => {
		if (res.success) {
			if (res.data) {
				let data = res.data;
				state.ownCashAmount = data.ownCashAmount || 0;
				state.greenLoansAmount = data.greenLoansAmount || 0;
				state.carbonQuotaAmount = data.carbonQuotaAmount || 0;
				state.carbonSinkAmount = data.carbonSinkAmount || 0;
				state.coalPowerAmount = data.coalPowerAmount || 0;
				state.greenPowerAmount = data.greenPowerAmount || 0;
				state.productionMaterialsAmount = data.productionMaterialsAmount || 0;
			}
		}
	}).catch(err => {
		throw new Error(err);
	});
};

/*
*获取单个资产内容，按照code查询
ownCashAmount 现金金额、
greenLoansAmount 绿贷金额、
carbonQuotaAmount 碳配额、
carbonSinkAmount 碳汇、
coalPowerAmount 煤电、
greenPowerAmount 绿电、
productionMaterialsAmount 物料

{{$store.state.ownCashAmount}}
this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
*/
export const getPropertyTypeStatis = (state, propertyType) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/stOrgTotalPropertyStatistics/getOrgTotalPropertyStatisticsValue',
		params: {
			moldId: _route.query.moldId || '',
			chapterId: _route.query.chapterId || '',
			clazzYearsPushId: _route.query.clazzYearsPushId || '',
			subtaskId: _route.query.subtaskId || '',
			taskId: _route.query.taskId || '',
			industryId: _route.query.industryId || '',
			propertyType: propertyType
		}
	}).then(res => {
		if (res.success) {
			state[propertyType] = res.data;
		}
	}).catch(err => {
		throw new Error(err);
	});
};

/**
 * 获取生产线状态
 */
export const getstOrgRetrofitRecord = (state, params) => {
	// const _route = router.app._route;
	// ajax({
	// 	method: 'post',
	// 	url: '/stOrgTotalPropertyStatistics/getOrgTotalPropertyStatisticsValue',
	// 	params: {
	// 		moldId: _route.query.moldId || '',
	// 		chapterId: _route.query.chapterId || '',
	// 		clazzYearsPushId: _route.query.clazzYearsPushId || '',
	// 		subtaskId: _route.query.subtaskId || '',
	// 		taskId: _route.query.taskId || '',
	// 		industryId: _route.query.industryId || '',
	// 		propertyType: propertyType
	// 	}
	// }).then(res => {
	// 	if (res.success) {
	// 	}
	// }).catch(err => {
	// 	throw new Error(err);
	// });
};

/**
 * 获取生产线状态
 */
export const getOrgChooseOrder = (state, params) => {
	// const _route = router.app._route;
	// ajax({
	// 	method: 'post',
	// 	url: '/stOrgTotalPropertyStatistics/getOrgTotalPropertyStatisticsValue',
	// 	params: {
	// 		moldId: _route.query.moldId || '',
	// 		chapterId: _route.query.chapterId || '',
	// 		clazzYearsPushId: _route.query.clazzYearsPushId || '',
	// 		subtaskId: _route.query.subtaskId || '',
	// 		taskId: _route.query.taskId || '',
	// 		industryId: _route.query.industryId || '',
	// 		propertyType: propertyType
	// 	}
	// }).then(res => {
	// 	if (res.success) {
	// 	}
	// }).catch(err => {
	// 	throw new Error(err);
	// });
};

// 小任务完成
export const accomplishTaskRests = (state, taskId) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/TaskListBusiness/accomplishTaskRests',
		params: {
			moldId: _route.params.moldId || '1',
			chapterId: _route.query.chapterId || '1',
			subtaskId: _route.query.subtaskId || '1',
			subTaskId: _route.query.subtaskId || '1',
			taskId: taskId || _route.query.taskId || '1'
		}
	}).then(res => {
		if (res.success && res.data) {
		}
	}).catch(err => {
		throw new Error(err);
	});
};

/***
 * _obj 里面的参数：
 * 设置出发操作分
functionCode: '',
scoreSource: '’
 *  **/

export const extraPointsPractical = (state, _obj) => {
	const _route = router.app._route;
	let params = {
		sessionId: Cookie.get('sessionId'),
		isLoading: true,
		moldId: _route.params.moldId || '1',
		chapterId: _route.query.chapterId || '1',
		subtaskId: _route.query.subtaskId || '1',
		taskId: _route.query.taskId || '1'
	};
	Object.assign(params, _obj);
	axios
		.post(`${modelatlasUrl()}/modelatlas/atlasScore/insertUserTaskExperimentAtlasScore`, params)
		.then(res => {
		}).catch(error => {
			console.log(error);
		});
};

export const setInitCapitalNumber = (state, params) => {
	if (params === 'initCapitalNumber') { // 全局方法
		const _route = router.app._route;
		ajax({
			method: 'post',
			url: '/scUserBusinessCapital/getUserBusinessCapital',
			params: {
				isLoading: true,
				moldId: _route.params.moldId,
				subtaskId: _route.query.subtaskId,
				taskId: _route.query.taskId,
				industryId: _route.query.industryId || ''
			}
		}).then(res => {
			if (res.success && res.data) {
				// store.commit('setCapitalNumber', );
				state.capitalNumber = res.data.capitalNumber;
			} else {
			}
		}).catch(err => {
			throw new Error(err);
		});
	}
};

// 改变小任务步骤状态
export const setSubTaskStepIndex = (state, params) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/scTeachUserStepRecord/saveTeachUserStepRecord',
		params: {
			isLoading: true,
			moldId: _route.params.moldId,
			subtaskId: _route.query.subtaskId,
			taskId: _route.query.taskId,
			industryId: _route.query.industryId || '',
			stepCode: 'study',
			stepStatus: params
		}
	}).then(res => {
		if (res.success) {
			// state.routerStep = false;
		} else {
			// state.routerStep = false;
		}
	}).catch(err => {
		throw new Error(err);
	});
};

// 改变小任务步骤状态
export const setTaskStepIndex = (state, params) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/scUserTaskStepRecord/saveUserTaskStepRecord',
		params: {
			isLoading: true,
			moldId: _route.params.moldId,
			subtaskId: _route.query.subtaskId,
			taskId: _route.query.taskId,
			industryId: _route.query.industryId || '',
			stepCode: 'study',
			stepStatus: params
		}
	}).then(res => {
		if (res.success) {
			// state.routerStep = false;
		} else {
			// state.routerStep = false;
		}
	}).catch(err => {
		throw new Error(err);
	});
};

// 设置任务是否完成
export const setChartOpen = (state, params) => {
	const _route = router.app._route;
	let keys = storage.get('taskIndex');
	let json = JSON.parse(storage.get('chartObj')) || {};
	json[keys] = true;
	ajax({
		method: 'post',
		url: '/scSubtaskBlueprint/saveScSubtaskBlueprintByParam',
		params: {
			isLoading: true,
			moldId: _route.params.moldId,
			subtaskId: _route.query.subtaskId,
			blueprintJson: JSON.stringify(json)
		}
	}).then(res => {
		if (res.success && res.data) {
		} else {
		}
	}).catch(err => {
		throw new Error(err);
	});
};

export const setCapitalNumber = (state, params) => {
	state.capitalNumber = params;
};

// 设置错误弹窗展示
export const CommitdialogreturnVisibleFun = (state, params) => {
	if (params === 'error') { // 点击时候，弹窗打开
		state.dialogreturnDataVisible = true;
	} else {
		state.dialogreturnDataVisible = false;
	}
};

export const setTableType = (state, params) => {
	state.tableType = params;
};

export const setReturnDataMap = (state, params) => {
	state.returnDataMap = params;
};
