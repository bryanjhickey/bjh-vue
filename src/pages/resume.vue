<template>
  <layout>
    <div class="container mx-auto">
      <div class="flex flex-wrap pt-16 lg:py-32">
        <h1 class="font-black text-4xl lg:text-5xl mb-10 text-xl uppercase leading-tight">Resumé</h1>
        <h2 class="w-full border-black text-xl border-b-1 mb-8">SKILLS</h2>
        <ul class="skills list-disc ml-4" data-columns="2">
          <li class="mb-2" v-for="(skill, s) in skills" :key="s">{{ skill.description }}</li>
        </ul>
        <h2 class="w-full border-black text-xl border-b-1 mt-16 mb-8">WORK EXPERIENCE</h2>
        <section class="w-full flex flex-wrap my-8" v-for="(job, j) in jobs" :key="j">
          <h2 class="text-xl mb-4">
            <span class="mr-4">{{ job.position }}</span>
            <span class="uppercase font-bold text-sm">{{ job.company}}</span>
            <span class="uppercase text-sm ml-4">{{ job.timeframe}}</span>
          </h2>
          <ul class="w-full list-disc ml-4">
            <li
              class="mb-2"
              v-for="(experience, e) in job.experiences"
              :key="e"
            >{{ experience.details }}</li>
          </ul>
        </section>
        <p>
          You can find a selection of my design work on
          <a
            target="_blank"
            rel="noopener"
            href="https://www.behance.net/bigmanmedia"
          >Behance</a> and my code on
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/bryanjhickey"
          >Github</a>
        </p>
      </div>
    </div>
  </layout>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { description: "Excellent verbal and written communication" },
        {
          description: "Proficient problem solver with strong analytical skills"
        },
        {
          description:
            "Advanced computer experience across a range of applications"
        },
        { description: "Experience in sales and customer relations" },
        {
          description: "Willing team player and ability to work independently"
        },
        { description: "Photography and Creative Direction" },
        { description: "Video planning and Production" },
        { description: "Content creation and copy writing" },
        { description: "Event planning, coordination and facilitation" },
        { description: "Budget forecasting and cost reporting" },
        { description: "Set up and configure email services" },
        {
          description:
            "Email marketing and template creation with Mailchimp and Campaign Monitor"
        },
        {
          description:
            "Technical data communication through data sheets and marketing material"
        },
        {
          description:
            "Advertising planning and negotiation and creative delivery"
        },
        {
          description: "Analytics setup and reporting for web and social media"
        },
        {
          description:
            "Graphic Design with Photoshop, Illustrator and InDesign and press-ready proofs for print"
        },
        { description: "UI/UX designs with Sketch and Adobe XD" },
        {
          description:
            "Websites using Craft CMS, ExpressionEngine, Drupal, Joomla and Wordpress"
        },
        {
          description:
            "JavaScript SSR sites with Gridsome, Nuxt and Gatsby and headless CMSs with GraphQL, Axios and Apollo"
        },
        {
          description:
            "CSS Frameworks using Foundation, Bulma and Tailwind CSS and CSS BEM naming conventions with SASS, SCSS, PostCSS"
        },
        { description: "Build tools like Grunt/Gulp and Webpack" },
        {
          description:
            "Accessibility and Performance Testing with Chrome Audits and Pa11y npm module"
        },
        {
          description:
            "Version control with Git and Github and Continuous Integration services like Netlify"
        },
        {
          description:
            "Server creation and server setup using various VPS providers and S3 for static asset serving"
        }
      ],
      jobs: [
        {
          position: "Director",
          company: "Big Man Media",
          timeframe: "2011-Present",
          experiences: [
            {
              details:
                "Establish and maintain positive relationships with a range of customers, suppliers and industry peers"
            },
            {
              details:
                "Maintain motivation and positive independent working skills and habits"
            },
            {
              details:
                "Fulfil accounting and tax-related obligations and returns"
            },
            {
              details: "Promote business through networks and industry events"
            },
            { details: "Prospecting and securing new contract work" },
            {
              details:
                "Assess and manage risk through contract negotiation and sign-off"
            },
            {
              details:
                "Taking ownership over the growth and flat periods of business growth"
            },
            {
              details:
                "Execute client work in a timely, honest and excellent manner"
            }
          ]
        },
        {
          position: "Marketing & Communications",
          company: "Renegade MMA",
          timeframe: "2011-Present",
          summary:
            "Part time (1 day per week) to establish and grow the business through marketing, website creation and management and customer engagement",
          experiences: [
            {
              details:
                "Establish consistent use of logos, typography, image style and tone of voice across internal and external communications"
            },
            {
              details:
                "Develop, plan and execute marketing efforts across print, social media and email to achieve business goals"
            },
            {
              details:
                "Develop unique and compelling marketing touch-points against competitor analysis"
            },
            {
              details:
                "Content creation and scheduling of social media marketing and customer emails"
            },
            {
              details:
                "Develop online booking system to reduce staff time and increase early customer engagement"
            }
          ]
        },
        {
          position: "Marketing Communications Manager",
          company: "Dindas Australia",
          timeframe: "2019-2020",
          experiences: [
            {
              details:
                "Established new direction and standards for brand identity through refreshing and significantly expanding an existing brand identity."
            },
            {
              details: "Instituted DAM Library using Sharepoint and MS Teams."
            },
            {
              details:
                "Formalised design requests and approvals process for marketing and creative support."
            },
            {
              details:
                "Developed industry training modules for online learning system (NatBuild)."
            },
            {
              details:
                "Audits of existing marketing strategy and competitive analysis reporting to CEO."
            }
          ]
        },

        {
          position: "Marketing Coordinator",
          company: "Interpack",
          summary:
            "Contract work with manufacturing company to position themselves as premium suppliers within their B2B niche",
          timeframe: "2017-2019",
          experiences: [
            {
              details:
                "Comprehensive review of existing brand, marketing and promotional efforts"
            },
            {
              details:
                "Competitor analyse (locally and globally) and report to business unit directors"
            },
            {
              details:
                "Audit and analyse product offering and identify under-promoted offerings"
            },
            {
              details:
                "Consensus building and collaborative engagement with multiple business units and category experts"
            },
            {
              details:
                "Plan, schedule and develop organic social media content and engagement"
            },
            {
              details:
                "Design data sheets, promotional flyers and brochures in line with brand guidelines"
            },
            {
              details:
                "Plan and develop material for trade shows, conferences and seminars"
            },
            {
              details:
                "Budget and negotiate favourable advertising arrangements and sponsorship opportunities"
            }
          ]
        },
        {
          position: "Web Designer",
          company: "City on a Hill",
          timeframe: "2011-2017",
          experiences: [
            { details: "Lead UX sessions with small team" },
            {
              details:
                "Websites with Wordpress, Expression Engine and Craft CMSs"
            },
            {
              details:
                "Front end coding of primary website using EE Syntax and Twig"
            },
            { details: "Foundation 6 for custom design components" },
            { details: "BBC Gel Typography and Grid npm modules" },
            { details: "Payment integration with Stripe" },
            { details: "Large Audio resource library with analytics" }
          ]
        }
      ]
    };
  }
};
</script>

<style scopped>
.skills {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>