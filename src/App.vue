<template>
  <LoadingScreen />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import 'sass/app';

#app {
  @apply text-center antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    @apply font-bold;
    color: #42b983;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
<script>
import LoadingScreen from '@/components/UI/LoadingScreen'
export default {
  components: { LoadingScreen },
}
</script>
