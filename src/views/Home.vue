<template>
  <div>
    <!-- Header -->
    <parallax-section img="images/grass3.jpg" title="Servimav S.R.L">
      <template v-slot:before-title>
        <img src="images/logo/logo_x128.png" alt="Servimav Logo" style="width:15rem" />
      </template>
      <p>Cuidando la belleza de la naturaleza</p>
    </parallax-section>
    <!-- / Header -->

    <!-- Brief Description -->
    <image-text-section img="images/logo/logo.png">
      <h2>Sobre SERVIMAV</h2>
      <p class="text-justify">Somos una MiPYME dedicada al cuidado, mantenimiento y embellecimiento de las áreas verdes
        de nuestros pueblos y ciudades. Nuestra intención es brindarle a los ciudadanos una vista refrescante de las
        áreas verdes.</p>
      <p>Nuestro aporte es permitir una fusión limpia y perceptible de la obra hecha por el hombre con la hecha por la
        naturaleza.</p>
    </image-text-section>

    <!-- / Brief Description -->

    <!-- Offers -->
    <parallax-section img="images/worker2.jpg" title="Nuestros Servicios">
      <p>Ofertamos servicios a empresas estatales, TCP, MiPYME y personas naturales</p>
    </parallax-section>
    <services-section />
    <!-- / Offers -->

    <parallax-section img="images/road.jpg" title="Empresa">
      <p>Sobre SERVIMAV S.R.L</p>
    </parallax-section>

    <!-- team -->
    <team-section :team="team" />
    <!--/ team -->

    <!-- Registros -->
    <text-section title="Objeto Social">
      <div class="col-md-6 text-justify">
        <p>Nuestro objeto social es: Prestación de servicios de chapea manual y mecanizada, poda, tala, carga y recogida
          de escombros, guataquea, jardinería en líneas de transmisión eléctricas y de comunicación, vías públicas
          (carreteras, líneas de ferrocarril, puertos), terrenos municipales (parques, zonas verdes, cementerios,
          etcétera), edificios públicos y semipúblicos (escuelas, hospitales, edificios administrativos, iglesias,
          etcétera), edificios industriales y comerciales, terrenos deportivos, parques infantiles y otros parques de
          recreo para mejorar el paisajismo de nuestros pueblos y comunidades.</p>
      </div>
      <div class="col-md-6 text-justify">
        <p>Puede solicitarnos una copia digital de nuestra Información Legal contactándonos a nuestro email, teléfonos,
          redes sociales o visitándo nuestro Domicilio Legal.</p>
      </div>
    </text-section>
    <!-- / Registros -->

    <parallax-section img="images/grass2.jpg" title="Contacto">
      <p>No dude en contactarnos</p>
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