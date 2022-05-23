
<template>
	<div class="stu">
		<div class="grcredit">
			<p class="tithea">
				主题：
				{{taskInfo.taskDescribe || ''}}
			</p>
		</div>
		<div class="grcredit">
			<p class="titbox">讨论区</p>
			<el-button type="primary" size="mini" class="fr refresh" @click="_ClickRefresh()">刷新</el-button>
		</div>
		<div class="grcredit  diatext" ref="chatContent">
			<div class="diafont clearfix" :class="{'active' : item.isMe !== 0}" v-for="(item,index) in chatList" :key="index">
					<div class="userNameBox">
						账户名称：{{item.realName}}
					</div>
				<div class="chatBox">
					{{item.discussContent}}
					<div class="chatList">{{index + 1}}</div>
					<div class="tra"></div>
				</div>
			</div>
		</div>
		<div class="ipt">
			<el-input v-model="userMessage" maxlength="50" placeholder="请输入内容"></el-input>
			<el-button type="primary" size="mini" @click.enter="_ClickSend()" class="fr sendbtn">发送</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			chatList: [],
			taskInfo: {},
			userMessage: '',
			sendInfo: ''
		};
	},
	created () {
		this._ClickRefresh();
		this.scrollToBottom();
		this.findTask();
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 获取小任务详情
		 */
		findTask () {
			this.$ajax({
				method: 'post',
				url: '/TaskListBusiness/findTaskListBusinessById',
				params: {
					id: this.$route.query.taskId
				}
			}).then(res => {
				if (res.success) {
					this.taskInfo = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 点击发送
		_ClickSend () {
			this.$ajax({
				method: 'post',
				url: '/stOrgDecideDiscussRecord/saveStOrgDecideDiscussRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					taskId: this.$route.query.taskId || '',
					discussContent: this.userMessage
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: '发送成功!'
					});
					this._ClickRefresh();
					this.scrollToBottom();
					this.emptyInputVal();
				}
			});
		},
		// 刷新按钮
		_ClickRefresh () {
			this.$ajax({
				method: 'post',
				url: '/stOrgDecideDiscussRecord/findStOrgDecideDiscussRecordByParams',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					taskId: this.$route.query.taskId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						let array = res.data;
						let arr = [];
						for (let index = 0; index < array.length; index++) {
							const element = array[index];
							arr.unshift(element);
						}
						this.chatList = arr;
						this.scrollToBottom();
					}
				}
			});
		},
		// 将最新的消息，放在聊天框的最下面
		scrollToBottom () {
			this.$nextTick(() => {
				this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight;
			});
		},
		// 清空输入框的值
		emptyInputVal () {
			this.userMessage = '';
		}
	}
};
</script>

<style lang="scss" scoped>
.grcredit,.diatext{
	margin: 0 auto;
	width: 800px;
	background: #2C325E;
	.tithea,.titbox{
		width: 800px;
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 32px;
	}
	.titbox{
		margin-top: 30px;
		width: 100px;
	}
	.refresh{
		margin-top: -50px;
	}
}
.diatext{
	background: #272D54;
	height: 300px;
	padding: 10px 20px;
	padding-bottom: 50px;
	overflow: auto;
	.diafont{
		.chatBox{
			position: relative;
			width: 670px;
			margin: 0 auto;
			padding: 15px 20px;
			border-radius: 3px;
			background: #374D63;
			color: #FFFFFF;
			font-size: 15px;
			line-height: 28px;
			text-align: left;
			margin-top: 10px;
			margin-bottom: 15px;
		}
			.userNameBox{
			width: 94%;
			font-size: 12px;
			text-indent: 47px;
			color: rgb(218,165,32);
		}
		.chatList{
			position: absolute;
			top: 1px;
			left: -53px;
			width: 33px;
			height: 33px;
			border-radius: 50%;
			background: #F77D73;
			color: #FFFFFF;
			line-height: 33px;
			text-align: center;
		}
		.tra{
			position: absolute;
			top: 8px;
			left: -10px;
			border-top: 10px solid transparent;
			border-right: 15px solid #374D63;
			border-bottom: 10px solid transparent;
		}
		&.active{
			.chatBox{
				background: #2B61AE;
			}
			.chatList{
				left: 681px;
				background: #00A9BD;
				text-align: center;
			}
			.tra{
				position: absolute;
				left: 664px;
				border-top: 10px solid transparent;
				border-left: 15px solid #2B61AE;
				border-right: none;
				border-bottom: 10px solid transparent;
			}
			.userNameBox{
				width: 94%;
				font-size: 12px;
				text-align: right;
				color: rgb(218,165,32);
			}
		}
	}
}
.ipt{
	position: relative;
	margin: 0 auto;
	margin-top: 20px;
	width: 780px;
	height: 50px;
	// background: rgba(0, 0, 0, 0.1);
	background: #2C325E;
	border: 1px solid #1781E7;
	input{
		-web-kit-appearance:none;
		-moz-appearance: none;
		width: 700px;
		background: #2C325E;
		color: #FFFFFF;
		border: none;
		height: 47px;
		line-height: 50px;
	}
	.sendbtn{
		position:absolute;
		right: 5px;
		top: 10px;
	}
}
</style>
