import Vue from 'vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import '@/scss/main.scss'
import store from './store'
import router from './router'
import App from './App.vue'

import Flex from '@/components/utils/Flex.vue'
import Grid from '@/components/utils/Grid.vue'

Vue.component('Flex', Flex)
Vue.component('Grid', Grid)

library.add(fas);
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 