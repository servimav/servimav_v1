<template>
  <div
    class="fh5co-parallax"
    :style="`background-image: url(${img});`"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table"
        >
          <div class="fh5co-intro fh5co-table-cell">
            <slot name="before-title"></slot>
            <h1 class="text-center">{{ title }}</h1>
            <slot>
              <p>
                Made with love by the fine folks at
                <a href="http://freehtml5.co">FreeHTML5.co</a>
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

/**
 * BannerParallax
 */
export default defineComponent({
  name: 'BannerParallax',
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: 'images/default.jpg'
    }
  }
});
</script>