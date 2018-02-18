export default {
  header: 'Folha inferior (Bottom sheet)',
  headerText: 'A folha inferior é um `v-dialog` modificado que desloca-se suavemente da parte inferior da tela, semelhante ao `v-bottom-nav`. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.',
  components: ['v-bottom-sheet'],
  examples: [{
    standard: {
      header: 'Exibição padrão',
      desc: 'Aqui nós mostramos uma lista de exemplo de ações que poderiam estar presente em uma aplicação.'
    },
    inset: {
      header: '(Inset bottom sheets)',
      desc: 'Bottom sheets can be inset, reducing their maximum width on desktop to 70%. This can be further reduced manually using the `width` prop. We also showcase dynamic class binding using the Vuetify breakpoint object.'
    }
  }],
  props: {
    disabled: 'Disables the ability to open the dialog',
    hideOverlay: 'Hide the display of the overlay',
    inset: 'Reduces the dialog content maximum width to 70%',
    lazy: 'Mixins.Bootable.props.lazy',
    maxWidth: 'Specify the maximum width of the sheet\'s container'
  }
}
