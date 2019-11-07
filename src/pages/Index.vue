<template>
  <layout>
    <div class="container mx-auto">
      <div class="flex flex-wrap pt-16 lg:py-32">
        <div class="w-full lg:w-1/2">
          <h1
            class="font-black text-4xl lg:text-5xl mb-10 text-xl uppercase leading-tight"
          >Hi, I’m Bryan</h1>
          <h2
            class="font-bold uppercase text-lg"
          >a full stack web developer living in Melbourne, Australia.</h2>
          <div class="mt-10">
            <p class="mb-4 text-md leading-loose">
              I started making things on the internet around the time Ethan Marcotte wrote his first article on
              <a
                href="https://alistapart.com/article/responsive-web-design/"
                target="_blank"
                rel="noopener"
              >responsive web design</a> in 2010.
            </p>
            <p
              class="mb-4 text-md leading-loose"
            >A lot has changed since then, but my passion for what is possible with HTML, CSS and JavaScript has not waned.</p>
            <p class="text-md leading-loose">The internet can be great. I’m striving to make it so.</p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 mt-12 lg:mb-0">
          <img
            class="mr-auto lg:mr-0 ml-auto"
            src="@/assets/img/walking-code.svg"
            alt="Illustration of man outside walking post a webpage billboard"
          />
        </div>
      </div>
      <div class="flex flex-wrap flex-col flex-col-reverse lg:flex-row my-12 lg:my-32">
        <div class="ml-auto mr-auto w-4/6 lg:w-1/2">
          <img
            class="ml-auto mr-auto mt-12 lg:mt-0"
            src="@/assets/img/code-examples.svg"
            alt="Illustration of man pointing at example web development tools"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <div class="lg:ml-32 mt-12 lg:-mt-24">
            <p
              class="mb-4 text-md leading-loose"
            >For over 10 years, I've worked in a variety of roles with a large array of tools to get the job done right. From jpeg compressions to JavaScript frameworks, it's been a hell of ride. Along the way I've learnt that it’s not so much the tools that matter it's knowing how to solve problems with other people; that's the constant.</p>
            <p
              class="text-md leading-loose"
            >Most days you’ll find me crafting UI/UX designs and coding in some strain of modern front-end JavaScript framework. I can wrangle PHP and slay a DevOps assignment; it's all in a day's work really.</p>
            <div class="bg-gray-800 mt-10 p-6 font-mono text-xs text-gray-500">
              <p>
                <span class="text-gray-700">1&nbsp;&nbsp;</span>
                <span class="text-teal-500">$</span> git checkout new-skill
              </p>
              <p>
                <span class="text-gray-700">2&nbsp;&nbsp;</span>
                <span class="text-teal-500">$</span> git add -A
              </p>
              <p>
                <span class="text-gray-700">3&nbsp;&nbsp;</span>
                <span class="text-teal-500">$</span> git commit -m
                <span class="text-green-400">"new skill acquired"</span>
              </p>
              <p>
                <span class="text-gray-700">4&nbsp;&nbsp;</span>
                <span class="text-teal-500">$</span> git checkout master
              </p>
              <p>
                <span class="text-gray-700">5&nbsp;&nbsp;</span>
                <span class="text-teal-500">$</span> git merge new-skill
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {};
</script>

