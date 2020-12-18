import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://api.ckhun.co/v1/api/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjE3NDAyMjUxMTciLCJpYXQiOjE2MDgyOTYyNzQsImV4cCI6MTYwODMwMzQ3NH0.zfR-m70hvHZpeJkP5syY75r4gVEAUQlk-MeUeGeo2Ao'
    },
  })

  /*// 2.axios的拦截
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log(config)
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
    return config
  }, error => {
    console.log(config)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
  }, err => {
    console.log(res)
  })*/

  // 3.发送真正的网络请求
  return instance(config)
}
