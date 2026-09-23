<script setup lang="ts">
import { ref } from 'vue'

const docs = [
  {
    title: 'Сертификат соответствия ГОСТ Р',
    num: 'РОСС RU.32001.04ИБФ1',
    desc: 'Подтверждение соответствия напыляемых полимерно-битумных эмульсий стандартам Российской Федерации.',
    size: 'PDF • 1.8 МБ',
  },
  {
    title: 'Технические условия (ТУ 23.99.12)',
    num: 'ТУ 23.99.12-001-LRP-2023',
    desc: 'Официальный регламент производства и физико-механических показателей гидроизоляционных материалов LRP.',
    size: 'PDF • 2.4 МБ',
  },
  {
    title: 'Технологическая карта напыления кровли',
    num: 'ТК-LRP-ROOF-2024',
    desc: 'Пошаговый технологический регламент подготовки основания, герметизации примыканий и нанесения SPRAY-TEC.',
    size: 'PDF • 3.1 МБ',
  },
  {
    title: 'Протокол испытаний адгезии и удлинения',
    num: 'НИИЖБ им. Гвоздева',
    desc: 'Результаты независимых испытаний: относительное удлинение > 800%, водонепроницаемость W16, морозостойкость F200.',
    size: 'PDF • 1.5 МБ',
  },
  {
    title: 'Пожарный сертификат соответствия',
    num: 'Группа горючести Г1 / В2 / РП1',
    desc: 'Протокол испытаний пожарной безопасности для применения на промышленных кровлях и гражданских объектах.',
    size: 'PDF • 1.2 МБ',
  },
  {
    title: 'Паспорт качества SPRAY-TEC ROOF / BASE',
    num: 'Заводской паспорт партии',
    desc: 'Форма паспорта входного и выходного лабораторного контроля плотности, вязкости и сухого остатка эмульсии.',
    size: 'PDF • 950 КБ',
  },
]

const downloadedModal = ref<string | null>(null)

function downloadDoc(docTitle: string) {
  downloadedModal.value = docTitle
}

function closeModal() {
  downloadedModal.value = null
}
</script>

<template>
  <section id="docs" class="docs-section">
    <div class="docs-container">
      <!-- Блок документов -->
      <div class="docs-block">
        <div class="section-head">
          <span class="section-eyebrow">Стандарты и качество</span>
          <h2 class="section-title">Документы и техническая информация</h2>
          <p class="section-lead">
            Полный пакет сертифицированной документации, технических регламентов и протоколов испытаний для проектных институтов и службы технадзора.
          </p>
        </div>

        <div class="docs-grid">
          <div v-for="d in docs" :key="d.title" class="doc-item">
            <div class="doc-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" class="pdf-icon">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="doc-item__content">
              <span class="doc-num">{{ d.num }}</span>
              <h4>{{ d.title }}</h4>
              <p>{{ d.desc }}</p>
              <div class="doc-item__footer">
                <span class="doc-size">{{ d.size }}</span>
                <button class="doc-dl-btn" @click="downloadDoc(d.title)">
                  Скачать документ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок отзывов по пункту 18 ТЗ (без фиктивных генераций) -->
      <div id="reviews" class="reviews-block">
        <div class="section-head">
          <span class="section-eyebrow">Обратная связь</span>
          <h2 class="section-title">Отзывы технических заказчиков</h2>
          <p class="section-lead">
            Мнения главных инженеров и руководителей эксплуатационных служб по итогам выполнения работ и прохождения осенне-весенних сезонов.
          </p>
        </div>

        <div class="reviews-grid">
          <div class="review-card">
            <div class="review-card__header">
              <div class="review-author">
                <strong>Сергей Николаевич В.</strong>
                <span>Главный инженер логистического комплекса, 1 800 м² кровли</span>
              </div>
              <span class="review-badge">Акт сдачи подписан</span>
            </div>
            <p class="review-card__text">
              «Остро стоял вопрос ремонта кровли склада без остановки отгрузок. Вариант с демонтажом рубероида отвергли сразу из-за риска залить дорогостоящее оборудование. LRP провели напыление SPRAY-TEC за неделю. Прошли два обильных сезона ливней — ни одной протечки, кровля держит воду монолитно.»
            </p>
          </div>

          <div class="review-card">
            <div class="review-card__header">
              <div class="review-author">
                <strong>Артем Данилович К.</strong>
                <span>Технический директор управляющей компании, подземный паркинг</span>
              </div>
              <span class="review-badge">Гарантийный надзор</span>
            </div>
            <p class="review-card__text">
              «Грунтовые воды систематически выдавливало через холодные швы паркинга каждую весну. Инженеры применили комбинацию инъекционных смол Filler-Flex и внешнего бронирующего слоя BASE B-250. Проблема сырости и постоянных луж решена окончательно. Рекомендую как надежных профессионалов.»
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно скачивания -->
    <div v-if="downloadedModal" class="mat-modal-backdrop" @click.self="closeModal">
      <div class="mat-modal">
        <button class="mat-modal__close" @click="closeModal">✕</button>
        <h4>Скачивание документа:</h4>
        <p><strong>{{ downloadedModal }}</strong></p>
        <p>Пакет документации с синей печатью подготовлен к отправке на вашу электронную почту.</p>
        <form class="mat-modal__form" @submit.prevent="closeModal">
          <div class="p-field">
            <label>Ваш рабочий Email</label>
            <input type="email" required placeholder="engineer@enterprise.ru" />
          </div>
          <button type="submit" class="p-btn p-btn--primary">
            Отправить ссылку на скачивание
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.docs-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.docs-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.docs-block {
  margin-bottom: 4.5rem;
}

.section-head {
  max-width: 760px;
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

.docs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.doc-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.doc-item:hover {
  transform: translateY(-3px);
  border-color: #ffb81c;
}

.doc-icon-badge {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.75rem;
  border-radius: 2px;
  color: #c4870a;
  flex-shrink: 0;
}

.pdf-icon {
  width: 24px;
  height: 24px;
}

.doc-item__content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.doc-num {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.doc-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #121417;
  margin: 0 0 0.35rem;
  line-height: 1.3;
}

.doc-item p {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0 0 1rem;
}

.doc-item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #e2e8f0;
}

.doc-size {
  font-size: 0.75rem;
  color: #94a3b8;
}

.doc-dl-btn {
  background: transparent;
  border: 0;
  color: #2563eb;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  transition: color 0.15s ease;
}

.doc-dl-btn:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Отзывы */
.reviews-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.review-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #ffb81c;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}

.review-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.review-author strong {
  display: block;
  font-size: 0.95rem;
  color: #121417;
}

.review-author span {
  font-size: 0.78rem;
  color: #64748b;
}

.review-badge {
  font-size: 0.7rem;
  font-weight: 800;
  background: #dcfce7;
  color: #166534;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
}

.review-card__text {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.55;
  font-style: italic;
  margin: 0;
}

/* Modal */
.mat-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 120;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.mat-modal {
  background: #ffffff;
  max-width: 480px;
  width: 100%;
  padding: 2rem;
  position: relative;
  border-top: 4px solid #ffb81c;
}

.mat-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 0;
  font-size: 1.25rem;
  cursor: pointer;
  color: #64748b;
}

.mat-modal h4 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #121417;
  margin: 0 0 0.5rem;
}

.mat-modal p {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0 0 1.5rem;
  line-height: 1.45;
}

.mat-modal__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.p-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.p-field label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #475569;
}

.p-field input {
  padding: 0.65rem 0.85rem;
  border: 1px solid #cbd5e1;
  font: inherit;
  font-size: 0.9rem;
}

.p-field input:focus {
  outline: none;
  border-color: #ffb81c;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.85rem;
  padding: 0.7rem 1.25rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 800;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

@media (max-width: 1080px) {
  .docs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .docs-grid,
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>
