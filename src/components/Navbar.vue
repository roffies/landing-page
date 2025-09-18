<script setup lang="ts">
</script>

<template>
  <nav class="navbar">

    <div class="logo"><a href="#hero">ROFFIES</a></div>

    <ul class="nav-links">
      <li><a href="#funciones">Funciones</a></li>
      <li><a href="#beneficios">Beneficios</a></li>
      <li><a href="#ofrecemos">Qué Ofrecemos</a></li>
      <li><a href="#team">Nosotros</a></li>
    </ul>

    <div class="auth-lang">
      <router-link to="/login" class="auth-link">Log-In</router-link>
      <router-link to="/signup" class="auth-link">Registrar</router-link>
      <button class="lang-btn">🌐 ESP</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Right-side section */
.auth-lang {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem; /* ensures space from scrollbar */
}

.auth-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.auth-link:hover {
  text-decoration: underline;
}

.lang-btn {
  background: none;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  color: white;
  cursor: pointer;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>