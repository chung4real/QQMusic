import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/views/Home/Home'

// 分包
const SongList = () => import('@/views/SongList')
const NewDisc = () => import('@/views/Newdisc/Newdisc')
const RankingList = () => import('@/views/RankingList')
const Singer = () => import('@/views/Singer/Singer')
const Fm = () => import('@/views/Fm')
const Album = () => import('@/views/Album')
const MV = () => import('@/views/MV')
const Tickets = () => import('@/views/Tickets')
const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/newdisc',
    name: 'NewDisc',
    components: {
      default: NewDisc,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/songlist',
    name: 'SongList',
    components: {
      default: SongList,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/rankinglist',
    name: 'RankingList',
    components: {
      default: RankingList,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/singer',
    name: 'Singer',
    components: {
      default: Singer,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/fm',
    name: 'Fm',
    components: {
      default: Fm,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/album',
    name: 'Album',
    components: {
      default: Album,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/mv',
    name: 'MV',
    components: {
      default: MV,
      'xm-header': Header,
      'xm-footer': Footer
    }
  },
  {
    path: '/tickets',
    name: 'Tickets',
    components: {
      default: Tickets,
      'xm-header': Header,
      'xm-footer': Footer
    }
  }
]

export default routes
