export default {
  header: 'Theme',
  headerText: 'Easily change the colors of your application programmatically.',
  lightAndDarkHeader: 'Light and Dark',
  lightAndDarkText1: 'Vuetify supports both **light** and **dark** variants of the Material Design spec. This designation starts at the root application component, `v-app`.',
  lightAndDarkText2: 'When you designate a component as light or dark, all of its children will inherit and apply the same unless otherwise specified.',
  customizingHeader: 'Customizing',
  customizingText1: 'By default, Vuetify has a standard theme applied for all components.',
  customizingText2: 'This can be easily changed. Simply pass a **theme** property to the `Vue.use` function. You can choose to modify all or only some of the theme properties, with the remaining inheriting from the default.',
  customizingText3: 'You can also use the pre-defined material colors.',
  customizingText4: 'Under the hood, Vuetify will generate css classes based upon these values that will be accessible in the DOM. These classes will follow the same markup as other helper classes, `primary` or `secondary--text` for example.',
  customizingText5: 'These values will also be made available on the instance **$vuetify** object under the **theme** property. This allows you to _dynamically_ modify your theme. Behind the scenes, Vuetify will regenerate and update your theme classes, seemlessly updating your application.',
  stylusHeader: 'Modifying Stylus variables',
  stylusText1: 'In order to change these variables, we have to make our changes before the import of the Vuetify styles. You will need to setup your build process to accommodate a stylus file. If you are using one of the pre-made templates available on the [Quick Start](/getting-started/quick-start) guide, you can skip this next section.',
  stylusHeader2: 'Setup stylus-loader with Webpack',
  stylusText2: 'In the command line, run:',
  stylusText3: 'This will install the dependecies needed to import stylus files. Once installed, open your webpack config and add an additional rule:',
  stylusText4: 'This will tell webpack how to handle a .styl file when imported. Next, we need to create the main entry point. Create a folder called `stylus` in your src directory with a file named `main.styl`. Once done, open the .styl file and add this entry.',
  stylusText5: 'Keep in mind that the relative location of node_modules may differ in your project so adjust accordingly. You have 2 options for import location, either your main `App.vue` or `app.js`.',
  stylusText6: 'After you have decided on your import location, if you are requiring the Vuetify stylesheet by a <link> tag in your index file, remove it. Restart your build processes and re-open your project. You should see all of the styles working correctly.',
  stylusHeader3: 'Modify your theme',
  stylusText7: 'Now that stylus is configured, we can create a custom `$theme` hash containing the application specific styles. Keep in mind, if you want to use the built in color pack variables, i.e. `$grey.lighten-3` you will need to import the color file at the top of your `main.styl` file. For a list of colors available, navigate to the [Colors](/style/colors) section of the documentation.',
  stylusText8: 'After you have decided on your color palette, simply create a new hash:',
  toc: [
  {
      text: 'Theme',
      href: 'introduction'
    },
    {
      text: 'Light and Dark',
      href: 'light-and-dark'
    },
    {
      text: 'Customizing',
      href: 'customizing'
    },
    {
      text: 'Modifying Stylus variables',
      href: 'stylus-guide'
    }
  ]
}
