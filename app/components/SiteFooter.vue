<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <p class="footer__brand">Liquid Rubber Protection</p>
        <p class="footer__tag">Лидер отрасли в области гидроизоляционных систем</p>
      </div>
      <div class="footer__contacts">
        <a href="tel:+79093578222">+7 909 357-82-22</a>
        <a href="#lead">Получить инженерное решение</a>
      </div>
    </div>
    <div class="container footer__note">
      <p>
        Сайт регионального партнёра. Материалы и технология — франшиза Liquid Rubber Protection.
        Цифры гарантии и срока службы уточняются по регламенту производителя.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2.5rem 0 2rem;
  border-top: 1px solid var(--lrp-line);
  background: var(--lrp-charcoal);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: end;
}

.footer__brand {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
}

.footer__tag {
  margin-top: 0.35rem;
  color: var(--lrp-muted);
  font-size: 0.88rem;
  max-width: 36ch;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  align-items: flex-start;
  font-family: var(--font-display);
  font-weight: 600;
}

.footer__contacts a:hover {
  color: var(--lrp-red);
}

.footer__note {
  margin-top: 1.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--lrp-line);
}

.footer__note p {
  font-size: 0.8rem;
  color: var(--lrp-muted);
  max-width: 70ch;
}
</style>
