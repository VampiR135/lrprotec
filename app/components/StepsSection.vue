<script setup lang="ts">
const steps = [
  { title: 'Обследование', text: 'Состояние конструкции и источник проникновения воды.' },
  { title: 'Диагностика', text: 'Причина, характер и масштаб проблемы.' },
  { title: 'Проектирование', text: 'Технология, материалы и последовательность работ.' },
  { title: 'Подготовка', text: 'Восстановление основания и подготовка поверхности.' },
  { title: 'Гидроизоляция', text: 'Основное покрытие и все необходимые узлы.' },
  { title: 'Контроль', text: 'Проверка качества выполненных работ.' },
  { title: 'Сопровождение', text: 'При необходимости — регулярный контроль системы.' },
]
</script>

<template>
  <section id="tech" class="section steps">
    <div class="container">
      <div class="steps__head">
        <p class="eyebrow">Технология</p>
        <h2 class="section-title">От проблемы — к результату за 7 шагов</h2>
        <p class="section-lead">
          Прозрачный инженерный процесс: не «просто напылили», а полный цикл
          от обследования до контроля качества.
        </p>
      </div>

      <ol class="steps__list">
        <li v-for="(step, i) in steps" :key="step.title" class="step">
          <span class="step__index">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  background:
    radial-gradient(ellipse 60% 50% at 100% 0%, var(--lrp-red-glow), transparent 60%),
    var(--lrp-black);
}

.steps__head {
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.steps__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  counter-reset: none;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
  padding: 1.35rem 1.2rem 1.4rem;
  border: 1px solid var(--lrp-line);
  border-top: 3px solid var(--lrp-red);
  background: var(--lrp-surface);
}

.step__index {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--lrp-red);
}

.step h3 {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.step p {
  font-size: 0.85rem;
  color: var(--lrp-text-dim);
  line-height: 1.45;
}

@media (max-width: 900px) {
  .steps__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 520px) {
  .steps__list {
    grid-template-columns: 1fr;
  }
}
</style>
