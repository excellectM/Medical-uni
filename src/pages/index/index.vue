<template>
	<view class="content">
		<view class="header">
			<!-- 圆形logo图片 -->
			<image
				class="logo"
				src="/static/logo.png"
				mode="widthFix"
				alt="医生logo"
			></image>
			<text class="doctorName">李中国医生</text>
			<text class="currentTime">{{currentTime}}</text>
		</view>
	</view>
</template>

<script>
  import { getCurrentTime, createTimeTimer } from '@/utils/getlocalTime.js';
	export default {
	  data() {
	    return {
	      currentTime: '',
	      timer: null
	    };
	  },
	  onLoad() {
	    // 使用工具函数创建定时器
	    this.timer = createTimeTimer((time) => {
	      this.currentTime = time;
	    });
	  },
	  onUnload() { // 修复此处的语法错误
	    // 清除定时器
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}

	/* 核心布局：使用flex确保所有元素垂直居中 */
	.header {
		display: flex;
		align-items: center; /* 关键属性：垂直居中对齐，确保在同一水平线 */
		justify-content: flex-start; /* 水平方向从左开始排列 */
		height: 100rpx; /* 固定高度，增强对齐效果 */
		padding: 0 20rpx; /* 左右内边距 */
		background-color: #dcdcdc;
		border-bottom: 1px solid #f5f5f5;
	}

	.logo {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 20rpx; /* 与医生名称的间距 */
		flex-shrink: 0; /* 防止图片被压缩 */
	}

	.doctorName {
		font-size: 18rpx;
		color: #333;
		font-weight: 500;
		margin-right: 20rpx;
	}

	.currentTime {
		font-size: 10rpx;
		color: #8f8f94;
		margin-left: auto; /* 自动推到最右侧 */
		white-space: nowrap; /* 防止时间换行影响对齐 */
	}
</style>
