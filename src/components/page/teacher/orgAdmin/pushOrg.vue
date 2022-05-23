<template>
	<div class="handel-market">
		<div class="User-info-Banner">
			<div class="info-title">
				<p>
					团队推送
				</p>
				<p>
					老师推送团队，学生自由选择团队，进行课程的学习
				</p>
			</div>
		</div>
		<div class="push-org container map-box clearfix center">
			<Push></Push>
		</div>
	</div>
</template>

<script>
import Push from './push.vue';
export default {
	name: 'stu-tooltip',
	components: {
		Push
	},
	data () {
		return {
			textarea: '',
			data_content: '',
			orgArr: [],
			checkList: [],
			checkedCities: '',
			booleans: false,
			value: '',
			value2: '',
			value3: ''
		};
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.User-info-Banner{
	// width: 1366px;
	margin: 0 auto;
	background: url('../img/banner.png') no-repeat;
	background-size: cover;
	height: 364px;
	padding-top: 50px;
	.info-title{
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		&>p:nth-of-type(1){
			font-family: PingFangSC-Medium;
			font-size: 30px;
			color: #FFFFFF;
			letter-spacing: 2.25px;
			padding-top: 30px;
		}
		&>p:nth-of-type(2){
			font-family: PingFangSC-Regular;
			width: 960px;
			font-size: 18px;
			color: #FFFFFF;
			line-height: 33px;
			padding-top: 28px;
		}
	}
}
.map-box{
	width: 1200px;
	min-height: 816px;
	background: #FFFFFF;
	border-radius: 8px;
	border: 6px solid #EBEFFC;
	margin: 0 auto;
	margin-top: -75px;
	padding: 20px;
	position: relative;
	top: -70px;
	padding-top: 20px;
	// li{
	// 	float: left;
	// 	width: 265px;
	// 	border: 1px solid #dddd;
	// 	margin: 10px;
	// 	padding-bottom: 20px;
	// }
}
.org-list{
	li{
		width: 180px;
		height: 250px;
		border: 1px solid #DDD;
	}
}
.greenBorder{
	border: 1px solid #508FF1 !important;
	background: #F6FAFF !important;
	.top{
		background: #508FF1 !important;
	}
	.pingjia{
		background: #508FF1 !important;
	}
	.selest-tips{
		background: url('../img/Rectangle3.png') no-repeat !important;
	}
}

</style>
