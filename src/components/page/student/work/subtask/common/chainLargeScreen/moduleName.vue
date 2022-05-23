<!--
* @Author: liujiatian
:style='{left:item.positions[0] + "px", top: item.positions[1] + "px"}'
* @Date: 2019-02-25 20:45:37
-->
<template>
	<div class='moduleDiv' v-if="IscheckedName">
		<p v-for='(map, key) in modeleList' :key='key' :class='map.OrgType'
		:style='{left: (map.value[0] - 15)+ "px", top: (1000 - map.value[1] - 50) + "px"}'
		>
			{{map.Depart}}
			<!-- <template>
				<el-tooltip effect="dark" placement="top-start">
					<div slot="content" style='max-width:300px;line-height:24px;'>
						{{map.Depart}}
					</div>
					<b>{{map.Depart}}</b>
				</el-tooltip>
			</template> -->
			<!-- <el-tooltip class="item" effect="dark" :content="map.Depart" placement="bottom-end">
				{{map.Depart}}
			</el-tooltip> -->
		</p>
	</div>
</template>

<script>
import { allPoint } from './json/json';
export default {
	name: 'login',
	props: ['IscheckedName'],
	data () {
		return {
			modeleList: {}
		};
	},
	inject: ['reload'],
	watch: {
	},
	components: {
	},
	created () {
		this.modeleList = allPoint;
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	.moduleDiv{
		position: absolute;
		top: 0;
		left: 0;
		width: 2000px;
		height: 1000px;
		p{
			min-width: 80px;
			padding: 0 13px;
			line-height: 30px;
			height: 32px;
			text-align: center;
			background: #191D2A;
			color: rgba(255,255,255, 0.9);
			position: absolute;
			font-size: 12px;
			border: 1px solid #34A7FF;
			border-radius: 4px;
			letter-spacing: 1px;
		}
		p:after{
			content: "";
			position: absolute;
			left: 15px;
			top: 30px;
			width: 0;
			height: 0;
			border: 4px solid transparent;
			border-top: 4px solid #191D2A;
		}
		p:before{
			content: "";
			position: absolute;
			left: 13px;
			top: 30px;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-top: 6px solid #34A7FF;
		}
		.Org01{
			border-color: #34A7FF;
		}
		.Org01:before{
			border-top: 6px solid #34A7FF;
		}
		.Org02{
			border-color: #11FFE2;
		}
		.Org02:before{
			border-top: 6px solid #11FFE2;
		}
		.Org03{
			border-color: #A377FF;
		}
		.Org03:before{
			border-top: 6px solid #A377FF;
		}
		.Org04{
			border-color: #FFB11B;
		}
		.Org04:before{
			border-top: 6px solid #FFB11B;
		}
		.Org05{
			border-color: #FF5D2C;
		}
		.Org05:before{
			border-top: 6px solid #FF5D2C;
		}
		.module06{
			border-color: #C43CFF;
		}
		.module06:before{
			border-top: 6px solid #C43CFF;
		}
		.module07{
			border-color: #0ADBE1;
		}
		.module07:before{
			border-top: 6px solid #0ADBE1;
		}
	}
</style>
