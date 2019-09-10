import directive from './directive'

export default {
  install(Vue) {
    Vue.directive('ripple', directive)
  },
}

export { directive }