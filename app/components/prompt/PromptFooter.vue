<template>
  <footer class="pf">
    <div class="p-container pf__grid">
      <div>
        <p class="pf__brand">Liquid Rubber Protection</p>
        <p class="pf__desc">
          Технологии бесшовной гидроизоляции: материал, нанесение и инженерный подход
          в одном решении.
        </p>
      </div>
      <div>
        <p class="pf__title">Разделы</p>
        <ul>
          <li><NuxtLink to="/blank/krovlja">Кровля</NuxtLink></li>
          <li><NuxtLink to="/blank/fundament">Фундамент</NuxtLink></li>
          <li><NuxtLink to="/blank/tehnologiya">Технология</NuxtLink></li>
          <li><NuxtLink to="/blank/keysy">Кейсы</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="pf__title">Компания</p>
        <ul>
          <li><NuxtLink to="/blank/materialy">Материалы</NuxtLink></li>
          <li><NuxtLink to="/blank/shkola">Школа</NuxtLink></li>
          <li><NuxtLink to="/blank/partneram">Партнёрам</NuxtLink></li>
          <li><NuxtLink to="/blank/o-kompanii">О компании</NuxtLink></li>
          <li><NuxtLink to="/blank/kontakty">Контакты</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="p-container pf__legal">
      <p>Юридическая информация будет уточнена.</p>
      <p>Политика обработки персональных данных — раздел в подготовке.</p>
    </div>
  </footer>
</template>

<style scoped>
.pf {
  background: var(--p-graphite);
  color: #fff;
  padding: 3rem 0 2rem;
}

.pf__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2rem;
}

.pf__brand {
  font-size: 1.15rem;
  font-weight: 800;
}

.pf__desc {
  margin-top: 0.75rem;
  max-width: 36ch;
  color: var(--p-muted-dark);
  font-size: 0.92rem;
  line-height: 1.5;
}

.pf__title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--p-amber);
  margin-bottom: 0.85rem;
}

.pf ul {
  display: grid;
  gap: 0.45rem;
}

.pf a {
  color: var(--p-muted-dark);
  font-size: 0.92rem;
  font-weight: 600;
}

.pf a:hover {
  color: #fff;
}

.pf__legal {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--p-line-dark);
  display: grid;
  gap: 0.35rem;
  color: var(--p-muted-dark);
  font-size: 0.8rem;
}

@media (max-width: 800px) {
  .pf__grid {
    grid-template-columns: 1fr;
  }
}
</style>
