<script setup lang="ts">
const points = [
  'Отсутствие швов',
  'Единый эластичный защитный слой',
  'Обработка сложной геометрии',
  'Герметизация примыканий',
  'Высокая скорость нанесения',
  'Восстановление существующих конструкций',
  'Меньше потенциальных мест протечки',
]

const layers = [
  { id: 'base', label: 'Основание', desc: 'Подготовленная поверхность конструкции' },
  { id: 'spray', label: 'Нанесение', desc: 'Холодное напыление жидкой резины' },
  { id: 'membrane', label: 'Мембрана', desc: 'Формирование непрерывного слоя' },
  { id: 'protect', label: 'Защита', desc: 'Конструкция изолирована от воды' },
]

const active = ref('base')
</script>

<template>
  <section id="p-tech" class="p-section tech">
    <div class="p-container">
      <p class="p-eyebrow">Технология</p>
      <h2 class="p-title">Почему бесшовная гидроизоляция работает иначе</h2>
      <p class="p-lead">
        Вместо набора стыков — непрерывная мембрана, повторяющая геометрию объекта.
      </p>

      <div class="tech__layout">
        <ul class="tech__points">
          <li v-for="point in points" :key="point">{{ point }}</li>
        </ul>

        <div class="scheme" role="group" aria-label="Схема формирования мембраны">
          <button
            v-for="layer in layers"
            :key="layer.id"
            type="button"
            class="scheme__layer"
            :class="{ 'scheme__layer--active': active === layer.id }"
            @mouseenter="active = layer.id"
            @focus="active = layer.id"
          >
            <strong>{{ layer.label }}</strong>
            <span>{{ layer.desc }}</span>
          </button>
          <p class="scheme__hint">Наведите на этап, чтобы увидеть последовательность</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech__layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.tech__points {
  display: grid;
  gap: 0.55rem;
}

.tech__points li {
  padding: 0.8rem 0.95rem;
  background: var(--p-white);
  border-left: 3px solid var(--p-amber);
  font-weight: 600;
  font-size: 0.95rem;
}

.scheme {
  display: grid;
  gap: 0.55rem;
  padding: 1rem;
  background: var(--p-graphite);
  color: #fff;
}

.scheme__layer {
  text-align: left;
  border: 1px solid var(--p-line-dark);
  background: color-mix(in srgb, #fff 4%, transparent);
  color: inherit;
  padding: 0.95rem 1rem;
  cursor: pointer;
  font: inherit;
  display: grid;
  gap: 0.25rem;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.scheme__layer strong {
  font-size: 0.95rem;
}

.scheme__layer span {
  color: var(--p-muted-dark);
  font-size: 0.85rem;
}

.scheme__layer--active {
  border-color: var(--p-amber);
  background: color-mix(in srgb, var(--p-amber) 14%, transparent);
}

.scheme__hint {
  margin-top: 0.35rem;
  font-size: 0.8rem;
  color: var(--p-muted-dark);
}

@media (max-width: 860px) {
  .tech__layout {
    grid-template-columns: 1fr;
  }
}
</style>
