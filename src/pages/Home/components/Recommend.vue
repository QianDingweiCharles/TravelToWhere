<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl:
            '//imgs.qunarzz.com/p/tts6/1809/6d/40a4b4eeb5b21402.jpg_r_390x260x90_b0c9f146.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        },
        {
          id: '002',
          imgUrl:
            '//imgs.qunarzz.com/p/tts6/1809/6d/40a4b4eeb5b21402.jpg_r_390x260x90_b0c9f146.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        },
        {
          id: '003',
          imgUrl:
            '//imgs.qunarzz.com/p/tts6/1809/6d/40a4b4eeb5b21402.jpg_r_390x260x90_b0c9f146.jpg',
          title: '北京-陕西 6天跟团游',
          desc:
            '纯玩古都西安丨登华山+看延安+听老腔+壶口瀑布+兵马俑+明城墙+陕西小吃'
        },
        {
          id: '004',
          imgUrl:
            '//imgs.qunarzz.com/p/tts6/1809/6d/40a4b4eeb5b21402.jpg_r_390x260x90_b0c9f146.jpg',
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

.item {
  display: flex;
  height: 1.9rem;
  .item-img {
    display: block;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
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
    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>