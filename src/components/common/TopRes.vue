<!--
 * @Date: 2019-07-29 17:59:30
 * @Description: 1
 -->
<template>
	<div v-if="showRes" class="top-res">
		<my-video v-if="isVideo === 'mp4'" :sources="videoArr.sources" :options="videoArr.options"></my-video>
		<div v-if="isVideo === 'mp3'">
			<a-player :music="songs" ref="player"></a-player>
		</div>
		<iframe v-if="isVideo === 'resIfames'" style="width:100%;height:100vh;" :src="iframeUrl"  frameborder="0"></iframe>
		<img v-if="isVideo === 'images'" class="outsd" :src="iframeUrl" alt="">
	</div>
</template>

<script>
import myVideo from 'vue-video';
import fengmian from './images/fengmian.jpg';
import VueAplayer from 'vue-aplayer';
// import logo from './images/curses.png';
export default {
	name: 'stu-res',
	data () {
		return {
			isTool: this.isClose,
			isVideo: false,
			resInfo: '',
			songs: {},
			showRes: false,
			iframeUrl: null,
			videoArr: {
				sources: [{
					src: '',
					type: 'video/mp4'
				}],
				isShow: false,
				options: {
					autoplay: false,
					volume: 0.6,
					poster: fengmian
				}
			}
		};
	},
	props: ['dataSrc'],
	created () {
	},
	watch: {
		dialogVisible () {
			this.isShow = this.dialogVisible;
		},
		dataSrc: {
			handler () {
				if (Object.keys(this.dataSrc).length === 0) {
					return false;
				}
				console.log(this.dataSrc.resourceType);
				if (this.dataSrc) {
					this.showRes = false;
					// let resId = this.dataSrc.resId;
					console.log((this.dataSrc.resourceType.search('mp4')));
					if (this.dataSrc.resourceType.match(RegExp(/mp4/))) { // mp4
						this.isVideo = 'resIfames';
						this.$nextTick(() => {
							this.iframeUrl = this.$storage.get('baseUrl') + '/static/pdfjs/web/videopre.html?fileId=' + (this.dataSrc.resId || this.dataSrc.resourceId);
							this.showRes = true;
						});
						this.showRes = true;
					} else if (this.dataSrc.resourceType.match(RegExp(/mp3/))) { // pdf
						// this.isVideo = 'mp3';
						// let url = this.$storage.get('ossUrl') + this.dataSrc.folder + (this.dataSrc.resId || this.dataSrc.resourceId) + '.' + (this.dataSrc.resourceType);
						// console.log(url);
						// this.$nextTick(() => {
						// 	this.songs = {
						// 		title: this.dataSrc.resourceName,
						// 		author: '知链',
						// 		url: url,
						// 		pic: logo
						// 	};
						// 	let aplayer = this.$refs.player.control;
						// 	aplayer.play();
						// });
						// this.showRes = true;
					} else if (this.dataSrc.resourceType.match(RegExp(/pdf/))) {
						this.showRes = true;
						this.isVideo = 'resIfames';
						let url = this.$storage.get('baseUrl') + '/static/pdfjs/web/viewer.html?file=' + (this.dataSrc.resId || this.dataSrc.resourceId);
						console.log(url);
						this.$nextTick(() => {
							this.iframeUrl = url;
						});
					} else if (this.dataSrc.resourceType.match(RegExp(/url/))) {
						// 网址外嵌
						this.showRes = true;
						this.isVideo = 'resIfames';
						let url = this.dataSrc.resourceIntroduce;
						console.log(url);
						this.$nextTick(() => {
							this.iframeUrl = url;
						});
					} else {
						// 图片
						console.log('图片');
						this.isVideo = 'images';
						this.$nextTick(() => {
							this.iframeUrl = this.$storage.get('baseUrl') + '/uploadResources/getFileStream?fileId=' + (this.dataSrc.resId || this.dataSrc.resourceId);
							this.showRes = true;
						});
						this.showRes = true;
					}
				}
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		_handleClick () {
			this.$emit('sendMsg', false);
		}
	},
	components: {
		'a-player': VueAplayer,
		myVideo
	}
};
</script>

<style lang="scss" scoped>
.top-res{
	height: 100%;
}
.outsd{
	width: 100%;
}
</style>
