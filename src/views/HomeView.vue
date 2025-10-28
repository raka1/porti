<template>
  <div class="container">
    <div class="hero">
      <img src="/images/hero.png" alt="Hero" class="profile-photo" />
      <h1>Hi, I'm Raka</h1>
      <p>Bringing ideas to life through clean design and powerful code</p>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#downloadModal">
        <i class="pi pi-download"></i>&nbsp;Download CV
      </button>
    </div>
  </div>

  <!-- Bootstrap Modal -->
  <div
    class="modal fade"
    id="downloadModal"
    tabindex="-1"
    aria-labelledby="downloadModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="downloadModalLabel">Choose Language</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="pi pi-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <ul>
            <li><a href="/docs/cv_en.pdf" download>English</a></li>
            <li><a href="/docs/cv_id.pdf" download>Indonesian</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: calc(100vh - 52px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  text-align: center;
}

.profile-photo {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  color: var(--color-text);
  transition: color 0.3s ease;
}

p {
  font-size: 1.2rem;
  color: var(--color-gray);
  transition: color 0.3s ease;
}

a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
