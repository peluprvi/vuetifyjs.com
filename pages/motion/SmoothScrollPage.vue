<template lang="pug">
  doc-view#smooth-scroll-page
    template(slot-scope="{ namespace }")
      section#usage
        section-head(:value="`${namespace}.usageHeader`")
        section-text(:value="`${namespace}.usageText1`")

</template>
