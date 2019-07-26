<template>
  <header class="border-red border-t-40">
    <nav class="container flex flex-wrap justify-center md:justify-between pt-12 pb-6 md:pt-24">
      <div class="flex items-center w-full">
        <a href="/" class="ml-auto mr-auto mb-12">
          <img src="~/assets/img/logo.svg" alt="Bryan J. Hickey Logo" class="ml-auto mr-auto" />
        </a>
      </div>
      <ul class="ml-auto mr-auto text-center uppercase tracking-wide font-black flex items-center">
        <li>
          <nuxt-link
            to="/about"
            class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
          >About</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/uses"
            class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
          >Uses</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/articles"
            class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
          >Articles</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

