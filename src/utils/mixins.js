import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(dataTime) {
      return dataTime ? moment(dataTime).fromNow() : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || require('../assets/images/avatar/svg')
    }
  }
}
