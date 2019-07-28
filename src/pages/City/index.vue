<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabel :cities="cities"></city-alphabel>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabel from './components/Alphabel'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabel
  },
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      console.log(res)
      const resData = res.data
      if (resData.ret && resData.data) {
        const data = resData.data
        const { cities, hotCities } = data
        this.cities = data.cities
        this.hotCities = hotCities
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style>
</style>
