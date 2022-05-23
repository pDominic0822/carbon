<!--
* @Author: liujiatian
* @Date: 2019-02-25 20:45:37
-->
<template>
	<div class="echartsMap" @click="onevent($event)">
		<div class='echartsDiv' ref='chart1'></div>
		<!-- 线的名称 -->
		<div class='echartsDiv'>
			<div class='lineNameItem' v-for='(item, index) in showLineArr' :key='index'
			:class="'color_' + item.color.split('#')[1]"
			:style="{
				'left': (item.namePoint && item.namePoint[0] || 11) + 'px',
				'top':  (item.namePoint && item.namePoint[1] || 13) + 'px'}"
			>
				<p>
					{{item.lineName}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
// import { allPoint } from './json/json';
export default {
	name: 'login',
	props: ['showLineArr', 'showPointArr', 'showLineSpetArr'],
	data () {
		return {
			// 所有的点
			spotAllArr: {
			},
			// 所有的线
			linesAllArr: [
			],
			// 线的起始坐标点
			dataArr: [],
			// 连线
			links: [],
			// 动画点
			linsData: [],
			// 线名称的集合
			lineNameArr: []
		};
	},
	inject: ['reload'],
	watch: {
		showLineSpetArr: {
			handler () {
				if (this.showLineSpetArr) {
					// this.handleData();
					this.showEcharts();
				}
			},
			deep: true,
			immediate: true
		}
	},
	components: {
	},
	created () {
	},
	methods: {
		onevent (e) {
			console.log(e.offsetX);
			console.log(e.offsetY);
			// let x = parseFloat(e.offsetX) * 3000 / 2000;
			// let y = parseFloat(e.offsetY) * 1500 / 1000;
			let x = Math.abs(parseFloat(e.offsetX));
			let y2 = Math.abs(1000 - parseFloat(e.offsetY));
			let y = Math.abs(parseFloat(e.offsetY));
			console.log('[' + (parseFloat(x)) + ', ' + (parseFloat(y2)) + ']');
			console.log('[' + (parseFloat(x)) + ', ' + (parseFloat(y)) + ']');
			console.log('*****************************');
		},
		showEcharts () {
			this.showPointArr.push({
				// 最大比例坐标，必须有不然定位不准
				name: 'none',
				symbol: 'none',
				value: [2000, 1000]
			});
			console.log(this.showPointArr);
			console.log(this.showLineArr);
			console.log(this.showLineSpetArr);
			this.loadEcharts();
			// this.handleData();
		},
		// 处理数据
		handleData () {
			// // 模拟事务-----------------开始
			// // 1、全部的点
			// let point = allPoint;
			// // console.log(point);
			// // 2、需要展示的点
			// let showData = [
			// 	// 'code01',
			// 	// 'code02',
			// 	// 'code03',
			// 	// 'code04'
			// ];
			// for (const key in point) {
			// 	showData.push(key);
			// };

			// this.dataArr = [
			// ];
			// showData.forEach(element => {
			// 	this.dataArr.push({
			// 		name: element,
			// 		symbol: 'none',
			// 		value: point[element].value
			// 	});
			// });
			// // 2、需要展示的线
			// let lineData = [
			// 	// {
			// 	// 	source: 'code01', // 起点
			// 	// 	target: 'code02', // 终点
			// 	// 	color: '#04FDFF',
			// 	// 	curveness: 0.4
			// 	// },
			// 	// {
			// 	// 	source: 'code02', // 起点
			// 	// 	target: 'code03', // 终点
			// 	// 	color: '#04FDFF',
			// 	// 	curveness: 0.3
			// 	// },
			// 	// {
			// 	// 	source: 'code02', // 起点
			// 	// 	target: 'code04', // 终点
			// 	// 	color: '#04FDFF',
			// 	// 	curveness: 0.2
			// 	// }
			// ];
			// for (let index = 0; index < showData.length; index++) {
			// 	const element = showData[index];
			// 	lineData.push({
			// 		source: element, // 起点
			// 		target: showData[index + 1] || showData[0], // 终点
			// 		color: '#04FDFF',
			// 		curveness: 0.4
			// 	});
			// }
			// this.linsData = [];
			// this.links = [];
			// lineData.forEach(element => {
			// 	this.linsData.push({
			// 		coords: [
			// 			point[element.source].value,
			// 			point[element.target].value
			// 		],
			// 		lineStyle: {
			// 			normal: {
			// 				color: element.color,
			// 				curveness: element.curveness
			// 			}
			// 		}
			// 	});
			// 	this.links.push({
			// 		source: element.source,
			// 		target: element.target,
			// 		lineStyle: {
			// 			normal: {
			// 				color: element.color,
			// 				curveness: element.curveness
			// 			}
			// 		}
			// 	});
			// });
			// // 模拟事务-----------------结束
			// // console.log(this.dataArr); // 坐标点
			// // console.log(this.links);
			// console.log(this.linsData); //
		},
		// 渲染线条
		loadEcharts () {
			this.$nextTick(() => {
				this.myChart1 = null;
				this.myChart1 = echarts.init(this.$refs.chart1);
				let option = {
					grid: {
						top: 0,
						left: 0,
						bottom: 0,
						right: 0
					},
					xAxis: {
						show: false,
						type: 'value'
					},
					yAxis: {
						show: false,
						type: 'value'
					},
					tooltip: {},
					series: [
						{
							type: 'graph',
							zlevel: 5,
							draggable: false,
							coordinateSystem: 'cartesian2d',
							label: {
								normal: {
									show: false
								}
							},
							data: this.showPointArr, // 点
							links: this.showLineArr, // 线
							edgeSymbol: ['circle', 'arrow'],
							edgeSymbolSize: [5, 8],
							lineStyle: {
								normal: {
									opacity: 1,
									type: 'dotted',
									width: 1
								}
							}
						},
						{
							type: 'lines',
							coordinateSystem: 'cartesian2d',
							z: 1,
							zlevel: 2,
							animation: false,
							effect: {
								show: true,
								period: 3,
								trailLength: 0,
								symbolSize: 8,
								symbol: 'arrow',
								loop: true
							},
							lineStyle: {
								normal: {
									width: 0
								}
							},
							data: this.showLineSpetArr // 箭头
						}
					]
				};
				this.myChart1.setOption(option, true);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.echartsMap{
	width: 100%;
	height: 100%;
	position: relative;
}
	.echartsDiv{
		position: absolute;
		top: 0;
		left: 0;
		width: 2000px;
		height: 1000px;
	}
	.lineNameItem{
		position: absolute;
		top: 100px;
		left: 300px;
		p{
			padding: 0 6px;
			line-height: 32px;
			height: 32px;
			text-align: center;
			font-size: 12px;
			letter-spacing: 1px;
			border-radius: 3px;
			color: #ffffff;
		}
	}
	.lineNameItem:after{
		content: "";
		position: absolute;
		right: -28px;
		top: 0;
		border: 16px solid transparent;
		border-left: 12px solid #E4FF00;
	}
	.lineNameItem:before{
		content: "";
		position: absolute;
		left: -28px;
		top: 0;
		border: 16px solid transparent;
		border-right: 12px solid #E4FF00;
	}
	// subTask01
	.color_04FDFF{
		background: #06AF57;
	}
	.color_04FDFF:before{
		border-right: 12px solid #06AF57;
	}
	.color_04FDFF:after{
		border-left: 12px solid #06AF57;
	}
	.color_06AF57{
		background: #06AF57;
	}
	.color_06AF57:before{
		border-right: 12px solid #06AF57;
	}
	.color_06AF57:after{
		border-left: 12px solid #06AF57;
	}
	// subTask02
	.color_0FC5FF{
		background: #1590F1;
	}
	.color_0FC5FF:before{
		border-right: 12px solid #1590F1;
	}
	.color_0FC5FF:after{
		border-left: 12px solid #1590F1;
	}
	.color_1590F1{
		background: #1590F1;
	}
	.color_1590F1:before{
		border-right: 12px solid #1590F1;
	}
	.color_1590F1:after{
		border-left: 12px solid #1590F1;
	}
	// subTask03
	.color_FF3CFD{
		background: #C43DC3;
	}
	.color_FF3CFD:before{
		border-right: 12px solid #C43DC3;
	}
	.color_FF3CFD:after{
		border-left: 12px solid #C43DC3;
	}
	.color_C43DC3{
		background: #C43DC3;
	}
	.color_C43DC3:before{
		border-right: 12px solid #C43DC3;
	}
	.color_C43DC3:after{
		border-left: 12px solid #C43DC3;
	}
	// subTask04
	.color_FF5D2C{
		background: #FF5D2C;
	}
	.color_FF5D2C:before{
		border-right: 12px solid #FF5D2C;
	}
	.color_FF5D2C:after{
		border-left: 12px solid #FF5D2C;
	}

	.color_07FF7D{
		background: #CB453A;
	}
	.color_07FF7D:before{
		border-right: 12px solid #CB453A;
	}
	.color_07FF7D:after{
		border-left: 12px solid #CB453A;
	}

	.color_CB453A{
		background: #CB453A;
	}
	.color_CB453A:before{
		border-right: 12px solid #CB453A;
	}
	.color_CB453A:after{
		border-left: 12px solid #CB453A;
	}
	.color_04FDFF{
		background: #0BB5B6;
	}
	.color_04FDFF:before{
		border-right: 12px solid #0BB5B6;
	}
	.color_04FDFF:after{
		border-left: 12px solid #0BB5B6;
	}
</style>
