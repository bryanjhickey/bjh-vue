<template>
  <Layout>
    <section class="article-list container my-24">
      <div class="flex flex-wrap">
        <div class="card w-full lg:w-1/2 lg:w mb-24 px0 lg:px-12">
          <div class="flex flex-wrap flex-col lg:flex-row">
            <div class="w-full">
              <h2 class="font-bold text-2xl uppercase mb-4">Title</h2>
            </div>
            <div class="w-full lg:w-1/3 mb-12 lg:my-0">
              <img class="w-24 w-full object-cover" src="https://i.imgur.com/qeKTrnD.jpg" alt />
            </div>
            <div class="w-full lg:w-2/3 px-0 lg:px-4">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, tenetur. Cupiditate maxime expedita cum officia? Consectetur aliquid, inventore amet accusamus et suscipit ab, dolorem eos aperiam officia ipsam est rem.</p>
            </div>
          </div>
        </div>

        <div class="card w-full lg:w-1/2 lg:w mb-24 px0 lg:px-12">
          <div class="flex flex-wrap flex-col lg:flex-row">
            <div class="w-full">
              <h2 class="font-bold text-2xl uppercase mb-4">Title</h2>
            </div>
            <div class="w-full lg:w-1/3 mb-12 lg:my-0">
              <img class="w-full object-cover" src="https://i.imgur.com/qeKTrnD.jpg" alt />
            </div>
            <div class="w-full lg:w-2/3 px-0 lg:px-4">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, tenetur. Cupiditate maxime expedita cum officia? Consectetur aliquid, inventore amet accusamus et suscipit ab, dolorem eos aperiam officia ipsam est rem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          image
        }
      }
    }
  }
</page-query>

<style scoped>
.home >>> .heading {
  margin-bottom: 70px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 20px;
}

ul li a h2 {
  margin-bottom: 10px;
}

span {
  font-size: 80%;
  padding: 0;
}

ul li p:first-child {
  margin-top: 3px;
}

ul li p {
  margin: 0;
  line-height: 1.5;
}
</style>