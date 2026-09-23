<script setup lang="ts">
import EmptySiteHeader from '~/components/empty/EmptySiteHeader.vue'
import EmptyHero from '~/components/empty/EmptyHero.vue'
import EmptyDirections from '~/components/empty/EmptyDirections.vue'
import EmptyProblem from '~/components/empty/EmptyProblem.vue'
import EmptyTech from '~/components/empty/EmptyTech.vue'
import EmptyRoofSection from '~/components/empty/EmptyRoofSection.vue'
import EmptyFoundationSection from '~/components/empty/EmptyFoundationSection.vue'
import EmptyIndustrialSection from '~/components/empty/EmptyIndustrialSection.vue'
import EmptyMaterialsCatalog from '~/components/empty/EmptyMaterialsCatalog.vue'
import EmptyEconomy from '~/components/empty/EmptyEconomy.vue'
import EmptyCalculator from '~/components/empty/EmptyCalculator.vue'
import EmptyLeadForm from '~/components/empty/EmptyLeadForm.vue'
import EmptySchool from '~/components/empty/EmptySchool.vue'
import EmptyPartners from '~/components/empty/EmptyPartners.vue'
import EmptyCases from '~/components/empty/EmptyCases.vue'
import EmptyDocsReviews from '~/components/empty/EmptyDocsReviews.vue'
import EmptyAbout from '~/components/empty/EmptyAbout.vue'
import EmptyFinalCta from '~/components/empty/EmptyFinalCta.vue'
import EmptyFooter from '~/components/empty/EmptyFooter.vue'
import EmptyStickyMobileCta from '~/components/empty/EmptyStickyMobileCta.vue'

// SEO по пункту 30 ТЗ
useHead({
  title: 'LIQUID RUBBER PROTECTION — Бесшовная гидроизоляция кровель и фундаментов жидкой резиной',
  meta: [
    {
      name: 'description',
      content:
        'Российский производитель и технологический партнёр LRP: бесшовная гидроизоляция кровли, фундамента и промышленных конструкций без демонтажа. Материалы SPRAY-TEC и профессиональное нанесение.',
    },
    { property: 'og:title', content: 'LIQUID RUBBER PROTECTION — Бесшовная гидроизоляция' },
    {
      property: 'og:description',
      content:
        'Технологии бесшовной гидроизоляции жидкой резиной: защита кровли и фундамента, увеличение срока службы конструкции, устранение риска протечек.',
    },
    { property: 'og:image', content: '/roof-application.jpg' },
    { property: 'og:type', content: 'website' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LIQUID RUBBER PROTECTION',
        url: 'https://lrprotec.ru',
        logo: 'https://lrprotec.ru/logo.png',
        telephone: '+7-909-357-82-22',
        description:
          'Российский производитель и технологический партнёр в области бесшовной напыляемой гидроизоляции жидкой резиной.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RU',
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="empty-site">
    <!-- Шапка с навигацией и контактами -->
    <EmptySiteHeader />

    <main id="main-content">
      <!-- Первый экран Hero -->
      <EmptyHero />

      <!-- Блок «Что мы защищаем» с маскотами Otter & Rhino -->
      <EmptyDirections />

      <!-- Блок «Проблема: Вода разрушает конструкцию постепенно» -->
      <EmptyProblem />

      <!-- Интерактивная технология и схема слоёв -->
      <EmptyTech />

      <!-- Раздел «Кровля» -->
      <EmptyRoofSection />

      <!-- Раздел «Фундамент и подземные сооружения» -->
      <EmptyFoundationSection />

      <!-- B2B «Промышленная гидроизоляция» -->
      <EmptyIndustrialSection />

      <!-- Каталог материалов LRP (SPRAY-TEC, PRO-TEC, инъекционные смолы) -->
      <EmptyMaterialsCatalog />

      <!-- Экономика решения (сравнение с капремонтом со вскрытием) -->
      <EmptyEconomy />

      <!-- Интерактивный калькулятор -->
      <EmptyCalculator />

      <!-- Форма заявки и CRM -->
      <EmptyLeadForm />

      <!-- Школа жидкой резины -->
      <EmptySchool />

      <!-- Партнёрская программа и рынок 3.5 млн м² -->
      <EmptyPartners />

      <!-- Инженерные кейсы (в т.ч. Кровля 1800 м²) -->
      <EmptyCases />

      <!-- Документы, сертификаты ГОСТ и отзывы -->
      <EmptyDocsReviews />

      <!-- О компании LRP -->
      <EmptyAbout />

      <!-- Финальный призыв к действию -->
      <EmptyFinalCta />
    </main>

    <!-- Подвал сайта -->
    <EmptyFooter />

    <!-- Прилипающая мобильная панель CTA -->
    <EmptyStickyMobileCta />
  </div>
</template>

<style scoped>
.empty-site {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #121417;
  background: #ffffff;
  min-height: 100vh;
  padding-bottom: 0;
}

@media (max-width: 768px) {
  .empty-site {
    padding-bottom: 4.5rem; /* отступ для мобильной прилипающей панели */
  }
}
</style>
