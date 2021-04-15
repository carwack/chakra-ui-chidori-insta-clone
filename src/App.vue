<template>
  <c-reset />
  <!-- navbar -->
  <INavbar />
  <!-- feed -->
  <!-- sidebar -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import INavbar from './components/INavbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    INavbar
  }
})
</script>
