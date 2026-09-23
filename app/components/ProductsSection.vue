<script setup lang="ts">
const products = [
  {
    name: 'Spray-Tec Roof B-200',
    role: 'Кровля',
    result: 'Непрерывная гидроизоляционная мембрана',
    use: 'Плоские кровли, промышленные и общественные здания, реконструкция',
  },
  {
    name: 'Spray-Tec Base B-250',
    role: 'Фундамент и бетон',
    result: 'Конструкция защищена от воды',
    use: 'Фундаменты, подвалы, плиты, подземные сооружения',
  },
  {
    name: 'Spray-Tec Met B-300',
    role: 'Металл',
    result: 'Защита и снижение риска коррозии',
    use: 'Металлоконструкции, инженерные и промышленные объекты',
  },
  {
    name: 'Pro-Tec Mast S-200',
    role: 'Узлы',
    result: 'Сложный узел не становится слабым местом',
    use: 'Примыкания, проходки, швы, трещины, локальный ремонт',
  },
]
</script>

<template>
  <section id="products" class="section products">
    <div class="container">
      <div class="products__head">
        <p class="eyebrow">Линейка</p>
        <h2 class="section-title">Материалы системы — под задачу объекта</h2>
        <p class="section-lead">
          Краткая карта продуктов франшизы. На объекте подбираем связку материалов,
          а не «один состав на всё».
        </p>
      </div>

      <div class="products__list">
        <article v-for="p in products" :key="p.name" class="product">
          <div class="product__role">{{ p.role }}</div>
          <h3>{{ p.name }}</h3>
          <p class="product__result">{{ p.result }}</p>
          <p class="product__use">{{ p.use }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products__head {
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.products__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.product {
  padding: 1.5rem 1.35rem;
  background: var(--lrp-surface);
  border: 1px solid var(--lrp-line);
  transition: border-color 0.25s var(--ease-out);
}

.product:hover {
  border-color: color-mix(in srgb, var(--lrp-red) 55%, var(--lrp-line));
}

.product__role {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--lrp-red);
  margin-bottom: 0.65rem;
}

.product h3 {
  font-size: 1.2rem;
}

.product__result {
  margin-top: 0.75rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
}

.product__use {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--lrp-muted);
}

@media (max-width: 720px) {
  .products__list {
    grid-template-columns: 1fr;
  }
}
</style>
