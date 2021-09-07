<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState({
      pageLoading: (state) => state.pageLoading,
    }),
  },
  mounted() {
    setTimeout(() => {
      this.setPageLoadingFalse()
    }, 300)
  },
  methods: {
    ...mapMutations({
      setPageLoadingFalse: 'setPageLoadingFalse',
    }),
  },
}
</script>
