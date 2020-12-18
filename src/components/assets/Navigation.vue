<template>
  <div>
    <a-menu
        mode="horizontal"
        :style="{ lineHeight: '64px', textAlign: 'left' }"
    >
      <a-menu-item disabled>
        <a-space size="small">
          <span style="color: #000">欢迎登录本系统</span>
          <b style="color: #fd0000">1740225117 李小米</b>
        </a-space>
      </a-menu-item>
      <a-menu-item >
        <a-button type="primary" icon="logout">
          退出
        </a-button>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import Vue from 'vue'
import {Menu, Space, Icon, Button} from 'ant-design-vue'

Vue.use(Menu)
Vue.use(Space)
Vue.use(Icon)
Vue.use(Button)

export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {

  }
};
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
}
.ant-menu-horizontal{
  border-bottom: 0;
}
</style>
