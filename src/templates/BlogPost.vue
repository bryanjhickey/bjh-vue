<template>
  <Layout>
    <div class="article container lg:px-48">
      <div class="text-center">
        <h1
          class="font-black text-4xl lg:text-5xl mb-2 mt-16 text-xl uppercase leading-tight"
        >{{ $page.blogPost.title }}</h1>
        <p class="uppercase text-sm">{{ $page.blogPost.date }}</p>
      </div>
      <g-image class="h-64 w-full object-cover mt-24 mb-12" :src="$page.blogPost.image" />
      <div class="content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>

<style lang="css">
.content {
  @apply mb-48;
}
.content p {
  @apply text-lg;
  @apply leading-loose;
  @apply mb-4;
}
</style>