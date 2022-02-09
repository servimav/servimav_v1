<template>
  <div class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <slot>
            <h2>Creative Design</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
          </slot>
        </div>
        <div class="col-md-7">
          <img :src="img" alt="Servimav image" class="img-responsive" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

/**
 * ImageText
 */
export default defineComponent({
  name: 'ImageText',
  props: {
    img: {
      type: String,
      default: 'images/default.jpg'
    }
  }
});
</script>