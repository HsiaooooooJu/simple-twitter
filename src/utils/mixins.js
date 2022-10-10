import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(dataTime) {
      moment.locale('zh-tw')
      return dataTime ? moment(dataTime).fromNow() : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || require('../assets/images/avatar.svg')
    }
  }
}

export const emptyCoverFilter = {
  filters: {
    emptyCover(src) {
      return src || require('../assets/images/cover-img.jpg')
    }
  }
}

export const atAccountFilter = {
  filters: {
    atAccount(account) {
      return '@' + account
    }
  }
}
