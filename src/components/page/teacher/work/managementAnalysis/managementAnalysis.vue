<template>
	<div>
		<div class="headManagement clearfix mt40">
			<div class="onceManagement" v-for="(item, index) in ManagementArr" :key="index"
			:class="{'active':activeIndex === index}"
			@click="_ClickcollseSty(index)">
				{{item.ManagementsName}}
			</div>
		</div>
		<div class="mt30">
			<components  :clazzYearsPushId ="clazzYearsPushId " :is="ManagementCode"></components>
		</div>
	</div>
</template>

<script>

import ManagementsF5 from './ManagementsF5/ManagementsF5.vue';
export default {
	components: {
		ManagementsF5
	},
	name: 'login',
	data () {
		return {
			activeIndex: 0,
			ManagementCode: '',
			moldYearList: [],
			moldYearMap: {},
			MoldYearIndex: 0,
			clazzYearsPushId: '',
			ManagementArr: [
				{
					ManagementsName: '数据纰漏',
					code: 'ManagementsF1'
				},
				{
					ManagementsName: '年末损益数据',
					code: 'ManagementsF2'
				},
				{
					ManagementsName: '年末权益数据',
					code: 'ManagementsF3'
				},
				{
					ManagementsName: '企业权益排名',
					code: 'ManagementsF4'
				},
				{
					ManagementsName: '经营分析',
					code: 'ManagementsF5'
				}
			]
		};
	},
	created () {
		this.getMoldYear();
	},
	methods: {
		_ClickcollseSty (index) {
			this.activeIndex = index;
			let item = this.ManagementArr[index];
			this.ManagementCode = item.code;
		},
		getMoldYear () {
			this.moldYearList = [];
			this.MoldYearIndex = '';
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then((res) => {
				if (res.success) {
					this.moldYearList = res.data;
					console.log(this.moldYearList);
					// 默认加载第一个年
					this.MoldYearIndex = 0;
					this.moldYearMap = this.moldYearList[this.MoldYearIndex];
					console.log(this.moldYearMap);
					this.clazzYearsPushId = this.moldYearMap.clazzYearsPushId;
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.headManagement{
		margin: 0 auto;
		margin-top: 50px;
		width: 960px;
		// height: 44px;
		background: #ECEFF6;
		.onceManagement{
			float: left;
			width: 120px;
			height: 46px;
			border-radius: 2px 2px 0px 0px;
			color: #32518C;
			line-height: 46px;
			text-align: center;
			cursor: pointer;
			&.active {
				color: #FFFFFF;
				background: linear-gradient(316deg, #6D77F0 0%, #3B72DC 100%);
			}
		}
		.orderpart{
			width: 310px;
			height: 136px;
			margin-right: 15px;
			margin-bottom: 16px;
			background: #FFFFFF;
			border-radius: 4px;
			border: 1px solid #AAB0D9;
			&:nth-child(3n+3){
				margin-right: 0px;
			}
		}
	}
</style>
