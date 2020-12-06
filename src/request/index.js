import axios from 'axios'

// const isDev = process.env.NODE_ENV === 'development'

const ajax = axios.create({
  baseURL: 'http://localhost:3300'
})

ajax.interceptors.request.use(config => {
  return config
})

ajax.interceptors.response.use(resp => {
  console.log(resp)
  if (resp.status === 200) {
    if (resp.data.result === 100) {
      return resp.data.data
    }
  }
  return {
    code: '201',
    msg: '请求失败'
  }
})

export const getHotSearch = () => ajax.get('/search/hot')
// export const getSongList = () => ajax.get('/songlist/list')
