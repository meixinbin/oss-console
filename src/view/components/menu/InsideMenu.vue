<template>
  <Menu :theme="theme" style="width: 100%">
    <MenuGroup title="对象存储">
      <MenuItem name="overview">
        <router-link :to="'/overview'">概览</router-link>
      </MenuItem>
    </MenuGroup>
    <MenuGroup title="存储空间">
      <MenuItem :name="item.name" v-for="(item,index) in buckets" :key="index">
        <router-link :to="'/bucket/shanghai/' + item.name + '/overview'">{{ item.name }}</router-link>
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>

<script>
import {getBucketList} from '@/api/data'

export default {
  name: 'InsideMenu',
  props: {
  },
  components: {},
  data () {
    return {
      buckets: [],
      theme: 'light'
    }
  },
  methods: {
  },
  mounted () {
    getBucketList().then((res) => {
      this.buckets = res.data
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
