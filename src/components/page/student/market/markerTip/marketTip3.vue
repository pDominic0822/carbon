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
				<td>申请金额 ( 元 )</td>
				<td>金额大写 ( 元 )</td>
				<td>利率</td>
				<td>年限 ( 年 )</td>
			</tr>
			<tr v-for="(item, index) in tdList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.applyAmount | formatNumber}}
				</td>
				<td>
					{{item.applyAmount | convertPrice}}
				</td>
				<td>
					{{item.loansRate}}
				</td>
				<td>
					{{item.loansYears}}
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
			tdList: [],
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
				url: '/stDecisionLoansRecord/findGreenLoansMarket',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.tdList = res.data;
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
