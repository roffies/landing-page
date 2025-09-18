<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"
import Card from 'primevue/card'
import heroImage from '@/assets/diesel-technician-vs-auto-mechanic.jpg'
</script>

<template>
  <Navbar />
  <!-- Secciones -->
  <div class="container">
  <section id="hero" class="hero">
    <div class="hero-left">
      <h1 class="hero-title">Mantenimiento de confianza todo en un solo lugar</h1>
      <h2 class="hero-subtitle">Anticípate a servicios, entiende el porqué y estima costos para planificar y evitar averías</h2>

      <div class="hero-buttons">
        <router-link to="/login" class="btn btn-login">Iniciar</router-link>
        <router-link to="/signup" class="btn btn-register">Registrar</router-link>
      </div>

      <ul class="hero-features">
        <li>✔ Confiado por profesionales</li>
        <li>✔ Plataforma sencilla</li>
        <li>✔ Soporte 24/7</li>
      </ul>
    </div>

    <div class="hero-right">
      <img :src="heroImage" alt="Hero" class="hero-image" />
    </div>
  </section>
  <section id="funciones" class="section">
    <div class="section-header">
      <h2>Cómo funciona</h2>
      <p>Pasos para el control total del mantenimiento de tu vehículo</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="badge">1</div>
        <i class="bi bi-gear"></i>
        <h3>Registra</h3>
        <p>Registra tu vehículo en Roffies para obtener todas nuestras funcionalidades</p>
      </div>

      <div class="feature-card">
        <div class="badge">2</div>
        <i class="bi bi-lightning-charge"></i>
        <h3>Cotiza</h3>
        <p>Genera una cotización para el mantenimiento de tu vehículo</p>
      </div>

      <div class="feature-card">
        <div class="badge">3</div>
        <i class="bi bi-shield-check"></i>
        <h3>Protégete</h3>
        <p>Conecta con grúas y talleres cercanos en emergencias.</p>
      </div>

      <div class="feature-card">
        <div class="badge">4</div>
        <i class="bi bi-people"></i>
        <h3>Infórmate</h3>
        <p>Recibe notificaciones a tiempo real sobre mantenimientos de tu vehículo.</p>
      </div>
    </div>

  </section>
  <section id="beneficios" class="section">

    <div class="section-header">
      <h2>Beneficios que mejoran tu experiencia</h2>
      <p>Manten el control total del servicio con nuestras herramientas</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="badge">1</div>
        <i class="bi bi-gear"></i>
        <h3>Historial</h3>
        <p>Historial digital de mantenimientos.</p>
      </div>

      <div class="feature-card">
        <div class="badge">2</div>
        <i class="bi bi-lightning-charge"></i>
        <h3>Alerta</h3>
        <p>Alertas de mantenimiento basadas en datos por marca y uso</p>
      </div>

      <div class="feature-card">
        <div class="badge">3</div>
        <i class="bi bi-shield-check"></i>
        <h3>Emergencias</h3>
        <p>Para averías en ruta, directo con grúas y derivación automática al taller más cercano </p>
      </div>

      <div class="feature-card">
        <div class="badge">4</div>
        <i class="bi bi-people"></i>
        <h3>Mejores Precios</h3>
        <p>Cotizador en tiempo real entre talleres afiliados</p>
      </div>
    </div>

  </section>
  <section id="ofrecemos" class="section">
    <div class="image-feature-section">
    <div class="image-feature-left">
      <img :src="heroImage" alt="Extra Feature" class="image-feature-img" />
    </div>

    <div class="image-feature-right">
      <h2 class="section-title">Lo que ofrecemos</h2>
      <p class="section-subtitle">Servicios diseñados para maximizar el rendimiento de tu vehículo</p>

      <div class="image-feature-grid">
        <div class="feature-card">
          <i class="pi pi-cog"></i>
          <h3>Mantenimiento Preventivo</h3>
          <p>Resuelve problemas antes de que ocurran</p>
        </div>

        <div class="feature-card">
          <i class="pi pi-chart-line"></i>
          <h3>Monitoreo en Tiempo Real</h3>
          <p>Visualiza datos de tu vehículo en todo momento.</p>
        </div>

        <div class="feature-card">
          <i class="pi pi-lock"></i>
          <h3>Seguridad Avanzada</h3>
          <p>Protección garantizada para tu información.</p>
        </div>

        <div class="feature-card">
          <i class="pi pi-headset"></i>
          <h3>Soporte Dedicado</h3>
          <p>Asistencia personalizada cuando la necesites.</p>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section id="team" class="team-section">
    <h2>Nuestro Equipo</h2>
    <hr>
    <div class="team-grid">
      <Card class="team-card p-shadow-3">
        <template #header> <img src="/images/Johan.jpg" class="team-img"/> </template>
        <template #title> Johan Karl Bottger Salazar</template>
        <template #content> Ingeniería de Software </template>
      </Card>
      <Card class="team-card p-shadow-3">
        <template #header> <img src="/images/Luis Sebastián Rubio Ortiz.jpg" class="team-img"/> </template>
        <template #title> Luis Sebastián Rubio Ortiz </template>
        <template #content> Ingeniería de Software </template>
      </Card>
      <Card class="team-card p-shadow-3">
        <template #header> <img src="/images/profile_rubens_bendezu.jpeg" class="team-img"/> </template>
        <template #title> Rubens Bendezú </template>
        <template #content> Ingeniería de Software </template>
      </Card>
      <Card class="team-card p-shadow-3">
        <template #header> <img src="/images/Pierina_Almandroz_Carbajal.jpeg" class="team-img"/> </template>
        <template #title> Pierina Almadroz Carbajal</template>
        <template #content> Ingeniería de Software </template>
      </Card>
      <Card class="team-card p-shadow-3">
        <template #header> <img src="/images/piero-sulca-sanchez.png" class="team-img"/> </template>
        <template #title> Piero Angel Sulca Sanchez</template>
        <template #content> Ingeniería de Software </template>
      </Card>
    </div>
  </section>

  <Footer />
  </div>
</template>

<style scoped>

.hero {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 6rem 2rem;
  max-width: none;
  width: 100%;
  margin: 0px;
}
.hero-left {
  flex: 1;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}
.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #475569;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.btn-login {
  background: #3b82f6;
  color: white;
}
.btn-login:hover {
  background: #2563eb;
}
.btn-register {
  background: #f97316;
  color: white;
}
.btn-register:hover {
  background: #ea580c;
}
.hero-features {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #334155;
  font-size: 1rem;
}
.hero-features li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
}
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}


.section-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.section-header p {
  color: #666;
  margin-bottom: 3rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
.feature-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s ease;
}
.feature-card:hover {
  transform: translateY(-6px);
}
.feature-card i {
  font-size: 2rem;
  color: #3b82f6; /* blue accent */
  margin-bottom: 1rem;
}
.feature-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}
.feature-card p {
  color: #555;
  font-size: 0.95rem;
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #3b82f6;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}



.image-feature-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 2rem;
}

.image-feature-left {
  flex: 1;
}

.image-feature-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.image-feature-right {
  flex: 1;
}

.image-feature-right .section-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.image-feature-right .section-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.image-feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}



.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.nav-links a,
.nav-links button {
  color: white;
  text-decoration: none;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
}
.nav-links a:hover,
.nav-links button:hover {
  text-decoration: underline;
}


.team-section {
  padding: 4rem 2rem;
  text-align: center;
  background: #f9fafb;
}
.team-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1e293b;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}
.team-card {
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  border-bottom: 4px solid blue;
  background: #ffffff;

  overflow: hidden;
  transition: transform 0.2s;
  text-align: center;
}
.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
.team-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 1rem auto;
  display: block;
  object-fit: cover;
}

.section {
  width: 100%;
  margin: 0;
  padding: 80px 40px;
  background: #f1f5f9;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}
.section:nth-child(even) {
  background: #e2e8f0;
}

.section .container,
.team-section .container {
  max-width: 1400px;
  margin: 0 auto;
}

.image-feature-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>