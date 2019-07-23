<template>
    <header class="border-t-8 border-red-700">
        <nav class="container mx-auto flex justify-between items-center py-8">
            <a href="/">Logo</a>
            <ul class="uppercase tracking-wide font-bold flex items-center">
                <li class="mr-8">
                    <nuxt-link to="/about" class="text-gray-800 hover:text-red-700">About</nuxt-link>
                </li>
                <li class="mr-8">
                    <nuxt-link to="/work" class="text-gray-800 hover:text-red-700">Work</nuxt-link>
                </li>
                <li class="mr-8">
                    <nuxt-link to="/tools" class="text-gray-800 hover:text-red-700">Tools</nuxt-link>
                </li>
                <li class="mr-8">
                    <nuxt-link to="/articles" class="text-gray-800 hover:text-red-700">Articles</nuxt-link>
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

