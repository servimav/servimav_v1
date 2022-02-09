<template>
  <header id="fh5co-header">
    <div class="container">
      <nav class="fh5co-main-nav">
        <ul>
          <li class="fh5co-active">
            <a href="index.html">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="services.html">
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="about.html">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="contact.html">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

/**
 * AppHeader
 */
export default defineComponent({
  name: 'AppHeader'
});
</script>