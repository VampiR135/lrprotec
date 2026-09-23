<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="economy" class="econ-section">
    <div class="econ-container">
      <div class="section-head">
        <span class="section-eyebrow">Экономика решения</span>
        <h2 class="section-title">Стоимость гидроизоляции — это не только цена материала за м²</h2>
        <p class="section-lead">
          Главная ошибка заказчика при выборе гидроизоляции — сравнивать стоимость рулона или килограмма. Сравнивать необходимо совокупную стоимость решения проблемы на горизонте 10–15 лет.
        </p>
      </div>

      <!-- Сравнительная таблица экономики -->
      <div class="econ-table-wrapper">
        <div class="econ-col econ-col--trad">
          <div class="econ-col__head">
            <span class="col-type">Традиционный путь</span>
            <h3>Капитальный ремонт с демонтажем</h3>
            <span class="col-cost">Скрытые многомиллионные затраты</span>
          </div>

          <ul class="econ-list">
            <li>
              <span class="econ-tag econ-tag--bad">Затраты</span>
              <div>
                <strong>Полный демонтаж старого ковра</strong>
                <p>Трудоёмкий ручной сдир слоёв битума, повреждение стяжки.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--bad">Затраты</span>
              <div>
                <strong>Погрузка и вывоз мусора (ТБО)</strong>
                <p>До 10–15 самосвалов битумных отходов 4-го класса опасности и плата за полигон.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--risk">Высокий риск</span>
              <div>
                <strong>Затопление объекта во время вскрытия</strong>
                <p>Внезапный ливень на открытой кровле приводит к заливу цехов и складов.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--bad">Затраты</span>
              <div>
                <strong>Закупка нового утеплителя</strong>
                <p>Полная замена намокшей минераловатной или PIR плиты.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--risk">Убытки</span>
              <div>
                <strong>Простой бизнеса и арендаторов</strong>
                <p>Шумные работы с газовыми горелками и огневыми работами длятся 1.5–3 месяца.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--bad">Срок службы</span>
              <div>
                <strong>Повторный ремонт через 3–5 лет</strong>
                <p>Швы рулонных материалов снова расходятся из-за перепадов температур.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="econ-col econ-col--lrp">
          <div class="econ-col__head">
            <span class="col-type col-type--gold">Инженерный подход LRP</span>
            <h3>Бесшовная реновация без демонтажа</h3>
            <span class="col-cost col-cost--gold">Экономия до 45–60% бюджета</span>
          </div>

          <ul class="econ-list">
            <li>
              <span class="econ-tag econ-tag--good">Экономия 100%</span>
              <div>
                <strong>Без демонтажа существующего пирога</strong>
                <p>Старый кровельный ковер сохраняется и служит стабильным основанием.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--good">Экономия 100%</span>
              <div>
                <strong>Ноль расходов на утилизацию и самосвалы</strong>
                <p>Никаких гор строительного мусора и штрафов за экологию.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--good">0 рисков</span>
              <div>
                <strong>Здание ни на час не остается открытым</strong>
                <p>Работы производятся участками, объект на 100% защищён от внезапных осадков.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--good">Технология</span>
              <div>
                <strong>Естественное осушение утеплителя аэраторами</strong>
                <p>Влага выводится через кровельные дефлекторы, теплоизоляция восстанавливается.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--good">Без простоя</span>
              <div>
                <strong>Здание функционирует в штатном режиме</strong>
                <p>Холодное напыление без запаха и огня, скорость до 1500 м² за одну смену.</p>
              </div>
            </li>
            <li>
              <span class="econ-tag econ-tag--good">Надёжность</span>
              <div>
                <strong>Безремонтный срок эксплуатации 25+ лет</strong>
                <p>Монолитная резиновая мембрана без швов устойчива к УФ и морозам.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="econ-cta">
        <div class="econ-cta__text">
          <h3>Главный вывод:</h3>
          <p>
            Сравнивать нужно не стоимость 1 м² гидроизоляционного слоя, а <strong>суммарную стоимость устранения проблемы</strong> с учётом рисков затопления и срока службы.
          </p>
        </div>
        <button class="p-btn p-btn--primary" @click="scrollTo('calculator')">
          Рассчитать стоимость решения
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.econ-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.econ-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
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

.econ-table-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.econ-col {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
}

.econ-col--trad {
  border-top: 4px solid #ef4444;
}

.econ-col--lrp {
  border-top: 4px solid #ffb81c;
  background: #ffffff;
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.08);
}

.econ-col__head {
  padding: 1.75rem 1.75rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
}

.col-type {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.col-type--gold {
  color: #c4870a;
}

.econ-col__head h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 0.5rem;
}

.col-cost {
  font-size: 0.88rem;
  font-weight: 700;
  color: #ef4444;
}

.col-cost--gold {
  color: #16a34a;
}

.econ-list {
  list-style: none;
  padding: 1.5rem 1.75rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.econ-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.econ-tag {
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.45rem;
  border-radius: 2px;
  flex-shrink: 0;
  margin-top: 2px;
}

.econ-tag--bad {
  background: #fee2e2;
  color: #991b1b;
}

.econ-tag--risk {
  background: #ffedd5;
  color: #9a3412;
}

.econ-tag--good {
  background: #dcfce7;
  color: #166534;
}

.econ-list strong {
  display: block;
  font-size: 0.95rem;
  color: #121417;
  margin-bottom: 0.15rem;
}

.econ-list p {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0;
}

.econ-cta {
  background: #121417;
  color: #ffffff;
  padding: 2rem 2.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.econ-cta__text h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffb81c;
  margin: 0 0 0.35rem;
}

.econ-cta__text p {
  font-size: 0.95rem;
  color: #cbd5e1;
  max-width: 60ch;
  line-height: 1.5;
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

@media (max-width: 960px) {
  .econ-table-wrapper {
    grid-template-columns: 1fr;
  }
  .econ-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
