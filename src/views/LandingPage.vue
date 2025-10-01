<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"
import Card from 'primevue/card'
import heroImage from '@/assets/diesel-technician-vs-auto-mechanic.jpg'
</script>

<template>
  <Navbar />
  <div class="container">
  <section id="hero" class="flex flex-column lg:flex-row align-items-center justify-content-between gap-6 p-6">
    <div class="flex-1">
      <h1 class="hero-title">Mantenimiento de confianza todo en un solo lugar</h1>
      <h2 class="hero-subtitle">Anticípate a servicios, entiende el porqué y estima costos para planificar y evitar averías</h2>

      <div class="flex flex-wrap gap-3 mb-4">
        <router-link to="/login" class="btn btn-login">Iniciar</router-link>
        <router-link to="/signup" class="btn btn-register">Registrar</router-link>
      </div>

      <ul class="hero-features">
        <li>✔ Confiado por profesionales</li>
        <li>✔ Plataforma sencilla</li>
        <li>✔ Soporte 24/7</li>
      </ul>
    </div>

    <div class="flex-1 flex justify-content-center">
      <img :src="heroImage" alt="Hero" class="hero-image" />
    </div>
  </section>
  <section id="funciones" class="section">
    <div class="text-center mb-6">
      <h2>Cómo funciona</h2>
      <p>Pasos para el control total del mantenimiento de tu vehículo</p>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">1</div>
          <i class="pi pi-cog"></i>
          <h3>Registra</h3>
          <p>Registra tu vehículo en Roffies para obtener todas nuestras funcionalidades</p>
        </div>
      </div>

      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">2</div>
          <i class="pi pi-bolt"></i>
          <h3>Cotiza</h3>
          <p>Genera una cotización para el mantenimiento de tu vehículo</p>
        </div>
      </div>

      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">3</div>
          <i class="pi pi-shield"></i>
          <h3>Protégete</h3>
          <p>Conecta con grúas y talleres cercanos en emergencias.</p>
        </div>
      </div>

      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">4</div>
          <i class="pi pi-users"></i>
          <h3>Infórmate</h3>
          <p>Recibe notificaciones a tiempo real sobre mantenimientos de tu vehículo.</p>
        </div>
      </div>
    </div>

  </section>
  <section id="beneficios" class="section">
    <div class="text-center mb-6">
      <h2>Beneficios que mejoran tu experiencia</h2>
      <p>Manten el control total del servicio con nuestras herramientas</p>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">1</div>
          <i class="pi pi-cog"></i>
          <h3>Historial</h3>
          <p>Historial digital de mantenimientos.</p>
        </div>
      </div>

      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">2</div>
          <i class="pi pi-bolt"></i>
          <h3>Alerta</h3>
          <p>Alertas de mantenimiento basadas en datos por marca y uso</p>
        </div>
      </div>

      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">3</div>
          <i class="pi pi-shield"></i>
          <h3>Emergencias</h3>
          <p>Para averías en ruta, directo con grúas y derivación automática al taller más cercano </p>
        </div>
      </div>

      <div class="col-12 md:col-6 lg:col-3">
        <div class="feature-card">
          <div class="badge">4</div>
          <i class="pi pi-users"></i>
          <h3>Mejores Precios</h3>
          <p>Cotizador en tiempo real entre talleres afiliados</p>
        </div>
      </div>
    </div>

  </section>
  <section id="ofrecemos" class="section">
    <div class="flex flex-column lg:flex-row align-items-center gap-6">
      <div class="flex-1">
        <img :src="heroImage" alt="Extra Feature" class="image-feature-img" />
      </div>

      <div class="flex-1">
        <h2 class="section-title">Lo que ofrecemos</h2>
        <p class="section-subtitle">Servicios diseñados para maximizar el rendimiento de tu vehículo</p>

        <div class="grid">
          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-cog"></i>
              <h3>Mantenimiento Preventivo</h3>
              <p>Resuelve problemas antes de que ocurran</p>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-chart-line"></i>
              <h3>Monitoreo en Tiempo Real</h3>
              <p>Visualiza datos de tu vehículo en todo momento.</p>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-lock"></i>
              <h3>Seguridad Avanzada</h3>
              <p>Protección garantizada para tu información.</p>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-headset"></i>
              <h3>Soporte Dedicado</h3>
              <p>Asistencia personalizada cuando la necesites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="team" class="team-section">
    <h2>Nuestro Equipo</h2>
    <hr>
    <div class="grid">
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/Johan.jpg" class="team-img"/> </template>
          <template #title> Johan Karl Bottger Salazar</template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/Luis Sebastián Rubio Ortiz.jpg" class="team-img"/> </template>
          <template #title> Luis Sebastián Rubio Ortiz </template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/profile_rubens_bendezu.jpeg" class="team-img"/> </template>
          <template #title> Rubens Bendezú </template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/Pierina_Almandroz_Carbajal.jpeg" class="team-img"/> </template>
          <template #title> Pierina Almadroz Carbajal</template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/piero-sulca-sanchez.png" class="team-img"/> </template>
          <template #title> Piero Angel Sulca Sanchez</template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
    </div>
  </section>

  <Footer />
  </div>
</template>

<style scoped>

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #475569;
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 1.1rem;
  }
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
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}


/* Section headers are now handled by PrimeFlex text-center mb-6 */
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



.image-feature-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.section-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
}

.section-subtitle {
  color: #666;
  margin-bottom: 2rem;
}



/* Navbar styles are now in Navbar.vue component */


.team-section {
  padding: 4rem 2rem;
  text-align: center;
  background: #f9fafb;
}
/* Team grid is now handled by PrimeFlex grid system */
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

/* Container styles are now handled by PrimeFlex */

/* Image feature section is now handled by PrimeFlex */
</style>