import axios from 'axios'
const request = axios.create({
  baseURL: 'https://some-domain.com/api/'

})

request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
// res->{message:,code:,data:{}}---->res.data
request.interceptors.response.use(
  function (response) {
    // 如果响应结果对象中有 data，则直接返回这个 data 数据
    // 如果响应结果对象中没有 data，则不作任何处理，直接原样返回这个数据
    console.log(response)
    // return response.data.data || response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
