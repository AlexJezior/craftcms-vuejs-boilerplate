<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'About',
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
