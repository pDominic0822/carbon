
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
				let value = 1000;
				// 获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
				function getCirlPoint (x0, y0, r, angle) {
					let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
					let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
					return {
						x: x1,
						y: y1
					};
				}
				let option = {
					// backgroundColor: '#061740',
					title: {
						text: '{a|' + value + '}',
						x: 'center',
						y: 'center',
						textStyle: {
							rich: {
								a: {
									fontSize: 20,
									color: '#29EEF3'
								},

								c: {
									fontSize: 20,
									color: '#ffffff'
									// padding: [5,0]
								}
							}
						}
					},
					legend: {
						type: 'plain',
						orient: 'vertical',
						right: 0,
						top: '10%',
						align: 'auto',
						data: [
						],
						textStyle: {
							color: 'white',
							fontSize: 16,
							padding: [10, 1, 10, 0]
						},
						selectedMode: false
					},
					series: [
						{
							// 顺时针线条
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
										startAngle: ((0 + angle) * Math.PI) / 180,
										endAngle: ((90 + angle) * Math.PI) / 180
									},
									style: {
										stroke: '#0CD3DB',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							// 顺时针线条
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
										startAngle: ((180 + angle) * Math.PI) / 180,
										endAngle: ((270 + angle) * Math.PI) / 180
									},
									style: {
										stroke: '#0CD3DB',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							// 逆时针线条
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
										startAngle: ((270 + -angle) * Math.PI) / 180,
										endAngle: ((40 + -angle) * Math.PI) / 180
									},
									style: {
										stroke: '#0CD3DB',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							// 逆时针线条
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								return {
									type: 'arc',
									shape: {
										cx: api.getWidth() / 2,
										cy: api.getHeight() / 2,
										r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
										startAngle: ((90 + -angle) * Math.PI) / 180,
										endAngle: ((220 + -angle) * Math.PI) / 180
									},
									style: {
										stroke: '#0CD3DB',
										fill: 'transparent',
										lineWidth: 1.5
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							// 逆时针线条 圆点
							name: 'ring5',
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								let x0 = api.getWidth() / 2;
								let y0 = api.getHeight() / 2;
								let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
								let point = getCirlPoint(x0, y0, r, 90 + -angle);
								return {
									type: 'circle',
									shape: {
										cx: point.x,
										cy: point.y,
										r: 4
									},
									style: {
										stroke: '#0CD3DB', // 粉
										fill: '#0CD3DB'
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							// 逆时针线条 圆点
							name: 'ring5', // 绿点
							type: 'custom',
							coordinateSystem: 'none',
							renderItem: function (params, api) {
								let x0 = api.getWidth() / 2;
								let y0 = api.getHeight() / 2;
								let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
								let point = getCirlPoint(x0, y0, r, 270 + -angle);
								return {
									type: 'circle',
									shape: {
										cx: point.x,
										cy: point.y,
										r: 4
									},
									style: {
										stroke: '#0CD3DB', // 绿
										fill: '#0CD3DB'
									},
									silent: true
								};
							},
							data: [0]
						},
						{
							// 饼图 进度
							name: '',
							type: 'pie',
							radius: ['54%', '42%'],
							silent: true,
							clockwise: true,
							startAngle: 90,
							z: 0,
							zlevel: 0,
							label: {
								normal: {
									position: 'center'
								}
							},
							data: [
								{
									value: value,
									name: '',
									itemStyle: {
										normal: {
											color: {
												// 完成的圆环的颜色
												colorStops: [
													{
														offset: 0,
														color: '#4FADFD' // 0% 处的颜色
													},
													{
														offset: 1,
														color: '#28E8FA' // 100% 处的颜色
													}
												]
											}
										}
									}
								},
								{
									value: 100 - value,
									name: '',
									label: {
										normal: {
											show: false
										}
									},
									itemStyle: {
										normal: {
											color: '#173164'
										}
									}
								}
							]
						},

						{
							// 分割槽
							name: '',
							type: 'gauge',
							radius: '54%',
							center: ['50%', '50%'],
							startAngle: 0,
							endAngle: 359.9,
							splitNumber: 36,
							hoverAnimation: true,
							axisTick: {
								show: false
							},
							splitLine: {
								length: 60,
								lineStyle: {
									width: 5,
									color: '#061740'
								}
							},
							axisLabel: {
								show: false
							},
							pointer: {
								show: false
							},
							axisLine: {
								lineStyle: {
									opacity: 0
								}
							},
							detail: {
								show: false
							},
							data: [
								{
									value: 0,
									name: ''
								}
							]
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
