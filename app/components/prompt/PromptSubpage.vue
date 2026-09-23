<script setup lang="ts">
import PromptHeader from '~/components/prompt/PromptHeader.vue'
import PromptFooter from '~/components/prompt/PromptFooter.vue'
import PromptMobileCta from '~/components/prompt/PromptMobileCta.vue'
import PromptLead from '~/components/prompt/PromptLead.vue'
import PromptFinalCta from '~/components/prompt/PromptFinalCta.vue'

const props = defineProps<{
  title: string
  lead: string
  eyebrow?: string
}>()

useHead({
  title: `${props.title} — Liquid Rubber Protection`,
  meta: [{ name: 'description', content: props.lead }],
})
</script>

<template>
  <div class="prompt-site">
    <PromptHeader />
    <main>
      <section class="p-section sub">
        <div class="p-container">
          <p v-if="eyebrow" class="p-eyebrow">{{ eyebrow }}</p>
          <h1 class="p-title" style="max-width: 20ch">{{ title }}</h1>
          <p class="p-lead">{{ lead }}</p>
          <div class="sub__body">
            <slot />
          </div>
          <a href="#p-lead" class="p-btn p-btn--primary sub__cta">Получить расчёт</a>
        </div>
      </section>
      <PromptLead />
      <PromptFinalCta />
    </main>
    <PromptFooter />
    <PromptMobileCta />
  </div>
</template>

<style scoped>
.sub__body {
  margin-top: 1.75rem;
  display: grid;
  gap: 0.75rem;
  max-width: 70ch;
  color: var(--p-slate);
  line-height: 1.55;
}

.sub__cta {
  margin-top: 1.75rem;
}
</style>
