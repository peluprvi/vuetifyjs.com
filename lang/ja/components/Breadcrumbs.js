export default {
  header: 'Breadcrumbs',
  headerText: '`v-breadcrumbs` コンポーネントはページ用のナビゲーションヘルパーです。**Material Icons** のアイコン、もしくは文字を区切りとして使用できます。_href_、_text_ そして任意で _disabled_ を含んだオブジェクトの配列を **items** プロパティに渡すことができます。 加えて、パンくずリストをより細かく制御するために slot を使用したり、`v-breadcrumbs-item` や他のカスタムマークアップを利用することができます。',
  components: ['v-breadcrumbs', 'v-breadcrumbs-items'],
  examples: [{
    textDividers: {
      header: 'テキスト区切り',
      desc: 'パンくずリストはデフォルトでテキストで区切られます。あらゆる文字を使用することができます。'

    },
    iconDividers: {
      header: 'アイコン区切り',
      desc: 'icon 変数を使用することで、 Material Design Icon に存在するアイコンをパンくずリストに使用することができます。'
    }
  }],
  props: {
    divider: '区切り文字を指定します。',
    icons: '区切りとなるアイコンを指定します。',
    justifyCenter: 'パンくずリストを中央寄せにします。',
    justifyEnd: 'パンくずリストを右側寄せにします。',
    large: 'パンくずリストの項目のテキストを大きくします。'
  }
}
