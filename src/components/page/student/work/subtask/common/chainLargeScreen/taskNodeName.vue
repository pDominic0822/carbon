<!--
* @Author: liujiatian
* @Date: 2019-02-25 20:45:37
-->
<template>
	<div class='inforCon' v-if="IsTaskName">
		<template  v-for='(value, key) in taskFromPoint'>
			<div :key='key' class='inforModel'
			:style="{'left': (value.pointValue[0] - 70) + 'px', 'bottom':  (value.pointValue[1] - 30)+ 'px', 'z-index': value.zindex || 0}">
				<ul class='inforUl'>
					<template>
						<template  v-for='(itemSon, index) in value.taskList'>
							<li :key='index'  :class='["bgImg" + (index + 1), "color_"+ itemSon.color.split("#")[1]]'>
								<template>
									<el-tooltip effect="dark" placement="top-start">
										<div slot="content" style='max-width:300px;line-height:24px;'>
											{{itemSon.taskName}}
										</div>
										<b>{{itemSon.taskName}}</b>
									</el-tooltip>
								</template>
							</li>
						</template>
					</template>
				</ul>
				<div class='inforSwiper'>
					<!-- 有值的时候，点 -->
					<div class='activeSpot'>
						<b v-for='(item, i) in 5' :key='i'></b>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'login',
	props: ['taskFromPoint', 'IsTaskName'],
	components: {
	},
	data () {
		return {
		};
	},
	inject: ['reload'],
	filters: {
	},
	watch: {
		inforData: {
			handler () {
				if (this.inforData) {
				}
			},
			deep: true,
			immediate: true
		}
	},
	created () {
	},
	methods: {

	},
	// 页面销毁清除定时器
	beforeDestroy () {
	}
};
</script>

<style lang="scss" scoped>
.inforCon{
	position: absolute;
	top: 0;
	left: 0;
	width: 1941px;
	height: 932px;
	.inforModel{
		position: absolute;
		left: 100px;
		bottom: 720px;
		.inforKeyUl{
			width: 117.2px;
		}
	}
	.inforUl{
		width: 129px;
		li{
			height: 38px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			padding: 14px 5px 0 35px;
			width: 129px;
			color: #ffffff;
			font-size: 12px;
			cursor: pointer;
			&:hover{
				z-index: 400;
			}
			span{
				margin-left: 4px;
			}
			b{
				font-weight: normal;
			}
		}
		.bgImgKey{
			background: url('./img/key.png') no-repeat center center;
			background-size: 100% 100%;
		}
		.noBgImgKey{
			background: url('./img/nokey.png') no-repeat center center;
			background-size: 100% 100%;
		}
		.color_04FDFF{
			background: url('./img/icon02.png') no-repeat center center;
			background-size: 100% 100%;
		}
		.color_0FC5FF{
			background: url('./img/icon01.png') no-repeat center center;
			background-size: 100% 100%;
		}
		.color_FF3CFD{
			background: url('./img/icon04.png') no-repeat center center;
			background-size: 100% 100%;
		}
		.color_07FF7D{
			background: url('./img/icon03.png') no-repeat center center;
			background-size: 100% 100%;
		}
		.color_FF5D2C{
			background: url('./img/icon06.png') no-repeat center center;
			background-size: 100% 100%;
		}
		// @for $i from 1 through 100 {
		// 	.bgImg#{$i}{
		// 		background: url('./img/icon0#{$i % 6}.png') no-repeat center center;
		// 		background-size: 100% 100%;
		// 	}
		// }
		// @for $i from 1 through 100 {
		// 	.noBgImg#{$i}{
		// 		background: url('./img/noIcon0#{$i % 6}.png') no-repeat center center;
		// 		background-size: 100% 100%;
		// 	}
		// }
	}
	.inforSwiper{
		margin: 5px 0 0 62.5px;
		b, span{
			width: 4px;
			height: 4px;
			border-radius: 50%;
			margin-top: 4px;
			display: block;
			opacity: 0.3;
		}
		b:first-child, span:first-child {
			margin-top: 0;
		}
		.activeSpot{
			position: relative;
			overflow: hidden;
			b{
				background: #07FF7D;
			}
			p{
				position: absolute;
				bottom: 0;
				left: 0;
				span{
					background: #07FF7D;
					opacity: 1;
				}
				span:nth-child(2) {
					opacity: 0.7;
				}
				span:nth-child(3) {
					opacity: 0.5;
				}
			}
		}
		.color_FFAC07{
			b, p span{
				background: #FFAC07;
			}
		}
		.color_04FDFF{
			b, p span{
				background: #04FDFF;
			}
		}
		.color_00C1FF{
			b, p span{
				background: #00C1FF;
			}
		}
		.color_0ADBE1{
			b, p span{
				background: #00C1FF;
			}
		}
		.color_FF4005{
			b, p span{
				background: #FF4005;
			}
		}
		.color_C43CFF{
			b, p span{
				background: #C43CFF;
			}
		}
		.color_07FF7D{
			b, p span{
				background: #07FF7D;
			}
		}
		.graySpot{
			b{
				background: #ffffff;
			}
		}
	}
}
// 自定义弹框头部
.dominanceDialog{
	/deep/ .el-dialog__header{
		display: none !important;
	}
	/deep/ .el-dialog__body{
		padding: 0 !important;
		background: #081C32 !important;
		color: #ffffff !important;
		font-size: 13px;
		border: 1px solid #3CCADF;
		border-radius: 2px;
		min-height: 200px;
	}
	.dominanceHead{
		position: relative;
		text-align: center;
		.headImg01{
			height: 11px;
			position: relative;
			top: -2px;
		}
		.headImg02{
			position: absolute;
			top: 2px;
			right: 2px;
			height: 40px;
			cursor: pointer;
		}
		div{
			margin-top: 15px;
			.headImg03{
				height: 12px;
			}
			.headImg04{
				height: 12px;
			}
			p{
				font-size: 16px;
				padding: 3px 0 4px;
				line-height: 22px;
			}
		}
	}
}
.dominanceDialog2{
	/deep/ .el-dialog__body{
		border: 0;
		position: relative;
	}
	.clodeImg{
		width: 16px;
		height: 16px;
		position: absolute;
		top: 0;
		right:-27px;
		cursor: pointer;
	}
	.decpUl{
		li{
			overflow: hidden;
			text-align: center;
			img{
				height: 8px;
				cursor: pointer;
				margin-left: 5px;;
			}
			div{
				float: left;
				width: 50%;
			}
			.divOne{
				width: 100%;
				padding:  0 19px;
				height: 80px;
				line-height: 80px;
				text-align: center;
			}
			.divTwo{
				height: 160px;
				line-height: 21px;
				padding:  59px 19px 0;
			}
			.divThree{
				width: 50%;
				height: 72px;
				line-height: 72px;
				padding:  0 19px;
			}
			.divFour{
				width: 100%;
				height: 72px;
				line-height: 72px;
				padding:  0 19px;
			}
			.ident1{
				height: 288px;
				line-height: 288px;
			}
			.ident2{
				height: 360px;
				line-height: 360px;
			}
			.encryption{
				height: 144px;
				line-height: 22px;
				padding-top: 50px;
			}
			.textLeftDiv{
				text-align: left;
			}
		}
	}
	.levenDiv{
		overflow: hidden;
		p{
			line-height: 68px;
			height: 68px;
			float: left;
			width: 80px;
			text-align: center;
			cursor: pointer;
			img{
				height: 11px;
				position: relative;
				top: 1px;
				margin-right: 5px;
			}
		}
		p:nth-child(1) {
			background: #4A4E5C;
		}
		p:nth-child(2) {
			background: #545869;
		}
		p:nth-child(3) {
			background: #5E6375;
		}
		p:nth-child(4) {
			background: #686E82;
		}
	}
}
// 公私钥
.secretKeyUl{
	li{
		border-bottom: 1px dashed #dddddd;
		padding-top: 20px;
		>div{
			margin-bottom: 16px;
			.keyCopy{
				overflow: hidden;
				img{
					height: 12px;
					float: left;
					margin-top: 7px;
				}
				span{
					line-height: 26px;
					float: left;
					margin: 0 10px;
					font-size: 16px;
				}
				img:last-child{
					height: 18px;
					cursor: pointer;
					margin-top: 4px;
				}
			}
			.keyContent{
				line-height: 26px;
				margin-top: 13px;
				font-size: 14px;
			}
		}
	}
	li:first-child{
		padding-top: 0;
	}
	li:last-child{
		border: 0;
	}
}
// 标准弹框
.standardDiv{
	line-height: 26px;
    font-size: 14px;
	word-wrap:break-word;
	margin-top: 10px;
}
/deep/ .infoDataformUl{
	li{
		line-height: 24px;
		margin-bottom: 10px;
	}
	li:last-child{
		margin-bottom:0;
	}
}
// 流程
.processCon{
	padding: 30px 30px 30px;
	.proTitle{
		width: 160px;
		height: 47px;
		line-height: 47px;
		border-radius: 2px;
		font-size: 15px;
		text-align: center;
		margin-left: 202px;
		background: #081C32;
		border-radius: 2px;
		border: 1px solid #268897;
	}
	img{
		width: 100%;
	}
	.imgLine1{
		width: 456px;
		margin: 0 auto;
	}
	ul{
		height: 16px;
		font-size: 15px;
		margin-top: 5px;
		li{
			float: left;
			color: #ffffff;
			cursor: pointer;
		}
		.active{
			color: #3CCADF;
		}
		li:nth-child(1) {
			margin-left: -20px;
		}
		li:nth-child(2) {
			margin: 0 130px 0 84px;
		}
	}
	.bottomTr{
		width: 12px;
		margin-top: 8px;
	}
	.bottom1{
		margin-left: 71px;
	}
	.bottom2{
		margin-left: 299px;
	}
	.bottom3{
		margin-left: 487px;
	}
	.sginActiveDiv{
		text-align: right;
		img{
			width: 37px;
			margin-right: 75px;
		}
		p{
			font-size: 15px;
			color: #3CCADF;
			margin-right: 33px;
		}
	}
	.processInput{
		background: rgba(47, 142, 162, 0.12);
		border: 1px solid #268897;
		padding: 20px 22px;
		margin-top: 16px;
		font-size: 15px;
		p{
			margin-bottom: 12px;
		}
	}
	/deep/ .el-textarea__inner, /deep/ .el-input__inner{
		background: transparent;
		color: #ffffff;
		border-radius: 1px;
		border: 1px solid rgba(255, 255, 255, 0.32);
	}
}
// code14
.choiceCon{
	position: relative;
	.choiceDiv{
		width: 800px;
		margin: 0 auto;
		padding: 30px 0;
		text-align: center;
		border: 1px solid transparent;
		img{
			width: 600px;
		}
		/deep/ .el-select, /deep/ .el-input{
			width: 150px;
		}
		.select2{
			margin-left: 18px;
			/deep/ .el-select, /deep/ .el-input{
				width: 160px;
			}
		}
		.select3{
			margin-left: 46px;
		}
		.select4{
			margin-left: 40px;
		}
		.select5{
			margin-left: 46px;
		}
	}
	/deep/ .el-input__inner{
		background: #081C32;
		border-radius: 2px;
		border: 1px solid #268897;
		color: #ffffff;
		text-align: center;
	}
}
// code21
.currencyCon{
	overflow: hidden;
	width: 676px;
	position: relative;
	margin: 30px auto;
	>img{
		width: 100%;
	}
	.identInfor{
		position: absolute;
		top: 3px;
		left: 5px;
		width: 97px;
		height: 699px;
		border-radius: 9px;
		p{
			width: 100%;
			height: 50%;
			cursor: pointer;
		}
	}
	.currencyVer{
		position: absolute;
		top: 168px;
		right: 414px;
		overflow: hidden;
		div{
			height: 36px;
			font-size: 36px;
			color: #005374;
			letter-spacing: 1px;
			-webkit-text-stroke: 1px #005374;
			float: left;
			padding-top: 1px;
			margin-right: 16px;
		}
	}
	.signModel{
		position: absolute;
		right: 45px;
		bottom: 115px;
		width: 60px;
		height: 60px;
		img{
			width: 100%;
		}
	}
	.currencyControlBit{
		position: absolute;
		left: 160px;
		bottom: 128px;
		color: #005374;
		font-size: 15px;
		font-weight: 600;
		p{
			width: 300px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
// code22
.formReCon{
	padding: 15px 20px;
	font-size: 14px;
	.formReUl{
		padding-left: 20px;
		li{
			margin-top: 10px;
			span{
				white-space: nowrap;
				line-height: 20px;
			}
			>div{
				width: 100%;
				margin-top: 5px;
				line-height: 20px;
			}
		}
	}
}
// code33
/deep/ .el-tree{
	background: transparent;
	color: #ffffff;
}
/deep/ .el-tree-node, /deep/ .el-tree-node__content{
	background: transparent !important;
}

// code40
.dragDiv{
	overflow: hidden;
	margin-top: 30px;
	.dragItem{
		float: left;
		width: 96px;
		height: 44px;
		background: #2BAB36;
		border-radius: 2px;
		border: 1px solid #FFFFFF;
		text-align: center;
		line-height: 42px;
		margin-left: 4px;
		color: #ffffff;
	}
	.dragItem:first-child{
		margin-left: 0;
		background: #D68D00;
	}
}

// code48
.trackingChainDiv{
	color: #333333;
	ul{
		background: #EFF3FC;
		border-radius: 8px;
		border: 1px solid #90A2C5;
		padding: 24px 29px;
		li{
			line-height: 28px;
			font-size: 15px;
			span{
				color: #3F73D6;
				cursor: pointer;
			}
		}
	}
	div{
		text-align: center;
		margin: 18px 0;
		img{
			width: 26px;
		}
	}
}
.roleNavUl{
	overflow: hidden;
	margin: 20px auto;
	display: inline-block;
	li{
		float: left;
		width: 120px;
		line-height: 36px;
		border-radius: 36px;
		text-align: center;
		cursor: pointer;
		font-size: 15px;
	}
	.active{
		background: #1B82F0;
		color: #ffffff;
	}
}
.demo-table thead th {
    background: #5C6DBA;
    color: #ffffff;
    border: 1px solid #ffffff;
}
</style>
