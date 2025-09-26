<template>
	<view class="content">
    <!-- 用户水印层 -->
     <watermark :fontSize="14"
     color="rgba(0,0,0,0.08)"
     :user-info="userInfo"
     >
       </watermark>
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
   <view class="card-container">
         <!-- 连通性测试卡片 -->
         <view class="card-wrapper">
           <testcard @trigger-retry="handleRetry" />
         </view>
         <!-- 网络情况卡片 -->
         <view class="card-wrapper">
           <internetcard :show-tip="showTip" />
         </view>
         <!-- 设备卡片 -->
         <view class="card-wrapper">
           <equiementcard />
         </view>
       </view>
     </view>
   </template>

<script>
  import { getCurrentTime, createTimeTimer } from '@/utils/getlocalTime.js';
  import testcard from '@/components/testcard/testcard.vue'
  import equiementcard from '../../components/equiementcard/equiementcard.vue';
  import internetcard from '../../components/internetcard/internetcard.vue';
 import watermark from '../../components/watermark.vue'
  export default {
     components: {
        testcard,
        equiementcard,
        internetcard,
        watermark
      },
	  data() {
	    return {
	      currentTime: '',
	      timer: null,
        userInfo:{
          name:'中国医生',
          id:'1234',
        },
        // 控制卡片提示层的显示状态
        showTip:true

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
	  },
    methods:{
      handleRetry(isRefreshing){
      this.showTip = !isRefreshing;
      console.log('父组件showTip状态:', this.showTip);
      }
    }
	};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  padding-bottom: 20rpx;
}

/* 头部样式 */
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100rpx;
  padding: 0 20rpx;
  border-bottom: 1rpx solid #f5f5f5;
}
.logo {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20rpx;
  flex-shrink: 0;
}
.doctorName {
  font-size: 18rpx;
  color: #333;
  font-weight: 500;
  margin-right: 20rpx;
}
.currentTime {
  font-size: 14rpx;
  color: #8f8f94;
  margin-left: auto;
  white-space: nowrap;
}
/* 水印样式 */
.watermark-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
   /* 使用网格布局实现3x3分布 */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3列，每列平均宽度 */
    grid-template-rows: repeat(3, 1fr);    /* 3行，每行平均高度 */
    padding: 100rpx; /* 留出边距，避免水印贴边 */
    box-sizing: border-box;
}

.watermark-text {
    color: rgba(0, 0, 0, 0.1); /* 淡灰色，不影响阅读 */
    font-size: 24rpx;
    transform: rotate(-15deg); /* 倾斜角度 */
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
}

/* 让水印均匀分布 */
.watermark-text:nth-child(even) {
  margin-top: 300rpx;
  margin-left: 250rpx;
}

/* 确保卡片内容在水印上方 */
testcard,
equiementcard,
 internetcard {
  position: relative;
  z-index: 10;
}

</style>
