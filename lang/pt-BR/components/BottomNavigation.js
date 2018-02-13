export default {
  header: 'Navegador inferior (Bottom nav)',
  headerText: 'O componente `v-bottom-nav` é uma alternativa da barra lateral. Ele é utilizado primariamente em dispositivos móveis e ele possui duas variantes, ícones e textos, e mudança.',
  components: ['v-bottom-nav'],
  examples: [{
    iconsAndText: {
      header: 'Ícones e texto',
      desc: 'Enquanto o navegador inferior foi feito para ser utilizado junto ao `vue-router`, você também pode programaticamente controlar seu estado de ativação dos botões usando a "prop" `active.sync`. Você pode mudar o valor de um botão usando seu atributo `value`.'
    },
    colorAndShift: {
      header: 'Cor & mudança (Color & shift)',
      desc: 'Quando estiver usando um fundo colorido, é recomendado que use a "prop" `light`. A "prop" `shift` esconderá o texto do botão até que seja ativada novamente. Tenha em mente, o texto do `v-btn` é requerido para que seja envolvido em uma "tag" `<span>`.'
    },
    toggle: {
      header: 'Alternador (Toggle)',
      desc: 'Como outros componentes Vuetify, você pode controlar o estado de exibição com o `v-model`.'
    }
  }],
  props: {
    active: 'Armazena o valor do botão atualmente ativo. Se não foi fornecido nenhum valor ao botão, em vez disso será usado seu índice. Esta "prop" suporta o  modificador **.sync**.',
    absolute: 'Mixins.Positionable.props.absolute',
    fixed: 'Mixins.Positionable.props.fixed'
  },
  events: {
    'update:active': 'O evento usado por `active.sync`'
  }
}
