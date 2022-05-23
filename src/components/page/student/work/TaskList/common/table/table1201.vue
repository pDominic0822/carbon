<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>交流区</td>
				<td>决策提示</td>
			</tr>
			<tr>
				<td>卖出方</td>
				<td>卖出数量( kg )</td>
				<td>单价( 元 )</td>
				<td>指定人( 选填 )</td>
				<td>操作</td>
				<td>买入方</td>
				<td>交易状态</td>
			</tr>
			<tr>
				<td>2组</td>
				<td>50</td>
				<td>100</td>
				<td>1组</td>
				<td>买入</td>
				<td></td>
				<td>未交易</td>
			</tr>
			<tr>
				<td>2组</td>
				<td>50</td>
				<td>100</td>
				<td>1组</td>
				<td>买入</td>
				<td>已售出</td>
				<td>已交易</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>库存碳配额</td>
				<td>指定人( 选填 )</td>
				<td>卖出数量( kg )</td>
				<td>单价( 元 )</td>
				<td>操作</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>
					{{fromInfo.carbonQuotaAmount}}
				</td>
				<td >
					<el-select v-model="fromInfo.aaa" placeholder="请选择">
						<el-option
						v-for="(item, index) in fromInfo.orgList"
						:key="index"
						:label="item.orgName"
						:value="item.orgId">
						</el-option>
					</el-select>
				</td>
				<td :class="{'inputClass' : showInputMap.value2}">
					<input type="text" :readonly="!showInputMap.value2" v-model="fromInfo.value2" class="inputA">
				</td>
				<td  :class="{'inputClass' : showInputMap.value3 }">
					<input type="num" :readonly="!showInputMap.value3" v-model="fromInfo.value3">
				</td>
				<td>出售</td>
				<td></td>
				<td></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
		};
	},
	props: [
		'showInputMap',
		'fromInfo'
	],
	watch: {
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			console.log('fromInfo.orgList', this.fromInfo.orgList);
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
