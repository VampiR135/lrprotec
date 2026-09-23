<script setup lang="ts">
const principles = [
  {
    title: 'Инженерный подход к каждому узлу',
    desc: 'Мы не просто поставляем бочки с жидкой резиной, а разрабатываем рабочий технологический регламент под тип основания, температурный режим и нагрузки конкретного объекта.',
  },
  {
    title: 'Собственное производство и рецептура',
    desc: 'Материалы линейки SPRAY-TEC и PRO-TEC производятся на современном оборудовании с многоступенчатым лабораторным контролем физико-механических характеристик.',
  },
  {
    title: 'Единая система: Материал + Нанесение',
    desc: 'Качество гидроизоляции на 50% зависит от сырья и на 50% — от квалификации оператора установки. Мы обучаем и аттестуем специалистов в собственной Школе.',
  },
  {
    title: 'Федеральная сеть авторизованных партнёров',
    desc: 'Развиваем партнерскую сеть профессиональных подрядных организаций по всей России, обеспечивая авторский надзор и гарантийную поддержку.',
  },
]
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-badge">О компании</div>

      <div class="about-head">
        <h2 class="about-title">LIQUID RUBBER PROTECTION</h2>
        <p class="about-lead">
          Мы объединяем материал, технологию и профессиональное нанесение в единое решение по гидроизоляции.
        </p>
      </div>

      <div class="about-grid">
        <div v-for="p in principles" :key="p.title" class="about-card">
          <div class="about-card__line"></div>
          <h4>{{ p.title }}</h4>
          <p>{{ p.desc }}</p>
        </div>
      </div>

      <div class="about-bottom-info">
        <div class="bottom-info-block">
          <strong>Научно-производственная база</strong>
          <span>Постоянные испытания адгезии, эластичности и климатической стойкости в сертифицированных лабораториях.</span>
        </div>
        <div class="bottom-info-block">
          <strong>Технический надзор объектов</strong>
          <span>Выездные инженеры осуществляют инструментальный контроль толщины мембраны и качества проработки узлов.</span>
        </div>
        <div class="bottom-info-block">
          <strong>Прямые поставки по РФ</strong>
          <span>Оперативная отгрузка материалов со складов и бесперебойное обеспечение объектов любого масштаба.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #121417;
  color: #ffffff;
  border-bottom: 1px solid #2a3038;
}

.about-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.about-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.75rem;
}

.about-head {
  max-width: 780px;
  margin-bottom: 3.5rem;
}

.about-title {
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.about-lead {
  font-size: 1.15rem;
  color: #d1d5db;
  line-height: 1.55;
  margin: 0;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.about-card {
  background: #1a1d22;
  border: 1px solid #2a3038;
  padding: 2rem;
  position: relative;
}

.about-card__line {
  width: 36px;
  height: 3px;
  background: #ffb81c;
  margin-bottom: 1.25rem;
}

.about-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.65rem;
}

.about-card p {
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.55;
  margin: 0;
}

.about-bottom-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid #2a3038;
}

.bottom-info-block strong {
  display: block;
  font-size: 0.98rem;
  color: #ffb81c;
  margin-bottom: 0.4rem;
}

.bottom-info-block span {
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.5;
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-bottom-info {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
