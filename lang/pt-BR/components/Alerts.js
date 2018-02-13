export default {
  header: 'Alerta',
  headerText: 'O componente `v-alert` é usado para transmitir informações importantes para o usuário. Ele possui 4 tipos de variações, **success**, **info**, **warning** and **error**. Eles possuem ícones padrões já atribuídos que podem ser modificados e utilizados para representar açõs diferentes.',
  components: ['v-alert'],
  examples: [{
    contextual: {
      header: 'Contextual'
    },
    closable: {
      header: 'Fechável',
      desc: 'Usando `v-model` você pode controlar o estado do Alerta. Se você não deseja atribuir um v-model e apenas deseja exibir o alerta, você pode simplesmente atribuir a prop `value`.'
    },
    icon: {
      header: 'Ícone customizável / Sem ícone',
      desc: 'Você pode facilmente atribuir um ícone customizável ou então remover todos.'
    },
    transition: {
      header: 'Exibir transição',
      desc: 'Você pode aplicar uma transição customizável para quando mostrar ou ocultar o alerta.'
    },
    outline: {
      header: 'Outline',
      desc: 'Outline alerts inherit their borders from the current color applied.'
    }
  }],
  props: {
    dismissible: 'Specifies that the Alert can be closed',
    icon: 'Designates a specific icon',
    outline: 'Alert will have an outline',
    type: 'Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and a pre-defined icon.'
  }
}
