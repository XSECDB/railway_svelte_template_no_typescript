<script>
  const features = [
    {
      title: "Erfahrung",
      description: "Seit über 30 Jahren Ihr verlässlicher Partner in Mettmann",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    },
    {
      title: "Individuelle Lösungen",
      description: "Maßgeschneiderte Konzepte für Ihr Traumbad und Ihre Heizung",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>`
    },
    {
      title: "Komplettservice",
      description: "Von der Planung bis zur Fertigstellung alles aus einer Hand",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>`
    },
    {
      title: "Nachhaltige Systeme",
      description: "Energieeffiziente und umweltfreundliche Heizungslösungen",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    }
  ];
</script>

<section class="py-20 bg-primary text-primary-content relative">
  <!-- Texture Background -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/texture.webp" 
      alt="Background Texture" 
      class="w-full h-full object-cover opacity-60"
    />
  </div>

  <!-- Content mit z-index über dem Hintergrund -->
  <div class="relative z-10 container mx-auto px-4">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-4xl font-bold mb-6">
        Warum Sie uns vertrauen können
      </h2>
      <p class="text-lg opacity-90">
        Als Familienunternehmen stehen wir für Qualität, Zuverlässigkeit und erstklassigen Service in der Region Mettmann
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each features as feature}
        <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:bg-white/25 transition-all border border-white/30 hover:border-white/50 group">
          <div class="w-16 h-16 rounded-xl bg-white/30 flex items-center justify-center mb-6 group-hover:bg-white/40 transition-colors">
            <div class="text-white">
              {@html feature.icon}
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
          <p class="opacity-90">{feature.description}</p>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="mt-16 text-center">
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
        <span class="font-medium">Überzeugen Sie sich selbst von unserer Qualität</span>
      </div>
      <div class="flex justify-center gap-4 flex-wrap">
        <a href="/ueber-uns" class="btn bg-white text-primary hover:bg-white/90">
          Mehr über uns
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/leistungen" class="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
          Unsere Leistungen
        </a>
      </div>
    </div>
  </div>
</section> 