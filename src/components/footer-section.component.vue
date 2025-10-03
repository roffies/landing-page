<script setup lang="ts">

</script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-support-text">
          <p>Roffies es una startup tecnológica enfocada en modernizar el mantenimiento automotriz en Lima y, progresivamente, en todo el país. </p>
        </div>
      </div>

      <div class="footer-main">
        <div class="footer-links">
          <div class="footer-column">
            <h4>Mecánicos</h4>
            <ul>
              <li><a href="">Sé parte del cambio</a></li>
              <li><a href="">Requisitos para mecánicos registrados</a></li>
              <li><a href="">Beneficios</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Propietarios</h4>
            <ul>
              <li><a href="">Únete a nosotros</a></li>
              <li><a href="">Testimonios</a></li>
              <li><a href="">Encuentra lo que necesitas</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Contáctanos</h4>
            <ul>
              <li><a href="">Formulario de contacto</a></li>
              <li><a href="">Atención al Cliente</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Nosotros</h4>
            <ul>
              <li><a href="">Sobre Nosotros</a></li>
              <li><a href="">Conoce nuestra marca</a></li>
              <li><a href="">Únete al equipo</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="">FAQ</a></li>
              <li><a href="">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-social">
          <a href="https://www.facebook.com/" class="social-link" target="_blank">
            <i class="pi pi-facebook social-icon"></i>
          </a>
          <a href="https://x.com/home?lang=es" class="social-link" target="_blank">
            <i class="pi pi-twitter social-icon"></i>
          </a>
          <a href="https://www.instagram.com/" class="social-link" target="_blank">
            <i class="pi pi-instagram social-icon"></i>
          </a>
          <a href="https://www.tiktok.com/es/" class="social-link" target="_blank">
            <i class="pi pi-send social-icon"></i>
          </a>
          <a href="https://www.linkedin.com/" class="social-link" target="_blank">
            <i class="pi pi-linkedin social-icon"></i>
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
  font-size: 1.5rem;
  color: #3D44DD;
}


.footer-copyright p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5vh;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: center;
}
</style>