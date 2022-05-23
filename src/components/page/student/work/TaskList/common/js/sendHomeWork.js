import ajax from '_@/js/ajax';
import router from '@/router';
import { MessageBox, Message } from 'element-ui';
import { store } from '@/store/index';

/*
tableType 表单类型
*/
export const InitHomeWork = (tableType, ReadOnlyMap, sendAjaxMap) => {
	const _route = router.app._route;
	return ajax({
		method: 'post',
		url: '/stDefaultTableKey/findOrgWorkFieldValueInfoMap',
		params: {
			moldId: _route.query.moldId || '',
			chapterId: _route.query.chapterId || '',
			clazzYearsPushId: _route.query.clazzYearsPushId || '',
			subtaskId: _route.query.subtaskId || '',
			taskId: _route.query.taskId || '',
			industryId: _route.query.industryId || '',
			tableType: tableType
		}
	}).then(res => {
		if (res.success) {
			// 后端返回一个数组
			let array = res.data;
			console.log(JSON.stringify(res.data));
			let arr = [];
			let isSaveData = false;
			let fromInfo = [];
			for (let index = 0; index < array.length; index++) {
				let element = array[index];
				// todo: 1-----------处理那个空能够输入
				// 解决有的值能输入，有的不能输入
				// 改变element对象中的某一个key  true/false
				let onlyMap = ReadOnlyMap[element.fieldCode];
				// todo: 1-----------结束

				// todo2 ---- 回显数据
				let workFieldValue = {};
				// 防止报错
				if (element.workFieldValue) {
					workFieldValue = element.workFieldValue;
					let ajaxmap = sendAjaxMap[element.fieldCode];
					for (const key in ajaxmap) {
						if (ajaxmap[key]) { // 判断当前是不是要提交的，
							// 再看这个数有没有输入
							if (workFieldValue[key] || workFieldValue[key] === 0) { // 只要满足一个-true,不能写else
								// 如果有值，则按钮置灰，不能点击
								isSaveData = true;
							}
						}
					}
				}
				// 对象拼接
				let obj = {
					...workFieldValue,
					...onlyMap,
					...element
				};
				// 数组重新拼接一下
				arr.push(obj);
			}
			console.log(arr);
			fromInfo = arr;
			return {'fromInfo': fromInfo, 'isSaveData': isSaveData};
		}
	}).catch(err => {
		throw new Error(err);
	});
};

export const GetPageJsonHomeWork = (tableType, ReadOnlyMap, sendAjaxMap, fromInfo) => {
	let array = fromInfo;
	console.log(array);
	let arr = [];
	for (let index = 0; index < array.length; index++) {
		let element = array[index];
		let ajaxMap = sendAjaxMap[element.fieldCode];
		let answerObj = {
		};
		// 对象循环
		for (const key in ajaxMap) {
			if (ajaxMap[key]) {
				let val = element[key];
				if (!val && val !== 0) {
					console.log(key);
					console.log(val);
					console.log(ajaxMap);
					Message({
						type: 'error',
						message: '请填写当前作业全部表单'
					});
					return false;
				}

				answerObj['tableKeyId'] = element.tableKeyId;
				answerObj['fieldCode'] = element.fieldCode;
				// 再次拼接形成 incomeAmount : element[key]==123
				answerObj[key] = element[key];
			}
		}

		// 当前tableKeyId有值，我才拼接到数组
		if (answerObj.tableKeyId) {
			arr.push(answerObj);
		}
	}
	console.log(arr);
	MessageBox.confirm('是否提交', '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		center: true,
		type: 'warning'
	}).then(() => {
		MessageBox.confirm('是否确认提交（只有一次提交机会）', '再次提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			center: true,
			type: 'warning'
		}).then(() => {
			saveTableJson(tableType, arr, fromInfo, ReadOnlyMap, sendAjaxMap);
		}).catch(() => {});
	}).catch(() => {});
};

export const saveTableJson = (tableType, arr, fromInfo, ReadOnlyMap, sendAjaxMap) => {
	const _route = router.app._route;
	ajax({
		method: 'post',
		url: '/stDefaultTableKey/submitOrgWorkAuditAndSave',
		params: {
			moldId: _route.query.moldId || '',
			chapterId: _route.query.chapterId || '',
			clazzYearsPushId: _route.query.clazzYearsPushId || '',
			subtaskId: _route.query.subtaskId || '',
			taskId: _route.query.taskId || '',
			industryId: _route.query.industryId || '',
			tableType: tableType,
			tableFieldJson: JSON.stringify(arr),
			tableJsonAll: JSON.stringify(fromInfo)
		}
	}).then(res => {
		if (res.success) {
			if (res.data) {
				if (!res.data.auditResult) { // 回答错误，弹窗显示
					// this.returnDataMap = res.data.returnDataMap;
					store.commit('setTableType', tableType);
					store.commit('setReturnDataMap', res.data.returnDataMap);
					MessageBox.confirm('填写错误', '错误', {
						confirmButtonText: '查看答案',
						cancelButtonText: '取消',
						center: true,
						showCancelButton: true,
						type: 'error'
					}).then(() => {
						store.commit('CommitdialogreturnVisibleFun', 'error');
					}).catch(() => {});
				} else {
					InitHomeWork(tableType, ReadOnlyMap, sendAjaxMap);
					MessageBox.confirm(`${res.message}`, '提交成功', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'success'
					}).then(() => {
					}).catch(() => {});
				}
			} else {
				MessageBox.confirm(`${res.message}}`, '错误', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'error'
				}).then(() => {
				}).catch(() => {});
			}
		} else {
			MessageBox.confirm(`${res.message}`, '错误', {
				confirmButtonText: '确定',
				center: true,
				showCancelButton: false,
				type: 'error'
			}).then(() => {
			}).catch(() => {});
		}
	}).catch(err => {
		throw new Error(err);
	});
};
