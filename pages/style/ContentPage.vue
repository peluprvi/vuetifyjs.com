<template lang="pug">

  page(
    id="content"
  )
    page-introduction(
      title="Style.Content.header"
      desc="Style.Content.headerText"
    )

    section#blockquote
      section-heading(value="Style.Content.blockquoteHeader")
      blockquote.blockquote.mb-5 {{ lorem }}

    section#paragraphs
      section-heading(value="Style.Content.paragraphsHeader")
      p {{ lorem }}
      p {{ lorem }}

    section#code
      section-heading(value="Style.Content.codeHeader")
      section-text(value="Style.Content.codeText")

    section#variables
      section-heading(value="Style.Content.variablesHeader")
      section-text(value="Style.Content.variablesText")

    section#user-input
      section-heading(value="Style.Content.userInputHeader")
      section-text(value="Style.Content.userInputText")

</template>

<script>
  export default {
    data: () => ({
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.'
    })
  }
</script>

<style lang="stylus">
  #content
    code
      box-shadow: none
</style>
