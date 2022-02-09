<template>
  <div>
    <!-- Header -->
    <parallax-section img="images/10228.jpg" title="Servimav S.R.L">
      <template v-slot:before-title>
        <img src="images/logo_transparent.png" alt="Servimav Logo" style="width:15rem" />
      </template>
      <p>Cuidando la belleza de la naturaleza</p>
    </parallax-section>
    <!-- / Header -->

    <!-- Brief Description -->
    <image-text-section img="images/logo.png" />

    <!-- / Brief Description -->

    <!-- Offers -->
    <parallax-section img="images/worker2.jpg" title="Nuestros Servicios">
      <p>Ofertamos servicios a empresas estatales, TCP, MiPYME y personas naturales</p>
    </parallax-section>
    <services-section />
    <!-- / Offers -->

    <parallax-section img="images/road.jpg" title="Empresa">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis dignissimos</p>
    </parallax-section>

    <!-- team -->
    <team-section :team="team" />
    <!--/ team -->

    <!-- Registros -->
    <text-section title="Documentación Legal">
      <div class="col-md-6">
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
      </div>
      <div class="col-md-6">
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
      </div>
    </text-section>
    <!-- / Registros -->

    <parallax-section img="images/grass2.jpg" title="Contacto">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis dignissimos</p>
    </parallax-section>
    <contact-section />
  </div>
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent } from 'vue';
import { team } from '@/modules';
/**
 * MainPage
 */
export default defineComponent({
  name: 'MainPage',
  components: {
    'contact-section': defineAsyncComponent(() => import('@/components/sections/ContactSection.vue')),
    'team-section': defineAsyncComponent(() => import('@/components/sections/TeamSection.vue')),
    'image-text-section': defineAsyncComponent(() => import('@/components/sections/ImageTextSection.vue')),
    'parallax-section': defineAsyncComponent(() => import('@/components/sections/ParallaxSection.vue')),
    'services-section': defineAsyncComponent(() => import('@/components/sections/ServicesSection.vue')),
    'text-section': defineAsyncComponent(() => import('@/components/sections/TextSection.vue')),
  },
  setup() {
    return { team }
  }
});
</script>