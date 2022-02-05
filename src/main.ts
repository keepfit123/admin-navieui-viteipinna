import {
    NButton,
    create,NInput,NSpace
} from 'naive-ui'

import App from './App.vue'
import { createApp } from 'vue'

const naive = create({
    components: [NButton,NInput,NSpace]
  })
createApp(App).use(naive).mount('#app')
