<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<div class="certificate">
			<div class="title">
				<span>编号 :</span>
				<span></span>
				<span>日期 :</span>
				<span></span>
			</div>
			<div class="icon"></div>
			<div class="conInfo">
				<p class="htitle">绿色电力购买证明</p>
				<p class="txtInfo">
					GREEN POWER PURCHASE CERTIFICATE
				</p>
			</div>
			<div class="prove">兹此证明</div>
			<div class="buyBox">
				<span>
					通过全国绿电证书自愿认购平台，购买(
				</span>
				<input v-model="fromInfo.certificateCount" type="number">
				<span>
					) 千瓦绿电，相当于减排(
				</span>
				<span>
					{{fromInfo.certificateCount * 1000}}
				</span>
				<span>
					) kg 。感谢贵公司对于中国绿电发展所做出的贡献。
				</span>
			</div>
			<div class="leaves"></div>
			<div class="institutions">国家可再生能源信息管理中心</div>
		</div>
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
input{
	border: none;
	background: no-repeat;
	outline: none;
	width: 116px;
	text-align: center;
}
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
	.certificate{
		width: 900px;
		height: 1146px;
		margin: 0 auto;
		color: #222222;
		position: relative;
		padding-top: 147px;
		background: url('./img/certificate.png');
		background-size: 100% 100%;
		.title{
			position: absolute;
			width: 300px;
			height: 80px;
			right: 50px;
		}
		.icon{
			width: 157px;
			height: 157px;
			position: absolute;
			background: url('./img/icon.png');
			background-size: cover;
			top: 240px;
			left: 378px;
		}
		.conInfo{
			position: absolute;
			top: 429px;
			left: 235px;
			.htitle{
				font-size: 56px;
				font-family: FZQKBYSJW--GB1-0, FZQKBYSJW--GB1;
				font-weight: normal;
			}
			.txtInfo{
				font-size: 23px;
				font-family: SinhalaMN;
				line-height: 30px;
			}
		}
		.prove{
			position: absolute;
			font-size: 23px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			top: 551px;
			left: 411px;
		}
		.buyBox{
			position: absolute;
			width: 659px;
			text-indent: 30px;
			top: 630px;
			left: 126px;
			font-size: 20px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			line-height: 30px;
		}
		.leaves{
			position: absolute;
			width: 110px;
			height: 74px;
			background: url('./img/leaves.png') no-repeat;
			bottom: 249px;
			right: 183px;
		}
		.institutions{
			font-size: 20px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			position: absolute;
			bottom: 198px;
			right: 123px;
		}
	}
}
</style>
