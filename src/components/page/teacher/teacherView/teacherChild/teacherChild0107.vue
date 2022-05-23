<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td>项目</td>
				<td>物料单价 ( 元 / 包 )</td>
				<td>物料碳排放 ( Kg / 包 )</td>
				<td>采购数量 ( 包 )</td>
				<td>采购金额 ( 元 )</td>
				<td>采购碳排放 ( Kg )</td>
			</tr>
			<tr v-for="(item, index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.unitMaterialValue}}
				</td>
				<td>
					{{item.unitMaterialEmission}}
				</td>
				<td>
					{{item.countMaterial}}
				</td>
				<td>
					{{item.materialValue}}
				</td>
				<td>
					{{item.materialEmission}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>

export default {
	components: {

	},
	name: 'login',
	data () {
		return {
			trList: []
		};
	},
	props: ['moldId', 'clazzYearsPushId'],
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgMaterialRecord/findTeacherClazzYearsMaterialRecordInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
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
	}
};
</script>

<style lang="scss" scoped>
// .childBox{
// 	padding: 94px 15px;
// }
</style>
