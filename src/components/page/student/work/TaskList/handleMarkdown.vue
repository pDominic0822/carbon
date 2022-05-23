<template>
	<div class="online-tips left-text-mao containter">
		<div>
			<mavonEditor style="display:none;"></mavonEditor>
			<div class="markdown-body" ref="hlDiv" v-html="textContent"></div>
			<div class="mt30 center">
			</div>
		</div>
		<el-dialog
			:visible.sync="dialogVisible"
			center
			close-on-click-moda="false"
			append-to-body
			:title="resTitle"
			width="1300px"
			show-close>
			<div style="height:620px">
				<top-res v-if="dialogVisible" :dataSrc = dataSrc></top-res>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'highlight.js/styles/monokai-sublime.css';
import 'mavon-editor/dist/css/index.css';
export default {
	name: 'online-tips',
	data () {
		return {
			resId: '',
			mapArr: [],
			resourceArr: [],
			resourceName: '',
			timer: null,
			dialogVisible: false,
			isVideo: false,
			resTitle: '',
			isText: false,
			textContent: {},
			dataSrc: null,
			resUrl: '',
			videoArr: {
				sources: [{
					src: '',
					type: 'video/mp4'
				}],
				options: {
					autoplay: false,
					volume: 0.6,
					poster: ''
				}
			},
			isPPT: true
		};
	},
	components: {
		mavonEditor
	},
	props: ['resourceCode'],
	watch: {
		// $route: 'fetchResource'
	},
	created () {
		this.fetchResource();
	},
	methods: {
		saveDoc (markdown, html) {
			console.log(markdown);
			console.log(html);
			this.textContent = html;
			// this.reversedMessage = html;
			// this.editor_submit();
		},
		fetchResource () {	// 查询富文本文档
			this.$ajax({
				method: 'post',
				url: '/taskText/findTaskTextMapByParam',
				params: {
					taskId: this.$route.query.taskId,
					type: this.resourceCode
				}
			}).then(res => {
				if (res.success && res.data.length !== 0) {
					this.textContent = res.data[0].textContent;
					this.isPPT = true;
				};
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.online-tips{
	// height: 1550px;
	// overflow-y: scroll;
	padding: 15px 20px 0;
	.titlecon{
		width: 100%;
		height: 100%;
		background: #ccc;
		background: #fff;
	}
}
.item-list{
	li{
		float: left;
		margin: 10px;
		border: 1px dashed #ccc;
		height: 205px;
		padding-top: 30px;
		width: 158px;
		cursor: pointer;
		&:hover{
			border: 1px dashed #009F64;
		}
		.item-top{
			width: 70px;
			height: 70px;
			margin: 0 auto;
			background: #FFF2F2;
			border-radius: 50%;
			line-height: 70px;;
			text-align: center;
			i{
				font-size: 30px;
			}
		}
		.item-text{
			font-family: PingFangSC-Regular;
			font-size: 16px;
			color: #000000;
			height: 46px;
			cursor: pointer;
			line-height: 46px;
			text-align: center;
			padding: 0 15px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
.item-demo2{
	margin-top: 10px;
	&>li:nth-of-type(1) {
		border-top: 1px solid #DDD;
	};
	&>li{
		border-left: 1px solid #DDD;
		border-right: 1px solid #DDD;
		border-bottom: 1px solid #DDD;
		padding: 10px;
		cursor: pointer;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #222222;
		&>div{
			float: left;
		}
		&>div:nth-of-type(1) {
			i{
				font-size: 30px;
			}
		}
		&>div:nth-of-type(2) {
			margin-left: 20px;
			margin-right: 20px;
			margin-top: 7px;
		}
		// &>div:nth-of-type(3) {}
	}
	&>li:nth-of-type(even){
		background: #FBFBFB;
	}
}
</style>
