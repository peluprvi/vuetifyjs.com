export default {
  header: 'Data iterator',
  headerText: 'The <code>v-data-iterator</code> component is used for displaying data, and shares a majority of its functionality with the <code>v-data-table</code> component. Features include sorting, searching, pagination, inline-editing, header tooltips, and selection.',
  components: ['v-data-iterator'],
  examples: [{
    simple: {
      header: 'Simple',
      desc: 'The data-iterator allows you to customize exactly how to display your data. In this example we are using a grid list with cards. We can use the <code>content-tag</code> prop (along with <code>content-class</code> and <code>content-props</code> to specify what the wrapper element around the items should look like.'
    },
  }],
  props: {
    contentClass: 'Applies a custom class to the wrapper element around items',
    contentProps: 'Applies custom props to the wrapper element around items',
    contentTag: 'Specified what tag should be used for the wrapper element around items',
  }
}
