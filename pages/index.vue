<template>
  <div class="bg">
    <h1>Welcome to our project</h1>
    <p>{{ print() }}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      windowHeigh: screen.availHeight
    }
  },
  created () {
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log(screen.availHeight)
    }
  }
}
</script>

<style>

</style>
