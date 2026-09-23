<script setup lang="ts">
const name = ref('')
const phone = ref('')
const area = ref('')
const comment = ref('')
const agree = ref(true)
const status = ref<'idle' | 'ok' | 'error'>('idle')

function submit() {
  status.value = 'idle'
  if (!name.value.trim() || !phone.value.trim() || !agree.value) {
    status.value = 'error'
    return
  }
  // Заглушка: позже подключим CRM / Telegram / почту
  console.info('[lead]', {
    name: name.value,
    phone: phone.value,
    area: area.value,
    comment: comment.value,
  })
  status.value = 'ok'
  name.value = ''
  phone.value = ''
  area.value = ''
  comment.value = ''
}
</script>

<template>
  <section id="lead" class="section lead">
    <div class="container lead__layout">
      <div class="lead__copy">
        <p class="eyebrow">Заявка</p>
        <h2 class="section-title">Получите инженерное решение и расчёт</h2>
        <p class="section-lead">
          Оставьте контакты — перезвоним, уточним задачу объекта и предложим
          обследование. Минимальный заказ и география согласуем при разговоре.
        </p>
        <ul class="lead__points">
          <li>Обследование объекта</li>
          <li>Подбор системы под кровлю / бетон / металл / узлы</li>
          <li>Ориентир по стоимости работ</li>
        </ul>
        <a href="tel:+79093578222" class="lead__phone">+7 909 357-82-22</a>
      </div>

      <form class="lead__form" @submit.prevent="submit">
        <div class="field">
          <label for="lead-name">Имя</label>
          <input id="lead-name" v-model="name" type="text" name="name" autocomplete="name" placeholder="Как к вам обращаться" required>
        </div>
        <div class="field">
          <label for="lead-phone">Телефон</label>
          <input id="lead-phone" v-model="phone" type="tel" name="phone" autocomplete="tel" placeholder="+7 (___) ___-__-__" required>
        </div>
        <div class="field">
          <label for="lead-area">Площадь, м² (если знаете)</label>
          <input id="lead-area" v-model="area" type="text" name="area" inputmode="numeric" placeholder="Например, 800">
        </div>
        <div class="field">
          <label for="lead-comment">Задача объекта</label>
          <textarea id="lead-comment" v-model="comment" name="comment" placeholder="Кровля / фундамент / протечка…" />
        </div>

        <label class="agree">
          <input v-model="agree" type="checkbox">
          <span>Согласен на обработку персональных данных</span>
        </label>

        <button type="submit" class="btn btn--primary btn--block">
          Рассчитать стоимость
        </button>

        <p v-if="status === 'ok'" class="lead__status lead__status--ok" role="status">
          Заявка принята. Мы свяжемся с вами в ближайшее время.
        </p>
        <p v-else-if="status === 'error'" class="lead__status lead__status--error" role="alert">
          Укажите имя, телефон и согласие на обработку данных.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.lead {
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--lrp-red) 12%, transparent), transparent 42%),
    var(--lrp-black);
}

.lead__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: start;
}

.lead__points {
  margin: 1.5rem 0;
  display: grid;
  gap: 0.55rem;
}

.lead__points li {
  padding-left: 1rem;
  border-left: 2px solid var(--lrp-red);
  color: var(--lrp-text-dim);
  font-size: 0.95rem;
}

.lead__phone {
  display: inline-block;
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 700;
}

.lead__form {
  display: grid;
  gap: 0.9rem;
  padding: 1.5rem;
  background: var(--lrp-surface);
  border: 1px solid var(--lrp-line);
}

.agree {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
  font-size: 0.82rem;
  color: var(--lrp-muted);
}

.agree input {
  margin-top: 0.2rem;
}

.lead__status {
  margin: 0;
  font-size: 0.9rem;
}

.lead__status--ok {
  color: #7ddea0;
}

.lead__status--error {
  color: #ff8f8f;
}

@media (max-width: 800px) {
  .lead__layout {
    grid-template-columns: 1fr;
  }
}
</style>
