module.exports = {
  'alerts': {
    name: 'v-alert',
    usage: { file: 'contextual' },
    examples: [
      { file: 'closable' },
      { file: 'icon' },
      { file: 'transition' }
    ]
  },
  'avatars': {
    name: 'v-avatar',
    usage: { file: 'standard' },
    examples: [
      { file: 'advanced' },
      { file: 'iconAndText' }
    ]
  },
  'badges': {
    name: 'v-badge',
    usage: { file: 'character' },
    examples: [
      { file: 'icon' },
      { file: 'inline' },
      { file: 'visibility' }
    ]
  },
  'breadcrumbs': {
    name: 'v-breadcrumbs',
    components: ['v-breadcrumbs-item'],
    usage: { file: 'textDividers' },
    examples: [
      { file: 'iconDividers' }
    ]
  },
  'bottom-navigation': {
    name: 'v-bottom-nav',
    usage: { file: 'iconsAndText' },
    examples: [
      { file: 'colorAndShift' },
      { file: 'toggle' }
    ]
  },
  'bottom-sheets': {
    name: 'v-bottom-sheet',
    usage: { file: 'standard' },
    examples: [
      { file: 'inset' }
    ]
  },
  'buttons': {
    name: 'v-btn',
    usage: { file: 'usage' },
    examples: [
      { file: 'flat' },
      { file: 'raised' },
      { file: 'depressed' },
      { file: 'dropdown', uninverted: true },
      { file: 'toggle' },
      { file: 'icon' },
      { file: 'floating' },
      { file: 'loaders' },
      { file: 'sizing' },
      { file: 'outline' },
      { file: 'round' },
      { file: 'block' }
    ]
  },
  'floating-action-buttons': {
    name: 'fab',
    usage: { file: 'promotedAction', uninverted: true },
    examples: [
      { file: 'small' },
      { file: 'displayAnimation', uninverted: true },
      { file: 'lateralScreens', uninverted: true },
      { file: 'speedDial' }
    ]
  },
  'cards': {
    name: 'v-card',
    components: ['v-card-media', 'v-card-title', 'v-card-actions'],
    usage: { file: 'components' },
    examples: [
      { file: 'mediaWithText' },
      { file: 'horizontal' },
      { file: 'grids' },
      { file: 'customActions' }
    ]
  },
  'carousels': {
    name: 'v-carousel',
    components: ['v-carousel-item'],
    usage: { file: 'default' },
    examples: [
      { file: 'customTransition' },
      { file: 'customDelimiter' },
      { file: 'hideControls' }
    ]
  },
  'chips': {
    name: 'v-chip',
    usage: { file: 'default' },
    examples: [
      { file: 'colored' },
      { file: 'icon' },
      { file: 'outline' },
      { file: 'label' },
      { file: 'closable' },
      { file: 'inSelects' }
    ]
  },
  'data-tables': {
    name: 'v-data-table',
    components: ['v-edit-dialog'],
    usage: { file: 'standard' },
    examples: [
      { file: 'noData' },
      { file: 'headers' },
      { file: 'headerCell' },
      { file: 'footer' },
      { file: 'expand' },
      { file: 'select' },
      { file: 'search' },
      { file: 'paginate' },
      { file: 'sort' },
      { file: 'server' },
      { file: 'theme' },
      { file: 'headerless' }
    ]
  },
  'dialogs': {
    name: 'v-dialog',
    usage: { file: 'simple' },
    examples: [
      { file: 'withoutActivator' },
      { file: 'modal' },
      { file: 'fullscreen' },
      { file: 'form' },
      { file: 'scrollable' },
      { file: 'overflowed' }
    ]
  },
  'dividers': {
    name: 'v-divider',
    usage: { file: 'fullBleed' },
    examples: [
      { file: 'lightAndDark' },
      { file: 'inset' },
      { file: 'subheaders' }
    ]
  },
  'expansion-panels': {
    name: 'v-expansion-panel',
    components: ['v-expansion-panel-content'],
    usage: { file: 'accordion' },
    examples: [
      { file: 'expand' },
      { file: 'popout' },
      { file: 'focusable' }
    ]
  },
  'footer': {
    name: 'v-footer',
    usage: { file: 'default' }
  },
  'forms': {
    name: 'v-form',
    usage: { file: 'basicValidation' },
    examples: [
      { file: 'submitAndClear' },
      { file: 'vuelidate' },
      { file: 'veeValidate' }
    ]
  },
  'grid-lists': {
    name: 'v-container',
    components: ['v-layout', 'v-flex', 'v-spacer'],
    usage: { file: 'default' },
    examples: [
      { file: 'subheader' }
    ]
  },
  'icons': {
    name: 'v-icon',
    usage: { file: 'standard' },
    examples: [
      { file: 'fontAwesome' },
      { file: 'mdi' },
      { file: 'color' },
      { file: 'buttons' }
    ]
  },
  'lists': {
    name: 'v-list',
    components: [
      'v-list-tile',
      'v-list-tile-title',
      'v-list-tile-sub-title',
      'v-list-tile-content',
      'v-list-tile-action',
      'v-list-tile-avatar',
      'v-list-tile-group',
      'v-list-tile-action-text',
    ],
    usage: { file: 'avatarTwoLines' },
    examples: [
      { file: 'avatarTitleAndAction' },
      { file: 'iconTwoLinesAndAction' },
      { file: 'avatarThreeLines' },
      { file: 'avatarSubheaderTitleAndAction' },
      { file: 'subheadingsAndDividers' },
      { file: 'cardList' },
      { file: 'titleSubtitleActionsAndActionText' },
      { file: 'actionTitleAndSubtitle' },
      { file: 'expansionLists' },
      { file: 'dark' }
    ]
  },
  'menus': {
    name: 'v-menu',
    usage: { file: 'activator' },
    examples: [
      { file: 'absolute' },
      { file: 'absoluteWithoutActivator' },
      { file: 'hover' },
      { file: 'menus' },
      { file: 'customTransition' },
      { file: 'popover' }
    ]
  },
  'navigation-drawers': {
    name: 'v-navigation-drawer',
    usage: { file: 'permanent' },
    examples: [
      { file: 'permanentClipped' },
      { file: 'permanentFloating' },
      { file: 'persistent' },
      { file: 'mini' },
      { file: 'temporary' },
      { file: 'dark' }
    ]
  },
  'pagination': {
    name: 'v-pagination',
    usage: { file: 'short' },
    examples: [
      { file: 'long' },
      { file: 'limit' },
      { file: 'round' },
      { file: 'disabled' }
    ]
  },
  'parallax': {
    name: 'v-parallax',
    usage: { file: 'default' },
    examples: [
      { file: 'content' },
      { file: 'customHeight' },
      { file: 'jumbotron' }
    ]
  },
  'pickers': {
    name: 'v-date-picker',
    components: ['v-time-picker'],
    usage: { file: 'dateLight' },
    examples: [
      { file: 'dateDark' },
      { file: 'dateDialogAndMenu' },
      { file: 'dateAllowedDates' },
      { file: 'dateCustomFormat' },
      { file: 'dateInternationalization' },
      { file: 'monthLight' },
      { file: 'monthDark' },
      { file: 'monthDialogAndMenu' },
      { file: 'monthAllowedMonths' },
      { file: 'monthCustomFormat' },
      { file: 'monthInternationalization' },
      { file: 'timeLight' },
      { file: 'timeDark' },
      { file: 'timeDialogAndMenu' },
      { file: 'time24hFormat' },
      { file: 'timeAllowed' }
    ]
  },
  'progress': {
    name: 'v-progress-circular',
    components: ['v-progress-linear'],
    usage: { file: 'circularDefault' },
    examples: [
      { file: 'circularColored' },
      { file: 'circularIndeterminate' },
      { file: 'circularSizeAndWidth' },
      { file: 'circularRotate' },
      { file: 'linearDeterminate' },
      { file: 'linearIndeterminate' },
      { file: 'linearBuffer' },
      { file: 'linearQueryIndeterminateAndDeterminate' },
      { file: 'linearCustomHeightAndContextualColors' },
      { file: 'linearCustomColors' }
    ]
  },
  'selects': {
    name: 'v-select',
    usage: { file: 'light' },
    examples: [
      { file: 'dark' },
      { file: 'icons' },
      { file: 'multiple' },
      { file: 'autocomplete' },
      { file: 'scopedSlots' },
      { file: 'customTextAndValue' },
      { file: 'tags' },
      { file: 'asynchronous' }
    ]
  },
  'selection-controls': {
    name: 'v-checkbox',
    components: [
      'v-radio-group',
      'v-radio',
      'v-switch'
    ],
    usage: { file: 'example' },
    examples: [
      { file: 'checkboxesBoolean' },
      { file: 'checkboxesArray' },
      { file: 'checkboxesStates' },
      { file: 'checkboxesColors' },
      { file: 'radiosDefault' },
      { file: 'radiosDirection' },
      { file: 'radiosColors' },
      { file: 'switchesBoolean' },
      { file: 'switchesArray' },
      { file: 'switchesStates' },
      { file: 'switchesColors' }
    ]
  },
  'sliders': {
    name: 'v-slider',
    usage: { file: 'continuous' },
    examples: [
      { file: 'discrete' },
      { file: 'icons' },
      { file: 'editableNumericValue' },
      { file: 'dark' },
      { file: 'customColors' }
    ]
  },
  'snackbars': {
    name: 'v-snackbar',
    usage: { file: 'position' },
    examples: [
      { file: 'contextual' }
    ]
  },
  'steppers': {
    name: 'v-stepper',
    components: [
      'v-stepper-step',
      'v-stepper-content',
      'v-stepper-header'
    ],
    usage: { file: 'example' },
    examples: [
      { file: 'editable' },
      { file: 'nonEditable' },
      { file: 'optional' },
      { file: 'horizontal' },
      { file: 'vertical' },
      { file: 'linear' },
      { file: 'nonLinear' },
      { file: 'alternateLabels' },
      { file: 'error' },
      { file: 'alternateError' },
      { file: 'verticalError' },
      { file: 'dynamic' }
    ]
  },
  'subheaders': {
    name: 'v-subheader',
    usage: { file: 'list' },
    examples: [
      { file: 'grid' },
      { file: 'menu' }
    ]
  },
  'tabs': {
    name: 'v-tabs',
    components: [
      'v-tabs-bar',
      'v-tabs-slider',
      'v-tabs-item',
      'v-tabs-items',
      'v-tabs-content',
    ],
    usage: { file: 'toolbar' },
    examples: [
      { file: 'centered' },
      { file: 'content' },
      { file: 'search' },
      { file: 'icons' },
      { file: 'desktop' },
      { file: 'grow' },
      { file: 'pagination' },
      { file: 'disabledScroll' }
    ]
  },
  'text-fields': {
    name: 'v-text-field',
    usage: { file: 'label' },
    examples: [
      { file: 'labelDark' },
      { file: 'singleLine' },
      { file: 'singleLineDark' },
      { file: 'icon' },
      { file: 'iconDark' },
      { file: 'multiLine' },
      { file: 'multiLineDark' },
      { file: 'characterCounter' },
      { file: 'password' },
      { file: 'validation' },
      { file: 'fullWidthWithCharacterCounter' },
      { file: 'requiredFields' },
      { file: 'hint' },
      { file: 'prefixesAndSuffixes' },
      { file: 'customValidation' },
      { file: 'textarea' },
      { file: 'box' },
      { file: 'customColors' },
      { file: 'masks' },
      { file: 'progressBar' }
    ]
  },
  'toolbars': {
    name: 'v-toolbar',
    components: [
      'v-toolbar-title',
      'v-toolbar-items',
      'v-toolbar-side-icon',
      'v-system-bar'
    ],
    usage: { file: 'default' },
    examples: [
      { file: 'appBar' },
      { file: 'appBarExtension' },
      { file: 'columnWidthWithHierarchy' },
      { file: 'flexibleAndCard' },
      { file: 'floatingWithSearch', uninverted: true },
      { file: 'variations', uninverted: true },
      { file: 'prominent' },
      { file: 'dense', inverted: true },
      { file: 'denseProminent', uninverted: true },
      { file: 'scrolling' },
      { file: 'appBarMenu' },
      { file: 'systemBarsStatusWindow' }
    ]
  },
  'tooltips': {
    name: 'v-tooltip',
    usage: { file: 'default' },
    examples: [
      { file: 'visibility' }
    ]
  }
}
