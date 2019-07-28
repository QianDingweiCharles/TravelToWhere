<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票---营业厅'
                }
              ]
            },
            {
              title: '成人五官联飘'
            }
          ]
        },
        {
          title: '学生票',
          children: []
        },
        {
          title: '老人票'
        },
        {
          title: '儿童票'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/varibles.scss';
@import '~styles/mixins.scss';
</style>
