<template>
  <div>
    <a-layout id="components-layout-demo-fixed-sider">
      <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
        <a-menu theme="light" mode="inline" :default-selected-keys="['4']">
          <Course />
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header>
          <Navigation />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff' }">
            <Timetable />
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ margin: '24px 16px 0', background: '#fff' }">
          <curricula-variable />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>


<script>
import Vue from 'vue'
import Navigation from "@/components/assets/Navigation";
import Timetable from "@/components/assets/Timetable";
import Course from "@/components/assets/Course";
import CurriculaVariable from "@/components/assets/CurriculaVariable";

import {Layout} from 'ant-design-vue'

Vue.use(Layout)

export default {
  name: "Main",
  components: {
    Timetable,
    Navigation,
    Course,
    CurriculaVariable
  }
}
</script>

<style scoped>
header{
  height: 66px;
  border-bottom: 1px solid #e8e8e8;
  background-color: #ffffff;
}
</style>