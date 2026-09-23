<template>
  <section class="problem-section">
    <div class="problem-container">
      <div class="section-head">
        <span class="section-eyebrow">Причинно-следственная связь</span>
        <h2 class="section-title">Вода разрушает конструкцию постепенно</h2>
        <p class="section-lead">
          Проблема часто начинается с микротрещины или небольшого разошедшегося шва, а заканчивается выходом из строя всего конструктива здания и дорогостоящим капитальным ремонтом.
        </p>
      </div>

      <!-- Инженерная цепочка разрушения -->
      <div class="chain-grid">
        <div class="chain-step">
          <div class="chain-step__num">01</div>
          <h3 class="chain-step__title">Локальные протечки</h3>
          <p class="chain-step__desc">
            Разгерметизация швов рулонных материалов, примыканий парапетов или холодного шва бетонирования.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step">
          <div class="chain-step__num">02</div>
          <h3 class="chain-step__title">Разрушение слоёв</h3>
          <p class="chain-step__desc">
            Вода мигрирует под гидроизоляцией, отрывает битумные слои от основания и образует вздутия и пузыри.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step">
          <div class="chain-step__num">03</div>
          <h3 class="chain-step__title">Намокание утеплителя</h3>
          <p class="chain-step__desc">
            Минеральная вата теряет до 70% теплосопротивления. Здание теряет тепло, возрастают затраты на отопление.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step">
          <div class="chain-step__num">04</div>
          <h3 class="chain-step__title">Коррозия металла</h3>
          <p class="chain-step__desc">
            Постоянная влага окисляет профлист, несущие балки, крепёж и арматурный каркас железобетонных плит.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step">
          <div class="chain-step__num">05</div>
          <h3 class="chain-step__title">Разрушение бетона</h3>
          <p class="chain-step__desc">
            Циклы замерзания-оттаивания расширяют воду в порах бетона, вызывая отслоение защитного слоя и трещины.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step">
          <div class="chain-step__num">06</div>
          <h3 class="chain-step__title">Повреждение отделки</h3>
          <p class="chain-step__desc">
            Вода проникает внутрь эксплуатируемых помещений, повреждает отделку, проводку, склады и оборудование.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step">
          <div class="chain-step__num">07</div>
          <h3 class="chain-step__title">Плесень и грибок</h3>
          <p class="chain-step__desc">
            Биологическое поражение несущих конструкций и помещений, нарушение норм СанПиН и угроза здоровью людей.
          </p>
        </div>

        <div class="chain-arrow" aria-hidden="true">→</div>

        <div class="chain-step chain-step--alert">
          <div class="chain-step__num">08</div>
          <h3 class="chain-step__title">Капитальный ремонт</h3>
          <p class="chain-step__desc">
            Необходимость полного вскрытия пирога, вывоза тонн мусора, остановки работы объекта и многомиллионных затрат.
          </p>
        </div>
      </div>

      <div class="problem-footer">
        <div class="problem-footer__insight">
          <svg viewBox="0 0 24 24" fill="none" class="info-icon">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>
            <strong>Инженерный вывод:</strong> Устранение точечной протечки заплатками лишь маскирует симптом. Долгосрочная защита требует создания непрерывного монолитного гидробарьера, исключающего миграцию воды внутри конструктива.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.problem-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.section-head {
  max-width: 720px;
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

.chain-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;
}

.chain-arrow {
  display: none;
}

.chain-step {
  padding: 1.35rem 1.25rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-top: 3px solid #64748b;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.chain-step:hover {
  transform: translateY(-3px);
  border-top-color: #ffb81c;
}

.chain-step--alert {
  background: #fffbeb;
  border-color: #fde68a;
  border-top-color: #d97706;
}

.chain-step__num {
  font-size: 1.3rem;
  font-weight: 800;
  color: #94a3b8;
  font-family: var(--font-display, inherit);
  margin-bottom: 0.5rem;
}

.chain-step--alert .chain-step__num {
  color: #d97706;
}

.chain-step__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #121417;
  margin: 0 0 0.45rem;
}

.chain-step__desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0;
}

.problem-footer {
  margin-top: 2.5rem;
  padding: 1.25rem 1.5rem;
  background: #f1f5f9;
  border-left: 4px solid #ffb81c;
}

.problem-footer__insight {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  font-size: 0.95rem;
  color: #1e293b;
  line-height: 1.5;
}

.info-icon {
  width: 22px;
  height: 22px;
  color: #d97706;
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 1024px) {
  .chain-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .chain-grid {
    grid-template-columns: 1fr;
  }
}
</style>
