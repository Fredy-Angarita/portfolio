<script lang="ts" setup>
const phone = "+57 " + "323 " + "971 " + "5046";
const email = "fsangaritav@gmail.com";
const linkedin = "https://linkedin.com/in/fredysangaritav";
const github = "https://github.com/Fredy-Angarita";
const cv =
  "https://drive.google.com/drive/folders/1H_NMQ2oiTlswaZrHO7vOt5q6l2SBxk3X?usp=sharing";
</script>

<template>
  <section class="contact">
    <h3 class="contact-title">¡Trabajemos Juntos!</h3>
    <div class="contact-networks">
      <ContactBadge
        :link="cv"
        icon="streamline-color:new-file-flat"
        label="Ver CV"
      />
      <ContactBadge :link="linkedin" icon="devicon:linkedin" label="Linkedin" />
      <ContactBadge
        :link="github"
        icon="skill-icons:github-dark"
        label="Github"
      />
      <ContactBadge
        icon="streamline-ultimate-color:phone-circle"
        label="Teléfono"
        :copy="phone"
      />
      <ContactBadge
        icon="streamline-cyber-color:email-2"
        label="Email"
        :copy="email"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  border-radius: 0.4rem;
  gap: 1.2rem;

  &-title {
    text-align: center;
    font-size: 1.5rem;
  }
  &-networks {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
}
@media (max-width: 1350px) {
  .contact {
    box-shadow: inset 0px -32px 18px -29px rgba(66, 68, 90, 1);
  }
}
@media (max-width: 1000px) {
  .contact {
    box-shadow: none;
  }
}
@media (max-width: 900px) {
  .contact {
    padding: 0;
  }
}
</style>
