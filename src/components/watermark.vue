<template>
  <!-- 水印容器：包裹需要加水印的内容 -->
  <div ref="watermarkContainer" class="watermark-container">
    <!-- 水印覆盖层：通过 Canvas 生成的图片重复显示 -->
    <div
      ref="watermarkOverlay"
      class="watermark-overlay"
      :style="{
        backgroundImage: `url(${watermarkImg})`,
        backgroundSize: `${unitWidth}px ${unitHeight}px`
      }"
    ></div>
    <!-- 插槽：插入需要加水印的页面/组件内容 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Watermark',
  props: {
    fontSize: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)',
    },
    rotate: {
      type: Number,
      default: -30,
    },
    userInfo: { // 仅在 props 中声明用户信息
      type: Object,
      default: () => ({
        name: '默认用户',
        id: '0000'
      })
    }
  },
  data() {
    return {
      watermarkImg: '',
      unitWidth: 200,
      unitHeight: 150
    };
  },
  methods: {
    createWatermark() {
      if (!this.$refs.watermarkOverlay) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = this.unitWidth;
      canvas.height = this.unitHeight;

      // 正确获取用户姓名和ID，拼接水印文字
      const userName = this.userInfo.name || '';
      const userId = this.userInfo.id || '';
      const watermarkText = `${userName} ${userId}`;
      if (!watermarkText) return;

      ctx.font = `${this.fontSize}px Arial, sans-serif`;
      ctx.fillStyle = this.color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.save();
      ctx.translate(this.unitWidth / 2, this.unitHeight / 2);
      ctx.rotate((this.rotate * Math.PI) / 180);
      ctx.fillText(watermarkText, 0, 0);
      ctx.restore();

      this.watermarkImg = canvas.toDataURL('image/png');
    }
  },
  mounted() {
    this.createWatermark();
  },
  watch: {
    userInfo: {
      handler() {
        this.createWatermark();
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.watermark-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.watermark-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-repeat: repeat;
}
</style>
