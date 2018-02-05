export default {
  header: 'Divider',
  headerText: 'The `v-divider` component is used to separate sections of lists.',
  components: ['v-divider'],
  examples: [{
    fullBleed: {
      header: 'Full bleed',
      desc: 'Full bleed dividers extend the entire content width.'
    },
    lightAndDark: {
      header: 'Light and dark',
      desc: 'Dividers have light and dark variants.',
      uninverted: true
    },
    dividerList: {
      header: 'List dividers',
      desc: 'Shows list of dividers and subheaders with list items.'
    },
    dividerPortrait: {
      header: 'Dividers in Portrait View',
      desc: 'List dividers in portrait view v-tile and v-list.'
    }
  }],
  props: {
    inset: 'Adds indentation (72px)'
  }
}
