<script setup lang="ts">
const company = 'Pointhub'
const website = 'https://www.pointhub.net'
</script>

<template>
  <div class="flex flex-col h-full gap-16">
    <div class="bg-header">
      <div class="container mx-auto pt-[80px] h-60 lg:h-100">
        <div class="flex items-center justify-center text-white">
          <div class="flex-1 flex flex-col gap-4 justify-center">
            <h1 class="text-3xl lg:text-5xl font-extrabold">Terms of Service</h1>
            <p>
              We know it’s tempting to skip these Terms of Service, but it’s important to establish what you can expect
              from us as you use Pointhub services, and what we expect from you.
            </p>
          </div>
          <div class="flex-1 hidden lg:flex items-center justify-center">
            <img class="h-80" src="@/assets/images/policies/illustration-terms.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-full flex p-4 gap-16 container mx-auto">
      <div class="hidden lg:block">
        <PoliciesSidebarMenu></PoliciesSidebarMenu>
      </div>
      <div class="prose max-w-screen-lg">
        <h1>Terms of Service</h1>
        <div class="">
          <section>
            <h2 class="font-semibold">1. Introduction</h2>
            <p>
              By accessing the website at {{ website }}, you are agreeing to be bound by these terms of service, all
              applicable laws and regulations, and agree that you are responsible for compliance with any applicable
              local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this
              site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </section>
          <section>
            <h2 class="font-semibold">2. Use License</h2>
            <div>
              <p>
                a. Permission is granted to temporarily download one copy of the materials (information or software) on
                {{ company }}'s website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ol class="mx-4">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any public display (commercial or
                  non-commercial);
                </li>
                <li>attempt to decompile or reverse engineer any software contained on {{ company }}'s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ol>
            </div>
            <div>
              <p>
                b. This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by {{ company }} at any time. Upon terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded materials in your possession whether in
                electronic or printed format.
              </p>
            </div>
          </section>
          <section>
            <h2>3. Disclaimer</h2>
            <p>
              a. The materials on {{ company }}'s website are provided on an 'as is' basis. {{ company }} makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              b. Further, {{ company }} does not warrant or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on its website or otherwise relating to such materials
              or on any sites linked to this site.
            </p>
          </section>
          <section>
            <h2>4. Limitation</h2>
            <p>
              In no event shall {{ company }} or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on {{ company }}'s website, even if {{ company }} or a {{ company }} authorized
              representative has been notified orally or in writing of the possibility of such damage. Because some
              jurisdictions do not allow limitations on implied warranties, or limitations of liability for
              consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>
          <section>
            <h2>5. Accuracy of materials</h2>
            <p>
              The materials appearing on {{ company }}'s website could include technical, typographical, or photographic
              errors. {{ company }} does not warrant that any of the materials on its website are accurate, complete or
              current. {{ company }} may make changes to the materials contained on its website at any time without
              notice. However {{ company }} does not make any commitment to update the materials.
            </p>
          </section>
          <section>
            <h2>6. Links</h2>
            <p>
              {{ company }} has not reviewed all of the sites linked to its website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by {{ company }} of
              the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>
          <section>
            <h2>7. Modifications</h2>
            <p>
              {{ company }} may revise these terms of service for its website at any time without notice. By using this
              website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>
          <section>
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Indonesia and you
              irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-header {
  background-image: url('@/assets/images/banner-background.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  @apply p-4;
}
</style>
