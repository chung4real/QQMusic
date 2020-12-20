import axios from 'axios'

// const isDev = process.env.NODE_ENV === 'development'

const ajax = axios.create({
  baseURL: 'http://localhost:3300'
})

ajax.interceptors.request.use(config => {
  return config
})

ajax.interceptors.response.use(resp => {
  if (resp.status === 200) {
    if ((resp.data.result || resp.data.resultL) === 100) {
      return resp.data.data
    }
  }
  return {
    code: '201',
    msg: '检查下接口数据这么难吗'
  }
})

export const getHotSearch = () => ajax.get('/search/hot')
export const getNewSong = () => ajax.get('/singer/list')
export const getSongList = () => ajax.get('/recommend/playlist/u')
export const getBanner = () => ajax.get('/recommend/banner')
export const getNewMv = () => ajax.get('/new/mv')
export const getSingerCategory = () => ajax.get('/singer/category')
export const getNewAlbum = () => ajax.get('/new/album')
