<!-- tooltip.vue 简化版 -->
<template>
  <!-- 根元素直接用 .tooltip 类名，与页面样式对应 -->
  <view class="tooltip"
    @mouseenter="showTip = true"
    @mouseleave="showTip = false"
    @touchstart="showTip = true"
    @touchend="showTip = false"
  >
    <!-- 问号图标（直接写在根元素内，无需额外容器） -->
    <text class="tooltip-icon">?</text>
    <!-- 悬浮提示框 -->
    <view class="tooltip-text" v-show="showTip">
      {{ tipText }}
    </view>
  </view>
</template>

<script>
export default {
  name: "tooltip",
  props: {
    tipText: {
      type: String,
      required: true,
      default: "请求异常，请检查"
    }
  },
  data() {
    return {
      showTip: false
    };
  }
};
</script>

<!-- 去掉 scoped，让页面样式能生效（或用 ::v-deep，但简化方案更直接） -->
<style>
/* 提示框定位容器（根元素） */
.tooltip {
  position: relative;
  display: inline-block;
  margin-left: 10rpx; /* 与状态文本的间距 */
  cursor: pointer;
}

/* 问号图标（核心显示样式） */
.tooltip-icon {
  font-size: 16rpx;
  background-color: #ccc;
  color: #fff;
  width: 24rpx;
  height: 24rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 确保图标不被压缩 */
  flex-shrink: 0;
}

/* 悬浮提示框 */
.tooltip-text {
  position: absolute;
  top: -120%; /* 图标上方显示 */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 18rpx;
  padding: 8rpx 12rpx;
  border-radius: 6rpx;
  white-space: nowrap;
  z-index: 9999;
  margin-bottom: 5rpx;
}

/* 提示框小箭头 */
.tooltip-text::after {
  content: "";
  position: absolute;
  bottom: -10rpx;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5rpx;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}
</style>
