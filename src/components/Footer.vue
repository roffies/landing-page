<script setup lang="ts">

</script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-support-text">
          <p>Roffies es una startup tecnológica enfocada en modernizar el mantenimiento automotriz en Lima y, progresivamente, en todo el país. </p>
        </div>
        <div class="footer-partners">
          <img src="../assets/icons/gob.svg" alt="Gobierno del Perú" class="partner-logo" id="gobierno-peru">
          <img src="../assets/icons/bcp.svg" alt="BCP" class="partner-logo">
        </div>
      </div>

      <div class="footer-main">
        <div class="footer-links">
          <div class="footer-column">
            <h4>Mecánicos</h4>
            <ul>
              <li><a href="caregivers.html">Sé parte del cambio</a></li>
              <li><a href="caregivers.html">Requisitos para mecánicos registrados</a></li>
              <li><a href="caregivers.html">Beneficios</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Propietarios</h4>
            <ul>
              <li><a href="dependent-persons.html">Únete a nosotros</a></li>
              <li><a href="../../index.html#testimonios">Testimonios</a></li>
              <li><a href="dependent-persons.html">Encuentra lo que necesitas</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Contáctanos</h4>
            <ul>
              <li><a href="../../index.html#contact-careme">Formulario de contacto</a></li>
              <li><a href="#contact">Atención al Cliente</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Nosotros</h4>
            <ul>
              <li><a href="../../index.html#nosotros">Sobre Nosotros</a></li>
              <li><a href="../../index.html#nosotros">Conoce nuestra marca</a></li>
              <li><a href="login.html">Únete al equipo</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-social">
          <a href="https://www.facebook.com/" class="social-link" target="_blank" noreferrer="">
            <img src="../assets/icons/facebook-icon.svg" alt="Facebook" class="social-icon">
          </a>
          <a href="https://x.com/home?lang=es" class="social-link" target="_blank" noreferrer="">
            <img src="../assets/icons/twitter.svg" alt="Twitter" class="social-icon">
          </a>
          <a href="https://www.instagram.com/" class="social-link" target="_blank" noreferrer="">
            <img src="../assets/icons/instagram.svg" alt="Instagram" class="social-icon">
          </a>
          <a href="https://www.tiktok.com/es/" class="social-link" target="_blank" noreferrer="">
            <img src="../assets/icons/tiktok.svg" alt="TikTok" class="social-icon">
          </a>
          <a href="https://www.linkedin.com/" class="social-link" target="_blank" noreferrer="">
            <img src="../assets/icons/linkedin.svg" alt="LinkedIn" class="social-icon">
          </a>
        </div>
        <div class="footer-copyright">
          <p>© 2025 Roffies Perú, S.L.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #3D44DD;
  width: 100%;
  max-width: 100%;
  color: white;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

.footer-top {
  margin-bottom: 40px;
  text-align: center;
}

.footer-support-text {
  margin-bottom: 30px;
}

.footer-support-text p {
  font-family: 'Open Sans', sans-serif;
  font-size: 2vh;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.footer-partners {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.partner-logo {
  height: 35px;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  transition: all 0.3s ease;
  fill: white;
}

#fundacion-wiese {
  height: 14vh;
}

.partner-logo:hover {
  opacity: 1;
  transform: scale(1.05);
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;

  justify-content: space-between; /* spread out columns */
  flex-wrap: wrap; /* allows wrapping on smaller screens */
  gap: 2rem;
}

.footer-brand {
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.footer-logo-icon {
  width: 12vh;
  height: 12vh;
}

.footer-app-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.app-download {
  height: 40px;
  width: auto;
}

.footer-country {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: white;
  cursor: pointer;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  text-align: center;
}

.footer-column h4 {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
  flex: 1;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column ul li a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
}

.footer-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vh;
  height: 5vh;
  background-color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px;
  box-sizing: border-box;
  fill: white;
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.social-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.footer-copyright p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5vh;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: center;
}
</style>