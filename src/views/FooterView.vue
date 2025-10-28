<template>
  <footer class="footer">
    <div class="container">
      <p>Copyright &copy; 2025 Raka Muhamad Pratama. All rights reserved.</p>
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
          <i class="pi pi-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
          <i class="pi pi-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="pi pi-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="pi pi-github"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
}

.footer .social-icons {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer .social-icons a {
  color: var(--color-primary);
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.footer .social-icons a:hover {
  color: var(--color-primary-light);
}
</style>
