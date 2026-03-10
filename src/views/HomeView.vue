<template>
  <div class="home">
    <HeroSection />

    <div class="divider"></div>
    <VisionSection />

    <div class="divider"></div>
    <SectorsSection />

    <div class="divider"></div>
    <MethodSection />

    <div class="divider"></div>
    <ProgramsSection />

    <div class="divider"></div>
    <EcosystemSection />

    <div class="divider"></div>
    <ImpactSection />

    <div class="divider"></div>
    <GovernanceSection />

    <div class="divider"></div>
    <CtaFinal />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReveal } from '@/composables/useReveal.js'

import HeroSection      from '@/components/HeroSection.vue'
import VisionSection    from '@/components/VisionSection.vue'
import SectorsSection   from '@/components/SectorsSection.vue'
import MethodSection    from '@/components/MethodSection.vue'
import ProgramsSection  from '@/components/ProgramsSection.vue'
import EcosystemSection from '@/components/EcosystemSection.vue'
import ImpactSection    from '@/components/ImpactSection.vue'
import GovernanceSection from '@/components/GovernanceSection.vue'
import CtaFinal         from '@/components/CtaFinal.vue'

useReveal()
</script>
