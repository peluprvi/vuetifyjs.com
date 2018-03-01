export default {
  header: 'Overview',
  headerText: 'Sendo uma framework de componentes, o Vuetify sempre crescerá horizontalmente. Dependendo do seu projeto, um **pequeno pacote** pode vir a ser um requisito. O sistema à la carte permite você selecionar os componentes a serem importados, _reduzindo_ drasticamente o tamanho do seu projeto. **Se você já possui o template `a-la-carte` instalado, você pode pular o [guia](/guides/a-la-carte#application)**.',
  headerText2: 'Para um projeto pré-construído que demonstra importações de componente único, instale o template **a-la-carte** do cli, usando o comando `vue init vuetifyjs/a-la-carte`. Alguns de nossos templates também incluem opções para habilitar os componentes a-la-carte. Mais informações estão contidas no guia [Começar](/getting-started/quick-start)',
  importHeader: 'Importanto componentes',
  importText1: 'Os pacotes `transform-imports` não são necessários para o uso dos componentes a-la-carte, mas simplifica o processo de importação dos mesmos, e, portanto é **altamente* recomendado. Ele permite que você use uma sintaxe mais concisa ao importar componentes.',
  alert2: 'Tenha em mente, os componentes `Vuetify` e` VApp` são necessários para usar o Vuetify',
  alert3: 'O objeto de opções que você passa como o segundo argumento para `Vue.use` também pode incluir uma propriedade _directives_ e uma _transitions_.',
  importText2: 'Se você não está usando o pacote transform-imports, você terá que importar cada componente como este:',
  importText3: 'Você também pode importar componentes nos arquivos .vue, como visto abaixo. Quando se faz isso, é importante que você importe todas as exportações nomeadas e, em seguida, desestruture-as em componentes. Caso contrário, os componentes filho, como `v-card-text` ou` v-expansion-panel-content`, não estarão disponíveis.',
  styleHeader: 'Estilos necessários',
  styleText1: 'Para obter todos os estilos necessários, precisamos importá-los no stylus. Para que o webpack possa lidar com isso, você precisará instalar `stylus` e \'stylus-loader` de ** npm **.',
  alert4: 'Para obter uma explicação mais detalhada sobre como configurar seu aplicativo para lidar com o stylus, vá para <a href="/style/themes">página de temas</a>.',
  styleText2: 'Agora você precisará colocar o stylus do ponto de entrada da sua aplicação. Este é o mesmo lugar onde você está importando Vue e Vuetify (geralmente `main.js` ou` app.js`). Tenha em mente, que exigir isso em seu `App.vue` principal pode causar o aumento no tempo de carregamento, pois ele é processado novamente quando você faz alterações.',
  applicationHeader: 'Application',
  applicationText1: 'Navegue até a pasta **src** e abra `main.js`. E veremos que, no template, alguns componentes já estão configurados para serem carregados.',
  applicationText2: 'Por exemplo, o código abaixo indica ao aplicativo que você usa um `<v-app>`, `<v-navigation-drawer>`, `<v-footer>` e um `<v-toolbar>`. Uma vez definida, a marcação pode ser usada em qualquer arquivo .vue.',
  componentNameListHeader: 'Lista de nomes dos componentes de UI',
  componentNameListText1: 'Alguns componentes, como `VLayout` ou `VFlex`, são por motivos de organização incluídos em outros componentes, neste caso `VGrid`. Para saber qual componente importar você pode revisar a tabela a seguir.',
  toc: [
    {
      text: 'Visão geral',
      href: 'introducao'
    },
    {
      text: 'Importando componentes',
      href: 'importando-componentes'
    },
    {
      text: 'Estilos necessários',
      href: 'estilos-necessarios'
    },
    {
      text: 'Aplicação',
      href: 'aplicacao'
    },
    {
      text: 'Lista de nomes dos componentes de UI',
      href: 'lista-de-componentes'
    }
  ]
}
