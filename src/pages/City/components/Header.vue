<template>
  <div>
    <router-link to="/">
      <div class="header">
        城市选择
        <div class="iconfont header-back">&#xe624;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='scss' scoped>
@import '~styles/varibles.scss';
.header {
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  position: relative;
  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
  }
}
</style>
