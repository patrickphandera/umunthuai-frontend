<template>
  <q-page class="landing-page bg-grey-1 text-dark">
    <!-- Hero Section -->
    <div class="hero-section q-pa-md q-mb-xl row items-center">
      <div class="col-12 col-md-6">
        <h1 class="text-h2 text-primary font-bold q-mb-md">
          Kukupasani mphamvu yoziwa malamulo mu njira ya macheza
        </h1>
        <p class="text-subtitle1 q-mb-md">
          Pezani thandizo la malamulo mwaulele, mwachangu, molondola mosavuta pa lamya yanu yamakono kapena pa compyuta.
           Cholinga chathu nkuthandiza anthu akumuzi kupeza chithandizo chamalamulo mosavuta.
        </p>
        <q-btn
          unelevated
          color="primary"
          class="q-mt-lg"
          label="Yambani macheza anu"
          @click="goToChatbot"
        />
      </div>
      <div class="col-12 col-md-6 q-mt-md">
        <q-img
          src="https://media.istockphoto.com/id/2019979263/photo/legal-rights-concept-statue-of-lady-justice-holding-scales-of-justice.webp?a=1&b=1&s=612x612&w=0&k=20&c=1iGyPiTFO7Bicoe6sLWYJBVRmwsi1_P_LPz9sMRomp8="
          class="hero-image rounded-borders"
        />
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section q-pa-md q-mb-xl">
      <h2 class="text-h5 text-center text-primary font-bold q-mb-lg">
        Nchifukwa chani musankhe njira yamakonoyi?
      </h2>
      <div class="row justify-around">
        <div class="feature-card col-12 col-md-3 text-center q-pa-md q-mb-lg">
          <q-icon name="chat_bubble" color="primary" size="50px" />
          <h3 class="text-h6 q-mt-md font-bold">24/7 Kuthandiza pompo pompo</h3>
          <p>
           Kupeza thandizo nthawi nthawi yilinso komanso malo aliwonse.
          </p>
        </div>
        <div class="feature-card col-12 col-md-3 text-center q-pa-md">
          <q-icon name="security" color="primary" size="50px" />
          <h3 class="text-h6 q-mt-md font-bold">Yotetezeka</h3>
          <p>Kucheza momasuka osawopa kuti zisinsi zanu ziwululika.</p>
        </div>
        <div class="feature-card col-12 col-md-3 text-center q-pa-md">
          <q-icon name="accessibility" color="primary" size="50px" />
          <h3 class="text-h6 q-mt-md font-bold">Sitisala munthu & komanso ndiyaulele</h3>
          <p>
            Kupeza thandizo lamamula kwa aliyense , osatenera dera kapena
            chuma.
          </p>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials-section q-pa-lg q-mb-xl text-center">
      <h2 class="text-h5 text-primary font-bold q-mb-lg">Ndemanga za anthu za thandizo lathu</h2>
      <div class="row justify-around q-gap-md">
        <q-card class="testimonial-card col-12 col-md-3 q-pa-md q-my-md">
          <q-avatar icon="account_circle" size="lg" color="primary" />
          <p class="q-mt-md q-mb-sm">
            "Nzothandiza kwambili! Ndapeza mayankho womwe akhala akundivutisa kwa zaka zambili!"
          </p>
          <span class="text-caption text-grey-7">- Samuel Kwachali</span>
        </q-card>
        <q-card class="testimonial-card col-12 col-md-3 q-pa-md q-mt-md">
          <q-avatar icon="account_circle" size="lg" color="primary" />
          <p class="q-mt-md q-mb-sm">
            "Njira ndyosavuta kugwirisa ntchito. Nzobwino kuona kuti aliyense akupeza chithandizo."
          </p>
          <span class="text-caption text-grey-7">- Peter Mataya</span>
        </q-card>
        <q-card class="testimonial-card col-12 col-md-3 q-pa-md">
          <q-avatar icon="account_circle" size="lg" color="primary" />
          <p class="q-mt-md q-mb-sm">
            "Iyi nde ndinjira yabwino kwa wina aliyense akufuna chithandizo chamalamulo mwachangu."
          </p>
          <span class="text-caption text-grey-7">- Patrick Phandera</span>
        </q-card>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section q-pa-lg text-center bg-grey-2">
      <h2 class="text-h5 text-primary font-bold q-mb-lg">
        Mafunso Amene Ena  Akufunsa.
      </h2>
      <q-expansion-item
        label="Kodi nditha kuyamba bwanji kugwirisa ntchito?"
        icon="help_outline"
      >
        <template v-slot:default>
          Nzosavuta, dinani pa "Yambani macheza anu"" pa mwamba pa tsambali, ndipo mupitisidwa ku tsamba lamacheza.
        </template>
      </q-expansion-item>
      <q-expansion-item
        label="Kodi mumasamalira macheza athu?"
        icon="privacy_tip"
      >
        <template v-slot:default>
          Eya! timayika patsogolo chitetezo cha macheza anu. Macheza onso amasungidwa motetezeka kuti ena asaziwe.
        </template>
      </q-expansion-item>
      <q-expansion-item
        label="Kodi mumapezeka ma malamulo anji?"
        icon="topic"
      >
        <template v-slot:default>
          Mutha kucheza magawo asiyana siyana wonse akupezeka mu malamulo aziko lathu, monga malamulo antchito, koamnso abanja.
        </template>
      </q-expansion-item>
    </div>

    <!-- Call to Action -->
    <div class="cta-section q-pa-lg bg-primary text-white text-center">
      <h2 class="text-h5 q-mb-md">
        Kutukula anthu akumuza kuti aziwe malamulo amziko lathu
      </h2>
      <p>
        Yambani ulendo woziwa komanso kumvevesa malamula omwe muli nawo mu ziko lathuli.
      </p>
      <q-btn
        unelevated
        color="white"
        text-color="primary"
        class="q-mt-md"
        label="yambani macheza anu"
        @click="goToChatbot"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    goToChatbot() {
      // Navigate to the chatbot page
      this.$router.push({ path: "chat" });
    },
  },
};
</script>

<style scoped>
.landing-page {
  font-family: "Roboto", sans-serif;
}

.hero-section {
  background: linear-gradient(135deg, #f0f4ff 30%, #e6e9ff 100%);
}

.hero-image {
  max-height: 450px;
  width: 100%;
}

.feature-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.testimonial-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.cta-section {
  background: #3a57e8;
  color: #ffffff;
}

.q-pa-md {
  padding: 20px;
}
</style>
