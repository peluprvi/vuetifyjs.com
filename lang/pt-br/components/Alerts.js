export default {
  header: 'Alerta',
  headerText: 'O componente `v-alert` é usado para transmitir informações importantes para o usuário. Ele possui 4 tipos de variações, **success**, **info**, **warning** and **error**. Eles possuem ícones padrões já atribuídos que podem ser modificados e utilizados para representar açõs diferentes.',
  components: ['v-alert'],
  examples: [{
    contextual: {
      header: 'Contextual'
    },
    closable: {
      header: 'Fechável (Closable)',
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
      header: 'Traçado (Outline)',
      desc: 'Alertas possuírão um traçado (sem cor de fundo) herdam suas bordas da cor atualmente aplicada.'
    }
  }],
  props: {
    dismissible: 'É especificado que o Alerta pode ser fechado',
    icon: 'Designa um ícone específico',
    outline: 'Alertas possuírão um traçado (sem cor de fundo)',
    type: 'Especique um **success**, **info**, **warning** ou **error** alert. Utilize a cor contextual e ícones pré-definidos.'
  }
}
