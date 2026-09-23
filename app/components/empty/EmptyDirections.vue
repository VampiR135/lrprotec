<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="directions-section">
    <div class="directions-container">
      <div class="section-head">
        <span class="section-eyebrow">Что мы защищаем</span>
        <h2 class="section-title">Два ключевых направления инженерии LRP</h2>
        <p class="section-lead">
          Комплексные технологические системы напыляемой бесшовной гидроизоляции для наружных и подземных конструкций.
        </p>
      </div>

      <div class="directions-grid">
        <!-- Карточка: КРОВЛЯ (Маскот: Выдра / Otter) -->
        <div class="direction-card direction-card--roof" @click="scrollTo('roof')">
          <div class="direction-card__content">
            <div class="direction-card__header">
              <span class="direction-card__tag">Направление 01 • Кровля</span>
              <span class="direction-mascot-label">
                <svg viewBox="0 0 24 24" fill="none" class="direction-icon">
                  <path d="M12 2L2 9l10 7 10-7-10-7zM2 17l10 7 10-7M2 12l10 7 10-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Маскот: Otter (Выдра)
              </span>
            </div>

            <h3 class="direction-card__title">Кровля</h3>
            <p class="direction-card__quote">
              «Защищаем кровлю от протечек и продлеваем срок её эксплуатации»
            </p>

            <ul class="direction-card__features">
              <li>
                <span class="check-icon">✓</span>
                <span>Плоские, промышленные и эксплуатируемые кровли</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Бесшовная гидроизоляция без демонтажа старого покрытия</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Надёжная герметизация примыканий, парапетов и проходок</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Материалы SPRAY-TEC ROOF B-200 и мастика PRO-TEC MAST</span>
              </li>
            </ul>

            <div class="direction-card__cta">
              <span class="direction-btn">
                <span>Решения для кровли</span>
                <svg viewBox="0 0 16 16" fill="none" class="btn-arrow">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
            </div>
          </div>

          <div class="direction-card__visual">
            <img
              src="/hero-otter.jpg"
              alt="Маскот направления Кровля — технологичная Выдра (Otter)"
              class="mascot-img"
              loading="lazy"
            />
            <div class="mascot-badge">
              <strong>OTTER</strong>
              <span>Гибкость • Водозащита • Движение</span>
            </div>
          </div>
        </div>

        <!-- Карточка: ФУНДАМЕНТ (Маскот: Носорог / Rhino) -->
        <div class="direction-card direction-card--foundation" @click="scrollTo('foundation')">
          <div class="direction-card__content">
            <div class="direction-card__header">
              <span class="direction-card__tag">Направление 02 • Фундамент</span>
              <span class="direction-mascot-label">
                <svg viewBox="0 0 24 24" fill="none" class="direction-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8"/>
                </svg>
                Маскот: Rhino (Носорог)
              </span>
            </div>

            <h3 class="direction-card__title">Фундамент</h3>
            <p class="direction-card__quote">
              «Защищаем фундамент и подземные конструкции от воздействия воды»
            </p>

            <ul class="direction-card__features">
              <li>
                <span class="check-icon">✓</span>
                <span>Монолитные фундаменты, подпорные стены и цоколи</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Защита подземных паркингов и подвалов от давления грунтовых вод</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Инъектирование активных протечек смолами Filler-Flex и Filler-Hard</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Система SPRAY-TEC BASE B-250 для тяжелых условий</span>
              </li>
            </ul>

            <div class="direction-card__cta">
              <span class="direction-btn">
                <span>Решения для фундамента</span>
                <svg viewBox="0 0 16 16" fill="none" class="btn-arrow">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
            </div>
          </div>

          <div class="direction-card__visual">
            <img
              src="/mascot-rhino.jpg"
              alt="Маскот направления Фундамент — технологичный Носорог (Rhino)"
              class="mascot-img"
              loading="lazy"
            />
            <div class="mascot-badge">
              <strong>RHINO</strong>
              <span>Сила • Броня • Надёжность</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.directions-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.directions-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.section-head {
  max-width: 680px;
  margin-bottom: 2.5rem;
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

.directions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.direction-card {
  display: flex;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.28s ease;
  position: relative;
}

.direction-card:hover {
  transform: translateY(-6px);
  border-color: #ffb81c;
  box-shadow: 0 20px 40px -12px rgba(18, 20, 23, 0.12);
}

.direction-card__content {
  flex: 1;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.direction-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.direction-card__tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
}

.direction-mascot-label {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #c4870a;
}

.direction-icon {
  width: 14px;
  height: 14px;
}

.direction-card__title {
  font-size: 1.85rem;
  font-weight: 800;
  color: #121417;
  letter-spacing: -0.02em;
  margin: 0;
}

.direction-card__quote {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2563eb;
  line-height: 1.45;
}

.direction-card--foundation .direction-card__quote {
  color: #c4870a;
}

.direction-card__features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.direction-card__features li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.88rem;
  color: #374151;
  line-height: 1.4;
}

.check-icon {
  color: #16a34a;
  font-weight: 800;
}

.direction-card__cta {
  margin-top: auto;
  padding-top: 1rem;
}

.direction-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  font-weight: 800;
  color: #121417;
  transition: color 0.15s ease, transform 0.15s ease;
}

.btn-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.direction-card:hover .direction-btn {
  color: #c4870a;
}

.direction-card:hover .btn-arrow {
  transform: translateX(4px);
}

.direction-card__visual {
  width: 38%;
  background: #121417;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mascot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: contrast(1.05);
}

.direction-card:hover .mascot-img {
  transform: scale(1.06);
}

.mascot-badge {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(18, 20, 23, 0.9) 100%);
  padding: 1.25rem 0.85rem 0.75rem;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.mascot-badge strong {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: #ffb81c;
}

.mascot-badge span {
  font-size: 0.65rem;
  color: #d1d5db;
}

@media (max-width: 990px) {
  .directions-grid {
    grid-template-columns: 1fr;
  }
  .direction-card__visual {
    width: 32%;
  }
}

@media (max-width: 640px) {
  .direction-card {
    flex-direction: column;
  }
  .direction-card__visual {
    width: 100%;
    height: 240px;
    order: -1;
  }
}
</style>
