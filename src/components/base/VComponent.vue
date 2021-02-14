<template>
  <section class="mb-12 text-center">
    <h1
      class="font-weight-light mb-2"
      style="color:#3c4858; font-size:24px"
      v-text="`Mixer & Pack${heading}`"
    />

    <span
      class="font-weight-light"
      style="font-size: 16px; color: #3c4858"
    >
      Please checkout the
      <a
        :href="`https://mixerpack.es`"
        rel="noopener"
        target="_blank"
        class="secondary--text"
        style="text-decoration:none;"
      >
        full documentation
      </a>
    </span>
  </section>
</template>

<script>
  export default {
    name: 'VComponent',

    props: {
      heading: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      }
    }
  }
</script>
