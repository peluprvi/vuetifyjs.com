export default {
  header: 'Toolbar (Barra de ferramentas)',
  headerText: 'O componente `v-toolbar` é fudamental para qualquer interface, pelo fato de geralmente ser a principal fonte de navegação do site. O componente toolbar trabalha bem em conjunto com o navigation drawer para esconder links e também apresenta um ativador para abrir o sidebar (menu lateral) em dispositivos móveis.',
  components: [
    'v-toolbar',
    'v-system-bar'
  ],
  examples: [{
    usage: {
      header: 'Utilização',
      desc: 'A toolbar é um container flexível que pode ser utilizado em diversas maneiras. Por padrão, a barra de ferramentas possui 64px de altura em desktops, 56px de altura em dispositivos móveis na vertical e 48px de altura em dispositivos móveis na horizontal. Existe um número de componentes de auxílio disponíveis para serem usados com a toolbar. Estes são `v-toolbar-side-icon`, `v-toolbar-title` e `v-toolbar-items`.'
    },
    appBar: {
      header: 'Barra de aplicativos',
      desc: 'A barra de aplicativos é a principal toolbar de sua aplicação. Ela pode conter ícones, menus, entre outros.'
    },
    appBarItems: {
      header: 'Barra de aplicativos com itens',
      desc: 'Utilizando o componente `v-toolbar-items`, você pode usar os componentes `v-btn` normalmente para criar uma barra de aplicativos com itens. Não se esqueça de aplicar a prop `flat` para cada botão.'
    },
    appBarExtension: {
      header: 'Barra de aplicativos com extensão',
      desc: 'Uma extensão pode ser usada para criar uma barra mais proeminente. Se um título for colocado dentro da entesão, ela irá ser deslocada automaticamente para a direita para combinar a localização normal que seria na barra principal.'
    },
    columnWidthWithHierarchy: {
      header: 'Largura da coluna com hierarquia',
      desc: 'Toolbars possuem 2 variantes, clara e escura. Toolbars claras possuem botões de cor escura e texto escuro, ao passo que toolbars escuras possuem botões de cor branca e texto branco.'
    },
    flexibleAndCard: {
      header: 'Toolbar flexível e card toolbar',
      desc: 'Com poucos estilos customizados, você pode facilmente criar suas incríveis interfaces de usuários.'
    },
    floatingWithSearch: {
      header: 'Pesquisa flutuante',
      desc: 'Uma toolbar flutuante pode ser colocada sobre o conteúdo que ela referencia.'
    },
    variations: {
      header: 'Variações',
      desc: 'Uma barra de aplicativos possui múltiplas variações que podem ser aplicadas com temas e classes de auxílio. Estes variam entre temas claros e escuros, coloridos e transparentes.',
      uninverted: true
    },
    prominent: {
      header: 'Toolbars proeminentes',
      desc: 'Toolbars proeminentes adicionam um slot onde você pode colocar elementos dentro da área extendida. Haverá uma trava para 64px de altura no conteúdo e áreas de extensão.'
    },
    dense: {
      header: 'Toolbars densas',
      desc: 'Toolbars densas têm sua altura reduzida para 48px. Isto também é o comportamento padrão para dispositivos móveis na horizontal (modo paisagem).'
    },
    denseProminent: {
      header: 'Toolbars densas e proeminentes',
      desc: 'Você pode combinar ambas para extender a uma variante menor da toolbar.'
    },
    scrolling: {
      header: 'Técnicas de rolagem',
      desc: 'Uma toolbar pode deslocar para fora da tela na rolagem da mesma. Aqui nós demonstramos como você pode especificar o alvo da rolagem (janela é o padrão). Tenha em mente que para este exemplo, existe uma marcação especial que não será requerida em sua aplicação.'
    },
    appBarMenu: {
      header: 'Barra de aplicativos com menu',
      desc: 'Você pode adicionar um menu de componentes a uma toolbar.'
    },
    systemBarsStatusWindow: {
      header: 'Barras do Sistema - status/janela',
      desc: 'Barras do sistema são úteis para ícones de notificação em dispositivos móveis e desktop. Para exemplos ao vivo, vá até os layouts pré-definidos.'
    }
  }],
  props: {
    card: 'Herda a border radius quando usada dentro de um `v-card`',
    clippedLeft: 'Designa que as aplicações `v-navigation-drawer` são cortados no lado esquerdo da toolbar',
    clippedRight: 'Designa que as aplicações `v-navigation-drawer` são cortados no lado direito da toolbar',
    dense: 'Reduz a altura do conteúdo e exntesão da toolbar',
    extended: 'Força a toolbar a gerar uma extensão sem a utilização de um slot',
    flat: 'Remove a box-shadow da toolbar',
    floating: 'Faz com que a toolbar flutue em linha',
    height: 'Designa uma altura específica para a toolbar',
    lightsOut: 'Reduz a opacidade da barra do sistema',
    manualScroll: 'Manualmente aplica a funcionalidade **scroll-off-screen**',
    prominent: 'Aumenta a altura do conteúdo e extensão da toolbar',
    scrollOffScreen: 'Irá deslocar a toolbar para fora da tela ao rolar para baixo',
    scrollTarget: 'Atribui o alvo da rolagem para o scroll-off-screen',
    scrollThreshold: 'A quantidade da distância da rolagem para baixo antes da toolbar usar scroll-off-screen',
    status: 'Reduz a altura da barra do sistema',
    window: 'Aumenta a altura da barra do sistema'
  }
}
