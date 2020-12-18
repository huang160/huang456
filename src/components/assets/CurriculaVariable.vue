<template>
  <div>
    <header style="text-align: left;background-color: #6173a1;color: #e8e8e8">
      课程：{{dataList.courseCode}} {{dataList.courseName}} ( {{dataList.courseType}} )  {{dataList.courseMark}}学分
    </header>
    <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        bordered
        size="small"
        style="word-break: break-all"
    >
      <span slot="name" slot-scope="week" >
        <div v-for="i in week"
             :key="i"
             style="text-align: center;color: #000000;"
        >
          {{i}}
        </div>
      </span>
      <template v-for="i in week"  :slot="i" slot-scope="text">
        <span :key="i" v-if="text[0]">
          <span v-if="typeof text[0][0] == 'string'">
            <span v-for="(j, index) in text" :key="index">
              <input type="radio" :name="j[0].length" :value="j[0]" />
              {{j[0]}} ( {{j[1]}}
              <span v-for="(k, weekIndex) in j[3]" :key="weekIndex">&nbsp;{{k}}</span>
              周 [{{j[2]}}])
            </span>
          </span>
          <span v-else>
            <span v-for="(j, index) in text" :key="index">
              <span v-for="(k, courseIndex) in j" :key="courseIndex">
                <input type="radio" :name="k[0].length" />
                {{k[0]}} ( {{k[1]}}
                  <span v-for="(l, weekIndex) in k[3]" :key="weekIndex">&nbsp;{{l}}</span>
                  周 [{{k[2]}}]),
              </span>
            </span>
          </span>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script>
import Vue from 'vue'
import {request} from "@/network/request"
import {Table, Radio} from 'ant-design-vue'

Vue.use(Table)
Vue.use(Radio)

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
]

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
    Mon: [
        [
          [
            'abc',
            'ccc',
            'abcde',
            [1,2,3]
          ],
          [
            'sss',
            'avas',
            'caga',
            [1,2,3,4]
          ]
        ]
    ],
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
]

export default {
  name: "CurriculaVariable",
  data() {
    return {
      columns,
      data,
      dataList: '',
      week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    }
  },
  created() {
    request({
      method: 'post',
      url: 'classinfo',
      data: {
        id: '738'
      }
    }).then(res => {
      this.dataList = res.data
      const classInfo = res.data.classInfo
      classInfo.forEach((item,i)=>{
        item.forEach((item,j)=>{
          this.data[i][this.week[j]].push(item)
        })
      })
    })
  }
}
</script>

<style scoped>

</style>