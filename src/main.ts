import { createApp } from 'vue'
import App from './App.vue'
import ChakraUIVuePlugin, { chakra, extendTheme } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import {
  feBookmark,
  feCompass,
  feHeart,
  feHome,
  feMessageCircle,
  feSearch,
  feSend,
  feSmile
} from 'feather-icons-paths'

const app = createApp(App)

app.use(ChakraUIVuePlugin, {
  extendTheme: extendTheme({
    colors: {
      gray: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923'
      }
    }
  }),
  icons: {
    library: {
      feBookmark,
      feCompass,
      feHeart,
      feHome,
      feMessageCircle,
      feSearch,
      feSend,
      feSmile
    }
  }
})

domElements.forEach((tag) => {
  app.component(`chakra.${tag}`, chakra(tag))
})

app.mount('#app')
