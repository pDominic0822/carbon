<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="3">库存碳配额</td>
			</tr>
			<tr class="noborder">
				<td class="redSty">项目</td>
				<td class="redSty">数值（kg）</td>
				<td class="redSty">价值（元）</td>
			</tr>
			<tr v-for="(item, index) in fromInfo" :key="index">
				<td>
					{{item.fieldName}}
				</td>
				<td :class="{'inputClass' : item.countValueReadonly}">
					<template v-if="item.countValueReadonly">
						<el-input-number :readonly="!item.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="item.countValue" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.countValue}}
					</template>
				</td>
				<td  :class="{'inputClass' : item.worthValueReadonly}">
					<template v-if="item.worthValueReadonly">
						<el-input-number :readonly="!item.worthValueReadonly" controls-position="right" size="mini" :controls="false" v-model="item.worthValue" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.worthValue}}
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
	},
	methods: {
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 550px;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
