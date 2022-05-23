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
				<td>决策提示</td>
			</tr>
			<tr>
				<td>采购单价( 包 )</td>
				<td colspan="2">
					{{fromInfo.unitMaterialValue}}
				</td>
			</tr>
			<tr>
				<td>采购数量( 个 )</td>
				<td colspan="2" :class="{'inputClass' : showInputMap.countMaterial}">
					<el-input-number :readonly="!showInputMap.countMaterial" controls-position="right" @blur="changeB()" size="mini" :controls="false"
					v-model="fromInfo.countMaterial"  :step="1"></el-input-number>
				</td>
			</tr>
			<tr>
				<td>采购金额( 元 )</td>
				<td colspan="2">
					{{fromInfo.materialValue}}
				</td>
			</tr>
			<tr>
				<td>现金余额</td>
				<td colspan="2">
					{{fromInfo.ownCashAmount}}
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
		};
	},
	props: [
		'showInputMap',
		'fromInfo'
	],
	watch: {
	},
	created () {
		// this.init();
	},
	methods: {
		changeB () {
			this.fromInfo.materialValue = this.fromInfo.unitMaterialValue * this.fromInfo.countMaterial;
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
