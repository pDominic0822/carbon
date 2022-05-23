
<template>
	<div class="tableBox">
		<div>
			<el-tabs v-model="tabsVal" @tab-click="handleClick">
				<el-tab-pane v-for="(tabsItem, index) in tabList"
				:key="index" :label="tabsItem.label">
				</el-tab-pane>
			</el-tabs>
		</div>
		<template v-if="isTabCollse === 0">
			<div class="chart1" ref="chart1"></div>
			<div class="tableData">
				<table class="demo-table mt20">
					<tr>
						<td>
							碳配额库存( 吨 )
						</td>
						<td v-for="(tdItem, tdIndex) in YearArr" :key="tdIndex">
							<!-- 第{{tdIndex + 1}}组 -->
							{{tdItem.orgName}}
						</td>
					</tr>
					<tr v-for="(trItem, trIndex) in tdList" :key="trIndex">
						<td>
							{{trItem.yearsTime}}
						</td>
						<td v-for="(infoItem, infoIndex) in trItem.orgInfoList" :key="infoIndex">
							{{infoItem.beginningOfYearStock}}
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template  v-if="isTabCollse === 1">
			<div>
				<table class="demo-table mt20">
					<tr>
						<td>
							碳配额库存( 吨 )
						</td>
						<td v-for="(tdItem, tdIndex) in YearArr" :key="tdIndex">
							<!-- 第{{tdIndex + 1}}组 -->
							{{tdItem.yearsTime}}
						</td>
					</tr>
					<tr v-for="(trItem, trIndex) in tdList" :key="trIndex">
						<td>
							{{trItem.orgName}}
						</td>
						<td v-for="(infoItem, infoIndex) in trItem.orgInfoList" :key="infoIndex">
							{{infoItem.produceEmission}}
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template v-if="isTabCollse === 2">
			<div>
				<table class="demo-table mt20">
					<tr>
						<td>
							碳配额库存( 吨 )
						</td>
						<td v-for="(tdItem, tdIndex) in YearArr" :key="tdIndex">
							<!-- 第{{tdIndex + 1}}组 -->
							{{tdItem[tdIndex].orgName}}
						</td>
					</tr>
					<tr v-for="(trItem, trIndex) in tdList" :key="trIndex">
						<td>
							{{trItem[trIndex].yearsTime}}
						</td>
						<td v-for="(infoItem, infoIndex) in trItem.orgInfoList" :key="infoIndex">
							{{infoItem.yearApprovedQuota}}
						</td>
					</tr>
				</table>
			</div>
		</template>
	</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	name: 'my-course',
	data () {
		return {
			myChart1: null,
			YearArr: [],
			time1: null,
			tabList: [
				{
					label: '年度碳配额库存 ( 吨 )',
					routerLink: 0
				},
				{
					label: '年度实际碳排放量 ( 吨 )',
					routerLink: 1
				},
				{
					label: '年度核定碳配额量 ( 吨 )',
					routerLink: 2
				}
			],
			dataInfo: [],
			trList: [],
			tdList: {},
			infoArr: [],
			tabsVal: '',
			isTabCollse: 0,
			arrList: []
		};
	},
	props: [
		'clazzYearsPushId'
	],
	created () {
		// this.init();
	},
	mounted () {
		// this.init();
		// this.getOrg();
		this.getYear();
	},
	beforeDestroy () {
	},
	methods: {
		init () {
			this.loadEcharts(); // 加载动画
			console.log(this.clazzYearsPushId);
		},
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.isTabCollse = item.routerLink;
		},
		getYear () {
			this.$ajax({
				method: 'post',
				url: '/stClazzOperationAnalysis/stOperationAnalysisDefaultYearsInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '' // 模块id
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						// let yearList = res.data;
						// let yearPush = [];
						// for (let index = 0; index < yearList.length; index++) {
						// 	const year = yearList[index];
						// 	yearPush.push(year);
						// }
						let data = JSON.parse(JSON.stringify(res.data));

						this.tdList = data;
						this.getOrg();
					}
				}
			});
		},
		getOrg () {
			this.$ajax({
				method: 'post',
				url: '/stClazzOperationAnalysis/stOperationAnalysisClazzOrgInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '' // 模块id
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						let data = JSON.parse(JSON.stringify(res.data));
						for (let index = 0; index < data.length; index++) {
							let element = data[index];
							element.beginningOfYearStock = 0;
						}
						for (let index = 0; index < this.tdList.length; index++) {
							let element = this.tdList[index];
							element.OrgList = data;
						}

						this.getDataInfo();
					}
					// if (res.data) {
					// 	let array = res.data;

					// 	// ---------table开始
					// 	this.tdList = array;
					// 	if (res.data.length > 0) {
					// 		this.YearArr = res.data[0].orgInfoList;
					// 	}
					// 	// ---------table结束

					// 	let yearArr = this.YearArr.map(item => item.yearsTime);
					// 	console.log(yearArr);
					// 	let colorArr = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00', '#4C98FB', '#83CCE7', '#26C7C8', '#73DEBD', '#26C978', '#8CDF6C', '#FBD657', '#F56679', '#E07BCE', '#9D50E0', '#634FDA'];

					// 	let seriesArr = [];

					// 	for (let index = 0; index < this.YearArr.length; index++) {
					// 		const element = this.YearArr[index];
					// 		// xAxis
					// 		seriesArr.push({
					// 			name: element.yearsTime,
					// 			type: 'bar',
					// 			data: [
					// 			],
					// 			itemStyle: {
					// 				color: function (param) {
					// 					return colorArr[index] || '';
					// 				}
					// 			},
					// 			markPoint: {
					// 				data: [
					// 					{ type: 'max', name: 'Max' },
					// 					{ type: 'min', name: 'Min' }
					// 				]
					// 			},
					// 			markLine: {
					// 				data: [{ type: 'average', name: 'Avg' }]
					// 			}
					// 		});
					// 	}

					// 	let xAxisArr = [];
					// 	for (let index = 0; index < array.length; index++) {
					// 		const element = array[index];
					// 		xAxisArr.push(element.orgName);
					// 		// let arr1 = [];
					// 		for (let j = 0; j < element.orgInfoList.length; j++) {
					// 			const orgInfoList = element.orgInfoList[j];
					// 			seriesArr[j].data.push(orgInfoList.beginningOfYearStock || 0);
					// 			// arr1.push(orgInfoList.beginningOfYearStock);
					// 		}
					// 	}
					// 	console.log(seriesArr);
					// 	console.log(xAxisArr);
					// 	this.$nextTick(() => {
					// 		this.loadEcharts(yearArr, xAxisArr, seriesArr);
					// 	});
					// }
				}
			});
		},
		getDataInfo () {
			this.$ajax({
				method: 'post',
				url: '/stClazzOperationAnalysis/stOperationAnalysisInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
					tableType: 'carbonQuotaAnalysis'
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						let array = JSON.parse(JSON.stringify(res.data));

						let map = {};
						for (let index = 0; index < array.length; index++) {
							const element = array[index];

							let defaultMoldYearsId = element.defaultMoldYearsId;
							map[defaultMoldYearsId + ''] = {};

							for (let j = 0; j < element.orgInfoList.length; j++) {
								let orgInfoList = element.orgInfoList[j];
								map[defaultMoldYearsId][orgInfoList.orgId + ''] = orgInfoList.yearsQuotaStock;
							}
						}

						console.log(map);

						for (let index = 0; index < this.tdList.length; index++) {
							let element = this.tdList[index];
							let yearMap = map[element.defaultMoldYearsId + ''] || {};
							console.log(yearMap);

							for (let j = 0; j < element.OrgList.length; j++) {
								let OrgList = element.OrgList[j];
								// console.log(element.defaultMoldYearsId + ':' + OrgList.orgId + ':' + (yearMap[OrgList.orgId + ''] || 0));
								let beginningOfYearStock = (yearMap[OrgList.orgId]);
								console.log(beginningOfYearStock);
								OrgList.beginningOfYearStock = beginningOfYearStock;
								this.$set(OrgList, 'beginningOfYearStock', beginningOfYearStock);
							}
						}

						console.log(this.tdList);
						// [
						// 	{
						// 		yearName: '2021',
						// 		list: [
						// 			{
						// 				org1: '',
						// 				val: ''
						// 			}
						// 		]
						// 	}
						// ];
						// let yearList = res.data;
						// let yearPush = [];
						// for (let index = 0; index < yearList.length; index++) {
						// 	const year = yearList[index];
						// 	yearPush.push(year);
						// }
						// this.tdList = yearPush;
					}
				}
			});
		},
		rowEcherts () {
		},
		// 渲染线条
		loadEcharts (yearArr, xAxisArr, seriesArr) {
			// https://echarts.apache.org/examples/zh/editor.html?c=bar1
			// 模拟拼接
			// let array = [
			// 	{
			// 		yearname: '第1年',
			// 		orgArr: [
			// 			{
			// 				name: '第1组',
			// 				val: 24
			// 			},
			// 			{
			// 				name: '第2组',
			// 				val: 21
			// 			}
			// 		]
			// 	},
			// 	{
			// 		yearname: '第2年',
			// 		orgArr: [
			// 			{
			// 				name: '第1组',
			// 				val: 12
			// 			},
			// 			{
			// 				name: '第2组',
			// 				val: 44
			// 			}
			// 		]
			// 	},
			// 	{
			// 		yearname: '第3年',
			// 		orgArr: [
			// 			{
			// 				name: '第1组',
			// 				val: 12
			// 			},
			// 			{
			// 				name: '第2组',
			// 				val: 44
			// 			}
			// 		]
			// 	}
			// ];
			// let colorArr = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00', '#4C98FB', '#83CCE7', '#26C7C8', '#73DEBD', '#26C978', '#8CDF6C', '#FBD657', '#F56679', '#E07BCE', '#9D50E0', '#634FDA'];
			// let yearArr = [
			// ];
			// let seriesArr = [];
			// let xAxisArr = [];
			// for (let index = 0; index < array.length; index++) {
			// 	const element = array[index];
			// 	// 拼接年
			// 	yearArr.push(element.yearname);
			// 	// 拼接series
			// 	let arr1 = [];
			// 	for (let j = 0; j < element.orgArr.length; j++) {
			// 		const orgMap = element.orgArr[j];
			// 		arr1.push(orgMap.val);

			// 		// 转换X轴，使用第一个即可
			// 		if (index === 0) {
			// 			xAxisArr.push(orgMap.name);
			// 		}
			// 	}
			// 	// xAxis
			// 	seriesArr.push({
			// 		name: element.yearname,
			// 		type: 'bar',
			// 		data: [
			// 			...arr1
			// 		],
			// 		itemStyle: {
			// 			color: function (param) {
			// 				return colorArr[index] || '';
			// 			}
			// 		},
			// 		markPoint: {
			// 			data: [
			// 				{ type: 'max', name: 'Max' },
			// 				{ type: 'min', name: 'Min' }
			// 			]
			// 		},
			// 		markLine: {
			// 			data: [{ type: 'average', name: 'Avg' }]
			// 		}
			// 	});
			// }
			console.log(yearArr);
			console.log(seriesArr);
			console.log(xAxisArr);
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
		}
	}
};
</script>

<style lang="scss" scoped>
.chart1{
    width: 700px;
    height: 400px;
    margin: 0 auto;
}
.tableBox{
	padding-left: 20px;
	.tableData{
		width: 700px;
		overflow: hidden;
		overflow-x: auto;
	}
	// .demo-table{
	// 	width: 2000px;
	// }
}
</style>
