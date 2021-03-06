import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false, // 控制播放和暂停  true 为播放
  fullScreen: false, // 控制还否全屏
  playlist: [], // 播放列表
  sequenceList: [], // 随机播放列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲的索引
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
