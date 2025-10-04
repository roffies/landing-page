<script setup lang="ts">
import Navbar from "@/components/navbar-section.component.vue";
import Footer from "@/components/footer-section.component.vue"
import HeroSection from "@/components/hero-section.component.vue"
import HowItWorksSection from "@/components/how-it-works-section.component.vue"
import BenefitsSection from "@/components/benefits-section.component.vue"
import Card from 'primevue/card'
</script>

<template>
  <Navbar />
  <HeroSection />
  <HowItWorksSection />
  <BenefitsSection />
  <div class="main-container">
  <section id="ofrecemos" class="section" role="region" aria-label="Servicios que ofrecemos">
    <div class="flex flex-column lg:flex-row align-items-center gap-6">
      <div class="flex-1">
        <img src="/images/hero-background.svg" alt="Servicios de SmartCare para mantenimiento automotriz" class="image-feature-img" />
      </div>

      <div class="flex-1">
        <h2 class="section-title">Lo que ofrecemos</h2>
        <p class="section-subtitle">Servicios diseñados para maximizar el rendimiento de tu vehículo</p>

        <div class="grid">
          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-cog" aria-hidden="true"></i>
              <h3>Mantenimiento Preventivo</h3>
              <p>Resuelve problemas antes de que ocurran</p>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-chart-line" aria-hidden="true"></i>
              <h3>Monitoreo en Tiempo Real</h3>
              <p>Visualiza datos de tu vehículo en todo momento.</p>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-lock" aria-hidden="true"></i>
              <h3>Seguridad Avanzada</h3>
              <p>Protección garantizada para tu información.</p>
            </div>
          </div>

          <div class="col-12 md:col-6">
            <div class="feature-card">
              <i class="pi pi-headset" aria-hidden="true"></i>
              <h3>Soporte Dedicado</h3>
              <p>Asistencia personalizada cuando la necesites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="team" class="team-section" role="region" aria-label="Nuestro equipo de desarrollo">
    <h2>Nuestro Equipo</h2>
    <hr>
    <div class="grid">
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/Johan.jpg" alt="Johan Karl Bottger Salazar" class="team-img"/> </template>
          <template #title> Johan Karl Bottger Salazar</template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/luis-sebastian-rubio-ortiz.jpg" alt="Luis Sebastián Rubio Ortiz" class="team-img"/> </template>
          <template #title> Luis Sebastián Rubio Ortiz </template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/profile-rubens-bendezu.jpeg" alt="Rubens Bendezú" class="team-img"/> </template>
          <template #title> Rubens Bendezú </template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/pierina-almandroz-carbajal.jpeg" alt="Pierina Almadroz Carbajal" class="team-img"/> </template>
          <template #title> Pierina Almadroz Carbajal</template>
          <template #content> Ingeniería de Software </template>
        </Card>
      </div>
      <div class="col-12 sm:col-6 md:col-4 lg:col-2-4">
        <Card class="team-card p-shadow-3">
          <template #header> <img src="/images/piero-sulca-sanchez.png" alt="Piero Angel Sulca Sanchez" class="team-img"/> </template>
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





.team-section {
  padding: 4rem 2rem;
  text-align: center;
  background: #f9fafb;
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

</style>