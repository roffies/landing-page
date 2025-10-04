<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const teamMembers = [
  {
    id: 'johan',
    name: 'Johan Karl Bottger Salazar',
    role: 'Ingeniería de Software',
    image: '/images/Johan.jpg',
    imageAlt: 'Johan Karl Bottger Salazar'
  },
  {
    id: 'luis',
    name: 'Luis Sebastián Rubio Ortiz',
    role: 'Ingeniería de Software',
    image: '/images/luis-sebastian-rubio-ortiz.jpg',
    imageAlt: 'Luis Sebastián Rubio Ortiz'
  },
  {
    id: 'rubens',
    name: 'Rubens Bendezú',
    role: 'Ingeniería de Software',
    image: '/images/profile-rubens-bendezu.jpeg',
    imageAlt: 'Rubens Bendezú'
  },
  {
    id: 'pierina',
    name: 'Pierina Almadroz Carbajal',
    role: 'Ingeniería de Software',
    image: '/images/pierina-almandroz-carbajal.jpeg',
    imageAlt: 'Pierina Almadroz Carbajal'
  },
  {
    id: 'piero',
    name: 'Piero Angel Sulca Sanchez',
    role: 'Ingeniería de Software',
    image: '/images/piero-sulca-sanchez.png',
    imageAlt: 'Piero Angel Sulca Sanchez'
  }
] as const
</script>

<template>
  <section id="team" class="team-section" role="region" :aria-label="t('team.ariaLabel')">
    <div class="team-container">
      <h2 class="team-title">{{ t('team.title') }}</h2>
      
      <ul class="team-grid" role="list">
        <li 
          v-for="member in teamMembers" 
          :key="member.id"
          class="team-card"
          role="listitem"
        >
          <div class="team-card-image">
            <img 
              :src="member.image" 
              :alt="member.imageAlt" 
              class="team-img"
              loading="lazy"
            />
          </div>
          <div class="team-card-content">
            <h3 class="team-member-name">{{ member.name }}</h3>
            <p class="team-member-role">{{ member.role }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: var(--spacing-xxxl) var(--spacing-xl);
  text-align: center;
  background: #ffffff;
}

.team-container {
  max-width: 1400px;
  margin: 0 auto;
}

.team-title {
  font-size: var(--font-size-hero-mobile);
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 auto var(--spacing-xxxl) auto;
  text-align: center;
  max-width: 700px;
  letter-spacing: -0.025em;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.team-card {
  background: transparent;
  padding: 0;
  text-align: left;
  transition: var(--transitions-normal);
  margin: 0 auto;
}

.team-card-image {
  margin-bottom: var(--spacing-md);
  overflow: hidden;
  border-radius: var(--border-radius-sm);
}

.team-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}

.team-card-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.team-member-name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--primary-dark);
  margin: 0;
  line-height: 1.3;
}

.team-member-role {
  font-size: var(--font-size-md);
  color: var(--primary-medium);
  margin: 0;
  line-height: 1.4;
}

@media screen and (min-width: 600px) {
  .team-title {
    font-size: var(--font-size-hero-tablet);
  }
}

@media screen and (min-width: 1136px) {
  .team-title {
    font-size: var(--font-size-hero-desktop);
  }
}

@media screen and (max-width: 768px) {
  .team-section {
    padding: var(--spacing-xxl) var(--spacing-md);
  }
  
  .team-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .team-card {
    width: 60%;
  }
  
  .team-img {
    width: 100%;
    aspect-ratio: 1;
  }
}

@media screen and (max-width: 480px) {
  .team-card {
    width: 50%;
  }
  
  .team-img {
    width: 100%;
    aspect-ratio: 1;
  }
}
</style>
