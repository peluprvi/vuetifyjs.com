export default {
  header: 'Perguntas frequentes',
  headerText: 'Preso em um problema particular? Verifique alguns desses problemas mais comuns antes de criar um ticket. Se ainda não consegue encontrar o que procura, envie uma <a href="https://issues.vuetifyjs.com" target="_blank" rel="noopener"> questão </a> no github ou pergunte à comunidade no <a href="https://chat.vuetifyjs.com" target="_blank" rel="noopener"> discord </a>.',
  question: 'Pergunta:',
  answer: 'Resposta',
  noResultsFound: 'Sem resultados encontratos',
  resetSearch: 'Redefinir pesquisa',
  gotchas: [
    {
      q: 'Meu código não funciona - o que devo fazer?',
      a: 'Primeiro, certifique-se de que está usando a versão mais recente do Vue.js e do Vuetify. Tente reproduzir no codepen usando o seguinte [template](https://template.vuetifyjs.com/). Se você não conseguir reproduzir o problema fora do seu ambiente, isso geralmente significa que o problema reside localmente. Se você ainda não conseguir resolver seu problema, forneça seu codepen e digite em **#need-help** na [comunidade](https://chat.vuetifyjs.com).'
    },
    {
      q: 'Estou recebendo um erro similar à este:<br>Error in ./node_modules/vuetify/src/dir/file.js Module parse failed: Unexpected token (&lt;lineno&gt;:&lt;characterno&gt;)',
      a: 'Se você estiver usando um IDE, como IntelliJ IDEA ou WebStorm, muitas vezes adicionará importações automáticas apontando para o diretório `vuetify/src/` para os componentes que você usa. Altere o caminho da declaração de importação de `vuetify/src/` para `vuetify/es5/`.'
    },
    {
      q: 'Existe um modelo no codepen com o roteador?',
      a: 'Sim, [bem aqui](https://codepen.io/zikeji/pen/ypeQNm).'
    },
    {
      q: 'Minha aplicação não parece correta',
      a: 'O Vuetify requer o uso do componente `v-app`. Ele deve envolver todo o seu aplicativo e é o ponto central para grande parte da funcionalidade da estrutura. Se, por qualquer motivo, você não pode usar esse elemento, você pode imitá-lo de atributos e aulas. Defina o atributo `data-app` como verdadeiro no elemento mais alto disponível (não incluindo o corpo) e as classes **application-{light|dark}**.'
    },
    {
      q: 'Os temas Dark e Light não estão funcionando.',
      a: 'Vuetify requer um ponto de montagem para executar tarefas como o estilo do tema. Certifique-se de ter um `v-app` envolvendo sua aplicação. No caso de isso não ser possível, por qualquer motivo, você pode imitar seu comportamento aplicando **data-app** e **class="application application--light (ou dark)"** para o elemento mais alto que você pode dentro da sua aplicação.'
    },
    {
      q: 'A caixa de diálogo Menu / Diálogo / Navegação não está se abrindo corretamente.',
      a: 'Certifique-se de que seus componentes estejam envolvidos com um elemento `v-app`. Se você estiver usando um elemento para ativar o componente que não é colocado no slot <kbd> activator </kbd>, assegure-se de interromper a propagação do evento de clique. Esses componentes utilizam a diretiva `v-out-click` e fecharão imediatamente.'
    },
    {
      q: 'A barra de rolagem está mostrando mesmo que meu conteúdo não esteja transbordando verticalmente.',
      a: 'Vuetify por padrão liga a barra de rolagem html. Esta é uma escolha de design e foi debatida várias vezes. Há vantagens e desvantagens de ter e não ter isso e, a partir de agora, a votação é favorável à sua saída como está. Se você deseja desativar esta funcionalidade, basta adicionar `html {overflow-y: auto}` ao seu arquivo de estilo.'
    },
    {
      q: 'Como se centralizar verticalmente?',
      a: 'Aplique a prop **fill-height** no `v-container`. Esta classe auxiliar normalmente só adiciona **height: 100%**, mas para o recipiente, ele também procura uma criança `v-layout` e aplica as classes necessárias para centralizar verticalmente o conteúdo.'
    },
    {
      q: 'Meu _/_ link está atico quando eu estou na página _/home_',
      a: 'Adicione o **exact** ao link que aponta para a / absoluta. Para mais informações sobre isso, você pode visitar o roteador na [documentação](https://router.vuejs.org/en/api/router-link.html) oficial do Vue.'
    },
    {
      q: 'Minha página móvel não está responsiva',
      a: 'Adicione o `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">` na tag `<head>` na sua index.html.'
    },
    {
      q: 'Como eu faço para usar os Ícones do Font Awesome ou os Ícones do Material Desgin (mdi)?',
      a: 'Você deve adicionar os tipos de letra ao seu index.html ou, de outro modo, importá-los para o seu projeto <br> **MDI**: [Ícones do material](https://materialdesignicons.com/getting-started) <br> **FA**: [Font Awesome](http://fontawesome.io/get-started/)'
    },
    {
      q: 'Minha caixa de diálogo fecha imediatamente após clicar no botão',
      a: 'Quando não estiver usando o slot **activator** para os `v-menu` e` v-dialog`, por exemplo, você deve parar manualmente a _propagation_ do evento de clique. Para fazer isso, basta adicionar o modificador _.stop_ ao evento de clique, `@click.stop="myMethod"`.'
    },
    {
      q: 'Imagens relativas não estão funcionando nos componentes `v-card`',
      a: 'O carregador do Vue converte caminhos relativos para exigir funções automaticamente para você. Infelizmente, este não é o caso quando se trata de componentes personalizados. Você pode contornar esse problema usando `require`. <br> <br>` <v-card :src="require(\'path/to/img/img.jpg\')"`'
    }
  ],
  questionHeader: 'Tem algo que você acha que pertence aqui?',
  questionButton: 'Nos informe'
}
