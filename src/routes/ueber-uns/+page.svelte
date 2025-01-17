<script>
  // Entferne den import, da wir ihn aktuell nicht nutzen
  // import { fade } from 'svelte/transition';
</script>

<!-- Hero Section -->
<div class="relative py-32 bg-base-200">
  <!-- Fullsize Background Image -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/about-hero.jpg" 
      alt="Über Holletzek OHG" 
      class="w-full h-full object-cover"
    />
    <!-- Overlay mit Gradient für bessere Lesbarkeit -->
    <div class="absolute inset-0 bg-gradient-to-r from-base-100/95 via-base-100/80 to-transparent"></div>
  </div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        <span class="text-sm text-primary font-medium">Über uns</span>
      </div>
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
        Tradition trifft <span class="text-primary">Innovation</span>
      </h1>
      <p class="text-xl md:text-2xl text-base-content/70 leading-relaxed max-w-2xl">
        Seit über 30 Jahren sind wir Ihr verlässlicher Partner für moderne Badgestaltung und innovative Heizungslösungen in Mettmann und Umgebung.
      </p>
    </div>
  </div>
</div>

<!-- Geschichte Section -->
<section class="py-32">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <div class="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
        <img 
          src="/about-1.jpg" 
          alt="30 Jahre Erfahrung" 
          class="rounded-3xl shadow-xl relative z-10 w-full h-[500px] object-cover"
        />
      </div>
      
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span class="text-sm text-primary font-medium">Unsere Geschichte</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
          Ein Familienunternehmen mit <span class="text-primary">Tradition</span>
        </h2>
        <div class="space-y-6 text-lg text-base-content/80 leading-relaxed">
          <p>
            Die Holletzek OHG wurde 1990 von Hans Holletzek gegründet und hat sich seitdem zu einem der führenden Sanitär- und Heizungsunternehmen in der Region entwickelt.
          </p>
          <p>
            Was als kleiner Familienbetrieb begann, ist heute ein modernes Unternehmen mit einem Team hochqualifizierter Fachkräfte. Dabei sind wir unseren Wurzeln treu geblieben: <span class="font-medium text-base-content">persönliche Beratung, höchste Qualität und Kundenzufriedenheit</span> stehen bei uns an erster Stelle.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Werte Section -->
<section class="py-32 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 order-2 lg:order-1">
        <div class="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span class="text-sm text-primary font-medium">Unsere Werte</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
          Was uns <span class="text-primary">auszeichnet</span>
        </h2>
        <div class="space-y-8">
          <p class="text-lg text-base-content/80 leading-relaxed">
            Als Familienunternehmen leben wir Werte wie Vertrauen, Zuverlässigkeit und Qualität. Unsere Kunden schätzen besonders:
          </p>
          <ul class="space-y-4">
            {#each ['Persönliche und fachkundige Beratung', 'Maßgeschneiderte Lösungen', 'Termintreue und Zuverlässigkeit', 'Höchste Qualitätsstandards', 'Langjährige Erfahrung'] as value}
              <li class="flex items-start gap-4">
                <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-lg text-base-content/80">{value}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      
      <div class="relative order-1 lg:order-2">
        <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <img 
          src="/about-2.jpg" 
          alt="Unser Team bei der Arbeit" 
          class="rounded-3xl shadow-xl relative z-10 w-full h-[500px] object-cover"
        />
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-20 bg-primary text-primary-content relative overflow-hidden">
  <div class="absolute inset-0">
    <img 
      src="/texture.webp" 
      alt="Background Texture" 
      class="w-full h-full object-cover opacity-60"
    />
  </div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center max-w-3xl mx-auto">
      <h2 class="text-4xl font-bold mb-6">
        Lassen Sie uns Ihr Projekt gemeinsam verwirklichen
      </h2>
      <p class="text-xl mb-8 text-primary-content/90">
        Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/kontakt" class="btn btn-lg bg-white text-primary hover:bg-white/90">
          Kontakt aufnehmen
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="tel:0210475542" class="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
          02104 75542
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="py-32">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        <span class="text-sm text-primary font-medium">Unser Team</span>
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        Die Menschen hinter <span class="text-primary">Holletzek OHG</span>
      </h2>
      <p class="text-xl text-base-content/70 leading-relaxed">
        Unser erfahrenes Team von Fachkräften sorgt täglich für Ihre Zufriedenheit und setzt Ihre Wünsche professionell um.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Team Member Cards hier -->
      {#each Array(3) as _, i}
        <div class="bg-base-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-base-content/10">
          <img 
            src={`/team-${i+1}.jpg`} 
            alt="Team Mitglied" 
            class="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <h3 class="text-xl font-semibold mb-2">Max Mustermann</h3>
          <p class="text-base-content/70 mb-4">Geschäftsführer</p>
          <p class="text-base-content/80">
            Seit über 20 Jahren im Unternehmen und Experte für innovative Heizungslösungen.
          </p>
        </div>
      {/each}
    </div>
  </div>
</section> 