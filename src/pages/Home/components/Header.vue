<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/游玩/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='scss' scoped>
@import '~styles/varibles.scss';
@import '~styles/mixins.scss';
.header {
  display: flex;
  background-color: $bgColor;
  line-height: $headerHeight;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.24;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    padding-left: 0.2rem;
    margin-left: 0.2rem;
    margin-top: 0.12rem;
    background-color: #fff;
    border-radius: 0.1rem;
    text-align: left;
    color: #ccc;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
    @include ellipsis();
  }
}
</style>
