<template>
  <c-flex
    as="nav"
    h="54px"
    align="center"
    justify="center"
    bg="white"
    position="sticky"
    top="0"
    z-index="10"
    border-bottom="1px solid"
    border-bottom-color="gray.300"
  >
    <!-- logo -->
    <c-flex w="5xl" justify="space-between" align="center" h="32px">
      <chakra.img src="/src/assets/insta-logo.png" alt="instagram logo" max-height="100%" />
      <!-- search -->
      <c-box :d="['none', 'none', 'flex']" px="1" border="1px solid" border-color="gray.300" border-radius="3px">
        <c-icon name="search" my="auto" color="gray.300" />
        <chakra.input type="text" placeholder="search" px="3" />
      </c-box>
      <!-- icons menu -->
      <c-flex>
        <c-icon name="home" size="1.5em" mr="3" />
        <c-icon name="send" size="1.5em" mr="3" />
        <c-icon name="compass" size="1.5em" mr="3" />
        <c-icon name="heart" size="1.5em" mr="3" />
        <chakra.img src="/src/assets/avatar.jpg" h="1.5em" alt="avatar" rounded="full" />
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script lang="ts">

export default {
  name: "INavbar"
}
</script>
