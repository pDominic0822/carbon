<!--
 * @Author: zhangln
 * @Date: 2020-01-20 15:03:19
 * @Description: 问答
 -->
<template>
	<div class="ask-answer">
		<ul class="ask-answer-list mt20" v-if="askAnswerList.length > 0">
			<li
			class="clearfix mt20"
			v-for="(item, index) in askAnswerList"
			:key="index">
				<img v-if="(!item.replyList || item.replyList.length === 0)" class="askImg 444" src="./img/yesAsk.png" alt="">
				<img v-else class="askImg 555" src="./img/noAsk.png" alt="">
				<div class="fl">
					<img class="round" :src="item.userImage || $storage.get('UserImage')" alt="">
				</div>
				<div class="fr">
					<div class="clearfix" style="margin-top: 12px;">
						<div class="fl">
							<span style="font-size: 14px;">{{item.realName}}</span>
						</div>
						<div class="fr" v-if="item.userId !== parseInt($storage.get('userId'))">
							{{item.createTime | secondTime1}}
						</div>
						<div v-else class="clearfix fr span-box">
							<div class="fr del-span">
								<slot :row="item" name="del-btn"></slot>
							</div>
							<div class="fr askTime span-time">
								{{item.createTime | secondTime1}}
							</div>
						</div>
					</div>
					<div class="ask-answer-content">
						{{item.taskName}}
					</div>
					<div class="ask-answer-content content">
						{{item.commentContent}}
					</div>
					<div class="teacher-answer mt20" v-if="(item.replyList && item.replyList.length > 0)">
						<div class="mt30" v-for="(Titem, Tindex) in item.replyList" :key="Tindex">
							<div class="clearfix">
								<img style="width: 34px;" class="fl round" :src="Titem.userImage || $storage.get('UserImage')" alt="">
								<p style="margin: 14px;" class="fl">{{Titem.realName}}<span style="padding-left: 10px;">回答</span>：</p>
								<p style="margin: 14px;" class="fr askTime">{{Titem.createTime | secondTime1}}</p>
							</div>
							<p class="mt10 sdfd" style="font-size: 16px;">
								{{Titem.replyContent}}
							</p>
							<div v-if="Titem.userId === parseInt($storage.get('userId'))">
								<slot :row="Titem" name="reply-del"></slot>
							</div>
						</div>
					</div>
					<div style="margin-top: 18px;">
						<slot :row="item" name="askBtn"></slot>
					</div>
				</div>
			</li>
		</ul>
		<div v-else>
			暂无
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
	props: ['askAnswerList'],
	components: {
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.sdfd{
	line-height: 28px;
}
.ask-answer{
	// width: 1200px;
	color: #fff;
	margin: 0 auto;
}
.ask-answer-list{
	width: 100%;
	li:nth-of-type(1) {
		margin: 0;
	}
	li{
		width: 100%;
		padding: 30px 20px 20px 32px;
		// background: #FFFFFF;
		box-shadow: 0 1px 8px 0 rgba(0,0,0,0.24);
		border-radius: 8px;
		color: #fff;
		position: relative;
		animation: all 1s;
		&:hover{
			.del-span {
				display: block;
			}
			.span-time{
				display: none;
			}
		}
		.span-box{
			position: relative;
		}
		.del-span {
			position: absolute;
			right: 0;
			top: -9px;
			display: none;
		}
		.span-time{
			display: block;
		}
		.askImg{
			position: absolute;
			left: 0;
			top: 0;
			width: 50px;
		}
		&>div:nth-of-type(1) {
			width: 50px;
			img{
				width: 34px;
				cursor: pointer;
			}
		}
		&>div:nth-of-type(2) {
			width: calc(100% - 50px);
			.ask-answer-content{
				margin: 12px 0;
			}
			.content{
				font-family: PingFangSC-Semibold;
				font-size: 16px;
				color: #fff;
				color: #fff;
				line-height: 24px;
			}
			.teacher-answer{
				padding: 5px 10px;
				// background: #F2F5F4;
				border-radius: 0 6px 6px 0;
				border-radius: 0px 6px 6px 0px;
				color: #fff;
				border-left: 2px solid #03AF6F;
				&>div:nth-of-type(1) {
					margin-top: 10px;
				}
			}
			.askTime{
				color: #fff;
				font-size: 14px;
			}
		}
	}
}
</style>
