<template>
  <!-- <app-header /> -->
  <div id="fh5co-wrap">
    <router-view />
  </div>
  <app-footer />
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent } from 'vue'

/**
 * App
 */
export default defineComponent({
  name: 'App',
  components: {
    // 'app-header': defineAsyncComponent(() => import('@/components/layout/Header.vue')),
    'app-footer': defineAsyncComponent(() => import('@/components/layout/Footer.vue')),
  }
});
</script>