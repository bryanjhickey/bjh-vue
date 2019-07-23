<template>
  <header class="border-red border-t-40">
    <nav class="container mx-auto flex justify-between items-center py-12">
      <a href="/">
        <img src="~/assets/img/logo.svg" alt="Bryan J. Hickey Logo" class="w-3/4" />
      </a>
      <ul class="uppercase tracking-wide font-black flex items-center">
        <li>
          <nuxt-link
            to="/about"
            class="mr-4 text-gray-800 px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
          >About</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/work"
            class="mr-4 text-gray-800 px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
          >Work</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/tools"
            class="mr-4 text-gray-800 px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
          >Tools</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/articles"
            class="mr-4 text-gray-800 px-4 pb-2 border-b-2 border-white hover:text-red hover:border-red"
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

