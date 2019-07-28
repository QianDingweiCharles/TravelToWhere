<template>
  <div>
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'

export default {
  name: 'Detail',
  components: {
    DetailBanner
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/varibles.scss';
@import '~styles/mixins.scss';
</style>
