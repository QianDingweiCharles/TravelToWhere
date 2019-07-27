<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a0331783-1616-4a0b-a51d-3d2cdacdb8b6.jpg_r_390x260x90_650b86b5.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        },
        {
          id: '002',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a0331783-1616-4a0b-a51d-3d2cdacdb8b6.jpg_r_390x260x90_650b86b5.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        },
        {
          id: '003',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a0331783-1616-4a0b-a51d-3d2cdacdb8b6.jpg_r_390x260x90_650b86b5.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        },
        {
          id: '004',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a0331783-1616-4a0b-a51d-3d2cdacdb8b6.jpg_r_390x260x90_650b86b5.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
  text-align: left;
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 66.7%;
  .item-img {
    width: 100%;
  }
}
.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    @include ellipsis();
  }
}
</style>