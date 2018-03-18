export default {
  header: 'Text field',
  headerText: 'Os componentes Text fields são usados para colecionar informação provida pelo usuário.',
  components: ['v-text-field'],
  supplemental: ['MaskTable'],
  examples: [{
    label: {
      header: 'Com label',
      desc: 'Text-fields possuem duas opções de temas, claros e escuros.'
    },
    singleLine: {
      header: 'Tema claro em linha única',
      desc: 'Text-fields em linha única não possuem seu label flutuando quando estiver focado ou com dados.'
    },
    icon: {
      header: 'Com Ícone',
      desc: 'Ícones podem ser especificados como prepended ou appended.'
    },
    multiLine: {
      header: 'Várias linhas',
      desc: 'Text-fields com várias linhas são úteis para grandes quantidades de texto.'
    },
    characterCounter: {
      header: 'Contador de caractere',
      desc: 'Use um contador para informar o usuário o limite de caracteres. O contador não realiza nenhuma validação por si só. Você precisará juntá-lo com um sistema de validação interno, ou uma biblioteca de terceiros.'
    },
    password: {
      header: 'Entrada de senha',
      desc: 'Uma entrada de senha pode ser usada com um ícone anexado e um retorno a fim de controlar sua visibilidade.'
    },
    validation: {
      header: 'Validação',
      desc: 'Vuetify inclui uma validação simples através da prop `rules`. Esta prop aceita um array de funções de retorno (callbacks). Enquanto estiver validando as regras, o valor do v-model atual será passado para a a função de retorno (callback). Esta função de retorno (callback) deve retornar um `true` ou uma `String`, como a mensagem de erro.'
    },
    fullWidthWithCharacterCounter: {
      header: 'Text field com largura total e contador de caractere',
      desc: 'Text fields com largura total possibilitam a você criar campos de entrada sem limites. Neste exemplo, nós usamos o `v-divider` para separar os campos.'
    },
    requiredFields: {
      header: 'Campos requeridos',
      desc: 'Neste exemplo, dois dos text-fields são requeridos. Nós utilizados a prop **required** para aplicar o asterisco para a label e a validação das regras para os campos.'
    },
    hint: {
      header: 'Texto de sugestão',
      desc: 'A propriedade **hint** nos text-fields adiciona a string fornecida abaixo do text-field. Usando **persistent-hint** mantém a sugestão visível quando o text-field não estiver focado.'
    },
    prefixesAndSuffixes: {
      header: 'Prefixos e sufixos',
      desc: 'As propriedades **prefix** e **suffix** permitem a você adicionar na mesma linha um texto não modificável próximo ao text-field, no começo ou final'
    },
    customValidation: {
      header: 'Validações customizadas',
      desc: 'Enquanto o `v-form` ou plugins de terceiros como [vuelidate](https://github.com/monterail/vuelidate) ou [vee-validation](https://github.com/logaretm/vee-validate) podem ajudar a simplificar seu processo de validação, você pode simplesmente escolher controlar você mesmo.'
    },
    textarea: {
      header: 'Textarea',
      desc: 'Os text-fields como textarea possuem um estilo alternativo.',
      uninverted: true
    },
    box: {
      header: 'Estilo em caixa',
      desc: 'Text-fields podem ser usados com um design em caixa alternativo. As props de ícones append e prepend **não** são suportadas neste modo.'
    },
    solo: {
      header: 'Estilo solo',
      desc: 'Text-fields podem ser usados com um design solo alternativo.'
    },
    customColors: {
      header: 'Cores customizadas',
      desc: 'Você pode opcionalmente modificar um text-field em qualquer cor que a oalheta de cores do Material design contenha. Abaixo é um exemplo de uma implementação de um formulário customizado com validação.'
    },
    masks: {
      header: 'Máscaras',
      desc: 'Text fields podem ser validados com máscaras. Usando regras customizadas ou pré-fabricadas, você pode formatar opcionalmente e validar conjuntos específicos de caracteres.'
    },
    progressBar: {
      header: 'Barra de progresso',
      desc: 'Você pode exibir uma barra de progresso ao invés da linha inferior. Você pode usar o progresso indeterminado padrão que possuirá a mesma cor que o text field ou designar uma cor customizada usando o slot `progress`'
    }
  }],
  props: {
    autoGrow: 'O campo de entrada crescerá de forma automática. Esta opção requer o uso do **v-model**',
    autofocus: 'Habilita focagem automática',
    box: 'Aplica o estilo em caixa alternativo para o campo de entrada',
    counter: 'Cria um contador para o tamanho da entrada. O padrão é 25 se nenhum número for especificado. Não é aplicada nenhuma validação.',
    fullWidth: 'Designa o tipo da entrada com largura total',
    multiLine: 'Transforma em um textarea',
    prefix: 'Exibe um texto como prefixo',
    rows: 'Número de linhas em um textarea',
    suffix: 'Exibe um texto como sufixo',
    textarea: 'Textarea text-field com um estilo alternativo',
    toggleKeys: 'Array de códigos chave que irão alternar o campo de entrada (se ele suportar alternação)',
    type: 'Seta o tipo do campo de entrada'
  }
}
