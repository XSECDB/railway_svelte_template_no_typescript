<script>
  import WhyUs from '$lib/components/WhyUs.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<!-- Hero Section mit Fullsize Background -->
<div class="relative min-h-[80vh]">
  <!-- Fullsize Background Image -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/hero.jpg" 
      alt="Holletzek OHG Background" 
      class="w-full h-full object-cover"
    />
    <!-- Overlay mit Gradient für bessere Lesbarkeit -->
    <div class="absolute inset-0 bg-gradient-to-r from-base-100/95 via-base-100/80 to-transparent"></div>
  </div>

  <!-- Content Container -->
  <div class="relative z-10 container mx-auto px-4">
    <div class="min-h-[80vh] flex items-center">
      <div class="max-w-3xl space-y-6 py-20">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span class="text-sm text-primary font-medium">Ihr Experte seit über 30 Jahren</span>
        </div>

        <!-- Heading -->
        <div class="space-y-4">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span class="relative inline-block">
              Holletzek
              <div class=""></div>
            </span>
            <span class="block text-primary">OHG</span>
          </h1>
          <p class="text-xl md:text-2xl text-base-content/80 max-w-2xl">
            Ihr Experte für Badmodernisierung und Heizungsinstallation in Mettmann
          </p>
        </div>

        <!-- Service Cards -->
        <div class="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <div class="bg-base-100/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary transition-colors group">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">Badmodernisierung</h3>
                <p class="text-base-content/70">Moderne Bäder nach Ihren Wünschen</p>
              </div>
            </div>
          </div>
          <div class="bg-base-100/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary transition-colors group">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">Heizungsinstallation</h3>
                <p class="text-base-content/70">Effiziente & nachhaltige Systeme</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="flex flex-col sm:flex-row gap-4 items-center pt-4">
          <a href="/kontakt" class="btn btn-primary btn-lg">
            Kontakt aufnehmen
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="tel:0210475542" class="text-lg hover:text-primary transition-colors flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            02104 75542
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<WhyUs />
<Contact />
