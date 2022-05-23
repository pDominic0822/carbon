<template>
	<div class="conmentBox">
		<ul class="step-list1 clearfix">
			<el-tooltip :content="item.reardyName || item.textTitle" placement="top" :class="index > 5 ? 'mt80' : ''"
				v-for="(item, index) in readyArr" :key="index"
				@click.native="tooltip(index)">
					<li class="fl" :class="{active: stepIndex === index}">
						<div>
							{{index + 1}}
							<img v-if="(index + 1) % 6 !== 0 && (index + 1) !== readyArr.length" class="silde1" src="./img/stepTline1.png" alt="">
						</div>
						<p class="ellipsis">{{item.reardyName}}</p>
						<img v-if="(index + 1) % 6 === 0 && (index + 1) != readyArr.length" :class="'silde' + index" src="./img/stepTline1.png" alt="">
					</li>
			</el-tooltip>
		</ul>
		<!-- is -->
		<components :teacherCode="'teacher'" :is="reardyLabel"></components>
	</div>
</template>

<script>
import deferData from '@@/teacher/deferData/deferData';
import deferOrder from '@@/teacher/deferData/deferOrder';
import chapterYear from './chapterYear/chapterYear';
import managementAnalysis from './managementAnalysis/managementAnalysis';
export default {
	components: {
		deferData,
		deferOrder,
		chapterYear,
		managementAnalysis
	},
	name: 'login',
	data () {
		return {
			stepIndex: 0,
			reardyLabel: 'deferData',
			readyArr: [
				{
					reardyName: '参数设置',
					reardyLabel: 'deferData'
				},
				{
					reardyName: '订单预制',
					reardyLabel: 'deferOrder'
				},
				{
					reardyName: '经营模拟',
					reardyLabel: 'chapterYear'
				},
				{
					reardyName: '经营总结',
					reardyLabel: 'managementAnalysis'
				},
				{
					reardyName: '学习总结',
					reardyLabel: ''
				}
			]
		};
	},
	props: [
	],
	created () {
	},
	methods: {
		tooltip (index) {
			this.stepIndex = index;
			let item = this.readyArr[index];
			this.reardyLabel = item.reardyLabel;
		}

	}
};
</script>

<style lang="scss" scoped>
.step-list1 {
	max-width: 1000px !important;
	width: max-content;
	margin: 20px auto;
	position: relative;
	.mt80 {
		margin-top: 80px;
	}
	.active {
		& > div {
			background: url('./img/box2.png') no-repeat center ;
			background-size: cover;
		}
	}
	li {
		cursor: pointer;
		& > .silde5, & > .silde11 {
			position: absolute;
			width: 840px;
			left: 80px;
		}
		& > .silde5 {
			top: 92px;
		}
		& > .silde11 {
			top: 248px;
		}
		width: calc(997px / 5);
		& > div {
			margin: 0 auto;
			background: url('./img/box1.png') no-repeat center;
			background-size: cover;
			width: 47px;
			height: 52px;
			line-height: 52px;
			text-align: center;
			color: #FFF;
			position: relative;
			& > img {
				position: absolute;
			}
			& > .silde1 {
				width: 180px;
				top: 21px;
				left: 57px;
				height: 8px;
			}
		}
		& > p {
			margin-top: 10px;
			text-align: center;
			padding: 0 5px;
		}
	}
}
</style>
