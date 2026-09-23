<script setup lang="ts">
const benefits = [
  {
    title: 'Без швов и стыков',
    text: 'Единая мембрана повторяет геометрию основания и снижает риск протечек на соединениях.',
  },
  {
    title: 'Холодное напыление',
    text: 'Без открытого огня и токсичных растворителей. Безопаснее для объекта и людей.',
  },
  {
    title: 'На водной основе',
    text: 'Экологичная двухкомпонентная система без летучих вредных веществ.',
  },
  {
    title: 'Высокая адгезия',
    text: 'Надёжное сцепление с бетоном, металлом, подготовленными кровельными основаниями.',
  },
  {
    title: 'Эластичность',
    text: 'Покрытие сохраняет герметичность при деформациях и подвижках основания.',
  },
  {
    title: 'Сложные узлы под контролем',
    text: 'Примыкания, проходки и стыки закрываются специализированными материалами системы.',
  },
  {
    title: 'Скорость работ',
    text: 'Высокая производительность нанесения. Поверхность готова к эксплуатации через часы.',
  },
  {
    title: 'Ремонтопригодность',
    text: 'Локальный ремонт без полной переделки покрытия и без спецритуалов «с нуля».',
  },
]
</script>

<template>
  <section class="section benefits">
    <div class="container">
      <div class="benefits__head">
        <p class="eyebrow">Преимущества</p>
        <h2 class="section-title">Почему выбирают Liquid Rubber Protection</h2>
        <p class="section-lead">
          Качество материала и технология франшизы — в понятных выгодах для объекта
          и для бюджета ремонта.
        </p>
      </div>

      <div class="benefits__grid">
        <article v-for="item in benefits" :key="item.title" class="benefit">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  background: var(--lrp-charcoal);
  border-block: 1px solid var(--lrp-line);
}

.benefits__head {
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.benefit {
  padding: 1.35rem 1.3rem 1.45rem;
  background: var(--lrp-surface);
  border: 1px solid var(--lrp-line);
  border-left: 3px solid var(--lrp-red);
}

.benefit h3 {
  font-size: 1.1rem;
  margin-bottom: 0.65rem;
}

.benefit p {
  font-size: 0.95rem;
  color: var(--lrp-text-dim);
  line-height: 1.5;
}

@media (min-width: 961px) {
  .benefits__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .benefits__grid {
    grid-template-columns: 1fr;
  }
}
</style>
