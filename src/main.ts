import { createApp } from 'vue'
import App from './App.vue'
import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import {
  feCompass,
  feHeart,
  feHome,
  feMessageCircle,
  feSearch
} from 'feather-icons-paths'

const app = createApp(App)

app.use(ChakraUIVuePlugin, {
  icons: {
    library: {
      feCompass,
      feHeart,
      feHome,
      feMessageCircle,
      feSearch
    }
  }
})

domElements.forEach((tag) => {
  app.component(`chakra.${tag}`, chakra(tag))
})

app.mount('#app')
