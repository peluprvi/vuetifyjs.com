export default {
  props: {
    activeClass: `Class bound when component is active. **warning** Depending upon the component, this could cause side effects. If you need to add a custom class on top of a default, just do <code>active-class="default-class your-class"</code>`,
    append: `Vue Router的router-link属性`,
    disabled: 'Route item is disabled',
    exact: 'Exactly match the link. Without this, "/" will match every route',
    exactActiveClass: 'Vue Router router-link prop',
    href: 'Will designate the component tag to `<a>`',
    nuxt: '指定一个链接是nuxt链接（nuxt-link）',
    replace: 'Vue Router router-link prop',
    to: 'Will designate the component tag to `<router-link>`',
    tag: 'Specify a custom tag to use on the component',
    target: 'Specify the target attribute, only works with anchor tag.'
  }
}
