<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<div class="about">
			<el-select v-model="clazzYearsPushId"  placeholder="请选择年份" @change="getData()">
				<el-option
				v-for="item in moldYearList"
				:key="item.personIndex"
				:label="item.yearsTime"
				:value="item.clazzYearsPushId"
				>
				</el-option>
			</el-select>
		</div>
		<table class="demo-table">
			<tr>
				<td>小组名称</td>
				<td>绿电数量（度）</td>
				<td>绿电采购金额（元）</td>
				<td>煤电数量（度）</td>
				<td>煤电采购金额（元）</td>
				<td>电力采购合计（元）</td>

			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trItem.orgName}}
				</td>
				<td>
					{{trItem.greenElectricityCount}}
				</td>
				<td>
					{{trItem.greenElectricityCost}}
				</td>
				<td>
					{{trItem.coalElectricityCount}}
				</td>
				<td>
					{{trItem.coalElectricityCost}}
				</td>
				<td>
					{{trItem.purchaseElectricityCost}}
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
			trList: [
			],
			moldYearList: [],
			clazzYearsPushId: '',
			isOpen: ''
		};
	},
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
				url: '/stOrgElectricityPurchaseRecord/findClazzElectricityMarketInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.trList = res.data;
					}
				} else {
					// this.$message({
					// 	type: 'error',
					// 	message: '任务未开启'
					// });
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
}
</style>
