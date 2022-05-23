<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<div class="about">
			<el-select v-model="clazzYearsPushId" selected placeholder="请选择年份" @change="getData()">
				<el-option
				v-for="item in moldYearList"
				:key="item.personIndex"
				:label="item.yearsTime"
				:value="item.clazzYearsPushId"
				>
				<span>{{item.yearsTime}}年</span>
				<i :class="item.isOpen === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
				</el-option>
			</el-select>
		</div>
		<table class="demo-table">
			<tr>
				<td colspan="">排名（碳权合计）</td>
				<td>小组名称</td>
				<td>价格(元/Kg)</td>
				<td>一轮采购数量</td>
				<td>二轮采购数量</td>
				<td>采购小计</td>
				<td>期初碳汇库存</td>
				<td>期初碳配额库存</td>
				<td>碳权合计</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
					{{trItem.orgName}}
				</td>
				<td>
					{{trItem.unitSinkValue}}
				</td>
				<td>
					{{trItem.firstBuy}}
				</td>
				<td>
					{{trItem.secondBuy}}
				</td>
				<td>
					{{trItem.firstBuy + trItem.secondBuy}}
				</td>
				<td>
					{{trItem.beginSinkStock}}
				</td>
				<td>
					{{trItem.beginQuotaStock}}
				</td>
				<td>
					{{trItem.carbonRightsTotal}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			trList: [],
			moldYearList: [],
			clazzYearsPushId: ''
		};
	},
	props: [
	],
	watch: {
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.moldYearList = res.data;
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		getData () {
			this.$ajax({
				method: 'post',
				url: '/stOrgCarbonSinkRecord/findClazzCarbonRightsRankingInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.trList = res.data;
					}
				}
			});
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	padding: 0 15px;
	margin: 0 auto;
	.about{
		margin-bottom: 25px;
	}
}
</style>
