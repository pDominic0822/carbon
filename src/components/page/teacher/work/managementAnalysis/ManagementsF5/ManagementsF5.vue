<template>
	<div class="datass">
		<div class="moldelist fl">
			<ul>
				<li class="handCollse"
					v-for="(item, AnalsisListIndex) in AnalsisArr"
					:key="AnalsisListIndex"
					:class="{ active: AnalsisListIndex === AnalsisListActiveIndex }"
					@click="getMoldSubAnalsis(AnalsisListIndex)">
					<p>
						{{AnalsisListIndex + 1}}.
						{{ item.name }}
					</p>
					<div class="trianle"></div>
				</li>
			</ul>
		</div>
		<div class="sfsdfsd">
			<components :clazzYearsPushId ="clazzYearsPushId " :is="AnalsissCode"></components>
		</div>
	</div>
</template>

<script>

import AnalsissF1 from './children/AnalsissF1.vue';
import AnalsissF2 from './children/AnalsissF2.vue';
import AnalsissF3 from './children/AnalsissF3.vue';
import AnalsissF4 from './children/AnalsissF4.vue';
import AnalsissF5 from './children/AnalsissF5.vue';
import AnalsissF6 from './children/AnalsissF6.vue';
import AnalsissF7 from './children/AnalsissF7.vue';
import AnalsissF8 from './children/AnalsissF8.vue';
import AnalsissF9 from './children/AnalsissF9.vue';
import AnalsissF10 from './children/AnalsissF10.vue';
import AnalsissF11 from './children/AnalsissF11.vue';
import AnalsissF12 from './children/AnalsissF12.vue';
export default {
	components: {
		AnalsissF1,
		AnalsissF2,
		AnalsissF3,
		AnalsissF4,
		AnalsissF5,
		AnalsissF6,
		AnalsissF7,
		AnalsissF8,
		AnalsissF9,
		AnalsissF10,
		AnalsissF11,
		AnalsissF12
	},
	name: 'login',
	data () {
		return {
			AnalsissCode: '',
			AnalsisListActiveIndex: 0,
			AnalsisArr: [
				{
					name: '碳配额分析',
					code: 'AnalsissF1'
				},
				{
					name: '碳标签分析',
					code: 'AnalsissF2'
				},
				{
					name: '碳成本分析',
					code: 'AnalsissF3'
				},
				{
					name: '现金分析',
					code: 'AnalsissF4'
				},
				{
					name: '绿贷现金分析',
					code: 'AnalsissF5'
				},
				{
					name: '技改投入减排分析',
					code: 'AnalsissF6'
				},
				{
					name: '收入分析',
					code: 'AnalsissF7'
				},
				{
					name: '库存碳资产',
					code: 'AnalsissF8'
				},
				{
					name: '料电库存',
					code: 'AnalsissF9'
				},
				{
					name: '生产线参数',
					code: 'AnalsissF10'
				},
				{
					name: '经营权分析',
					code: 'AnalsissF11'
				},
				{
					name: '经营财务分析',
					code: 'AnalsissF12'
				}
			]
		};
	},
	props: [
		'taskCode', 'moldId', 'subtaskId', 'clazzYearsPushId'
	],
	created () {
	},
	methods: {
		getMoldSubAnalsis (index) {
			this.AnalsisListActiveIndex = index;
			let item = this.AnalsisArr[index];
			this.AnalsissCode = item.code;
		}
	}
};
</script>

<style lang="scss" scoped>
.datass{
	margin: 0 auto;
    margin-top: 20px;
    width: 960px;
}
.sfsdfsd{
	width: calc(100% - 180px);
	float: right;
}
.moldelist {
	width: 180px;
	background: #f7faff;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
	ul {
		height: 680px;
		overflow: auto;
		li {
			float: left;
			margin-top: 5px;
			margin-left: 15px;
			width: 145px;
			height: 42px;
			//   background: linear-gradient(315deg, #21aaf3 0%, #1576e4 100%);
			position: relative;
			border-radius: 3px;
			p {
				text-align: left;
				margin-left: 15px;
				line-height: 42px;
				height: 42px;
				color: #000;
			}
			.trianle {
				position: absolute;
				right: -6px;
				top: 14px;
				width: 0;
				height: 0;
				border-top: 6px solid transparent;
				border-left: 8px solid #ffffff;
				border-bottom: 6px solid transparent;
			}
			&.active {
				background: linear-gradient(315deg, #21aaf3 0%, #1576e4 100%);
				.trianle {
					border-left: 8px solid #21aaf3;
				}
				p {
					color: #ffffff;
				}
			}
		}
	}
}
</style>
