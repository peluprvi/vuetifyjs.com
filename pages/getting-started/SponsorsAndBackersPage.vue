<template lang="pug">
  doc-view
    template(slot-scope="{ namespace }")
      section#sponsors-and-backers
        section-head(value="GettingStarted.SponsorsAndBackers.backersHeader")
        v-divider.mb-3
        v-list(dense).transparent
          v-list-tile
            v-list-tile-title.title.grey--text
              strong {{ $t('GettingStarted.SponsorsAndBackers.backersSubHeader') }}
        v-container(fluid grid-list-md).mb-3
          v-layout(
            row
            wrap
            justify-start
            align-center
          )
            a(
              :href="`${backer.href}?ref=vuetifyjs.com`"
              target="_blank"
              :title="backer.Name"
              v-for="backer in supporters.diamond"
              v-bind:key="backer.Name"
              @click="$ga.event('backers page click', 'click', backer.Name)"
            ).text-xs-center.ma-3
              img(
                :src="`/static/doc-images/${backer.Logo}`"
                :alt="backer.Name"
              ).supporter

        v-list(dense).transparent
          v-list-tile(tag="div")
            v-list-tile-title.title.grey--text
              strong {{ $t('GettingStarted.SponsorsAndBackers.backersSubHeader2') }}
        v-container(fluid grid-list-md).mb-3
          v-layout(row wrap justify-start align-center)
            a(
              target="_blank"
              :class="[backer.Dark ? 'black' : '']"
              :href="`${backer.href}?ref=vuetifyjs.com`"
              :title="backer.Name"
              v-for="backer in supporters.palladium"
              v-bind:key="backer.Name"
              @click="$ga.event('backers page click', 'click', backer.Name)"
            ).text-xs-center.ma-3
              img(
                :src="`/static/doc-images/${backer.Logo}`"
                :alt="backer.Name"
              ).supporter

        v-list(dense).transparent
          v-list-tile(tag="div")
            v-list-tile-title.title.grey--text
              strong {{ $t('GettingStarted.SponsorsAndBackers.backersSubHeader4') }}
        v-container(fluid grid-list-md).mb-3
          v-layout(
            row
            wrap
            justify-start
            align-center
          )
            a(
            target="_blank"
              :class="[backer.Dark ? 'black' : '']"
              :href="`${backer.href}?ref=vuetifyjs.com`"
              :title="backer.Name"
              v-for="backer in supporters.gold"
              v-bind:key="backer.Name"
              @click="$ga.event('backers page click', 'click', backer.Name)"
            ).text-xs-center.ma-3
              img(
                :src="`/static/doc-images/${backer.Logo}`"
                :alt="backer.Name"
                :style="`max-width: ${backer.Size || 150}px;`"
              ).supporter
        section-head(value="GettingStarted.SponsorsAndBackers.affiliatesHeader")
        v-divider.mb-3
        v-container(fluid grid-list-md).mb-5.affiliate3
          v-layout(
            row
            wrap
            justify-start
            align-center
          )
            a(
              target="_blank"
              :class="[affiliate.Dark ? 'black' : '']"
              :href="`${affiliate.href}${affiliate.noref ? '' : '?ref=vuetifyjs.com'}`"
              :title="affiliate.Name"
              v-for="affiliate in supporters.affiliate"
              v-bind:key="affiliate.Name"
              @click="$ga.event('backers page click', 'click', affiliate.Name)"
            ).text-xs-center.mx-3
              img(
                :src="`/static/doc-images/${affiliate.Logo}`"
                :alt="affiliate.Name"
                style="max-width: 150px;"
              ).supporter
        section-head(value="GettingStarted.SponsorsAndBackers.sponsorsHeader")
        v-divider.mb-3
        v-container(fluid).mb-3
          v-layout(
            row
            wrap
            justify-start
            align-center
          )
            a(
              :href="`${sponsor.href}?ref=vuetifyjs.com`"
              target="_blank"
              :title="sponsor.Name"
              v-for="sponsor in supporters.service"
              v-bind:key="sponsor.Name"
              @click="$ga.event('backers page click', 'click', sponsor.Name)"
            ).text-xs-center.mx-3
              img(
                :src="`/static/doc-images/${sponsor.Logo}`"
                alt="sponsor.Name"
                style="max-width: 150px;"
              ).supporter
        div.text-xs-center
          div.mb-3
            translatable(i18n="GettingStarted.SponsorsAndBackers.questionHeader")
              span {{ $t('GettingStarted.SponsorsAndBackers.questionHeader') }}
          translatable(i18n="GettingStarted.SponsorsAndBackers.questionButton")
            v-btn(
              outline
              color="success"
              round
              href="mailto:john@vuetifyjs.com"
            ) {{ $t('GettingStarted.SponsorsAndBackers.questionButton') }}
</template>

<script>
  // Utilities
  import {
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters('app', ['supporters'])
    }
  }
</script>

<style lang="stylus" scoped>
  .supporter
    max-width: 225px
    width: 100%

    .affiliates &
      width: 80%
</style>
