<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Tooltip } from 'bootstrap'

const chatName = ref('')
const chatEmail = ref('')
const chatMessage = ref('')
const sending = ref(false)
const sent = ref(false)
const errorFlag = ref(false)

onMounted(() => {
  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipElements.forEach((el) => {
    new Tooltip(el)
  })
})

function adjustHeight(event: Event) {
  const target = event.target as HTMLTextAreaElement
  target.style.height = 'calc(1.5em + 0.75rem + 2px)'
  target.style.height = `${target.scrollHeight}px`
}

async function validateForm(event: Event) {
  event.preventDefault()
  event.stopPropagation()

  const form = event.target as HTMLFormElement
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
    return
  }

  try {
    sending.value = true

    const response = await fetch('/api/message/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: chatName.value,
        email: chatEmail.value,
        message: chatMessage.value,
      }),
    })

    sending.value = false
    if (!response.ok) throw new Error('Network response was not ok')

    sent.value = true
    chatName.value = ''
    chatEmail.value = ''
    chatMessage.value = ''
    form.classList.remove('was-validated')
  } catch (error) {
    console.error('Error submitting form:', error)
    errorFlag.value = true

    setTimeout(() => {
      errorFlag.value = false
    }, 5000)
  }
}
</script>

<template>
  <div class="container d-block py-4 px-3">
    <h2 class="section-header mb-4">Get In Touch</h2>
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="contact">
          <div class="personal-contact">
            <div class="mb-3">
              <i class="pi pi-whatsapp"></i>
              <a href="https://wa.me/6283822110060" target="_blank" rel="noopener"
                >+62 838 2211 0060
              </a>
            </div>
            <div class="mb-3">
              <i class="pi pi-envelope"></i>
              <a href="mailto:p.raka56@outlook.com">p.raka56@outlook.com</a>
            </div>
            <div class="mb-3">
              <i class="pi pi-map-marker"></i>
              <div>35 Jalan Mampang Prapatan X, Tegal Parang, South Jakarta</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="col-12 col-lg-9">
        <div class="card">
          <div class="card-body">
            <transition name="fade" mode="out-in">
              <form v-if="!sent" class="needs-validation" novalidate @submit.prevent="validateForm">
                <div class="mb-3">
                  <label for="name" class="form-label small">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="chat-name"
                    maxlength="100"
                    v-model="chatName"
                    required
                  />
                  <div class="invalid-feedback">Please enter your name.</div>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label small">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="chat-email"
                    maxlength="100"
                    v-model="chatEmail"
                    required
                  />
                  <div class="invalid-feedback">Please enter your email.</div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label small">Message</label>
                  <textarea
                    class="form-control"
                    id="chat-message"
                    maxlength="500"
                    v-model="chatMessage"
                    @input="adjustHeight"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please enter your message.</div>
                </div>
                <button type="submit" class="btn btn-primary" :class="{ disabled: sending }">
                  Send Message
                </button>
                <div v-if="errorFlag" class="text-danger mt-2">
                  An error occurred while sending your message. Please try again later.
                </div>
              </form>
              <div v-else class="text-center py-5">
                <i
                  class="pi pi-check-circle"
                  style="font-size: 3rem; color: var(--color-primary)"
                ></i>
                <h4 class="mt-3">Thank you for reaching out!</h4>
                <p>I will get back to you as soon as possible.</p>
                <button class="btn btn-primary mt-3" @click="sent = false">
                  Send Another Message
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Personal Contact */
.personal-contact > div {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.1rem;
}

.personal-contact i {
  font-size: 2.2rem;
  color: var(--color-primary);
  text-align: center;
}

/* End of Personal Contact */

a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Form */
.card {
  background-color: var(--color-background);
  color: var(--color-text);
  border-color: var(--color-border);
}

.card input,
.card textarea {
  color: var(--color-text);
  background-color: transparent;
  border-color: var(--color-border-clickable);
  border-radius: 0;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
}

.card input:focus,
.card textarea:focus {
  border-color: var(--color-primary);
}

.card textarea {
  height: calc(1.5em + 0.75rem + 2px);
  resize: none;
  max-height: 10rem;
}

.card .card-footer {
  background-color: var(--color-background);
  border-color: var(--color-border);
}

button.disabled {
  color: var(--color-text);
  background-color: var(--color-border);
}

/* Custom validate style */
.was-validated .form-control:invalid,
.form-control.is-invalid,
.was-validated .form-control:valid,
.form-control.is-valid {
  border-color: initial;
  padding-right: initial;
  background-image: none;
  box-shadow: none;
}

.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus,
.was-validated .form-control:valid:focus,
.form-control.is-valid:focus {
  border-color: var(--color-primary);
  box-shadow: none;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
