<template lang="pug">

  page(
    id="transitions"
    toc="Motion.Transitions.toc"
  )
    page-introduction(
      title="Motion.Transitions.header"
      desc="Motion.Transitions.headerText"
    )

    section#examples
      section-heading(value="Motion.Transitions.examplesHeader")
      //- component-example(
      //-   :header="`#${i + 1} ${$t(`Examples.Transitions.${example.file}.header`)}`"
      //-   :new-in="example.new"
      //-   :file="`transitions/${example.file}`"
      //-   :id="`example-${i + 1}`"
      //-   :key="i"
      //-   v-for="(example, i) in examples"
      //- )
      //-   div(
      //-     slot="desc"
      //-     v-html="`${$t(`Examples.Transitions.${example.file}.desc`)}`"
      //-   )

    section#create-your-own
      section-heading(value="Motion.Transitions.createYourOwnHeader")
      section-text(value="Motion.Transitions.createYourOwnText1")
      markup(lang="javascript")
        |import { createSimpleTransition } from '../../node_modules/vuetify/src/util/helpers'
        |&nbsp;
        |const myTransition = createSimpleTransition('my-transition')
        |&nbsp;
        |Vue.component('my-transition', myTransition)
      section-text(value="Motion.Transitions.createYourOwnText2")
      markup(lang="stylus")
        |.fade-transition
        |   &-leave-active
        |     position: absolute
        |&nbsp;
        |   &-enter-active, &-leave, &-leave-to
        |     transition: $primary-transition
        |&nbsp;
        |   &-enter, &-leave-to
        |     opacity: 0

</template>

<script>
  export default {
    data: () => ({
      examples: [
        { file: 'slideXTransitions' },
        { file: 'slideYTransitions' },
        { file: 'scaleTransition' },
        { file: 'fadeTransition' },
        { file: 'customOrigin' }
      ]
    })
  }
</script>
