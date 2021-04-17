<template>
  <c-box font-family="body" bg="gray.50" min-h="100vh" pb="32">
    <c-reset />
    <INavbar />
    <c-flex
      as="main"
      max-w="5xl"
      w="full"
      mx="auto"
    >
      <c-flex
        my="6"
        direction="column"
        align="stretch"
        float="left" 
        max-w="2xl"
        w="full"
        :mr="[0, 0, 6]"
      >
        <IPost
          v-for="(post, i) in posts"
          :key="i"
          :avatar="post.avatar"
          :username="post.username"
          :image="post.image"
          :caption="post.caption"
          :location="post.location"
          :date="post.date"
        />
      </c-flex>
      <ISidePanel />
    </c-flex>
  </c-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import INavbar from './components/INavbar.vue'
import IPost from './components/IPost.vue'
import ISidePanel from './components/ISidePanel.vue'

export default defineComponent({
  name: 'App',
  components: {
    INavbar,
    IPost,
    ISidePanel
  },
  data () {
    return {
      posts: [
        {
          username: 'SybrenW',
          avatar: 'https://pbs.twimg.com/profile_images/1306495804903915520/9FAg0JSJ_400x400.jpg',
          image: 'https://images.unsplash.com/photo-1615862401212-2bcf27129833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          caption: '😍 this is amazing',
          location: 'Yosemite',
          date: 'april 15'
        },
        {
          username: 'Euricom',
          avatar: 'https://pbs.twimg.com/profile_images/789395797527842816/ZlElRhqL_400x400.jpg',
          image: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/170024261_1186016778499932_6343985568406142437_n.jpg?tp=1&_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=LXhWzZI2RCIAX_xPCjG&edm=AP_V10EAAAAA&ccb=7-4&oh=4c53b4105ed56265af8cd7b55fa3ffdf&oe=609D4AD3&_nc_sid=4f375e',
          caption: 'Vorige week kwam de Euricom-paashaas persoonlijk langs bij onze Euricommers om hen te verwennen met wat lekkers ... Een chocolade paashaas van 1 kilogram, dat wordt smullen! 🍫🐰',
          date: 'april 6'
        },
        {
          username: 'Chakra UI Vue',
          avatar: 'https://pbs.twimg.com/profile_images/1257282259981234182/KUJHKmPi_400x400.jpg',
          image: 'https://images.unsplash.com/photo-1598063183638-4ffe7c5f0f8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          caption: 'Cherry blossom',
          location: 'Japan',
          date: 'april 1'
        }
      ]
    }
  }
})
</script>
