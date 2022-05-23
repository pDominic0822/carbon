<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
					<table class="demo-table mt20">
			<tr class="noborder">
				<td class="blueSty">项目</td>
				<td class="blueSty">数值</td>
			</tr>
			<tr>
				<td>年末碳配额库存（Kg）</td>
				<td>
					<input type="text" v-model="form.value1" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末碳汇库存（Kg）</td>
				<td>
					<input type="text" v-model="form.value2" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末库存物料排放（Kg）</td>
				<td>
					<input type="text" v-model="form.value3" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末库存煤电排放（Kg）</td>
				<td>
					<input type="text" v-model="form.value4" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末库存绿电排放（Kg）</td>
				<td>
					<input type="text" v-model="form.value5" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末库存碳中和（Kg）</td>
				<td>
					<input type="text" v-model="form.value6" class="inputA">
				</td>
			</tr>
		</table>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			form: {
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: ''
			}
		};
	},
	watch: {
	},
	created () {
	},
	methods: {
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
