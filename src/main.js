import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  }),

  // Add a meta tag
  head.meta.push({
    name: "p:domain_verify",
    content: "32b98802270ed243841884e2ca3a9709"
  })
}