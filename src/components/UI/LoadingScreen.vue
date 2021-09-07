<template>
  <div
    id="loading-screen-container"
    :class="{ loading: pageLoading, transitioning }"
  >
    <FontAwesomeIcon icon="spinner" spin />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoadingScreen',
  data() {
    return {
      transitioning: false,
    }
  },
  watch: {
    pageLoading(newVal) {
      if (newVal) return

      this.transitioning = true
      setTimeout(() => {
        this.transitioning = false
      }, 600)
    },
  },
  computed: {
    ...mapState({
      pageLoading: (state) => state.pageLoading,
    }),
  },
}
</script>

<style lang="scss" scoped>
#loading-screen-container {
  @apply fixed top-0 right-0 bottom-0 left-0 h-screen w-screen bg-white
    flex items-center justify-center opacity-0 text-9xl;
  color: #000000;
  z-index: -999999999999;

  &.transitioning {
    z-index: 9999999999;
    transition: opacity 0.3s ease-in;
  }

  &.loading {
    @apply opacity-100;
    z-index: 9999999999;
  }
}
</style>
