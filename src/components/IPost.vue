<template>
  <c-box
    bg="white"
    border-color="gray.300"
    border-width="thin"
    rounded="md"
    mb="6"
  >
    <c-flex m="3">
      <!-- avatar -->
      <chakra.img :src="avatar" h="3em" :alt="username" rounded="full" mr="4" />
      <!-- text -->
      <c-flex flex-direction="column" flex="1">
        <c-text font-weight="bold" font-size="sm">{{ username }}</c-text>
        <c-text font-size="sm" opacity="0.7">{{ location }}</c-text>
      </c-flex>
    </c-flex>
    <c-aspect-ratio max-w="2xl" :ratio="1 / 1">
      <chakra.img 
        :src="image"
        :alt="caption"
        object-fit="cover"
      />
    </c-aspect-ratio>
    <c-flex p="4">
      <c-flex>
        <c-icon size="6" name="heart" mr="3" />
        <c-icon size="6" name="message-circle" mr="3" />
        <c-icon size="6" name="send" />
      </c-flex>
      <c-icon size="6" ml="auto" name="bookmark" />
    </c-flex>
    <c-box mx="4">
      <c-text font-weight="bold">18 likes</c-text>
      <c-box mb="2">
        <c-text font-size="sm">
          <chakra.span font-weight="bold" mr="2">{{ username }}</chakra.span> {{ caption }}
        </c-text>
      </c-box>
      <c-text
        color="gray.500"
        text-transform="uppercase"
        mb="2"
        font-size="0.7em"
      >
        {{ date }}
      </c-text>
    </c-box>
    <c-flex p="4" align="center" border-top="1px solid" border-color="gray.300" h="16">
      <c-icon name="smile" size="6" />
      <chakra.input type="text" placeholder="Add a comment..." mx="4" px="2" flex="1" />
      <c-button variant="ghost" font-size="sm" font-weight="bold" color="blue.400">Post</c-button>
    </c-flex>
  </c-box>
</template>

<script lang="ts">
export default {
  name: 'IPost',
  props: {
    username: {
      type: String,
      default: '',
      required: true
    },
    avatar: {
      type: String,
      default: '',
      required: true
    },
    location: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
      required: true
    },
    date: {
      type: String,
      default: '',
      required: true
    },
    caption: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
