<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="final-cta-section">
    <div class="final-cta-container">
      <div class="final-cta-box">
        <span class="final-cta-eyebrow">Инженерное решение</span>
        <h2 class="final-cta-title">Есть объект, который нужно защитить от воды?</h2>
        <p class="final-cta-sub">
          Отправьте параметры объекта — специалист LRP оценит задачу, подберёт технологический регламент и предложит оптимальное решение без переплат.
        </p>
        <div class="final-cta-actions">
          <button class="p-btn p-btn--primary" @click="scrollTo('lead')">
            Получить расчёт
          </button>
          <a href="tel:+79093578222" class="p-btn p-btn--secondary">
            Обсудить объект с инженером
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta-section {
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: #0a0c0e;
  border-bottom: 1px solid #1f242d;
}

.final-cta-container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.final-cta-box {
  background: #121417;
  border: 1px solid #2a3038;
  padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem);
  text-align: center;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.final-cta-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffb81c;
  margin-bottom: 0.85rem;
}

.final-cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  max-width: 22ch;
  margin: 0 0 1.25rem;
}

.final-cta-sub {
  font-size: 1.1rem;
  color: #9ca3af;
  max-width: 50ch;
  line-height: 1.55;
  margin: 0 0 2.5rem;
}

.final-cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.p-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  padding: 0.85rem 2rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.p-btn--primary {
  background: #e6a317;
  color: #121417;
}

.p-btn--primary:hover {
  background: #ffb81c;
}

.p-btn--secondary {
  background: #252a32;
  color: #ffffff;
  border: 1px solid #374151;
}

.p-btn--secondary:hover {
  background: #374151;
}

@media (max-width: 560px) {
  .final-cta-actions {
    flex-direction: column;
    width: 100%;
  }
  .p-btn {
    width: 100%;
  }
}
</style>
