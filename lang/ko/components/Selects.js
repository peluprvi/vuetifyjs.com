export default {
  header: '셀렉트 (Select)',
  headerText: '셀렉트 필드 컴포넌트는 옵션 목록에서 사용자가 제공하는 정보를 수집하는데 사용됩니다.',
  components: ['v-select'],
  supplemental: ['MaskTable'],
  examples: [{
    light: {
      header: '라이트 테마 (Light theme)',
      desc: '표준 단일 셀렉트는 다양한 설정 옵션을 가지고 있습니다.'
    },
    icons: {
      header: '아이콘 (Icons)',
      desc: '앞이나 뒤에 커스텀 아이콘 붙이세요'
    },
    multiple: {
      header: '복수선택 (Multiple)',
      desc: 'multi-select 에서 선택된 항목들을 보여줄때 `v-chip`을 사용할 수 있습니다.'
    },
    autocomplete: {
      header: '자동완성 (Autocomplete)',
      desc: 'type-ahead 자동완성 기능.'
    },
    customFilter: {
      header: '자동완성에서 커스텀 필터 사용 (Custom filter on autocomplete)',
      desc: '`filter` prop 을 사용하면 각각의 항목을 커스텀 로직으로 필터링할 수 있습니다. 예를 들어 항목을 이름으로 필터링 합니다.'
    },
    scopedSlots: {
      header: '스코프드 슬롯 (Scoped slots)',
      desc: '스코프드 슬롯의 강력함으로, 셀렉트의 아웃풋을 다양하게 표시할 수 있습니다. 예로 칩(chip)과 리스트 항목에 프로필 사진을 추가합니다.'
    },
    customTextAndValue: {
      header: '항목 텍스트와 값의 커스터마이즈 (Customized item text and value)',
      desc: 'You can specify the specific properties within your items array correspond to the text and value fields. By default, this is **text** and **value**. In this example we also use the `return-object` prop which will return the entire object of the selected item on selection.'
    },
    tags: {
      header: '태그 (Tags)',
      desc: 'With tags you can allow a user to create new values that may not be present in a provided items list. Keep in mind, tags only supports arrays of **primitive** items and cannot be used with props such as `item-text`, `item-value` for example.'
    },
    asynchronous: {
      header: '비동기 항목 (Asynchronous items)',
      desc: 'Sometimes you need to load data externally based upon a search query. Use the `search-input` prop with the **.sync** modifier when using the `autocomplete` prop. We also make use of the new `cache-items` prop. This will keep a unique list of all items that have been passed to the `items` prop and is **REQUIRED** when using asynchronous items and the **multiple** prop.'
    }
  }],
  props: {
    attach: 'Mixins.Detachable.props.attach',
    autocomplete: 'Filter the items in the list based on user input',
    browserAutocomplete: 'Set the autocomplete prop for the search input when using the **autocomplete** prop',
    cacheItems: 'Keeps a local _unique_ copy of all items that have been passed through the **items** prop.',
    chips: 'Changes display of selections to chips',
    combobox: 'The single select variant of **tags**',
    contentClass: 'Mixins.Detachable.props.contentClass',
    debounceSearch: 'Debounces the search input value being emitted',
    deletableChips: 'Adds a remove icon to selected chips',
    dense: 'Lowers max height of list items',
    disabled: 'Disables the input',
    editable: ' Creates an editable button - [spec](https://material.io/guidelines/components/buttons.html#buttons-dropdown-buttons)',
    filter: 'The function used for filtering items',
    hideSelected: 'Do not display in the select menu items that are already selected',
    itemAvatar: 'Set property of **items**\'s avatar value',
    itemDisabled: 'Set property of **items**\'s disabled value',
    itemText: 'Set property of **items**\'s text value',
    itemValue: 'Set property of **items**\'s value',
    items: 'Can be an array of objects or array of strings. When using objects, will look for a text and value field. This can be changed using the **item-text** and **item-value** props.',
    minWidth: 'Mixins.Menuable.props.minWidth',
    multiple: 'Changes select to multiple. Accepts array for value',
    multiLine: 'Causes label to float when the select component is focused or dirty',
    noDataText: 'Display text when there is no data',
    openOnClear: 'When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state',
    overflow: 'Creates an overflow button - [spec](https://material.io/guidelines/components/buttons.html#buttons-dropdown-buttons)',
    returnObject: 'Changes the selection behavior to return the object directly rather than the value specified with **item-value**',
    searchInput: 'Bound when using the autocomplete prop. Use the **.sync** modifier to catch user input from the autocomplete search input',
    segmented: 'Creates a segmented button - [spec](https://material.io/guidelines/components/buttons.html#buttons-dropdown-buttons)',
    tags: 'Tagging functionality, allows the user to create new values not available from the **items** prop'
  },
  slots: {
    item: 'Scoped slot for designating the markup for a list-tile',
    selection: 'Scoped slot for designating the markup for the selected items'
  }
}
