<footer class="py-12 bg-primary text-primary-content relative">
  <!-- Background Pattern - um 180° gedreht -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/texture.webp" 
      alt="Background Texture" 
      class="w-full h-full object-cover opacity-60 rotate-180"
    />
  </div>

  <!-- Content mit z-index über dem Hintergrund -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Kontakt -->
      <div>
        <h3 class="font-bold text-lg mb-4">Holletzek OHG</h3>
        <div class="space-y-2 text-primary-content/90">
          <p>Düsseldorfer Straße 212</p>
          <p>40822 Mettmann</p>
          <p>Tel: <a href="tel:0210475542" class="hover:text-white transition-colors">02104 75542</a></p>
          <p>E-Mail: <a href="mailto:holletzek.ohg@gmx.de" class="hover:text-white transition-colors">holletzek.ohg@gmx.de</a></p>
        </div>
      </div>

      <!-- Öffnungszeiten -->
      <div>
        <h3 class="font-bold text-lg mb-4">Öffnungszeiten</h3>
        <div class="space-y-2 text-primary-content/90">
          <p>Mo - Do: 07:30 - 16:30 Uhr</p>
          <p>Fr: 07:30 - 13:00 Uhr</p>
          <p>Sa - So: Geschlossen</p>
        </div>
      </div>

      <!-- Links -->
      <div>
        <h3 class="font-bold text-lg mb-4">Navigation</h3>
        <ul class="space-y-2 text-primary-content/90">
          <li><a href="/" class="hover:text-white transition-colors">Startseite</a></li>
          <li><a href="/ueber-uns" class="hover:text-white transition-colors">Über uns</a></li>
          <li><a href="/leistungen" class="hover:text-white transition-colors">Leistungen</a></li>
          <li><a href="/kontakt" class="hover:text-white transition-colors">Kontakt</a></li>
        </ul>
      </div>

      <!-- Rechtliches -->
      <div>
        <h3 class="font-bold text-lg mb-4">Rechtliches</h3>
        <ul class="space-y-2 text-primary-content/90">
          <li><a href="/impressum" class="hover:text-white transition-colors">Impressum</a></li>
          <li><a href="/datenschutz" class="hover:text-white transition-colors">Datenschutz</a></li>
          <li><a href="/agb" class="hover:text-white transition-colors">AGB</a></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-12 pt-8 border-t border-primary-content/20 text-center text-primary-content/70">
      <p>© {new Date().getFullYear()} Holletzek OHG. Alle Rechte vorbehalten.</p>
    </div>
  </div>
</footer> 