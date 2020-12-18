<template>
  <div>
    <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
    </a-radio-group>
    <a-tabs
        size = "small"
        default-active-key="1"
        :tab-position="mode"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tabsssssssssssssssss-${i}`">
        Content of tab {{ i }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>


<script>
import Vue from 'vue'
import { Tabs, Radio} from 'ant-design-vue'
Vue.use(Tabs)
Vue.use(Radio)

export default {
  name: "Main",
  data() {
    return {
      mode: 'left'
    }
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
}
</script>

<style scoped>

</style>