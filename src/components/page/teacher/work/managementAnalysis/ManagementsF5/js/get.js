import ajax from '_@/js/ajax';
import router from '@/router';
import * as echarts from 'echarts';

let tableArr = [];
let orgItem = {};
let eCharts = [];
export const getYear = (tableType) => {
	const _route = router.app._route;
	return	ajax({
		method: 'post',
		url: '/stClazzOperationAnalysis/stOperationAnalysisDefaultYearsInfoList',
		params: {
			moldId: _route.query.moldId || this.moldId || '' // 模块id
		}
	}).then(res => {
		if (res.success && res.data) {
			tableArr = [...res.data];
			return ajax({
				method: 'post',
				url: '/stClazzOperationAnalysis/stOperationAnalysisClazzOrgInfoList',
				params: {
					moldId: _route.query.moldId || this.moldId || '' // 模块id
				}
			}).then(res => {
				if (res.success && res.data) {
					orgItem['listArr'] = res.data;
					for (let index = 0; index < tableArr.length; index++) {
						const element = tableArr[index];
						element.listArr = new Array(res.data.length);
					}
					return ajax({
						method: 'post',
						url: '/stClazzOperationAnalysis/stOperationAnalysisInfoList',
						params: {
							moldId: _route.query.moldId || this.moldId || '', // 模块id
							tableType: tableType || ''
						}
					}).then(res => {
						if (res.success && res.data) {
							let tarData = res.data || [];
							tarData.forEach(ele => {
								tableArr.forEach(item => {
									if (item.defaultMoldYearsId === ele.defaultMoldYearsId) {
										ele.orgInfoList.forEach(e1 => {
											orgItem['listArr'].forEach((e2, index) => {
												if (e1.orgId + '' === e2.orgId + '') {
													item.listArr[index] = e1;
												}
											});
										});
									}
								});
							});
							tableArr.unshift(orgItem);
							eCharts = tableArr;
							console.log('eCharts', eCharts);
							return tableArr;
						}
					});
				}
			});
		}
	});
};

export const echartsPush = (yearArr, xAxisArr, seriesArr) => {
	this.$nextTick(() => {
		this.myChart1 = null;
		this.myChart1 = echarts.init(this.$refs.chart1);
		let option = {
			title: {
				text: '各组各年末配额碳资产库存分析（kg）'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				// data: ['Rainfall', 'Evaporation'],
				data: yearArr,
				right: 'center',
				bottom: '0%'
			},
			toolbox: {
				show: true,
				feature: {
					magicType: { show: true, type: ['line', 'bar'] }
				}
			},
			calculable: true,
			xAxis: [
				{
					type: 'category',
					data: xAxisArr
					// prettier-ignore
					// data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				...seriesArr
			]
		};
		this.myChart1.setOption(option, true);
	});
};
