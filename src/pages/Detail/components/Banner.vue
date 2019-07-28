<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/p/tts2/1709/67/c4d1f2d39db1ba02.jpg_r_640x420x90_421dab79.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">数量有限【世界梦号】广州-日本冲绳【世界梦号】广州-</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallyClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data() {
    return {
      imgs: [
        'https://img1.qunarzz.com/vs_ceph_vs_tts/39258f77-81cf-4ab9-beb6-98a5576c343f.jpg_r_1280x840x90_b41d0e62.jpg',
        'https://img1.qunarzz.com/vs_ceph_vs_tts/ffa11eab-f050-4ad6-b61e-e28b3b1acf6d.jpg_r_1280x840x90_364b10df.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallyClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/varibles.scss';
@import '~styles/mixins.scss';

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      background: rgba($color: #000000, $alpha: 0.8);
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
