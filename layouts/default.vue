<template>
  <div class="font-sans text-black leading-normal flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
    components: {
        Header,
        Footer
    }
}
</script>
