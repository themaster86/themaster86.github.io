<template>
  <div class="container">
    <div class="row">
      <!-- Bloque de texto -->
      <div class="col-md-6">
        <div class="text-container p-3">
          <h1>{{ welcomeText }}</h1>
          <div v-html="description"></div>
        </div>
      </div>

      <!-- Bloque de imagen -->
      <!-- Bloque de imagen -->
      <div class="col-md-6">
        <img
          src="@/assets/logoTH.webp"
          class="img-fluid"
          style="max-width: 100%; height: auto;"
          alt="Imagen Contacto logo translationHub"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useLanguagesStore } from "@/components/stores/languages";

export default defineComponent({
  name: "Join",
  setup() {
    const router = useRouter();
    const languagesStore = useLanguagesStore(); // Obtiene el store de idiomas

    // Define las cadenas de texto para cada idioma
    const welcomeTexts = {
      es: "Contáctanos",
      de: "Kontaktieren Sie uns",
      en: "Contact us",
    };
    const descriptions = {
      es: "Tel: +34 684 300 165<br><br> E-mail: <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
      de: "Tel: +34 684 300 165<br><br> E-mail: <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
      en: "Tel: +34 684 300 165<br><br> E-mail: <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
    };

    // Observa los cambios en el idioma actual
    const currentLanguage = computed(() => languagesStore.getCurrentLanguage);

    // Propiedad computada para obtener el texto de bienvenida según el idioma actual
    const welcomeText = computed(() => welcomeTexts[currentLanguage.value]);
    const description = computed(() => descriptions[currentLanguage.value]);

    // Observa los cambios en la ruta y actualiza el idioma actual
    watch(() => router.currentRoute.value.query.lang, (newLang) => {
      languagesStore.setCurrentLanguage(newLang || "es"); // Actualiza el idioma en el store
    });

    return {
      currentLanguage,
      welcomeText,
      description,
    };
  },
});
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Estilos para el enlace de correo electrónico */
.text-container a {
  font-size: 18px; /* Ajusta el tamaño del texto del enlace */
  text-decoration: underline; /* Subraya el enlace para que sea más visible */
}

.text-container description {
  font-size: 50px; /* Ajusta el tamaño de fuente de la descripción */
}
</style>
