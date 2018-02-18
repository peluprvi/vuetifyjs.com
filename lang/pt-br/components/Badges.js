export default {
  header: 'Insígnia',
  headerText: 'O componente `v-badge` pode envolver qualquer tipo de conteúdo a fim de destacar esta informação ao usuário ou apenas chamar a atenção para um elemento específico.',
  components: ['v-badge'],
  examples: [{
    character: {
      header: 'Personagem (Character)',
      desc: 'Qualquer elemento que pode ser utilizado com uma insígnia.'
    },
    overlap: {
      header: 'Sobreposição (Overlap)',
      desc: 'A insígnia irá sobrepor seu conteúdo quando estiver utilizando a "prop" `overlap`'
    },
    inline: {
      header: 'Em linha (Inline)',
      desc: 'Insígnias também podem ser colocadas na mesma linha com um texto.'
    },
    icon: {
      header: 'Ícone',
      desc: 'O emblema pode usar todo o seu conjunto atual de ícones suportados.'
    },
    visibility: {
      header: 'Visibilidade',
      desc: 'A visibilidade das insígnias podem ser controladas usando `v-model`.'
    }
  }],
  props: {
    bottom: 'Mixins.Positionable.props.bottom',
    left: 'Mixins.Positionable.props.left',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
