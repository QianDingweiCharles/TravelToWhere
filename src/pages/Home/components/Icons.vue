<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-container" :src="item.imgUrl" />
          </div>
          <p class="icon-img-des">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconLists: [
        {
          id: '001',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '002',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '003',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '004',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '火车票'
        },
        {
          id: '005',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '006',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/group.png',
          desc: '特惠酒店'
        },
        {
          id: '007',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/group.png',
          desc: '低价机票'
        },
        {
          id: '008',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/group.png',
          desc: '低价机票'
        },
        {
          id: '009',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/group.png',
          desc: '低价机票'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconLists.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
@import '~styles/mixins.scss';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  margin-top: 0.1rem;
  .icon {
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    position: relative;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      .icon-img-container {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-img-des {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      color: $darkTextColor;
      @include ellipsis();
    }
  }
}
</style>