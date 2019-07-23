<template>
  <header class="border-t-8 border-red">
    <nav class="container mx-auto flex justify-between items-center py-12">
      <a href="/">
        <img src="~/assets/img/logo.svg" alt="Bryan J. Hickey Logo" />
      </a>
      <ul class="uppercase tracking-wide font-bold flex items-center">
        <li class="mr-8">
          <nuxt-link to="/about" class="text-gray-800 hover:text-red">About</nuxt-link>
        </li>
        <li class="mr-8">
          <nuxt-link to="/work" class="text-gray-800 hover:text-red">Work</nuxt-link>
        </li>
        <li class="mr-8">
          <nuxt-link to="/tools" class="text-gray-800 hover:text-red">Tools</nuxt-link>
        </li>
        <li class="mr-8">
          <nuxt-link to="/articles" class="text-gray-800 hover:text-red">Articles</nuxt-link>
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

