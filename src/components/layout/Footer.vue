<template>
  <footer id="fh5co-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Sobre Nosotros</h3>
          <p>Servimav S.R.L Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, unde repellat. Doloremque vitae nisi, mollitia vero ad amet.</p>
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
              <a href="tel:55555555">
                <i class="icon-phone"></i>
                <span>55555555</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-facebook"></i>
                <span>Facebook</span>
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