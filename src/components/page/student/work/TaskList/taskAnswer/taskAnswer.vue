<!--
 * @Author: zhangln
 * @Date: 2020-01-20 15:03:19
 * @Description: 问答
 -->
<template>
	<div class="ask-answer change">
		<el-input type="textarea" maxlength="40" :rows="6" resize="none" placeholder="请输入问题内容…" v-model="commentValue"></el-input>
		<div class="clearfix">
			<div class="submit-btn fr mt20" @click="commentClick()">提交</div>
		</div>
		<div class="title-ask">互动问答</div>
		<div class="scoller">
			<askAnswer :askAnswerList="askAnswerList">
				<template slot="askBtn" slot-scope="slotProps">
					<!-- userType 1老师 2学生 v-if="JSON.parse($storage.get('User')).userType === 1"-->
					<el-button size="small" style="color: #666; background-color: #f4f4f4; border: none; margin-bottom: 6px; padding: 12px 19px;" type="info" @click="_handAnswer(slotProps)" icon="el-icon-plus" round>我来回答</el-button>
				</template>
				<!-- 删除整个问答 -->
				<template slot="del-btn" slot-scope="slotProps">
					<img src="./img/del.png" style="width: 30px; cursor: pointer;" alt="" @click="del_ask(slotProps)">
				</template>
				<!-- 删除问答下的回复 -->
				<template slot="reply-del" slot-scope="slotProps">
					<div style="margin: 15px 0 10px 0;">
						<span class="reply-del-btn" @click="replyDel(slotProps)">删除回复</span>
					</div>
				</template>
			</askAnswer>
		</div>
		<el-dialog title="我来回答" append-to-body :visible.sync="askAnswerLogVisible" center>
			<div>
				<el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="askAnSwerValue"></el-input>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button size="small" @click="askAnswerLogVisible = false">取 消</el-button>
				<el-button size="small" type="primary" @click="submitAnswerValue">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import askAnswer from './askAnswer';
export default {
	name: '',
	data () {
		return {
			commentValue: '',
			orgId: '',
			askAnswerList: [],
			askAnswerLogVisible: false,
			askAnSwerValue: ''
		};
	},
	components: {
		askAnswer
	},
	created () {
		this.orgId = ''; // 获取orgId
		this.selectAskAnswer('taskOrgIssue');
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 拉取问答列表
		 */
		selectAskAnswer (type) {
			this.$ajax({
				method: 'post',
				url: '/comment/findCommentsReply',
				params: {
					commentType: type,
					fkId: this.$route.query.taskId + this.orgId
				}
			}).then(res => {
				if (res.success) {
					this.askAnswerList = res.data || [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		commentClick () {
			this.$ajax({
				method: 'post',
				url: '/comment/insertComment',
				params: {
					commentType: 'taskOrgIssue',
					fkId: this.$route.query.taskId + this.orgId,
					commentContent: this.commentValue
				}
			}).then(res => {
				if (res.success) {
					this.$notify({
						title: '消息通知',
						message: '评论成功',
						type: 'success'
					});
					this.selectAskAnswer('taskOrgIssue');
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		del_ask (item) {
			this.$ajax({
				method: 'post',
				url: '/comment/deleteComment',
				params: {
					id: item.row.commentId
				}
			}).then(res => {
				if (res.success) {
					this.$message.success(res.message);
					this.selectAskAnswer('taskOrgIssue');
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 我来回答，获取单行数据
		_handAnswer (item) {
			this.answerRow = item.row;
			console.log(item.row);
			this.askAnswerLogVisible = true;
		},
		// 我来回答提交答案
		submitAnswerValue () {
			this.$ajax({
				method: 'post',
				url: '/reply/insertReply',
				params: {
					replyType: 'taskOrgIssue',
					fkId: this.$route.query.taskId + this.orgId,
					replyContent: this.askAnSwerValue,
					commentId: this.answerRow.commentId
				}
			}).then(res => {
				if (res.success) {
					this.$message.success(res.message);
					this.selectAskAnswer('taskOrgIssue');
					this.askAnswerLogVisible = false;
					this.askAnSwerValue = '';
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		replyDel (item) {
			this.answerRow = item.row;
			this.$ajax({
				method: 'post',
				url: '/reply/deletedReply',
				params: {
					id: item.row.replyId
				}
			}).then(res => {
				if (res.success) {
					this.selectAskAnswer('taskOrgIssue');
					this.$message.success(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.reply-del-btn{
	color: #fff;
	cursor: pointer;
	font-size: 12px;
}
.scoller{
	max-height: 100vh;
	overflow: scroll;
	padding: 5px;
}
.submit-btn{
	background: #2F63F7;
	border-radius: 30.5px;
	width: 120px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #ffffff;
	font-size: 15px;
    cursor: pointer;
}
.title-ask{
	font-size: 22px;
	font-weight: 700;
	border-top: 2px dashed #eee;
	margin-top: 30px;
	color: #fff;
	padding: 30px 0 20px 0;
}
</style>
