<template>
  <div class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2>Información de Contacto</h2>
          <p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains.</p>

          <p>
            Calle Silencio #32 e/ Calle Cerize y Calle Villuendas
            <br />Palmira, Cienfuegos, República de Cuba
          </p>
          <p>
            <a href="mailto:servimav@yahoo.com">servimav@yahoo.com</a>
          </p>
          <p>
            <a href="#">+123 456 7890</a>
          </p>
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