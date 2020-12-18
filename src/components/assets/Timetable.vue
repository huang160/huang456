<template>
  <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      bordered
      size="small"
      style="word-break: break-all"
  >
    <span slot="name" slot-scope="text" >
      <div v-for="i in text"
          :key="i"
          style="text-align: center;color: #000000;"
      >
        {{i}}
      </div>
    </span>
    <template v-for="i in week"  :slot="i" slot-scope="text">
      <span :key="i" v-if="text[0]">
        <span v-if="typeof text[0][0] == 'string'">
          <span v-for="(j, courseIndex) in text" :key="courseIndex">
            {{j[0]}} ({{j[1]}} {{j[2]}}
            <span v-for="(k, weekIndex) in j[4]" :key="weekIndex">{{k}}</span>周 [{{j[3]}}])<br/>
          </span>
        </span>
        <span v-else>
          <span v-for="(j, index) in text" :key="index">
           <span v-for="(k, courseIndex) in j" :key="courseIndex">
              {{k[0]}} ({{k[1]}} {{k[2]}}
            <span v-for="(l, weekIndex) in k[4]" :key="weekIndex">{{l}}</span>周 [{{k[3]}}])<br/>
           </span>
          </span>
        </span>
      </span>
    </template>
  </a-table>
</template>

<script>
import Vue from 'vue'
import {Table, Tag} from 'ant-design-vue'
import {request} from "@/network/request";

Vue.use(Table).use(Tag)

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
    width: 120
  },
  {
    title: '星期日',
    dataIndex: 'Sun',
    key: 'Sun',
    scopedSlots: { customRender: 'Sun' },
    width: 120
  },
  {
    title: '星期一',
    dataIndex: 'Mon',
    key: 'Mon',
    scopedSlots: { customRender: 'Mon' },
    width: 120
  },
  {
    title: '星期二',
    dataIndex: 'Tue',
    key: 'Tue',
    scopedSlots: { customRender: 'Tue' },
    width: 120
  },
  {
    title: '星期三',
    key: 'Wed',
    dataIndex: 'Wed',
    scopedSlots: { customRender: 'Wed' },
    width: 120
  },
  {
    title: '星期四',
    dataIndex: 'Thu',
    key: 'Thu',
    scopedSlots: { customRender: 'Thu' },
    width: 120
  },
  {
    title: '星期五',
    dataIndex: 'Fri',
    key: 'Fri',
    scopedSlots: { customRender: 'Fri' },
    width: 120
  },
  {
    title: '星期六',
    dataIndex: 'Sat',
    key: 'Sat',
    scopedSlots: { customRender: 'Sat' },
    width: 120
  }
];

const data = [
  {
    key: '1',
    name: ["1 - 2 节","09:00~10:20"],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '2',
    name: ['3 - 4 节','10:40~12:00'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '3',
    name: ['5 - 6 节','12:30~13:50'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '4',
    name: ['7 - 8 节','14:00~15:20'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '5',
    name: ['9 - 10 节','15:30~16:50'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '6',
    name: ['11 - 12 节','17:00~18:20'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '7',
    name: ['13 - 14 节','19:00~20:20'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  },
  {
    key: '8',
    name: ['15 - 16 节','20:30~21:50'],
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  }
];


export default {
  name: "Timetable",
  data() {
    return {
      data,
      columns,
      week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    };
  },
  created() {
    request({
      method: 'post',
      url: 'timetable',
      data: {
        token: '58815932dc903dadeb2d0de3077844177c59a822cba2b4939811ab37971e911899de0c53f889dc7da731e4ccc0eec615998640df2144e5bbb1d0e0b29b389e0c'
      }
    }).then(res => {
      const tableTableShow = res.data.timetable
      tableTableShow.forEach((item,i)=>{
        item.forEach((item,j)=>{
          this.data[i][this.week[j]].push(item)
        })
      })
    })
  },
  mounted() {

  }
}
</script>

<style scoped>
/*th div{
  display: inline;
  text-align: center !important;
}*/
</style>