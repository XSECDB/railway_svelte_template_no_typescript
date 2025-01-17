<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  let sending = false;
  let status = { show: false, success: false, message: '' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sending = true;
    status.show = false;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        status = {
          show: true,
          success: true,
          message: 'Ihre Nachricht wurde erfolgreich gesendet!'
        };
        formData = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
      } else {
        throw new Error(data.error || 'Fehler beim Senden');
      }
    } catch (error) {
      status = {
        show: true,
        success: false,
        message: error.message || 'Entschuldigung, es gab einen Fehler beim Senden Ihrer Nachricht.'
      };
    } finally {
      sending = false;
    }
  };
</script>

<section class="py-20 bg-white relative overflow-hidden">
  <!-- Decorative Blur Circles -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute -left-[30%] -top-[20%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
    <div class="absolute -right-[20%] top-[30%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]"></div>
    <div class="absolute left-[10%] bottom-[10%] w-[700px] h-[700px] bg-primary/25 rounded-full blur-[150px]"></div>
  </div>

  <div class="container mx-auto px-4 relative">
    <!-- Header Section -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="text-primary font-semibold tracking-wider uppercase text-sm">Kontakt</span>
      <h2 class="text-4xl font-bold mt-4 mb-6">
        Lassen Sie uns gemeinsam Ihr Projekt verwirklichen
      </h2>
      <p class="text-base-content/70 text-lg">
        Wir sind für Sie da und freuen uns darauf, von Ihnen zu hören
      </p>
    </div>

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto">
      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-base-content/10 flex items-center gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium mb-1">Telefon</h3>
            <a href="tel:0210475542" class="text-primary hover:text-primary-focus transition-colors">
              02104 75542
            </a>
          </div>
        </div>

        <div class="bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-base-content/10 flex items-center gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium mb-1">Adresse</h3>
            <p class="text-base-content/70">
              Düsseldorfer Straße 212,<br>
              40822 Mettmann
            </p>
          </div>
        </div>

        <div class="bg-base-100/50 backdrop-blur-sm p-6 rounded-2xl border border-base-content/10 flex items-center gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium mb-1">E-Mail</h3>
            <a href="mailto:holletzek.ohg@gmx.de" class="text-primary hover:text-primary-focus transition-colors">
              holletzek.ohg@gmx.de
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-base-100 rounded-3xl shadow-xl p-8 md:p-12">
        {#if status.show}
          <div class={`mb-8 p-4 rounded-xl ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {status.message}
          </div>
        {/if}

        <form on:submit={handleSubmit} class="space-y-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label for="name" class="block font-medium">Name</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-content/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Ihr Name"
              />
            </div>

            <div class="space-y-2">
              <label for="phone" class="block font-medium">Telefon</label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-content/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Ihre Telefonnummer"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="block font-medium">E-Mail</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-content/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Ihre E-Mail-Adresse"
            />
          </div>

          <div class="space-y-2">
            <label for="message" class="block font-medium">Ihre Nachricht</label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="6"
              class="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-content/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Wie können wir Ihnen helfen?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            class="w-full btn btn-primary btn-lg gap-2 rounded-xl"
          >
            {#if sending}
              <span class="loading loading-spinner"></span>
              Wird gesendet...
            {:else}
              Nachricht senden
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            {/if}
          </button>
        </form>
      </div>
    </div>
  </div>
</section> 