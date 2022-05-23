
<template>
	<div class="">
		<div class="chart1" ref="chart1">
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	name: 'my-course',
	data () {
		return {
			myChart1: null,
			time1: null,
			arrList: []
		};
	},
	created () {
		// this.init();
	},
	mounted () {
		this.init();
	},
	beforeDestroy () {
		clearInterval(this.time1);
		this.time1 = null;
	},
	methods: {
		init () {
			this.rowEcherts(); // 加载动画
		},
		rowEcherts () {
			let angle = 0; // 角度，用来做简单的动画效果的
			this.time1 = setInterval(() => {
				angle = angle + 3;
				// 用setInterval做动画感觉有问题
				this.loadEcharts(angle);
			}, 100);
		},
		// 渲染线条
		loadEcharts (angle) {
			this.$nextTick(() => {
				this.myChart1 = null;
				this.myChart1 = echarts.init(this.$refs.chart1);
				// let value = 1000;
				// 获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
				function getCirlPoint (x0, y0, r, angle) {
					let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
					let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
					return {
						x: x1,
						y: y1
					};
				}
				var data = [];
				var data2 = [];
				var trafficWay = [
					{
						name: '煤电',
						value: 102
					},
					{
						name: '绿电',
						value: 200
					}

				];
				var color = ['#FF8A26', '#4ED33C', '#2A8BFD', '#BAFF7F', '#00FAC1', '#00CAFF', '#FF5252', '#9689FF', '#CB00FF'];
				for (var i = 0; i < trafficWay.length; i++) {
					data.push({
						value: trafficWay[i].value,
						name: trafficWay[i].name,
						itemStyle: {
							normal: {
								borderWidth: 8,
								shadowBlur: 20,
								borderRadius: 20,
								borderColor: color[i],
								shadowColor: color[i]
							}
						}
					}
					// {
					// 	value: 5,
					// 	name: '',
					// 	itemStyle: {
					// 		normal: {
					// 			label: {
					// 				show: false
					// 			},
					// 			labelLine: {
					// 				show: false
					// 			},
					// 			color: 'rgba(0, 0, 0, 0)',
					// 			borderColor: 'rgba(0, 0, 0, 0)',
					// 			borderWidth: 0

					// 		}
					// 	}
					// }
					);
					data2.push({
						value: trafficWay[i].value,
						name: trafficWay[i].name
					},
					{
						value: 5,
						name: '',
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								labelLine: {
									show: false
								},
								color: 'rgba(0, 0, 0, 0)',
								borderColor: 'rgba(0, 0, 0, 0)',
								borderWidth: 0,
								opacity: 0.2

							}
						}
					}
					);
				}

				let option = {
					// backgroundColor: '#061740',
					color: color,
					series: [
						{// 外线1
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
										startAngle: (0 + angle) * Math.PI / 180,
										endAngle: (90 + angle) * Math.PI / 180
									},
									style: {
										stroke: '#4EE9E6',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 内线1
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
										startAngle: (180 + angle) * Math.PI / 180,
										endAngle: (270 + angle) * Math.PI / 180
									},
									style: {
										stroke: '#4EE9E6',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 外线2
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
										startAngle: (270 + -angle) * Math.PI / 180,
										endAngle: (40 + -angle) * Math.PI / 180
									},
									style: {
										stroke: '#4EE9E6',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 外线2
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
										startAngle: (90 + -angle) * Math.PI / 180,
										endAngle: (220 + -angle) * Math.PI / 180
									},
									style: {
										stroke: '#4EE9E6',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 绿点1
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								let x0 = api.getWidth() / 2;
								let y0 = api.getHeight() / 2;
								let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
								let point = getCirlPoint(x0, y0, r, (90 + -angle));
								return {
									type: 'circle',
									shape: {
										cx: point.x,
										cy: point.y,
										r: 4
									},
									style: {
										stroke: '#66FFFF', // 粉
										fill: '#66FFFF'
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 绿点2
							name: 'ring5', // 绿点
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								let x0 = api.getWidth() / 2;
								let y0 = api.getHeight() / 2;
								let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
								let point = getCirlPoint(x0, y0, r, (270 + -angle));
								return {
									type: 'circle',
									shape: {
										cx: point.x,
										cy: point.y,
										r: 4
									},
									style: {
										stroke: '#66FFFF', // 粉
										fill: '#66FFFF'
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 绿点3
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								let x0 = api.getWidth() / 2;
								let y0 = api.getHeight() / 2;
								let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
								let point = getCirlPoint(x0, y0, r, (90 + angle));
								return {
									type: 'circle',
									shape: {
										cx: point.x,
										cy: point.y,
										r: 4
									},
									style: {
										stroke: '#66FFFF', // 粉
										fill: '#66FFFF'
									},
									silent: true
								};
							},
							data: [0]
						},
						{// 绿点4
							name: 'ring5', // 绿点
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								let x0 = api.getWidth() / 2;
								let y0 = api.getHeight() / 2;
								let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
								let point = getCirlPoint(x0, y0, r, (270 + angle));
								return {
									type: 'circle',
									shape: {
										cx: point.x,
										cy: point.y,
										r: 4
									},
									style: {
										stroke: '#66FFFF', // 粉
										fill: '#66FFFF'
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							name: '',
							type: 'pie',
							clockWise: false,
							radius: ['88%', '85%'],
							hoverAnimation: false,
							center: ['50%', '50%'],
							top: 'center',
							itemStyle: {
								itemWidth: 15,
								itemHeight: 15,
								textStyle: {
									color: '#ffffff'
								},
								normal: {
									label: {

										show: false
									}
								}
							},
							data: data
						},
						{
							type: 'pie',
							top: 'center',
							startAngle: 90,
							clockwise: false,
							center: ['50%', '50%'],
							legendHoverLink: false,
							hoverAnimation: false,
							radius: ['84%', '45%'],
							itemStyle: {
								opacity: 0.15
							},
							label: {
								show: false,
								position: 'center'
							},
							labelLine: {
								show: false
							},
							data: data2
						},
						{
							name: '',
							type: 'pie',
							clockWise: false,
							center: ['50%', '50%'],
							radius: ['29%', '28%'],
							hoverAnimation: false,
							top: 'center',
							itemStyle: {
								normal: {
									label: {
										fontSize: 12,
										position: 'inside',
										formatter: '{b} ({c})',

										textStyle: {
											color: '#ffffff'
										}
										// show: false
									}
								}
							},
							data: data
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
.chart1{
    width: 210px;
    height: 210px;
    margin: 0 auto;
}

</style>
