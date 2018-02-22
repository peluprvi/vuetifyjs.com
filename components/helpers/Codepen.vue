<template lang="pug">
  form(
    method="POST"
    action="https://codepen.io/pen/define/"
    target="_blank"
    ref="form"
  )
    input(
      type="hidden"
      name="data"
      :value="value"
    )
</template>

<script>
  const version = require('vuetify/package.json').version || 'latest'
  const title = 'Vuetify Example Pen'
  const css_external = [ // eslint-disable-line camelcase
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
    `https://unpkg.com/vuetify@${version}/dist/vuetify.min.css`
  ]
  const js_external = [ // eslint-disable-line camelcase
    'https://unpkg.com/babel-polyfill/dist/polyfill.min.js',
    'https://unpkg.com/vue/dist/vue.js',
    `https://unpkg.com/vuetify@${version}/dist/vuetify.min.js`
  ]
  export default {
    name: 'Codepen',

    props: {
      pen: {
        type: Object,
        default: () => ({})
      }
    },

    computed: {
      imports () {
        const find = /(import*) ([^'\n]*) from ([^\n]*)/g
        const script = this.pen.script || ''
        let modules = []
        let module
        while ((module = find.exec(script))) {
          modules.push(module[0])
        }
        return modules.join('\n')
      },
      script () {
        const replace = /(export default {|<script>|<\/script>|}([^}]*)$)/g
        const imports = /(import*) ([^'\n]*) from ([^\n]*)/g
        return (this.pen.script || '')
          .replace(replace, '')
          .replace(imports, '')
          .replace(/\/static\//g, 'https://vuetifyjs.com/static/')
          .replace(/\n {2}/g, '\n')
          .trim()
      },
      style () {
        return {
          content: (this.pen.style || '').replace(/(<style.*?>|<\/style>)/g, '').replace(/\n {2}/g, '\n').trim(),
          language: /<style.*lang=["'](.*)["'].*>/.exec(this.pen.style || '')
        }
      },
      template () {
        const template = this.pen.template || ''

        return template
          .replace(/\/static\//g, 'https://vuetifyjs.com/static/')
          .replace(/(<template>|<\/template>([^</template>]*)$)/g, '')
          .replace(/\n/g, '\n  ')
          .trim()
      },
      dependencies () {
        const deps = (this.pen.codepenDeps || '')
          .replace(/(<codepenDeps.*?>|<\/codepenDeps>([^</codepenDeps>]*)$)/g, '')
          .replace(/\n/g, '\n  ')
          .trim()
        return deps ? JSON.parse(deps) : {
          js: [],
          css: []
        }
      },
      allDependencies () {
        const jsUrls = (this.dependencies.js || []).map((lib) => lib.url)
        const cssUrls = (this.dependencies.css || []).map((lib) => lib.url)

        return {
          js_external: js_external.concat(jsUrls || []).join(';'),
          css_external: css_external.concat(cssUrls || []).join(';')
        }
      },
      editors () {
        const html = this.template && 0b100
        const css = this.style.content && 0b010
        const js = this.script && 0b001

        return (html | css | js).toString(2)
      },
      value () {
        const data = Object.assign({
          html: `<div id="app">
  <v-app id="inspire">
    ${this.template}
  </v-app>
</div>`,
          css: this.style.content,
          css_pre_processor: this.style.language ? this.style.language[1] : 'none',
          js: `${this.imports}
${this.dependencies.js && this.genUseStatements(this.dependencies.js)}
new Vue({
  el: '#app',
  ${this.script}
})`,
          js_pre_processor: 'babel',
          editors: this.editors
        }, this.allDependencies, { title: title })

        return JSON.stringify(data)
      }
    },

    methods: {
      submit () {
        this.$el.submit()
      },
      genUseStatements (deps) {
        let stmts = ''
        deps.forEach((d) => {
          if (d.name) stmts += `Vue.use(${d.name});\n`
        })
        return stmts
      }
    }
  }
</script>
