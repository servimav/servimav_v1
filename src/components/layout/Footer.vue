<template>
  <footer id="fh5co-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Sobre Nosotros</h3>
          <p class="text-justify">Servimav S.R.L es una MiPYME que brinda de servicios de chapea manual y mecanizada,
            poda, tala, carga y
            recogida
            de escombros, guataquea y jardinería.</p>
        </div>
        <div class="col-md-3 col-md-push-1">
          <h3>Documentos</h3>
          <ul>
            <li>
              <a href="registros/RegistroMercantil.pdf">Registro Mercantil</a>
            </li>
            <li>
              <a href="registros/EscrituraNotarial.pdf">Escritura Notarial</a>
            </li>
            <li>
              <a href="registros/IdFiscal.pdf">Identificador Fiscal</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-md-push-1">
          <h3>Nuestras redes</h3>
          <ul class="fh5co-social">
            <li>
              <a href="mailto:servimav@yahoo.com">
                <i class="icon-envelope"></i>
                <span>servimav@yahoo.com</span>
              </a>
            </li>
            <li>
              <a href="tel:59887002">
                <i class="icon-phone"></i>
                <span>+53 59887002</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/message/Y54XFXFT2B3VG1">
                <i class="icon-whatsapp"></i>
                <span>Whatsapp</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/servimavsrl">
                <i class="icon-facebook"></i>
                <span>Página de Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 fh5co-copyright text-center">
          <p>
            <small>&copy; {{ new Date().getFullYear() }} Servimav S.R.L Todos los Derechos Reservados.</small>
            <!-- <small>
              Made with care by
              <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images:
              <a href="http://unsplash.com" target="_blank">Unsplash</a>
            </small>-->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

/**
 * AppFooter
 */
export default defineComponent({
  name: 'AppFooter'
});
</script>