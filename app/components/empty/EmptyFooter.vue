<script setup lang="ts">
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer id="contacts" class="lrp-footer">
    <div class="lrp-footer__container">
      <div class="lrp-footer__main">
        <!-- Колонка бренда -->
        <div class="footer-col footer-col--brand">
          <div class="footer-logo">
            <span class="footer-logo__badge">LRP</span>
            <span class="footer-logo__text">LIQUID RUBBER PROTECTION</span>
          </div>
          <p class="footer-desc">
            Российский производитель и технологический партнёр в области бесшовных гидроизоляционных систем. Защищаем кровли, фундаменты и промышленные сооружения от проникновения воды.
          </p>
          <div class="footer-contacts">
            <a href="tel:+79093578222" class="footer-contact-link">
              <span class="contact-icon">📞</span>
              <strong>+7 (909) 357-82-22</strong>
            </a>
            <a href="mailto:info@lrprotec.ru" class="footer-contact-link">
              <span class="contact-icon">✉️</span>
              <span>info@lrprotec.ru</span>
            </a>
            <div class="footer-workhours">
              <span class="contact-icon">⏱</span>
              <span>Пн–Пт: 08:00 – 19:00 (МСК)</span>
            </div>
          </div>
        </div>

        <!-- Колонка 1: Решения -->
        <div class="footer-col">
          <h4 class="footer-col__title">Решения</h4>
          <ul class="footer-links">
            <li><a href="#roof" @click.prevent="scrollTo('roof')">Гидроизоляция кровли</a></li>
            <li><a href="#foundation" @click.prevent="scrollTo('foundation')">Гидроизоляция фундамента</a></li>
            <li><a href="#industrial" @click.prevent="scrollTo('industrial')">Промышленные объекты</a></li>
            <li><a href="#foundation" @click.prevent="scrollTo('foundation')">Инъектирование швов</a></li>
            <li><a href="#roof" @click.prevent="scrollTo('roof')">Ремонт без демонтажа</a></li>
          </ul>
        </div>

        <!-- Колонка 2: Материалы и Технологии -->
        <div class="footer-col">
          <h4 class="footer-col__title">Материалы и инженерия</h4>
          <ul class="footer-links">
            <li><a href="#materials" @click.prevent="scrollTo('materials')">SPRAY-TEC ROOF B-200</a></li>
            <li><a href="#materials" @click.prevent="scrollTo('materials')">SPRAY-TEC BASE B-250</a></li>
            <li><a href="#materials" @click.prevent="scrollTo('materials')">SPRAY-TEC MET B-300</a></li>
            <li><a href="#materials" @click.prevent="scrollTo('materials')">Мастика PRO-TEC MAST</a></li>
            <li><a href="#materials" @click.prevent="scrollTo('materials')">Смолы Filler-Flex / Hard</a></li>
            <li><a href="#tech" @click.prevent="scrollTo('tech')">Послойная схема технологии</a></li>
          </ul>
        </div>

        <!-- Колонка 3: Экосистема и партнёры -->
        <div class="footer-col">
          <h4 class="footer-col__title">Экосистема</h4>
          <ul class="footer-links">
            <li><a href="#cases" @click.prevent="scrollTo('cases')">Инженерные кейсы</a></li>
            <li><a href="#calculator" @click.prevent="scrollTo('calculator')">Калькулятор расчёта</a></li>
            <li><a href="#school" @click.prevent="scrollTo('school')">Школа жидкой резины</a></li>
            <li><a href="#partners" @click.prevent="scrollTo('partners')">Партнёрская программа</a></li>
            <li><a href="#docs" @click.prevent="scrollTo('docs')">Сертификаты и ТУ</a></li>
            <li><a href="#about" @click.prevent="scrollTo('about')">О компании LRP</a></li>
          </ul>
        </div>
      </div>

      <!-- Нижняя юридическая полоса -->
      <div class="lrp-footer__bottom">
        <div class="footer-legal">
          <p>© 2026 LIQUID RUBBER PROTECTION. Все права защищены.</p>
          <p class="legal-notice">
            Информация на сайте носит справочный характер и не является публичной офертой (ст. 437 ГК РФ).
          </p>
        </div>

        <div class="footer-legal-links">
          <a href="#lead" @click.prevent="scrollTo('lead')">Политика обработки персональных данных</a>
          <a href="#lead" @click.prevent="scrollTo('lead')">Согласие на обработку персональных данных</a>
          <a href="#docs" @click.prevent="scrollTo('docs')">Техническая документация</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.lrp-footer {
  background: #121417;
  color: #ffffff;
  padding: 4.5rem 0 2.5rem;
  border-top: 1px solid #2a3038;
}

.lrp-footer__container {
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.lrp-footer__main {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.2fr 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.15rem;
}

.footer-logo__badge {
  background: #e6a317;
  color: #121417;
  font-weight: 900;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
}

.footer-logo__text {
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  color: #ffffff;
}

.footer-desc {
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.55;
  margin: 0 0 1.5rem;
  max-width: 38ch;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-contact-link,
.footer-workhours {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: #d1d5db;
  text-decoration: none;
}

.footer-contact-link:hover {
  color: #ffb81c;
}

.footer-contact-link strong {
  color: #ffb81c;
  font-size: 1.05rem;
}

.contact-icon {
  font-size: 0.85rem;
}

.footer-col__title {
  font-size: 0.92rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffffff;
  margin: 0 0 1.25rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-links a {
  font-size: 0.85rem;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-links a:hover {
  color: #ffb81c;
}

.lrp-footer__bottom {
  padding-top: 2rem;
  border-top: 1px solid #2a3038;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

.footer-legal p {
  font-size: 0.78rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

.legal-notice {
  margin-top: 0.25rem !important;
}

.footer-legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.footer-legal-links a {
  font-size: 0.78rem;
  color: #9ca3af;
  text-decoration: none;
}

.footer-legal-links a:hover {
  color: #ffb81c;
}

@media (max-width: 1080px) {
  .lrp-footer__main {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 680px) {
  .lrp-footer__main {
    grid-template-columns: 1fr;
  }
  .lrp-footer__bottom {
    flex-direction: column;
  }
}
</style>
