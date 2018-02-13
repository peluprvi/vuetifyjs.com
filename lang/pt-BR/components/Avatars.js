export default {
  header: 'Avatar',
  headerText: 'O componente `v-avatar` é utilizado para controlar o tamanho e o arredondamento da borda (border-radius) de imagens responsivas, tipicamento usado em imagens de perfil.',
  components: ['v-avatar'],
  examples: [{
    standard: {
      header: 'Exibição padrão',
      desc: 'O avatar possui um tamanho dinâmico que pode ser dimensionado para qualquer situação. A propriedade **tile** é uma variação disponível para exibir o avatar sem ter as bordas arredondadas (border-radius).'
    },
    advanced: {
      header: 'Utilização avançada',
      desc: 'Combinando um avatar com outros componentes permitem que você construa lindas interfaces facilmente para diversos usuários'
    },
    iconAndText: {
      header: 'Ícone e texto',
      desc: 'O avatar também aceita o componente `v-icon` ou texto. Misture e combine suas funcionalidades para criar algo único.'
    }
  }]
}
