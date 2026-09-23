// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Liquid Rubber Protection — гидроизоляция инженерных систем',
      meta: [
        {
          name: 'description',
          content:
            'Бесшовная напыляемая гидроизоляция Liquid Rubber Protection для кровли, фундамента и металла. Обследование объекта и расчёт стоимости.',
        },
        { name: 'theme-color', content: '#0A0A0A' },
        { property: 'og:title', content: 'Liquid Rubber Protection' },
        {
          property: 'og:description',
          content: 'Лидер отрасли в области гидроизоляционных систем. Решение проблемы воды.',
        },
        { property: 'og:image', content: '/hero-otter.jpg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geologica:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css', '~/assets/css/prompt.css'],
})
