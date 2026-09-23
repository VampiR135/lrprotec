<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="partners" class="partners-section">
    <div class="partners-container">
      <!-- Блок рынка по пункту 16 ТЗ -->
      <div class="market-block">
        <div class="market-block__head">
          <span class="market-tag">Ёмкость рынка РФ</span>
          <div class="market-stat">3 500 000 м²</div>
          <h3 class="market-title">кровель нуждаются в ремонте ежегодно</h3>
        </div>
        <p class="market-text">
          В России ежегодно требуются миллионы квадратных метров ремонта и восстановления кровель коммерческих и промышленных объектов. Рынок существует и растёт каждый сезон. Главная задача подрядчика — дать заказчику технологию, которая решит проблему воды без демонтажа и без риска протечек.
        </p>
      </div>

      <!-- Партнёрская программа по пункту 15 ТЗ -->
      <div class="partners-main">
        <div class="section-head">
          <span class="section-eyebrow">Партнёрская сеть</span>
          <h2 class="section-title">Станьте партнёром LIQUID RUBBER PROTECTION</h2>
          <p class="section-lead">
            Для строительных организаций, кровельных бригад, гидроизоляционных компаний и предпринимателей, готовых занять лидирующие позиции в своём регионе.
          </p>
        </div>

        <!-- Модель партнёрства -->
        <div class="model-cards">
          <div class="model-card model-card--lrp">
            <span class="model-badge">LRP предоставляет:</span>
            <ul>
              <li><strong>Технология:</strong> готовые технологические карты и регламенты нанесения.</li>
              <li><strong>Материалы:</strong> прямые поставки сырья с завода по специальным дилерским ценам.</li>
              <li><strong>Оборудование:</strong> подбор, шеф-монтаж и поставка установок высокого давления.</li>
              <li><strong>Обучение:</strong> практическая подготовка бригад в Школе жидкой резины.</li>
              <li><strong>Коммерческие заявки:</strong> передача входящих лидов и запросов на гидроизоляцию в вашем регионе.</li>
            </ul>
          </div>

          <div class="model-card model-card--partner">
            <span class="model-badge model-badge--partner">Партнёр выполняет:</span>
            <ul>
              <li><strong>Выезд на объект:</strong> замеры, фотофиксация и первичный аудит кровли/фундамента.</li>
              <li><strong>Выполнение работ:</strong> качественное напыление покрытия силами обученной бригады.</li>
              <li><strong>Сдача объекта:</strong> подписание актов с заказчиком и соблюдение регламентов LRP.</li>
              <li><strong>Региональное развитие:</strong> работа с местными девелоперами, УК и промышленными предприятиями.</li>
            </ul>
          </div>
        </div>

        <!-- Доход партнёра и обязательный дисклеймер -->
        <div class="income-box">
          <div class="income-figure">
            <span class="income-label">Потенциал дохода партнёра:</span>
            <div class="income-val">до 300 000 ₽ <small>/ месяц на одну бригаду</small></div>
          </div>

          <div class="income-disclaimer">
            <svg viewBox="0 0 20 20" fill="none" class="disc-icon">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 4a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1zm0 8a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill="currentColor"/>
            </svg>
            <p>
              <strong>Важное примечание:</strong> Мы не обещаем фиктивный гарантированный пассивный доход. Фактический доход зависит от региона, количества объектов, стоимости работ и загрузки партнёра.
            </p>
          </div>
        </div>

        <div class="partners-cta">
          <div class="partners-cta__text">
            <h3>Готовы запустить направление бесшовной гидроизоляции?</h3>
            <p>Отправьте заявку на включение вашей компании в партнёрскую сеть LRP в регионе.</p>
          </div>
          <button class="p-btn p-btn--primary" @click="scrollTo('lead')">
            Стать партнёром
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.partners-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.market-block {
  background: #121417;
  color: #ffffff;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 4.5rem;
}

.market-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.5rem;
}

.market-stat {
  font-size: clamp(2.4rem, 4.8vw, 3.8rem);
  font-weight: 900;
  color: #ffb81c;
  line-height: 1;
  font-family: var(--font-display, inherit);
  letter-spacing: -0.02em;
}

.market-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0.5rem 0 0;
}

.market-text {
  font-size: 1.05rem;
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
}

.section-head {
  max-width: 760px;
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #c4870a;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #121417;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.section-lead {
  margin-top: 0.85rem;
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.55;
}

.model-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.model-card {
  padding: 2rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.model-card--lrp {
  border-top: 4px solid #ffb81c;
}

.model-card--partner {
  border-top: 4px solid #2563eb;
}

.model-badge {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #c4870a;
  margin-bottom: 1.25rem;
}

.model-badge--partner {
  color: #2563eb;
}

.model-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.model-card li {
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.45;
}

.model-card strong {
  color: #121417;
}

.income-box {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 2rem 2.25rem;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2.5rem;
}

.income-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35rem;
}

.income-val {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 900;
  color: #121417;
  font-family: var(--font-display, inherit);
}

.income-val small {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  display: block;
}

.income-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 1rem 1.25rem;
  border-radius: 2px;
}

.disc-icon {
  width: 20px;
  height: 20px;
  color: #c4870a;
  flex-shrink: 0;
  margin-top: 2px;
}

.income-disclaimer p {
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.45;
  margin: 0;
}

.partners-cta {
  background: #121417;
  color: #ffffff;
  padding: 2rem 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 4px;
}

.partners-cta__text h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.35rem;
}

.partners-cta__text p {
  font-size: 0.95rem;
  color: #cbd5e1;
  margin: 0;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.75rem 1.75rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 800;
  border-radius: 2px;
  white-space: nowrap;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

@media (max-width: 1024px) {
  .market-block {
    grid-template-columns: 1fr;
  }
  .model-cards {
    grid-template-columns: 1fr;
  }
  .income-box {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .partners-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
