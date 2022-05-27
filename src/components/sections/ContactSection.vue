<template>
  <div class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2>Información de Contacto</h2>
          <p>Puede contactarnos mediante vía telefónica, email, Whatsapp, Facebook o en nuestro domicilio
            legal.</p>

          <p>
            Nos encontramos en: Calle Silencio #32 e/ Calle Cerize y Calle Villuendas
            <br />Palmira, Cienfuegos, República de Cuba
          </p>
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
        <div class="col-md-6 col-md-push-1">
          <form action="#">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Nombre" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group">
              <textarea class="form-control" cols="30" rows="10" placeholder="Mensaje"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Enviar Mensaje" class="btn btn-primary btn-md" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

/**
 * ContactSection
 */
export default defineComponent({
  name: 'ContactSection'
});
</script>