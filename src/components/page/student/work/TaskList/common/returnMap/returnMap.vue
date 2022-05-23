<template>
	<div class="">
		<table class='demo-table'>
            <tr v-for="(item, index) in returnDataMap" :key="index">
				<td>
					{{item.fieldCode | fieldCode(tableType ,'fieldName')}}
                </td>
				<td v-for="(key, val) in item.answerValueMap" :key="key + val">
					{{val | fieldCode(tableType ,'rowName', item.fieldCode )}}
					:
					{{key}}
				</td>
            </tr>
        </table>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	components: {
	},
	name: 'login',
	data () {
		return {
			dialogVisible: true
		};
	},
	computed: {
		...mapState({
			returnDataMap: (state) => { // 映射 count3 为 store.state.conut3的值
				return state.returnDataMap;
			},
			tableType: (state) => { // 映射 count3 为 store.state.conut3的值
				return state.tableType;
			}
		})
	},
	created () {
		console.log(this.returnDataMap);
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
</style>
