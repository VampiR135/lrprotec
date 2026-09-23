<script setup lang="ts">
import PromptHeader from '~/components/prompt/PromptHeader.vue'
import PromptFooter from '~/components/prompt/PromptFooter.vue'
import PromptMobileCta from '~/components/prompt/PromptMobileCta.vue'
import PromptHero from '~/components/prompt/PromptHero.vue'
import PromptDirections from '~/components/prompt/PromptDirections.vue'
import PromptProblem from '~/components/prompt/PromptProblem.vue'
import PromptTech from '~/components/prompt/PromptTech.vue'
import PromptRoof from '~/components/prompt/PromptRoof.vue'
import PromptFoundation from '~/components/prompt/PromptFoundation.vue'
import PromptIndustrial from '~/components/prompt/PromptIndustrial.vue'
import PromptEconomy from '~/components/prompt/PromptEconomy.vue'
import PromptCalculator from '~/components/prompt/PromptCalculator.vue'
import PromptLead from '~/components/prompt/PromptLead.vue'
import PromptSchool from '~/components/prompt/PromptSchool.vue'
import PromptPartners from '~/components/prompt/PromptPartners.vue'
import PromptMarket from '~/components/prompt/PromptMarket.vue'
import PromptCases from '~/components/prompt/PromptCases.vue'
import PromptReviews from '~/components/prompt/PromptReviews.vue'
import PromptDocs from '~/components/prompt/PromptDocs.vue'
import PromptAbout from '~/components/prompt/PromptAbout.vue'
import PromptFinalCta from '~/components/prompt/PromptFinalCta.vue'

useHead({
  title: 'Liquid Rubber Protection — бесшовная гидроизоляция',
  meta: [
    {
      name: 'description',
      content:
        'Бесшовная гидроизоляция кровли, фундамента и промышленных конструкций. Материалы и профессиональное нанесение жидкой резины.',
    },
  ],
})
</script>

<template>
  <div class="prompt-site">
    <PromptHeader />
    <main>
      <PromptHero />
      <PromptDirections />
      <PromptProblem />
      <PromptTech />
      <PromptRoof />
      <PromptFoundation />
      <PromptIndustrial />
      <PromptEconomy />
      <PromptCalculator />
      <PromptLead />
      <PromptSchool />
      <PromptPartners />
      <PromptMarket />
      <PromptCases />
      <PromptReviews />
      <PromptDocs />
      <PromptAbout />
      <PromptFinalCta />
    </main>
    <PromptFooter />
    <PromptMobileCta />
  </div>
</template>
