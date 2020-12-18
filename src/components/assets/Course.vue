<template>
  <div v-if="tableList">
    <div
        v-for="i in info"
        :key="i"
        style="background-color: #fff;text-align: center;font-weight: bold;padding-top: 25px"
    >
      <b style="font-size: 15px;">{{i}}</b>
    </div>
    <a-menu style="padding-top: 30px" theme="light" mode="inline" :default-selected-keys="[4]">
      <a-menu-item
          v-for="i in tableList" :key="i.uId" @click="classList(i.uId)"
      >
        <span class="nav-text">{{ i.uName }} </span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import Vue from 'vue'
import {request} from '@/network/request'
import {Menu} from 'ant-design-vue'

Vue.use(Menu)

export default {
  name: "Course",
  data() {
    return {
      tableShow: '',
      tableList: '',
      info: ''
    }
  },
  components: {

  },
  methods: {
    classList: id => this.$emit('listClick', id)
  },
  created() {
    request({
      url: 'classlist'
    }).then(res => {
      this.tableList = res.data.classList
      const infoList = res.data.info
      this.info = infoList.split(" ")
      console.log(res.data.classList)
    })
  }
}


</script>

<style scoped>

</style>