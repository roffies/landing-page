<template>
  <div class="auth-page">
    <Card class="auth-card">
      <template #title>
        <h2 class="auth-title">Iniciar Sesión</h2>
      </template>

      <template #content>
        <div class="p-field">
          <label for="email">Correo</label>
          <InputText id="email" v-model="email" class="w-full" placeholder="Ingresa tu correo" />
        </div>

        <div class="p-field">
          <label for="password">Contraseña</label>
          <Password id="password" v-model="password" class="w-full" toggleMask feedback="false" placeholder="Ingresa tu contraseña" />
        </div>

        <Button label="Entrar" class="w-full btn-primary" @click="login" />
        <p class="switch-text">
          ¿No tienes cuenta?
          <router-link to="/signup" class="link">Regístrate</router-link>
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')

const login = () => {
  console.log('Login con:', email.value, password.value)
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;   /* full height */
  width: 100vw;    /* full width */
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-sizing: border-box;
}

/* Card */
.auth-card {
  width: 100%;
  max-width: 600px;
  padding: 3rem;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.auth-title {
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
}

.p-field {
  margin-bottom: 1.5rem;
}

.w-full {
  width: 100%;
}

.btn-primary {
  background: #3b82f6;
  border: none;
}

.btn-primary:hover {
  background: #2563eb;
}

.switch-text {
  text-align: center;
  margin-top: 1.5rem;
  color: #475569;
  font-size: 0.95rem;
}

.link {
  color: #f97316;
  font-weight: 600;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}



</style>