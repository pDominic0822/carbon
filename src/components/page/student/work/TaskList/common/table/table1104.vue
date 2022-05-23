<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="2">数据披露单</td>
			</tr>
			<tr>
				<td class="redSty" colspan="">项目</td>
				<td class="redSty" >数值</td>
			</tr>
			<tr v-for="(item, index) in fromInfo" :key="index">
				<td>
					{{item.fieldName}}
				</td>
				<td :class="{'inputClass' : item.countValueReadonly}">
					<template v-if="item.countValueReadonly">
						<el-input-number :readonly="!item.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="item.countValue" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.countValue}}
					</template>
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
		'fromInfo'
	],
	watch: {
	},
	created () {
		console.log(this.fromInfo);
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
