<script>
  let isOpen = false;
  
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const handleLinkClick = () => {
    isOpen = false;
  };
</script>

<div class="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center w-full">
      <div class="flex-none lg:hidden">
        <label tabindex="0" class="btn btn-ghost" on:click={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
      </div>
      
      <!-- Logo -->
      <div class="flex-1 lg:flex-none">
        <a href="/" class="btn btn-ghost normal-case text-xl">Holletzek OHG</a>
      </div>

      <!-- Desktop Menü -->
      <div class="hidden lg:flex flex-1 justify-center">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/">Startseite</a></li>
          <li><a href="/ueber-uns">Über uns</a></li>
          <li>
            <details>
              <summary>Leistungen</summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li><a href="/leistungen/badmodernisierung">Badmodernisierung</a></li>
                <li><a href="/leistungen/heizungsinstallation">Heizungsinstallation</a></li>
              </ul>
            </details>
          </li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </div>

      <!-- Telefon Button -->
      <div class="flex-none">
        <a href="tel:0210475542" class="btn btn-primary btn-sm gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          02104 75542
        </a>
      </div>
    </div>
  </div>

  <!-- Mobile Menü - Außerhalb des Containers aber innerhalb der Navbar -->
  {#if isOpen}
    <div class="absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden">
      <div class="container mx-auto px-4">
        <ul class="menu menu-sm py-4">
          <li><a href="/" on:click={handleLinkClick}>Startseite</a></li>
          <li><a href="/ueber-uns" on:click={handleLinkClick}>Über uns</a></li>
          <li>
            <a href="/leistungen" on:click={handleLinkClick}>Leistungen</a>
            <ul class="pl-4">
              <li><a href="/leistungen/badmodernisierung" on:click={handleLinkClick}>Badmodernisierung</a></li>
              <li><a href="/leistungen/heizungsinstallation" on:click={handleLinkClick}>Heizungsinstallation</a></li>
            </ul>
          </li>
          <li><a href="/kontakt" on:click={handleLinkClick}>Kontakt</a></li>
        </ul>
      </div>
    </div>
  {/if}
</div>

<!-- Spacer damit der Content nicht unter der fixed Navbar verschwindet -->
<div class="h-16"></div> 