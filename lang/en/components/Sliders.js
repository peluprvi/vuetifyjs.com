export default {
  header: 'Slider',
  headerText: 'The `v-slider` component is a better visualization of the number input. It is used for gathering numerical user data. `v-range-slider` is also available for when both a minimum and maximum user input is needed.',
  components: ['v-slider', 'v-range-slider'],
  examples: [{
    usage: {
      header: 'Usage',
      desc: 'Both `v-slider` and `v-range-slider` support the same props. The only difference is that `v-range-slider` takes an array of two numbers as its `value`.'
    },
    minMax: {
      header: 'Min & max',
      desc: 'Use the `min` and `max` props to change the possible slider values.'
    },
    step: {
      header: 'Step',
      desc: 'Using the `step` prop you can disallow selecting values outside of steps.'
    },
    ticks: {
      header: 'Ticks',
      desc: 'Using the `ticks` prop you can choose when to show the steps on the slider. You can also modify the size of the ticks using `tick-size`.'
    },
    tickLabels: {
      header: 'Tick labels',
      desc: 'By supplying an array of strings to the `tick-labels` prop you can customize the display of values in the slider.'
    },
    thumbLabel: {
      header: 'Thumb-label',
      desc: 'Using the `thumb-label` prop you can show a label containing the current value when using the slider. You can also modify the size of the thumb-label using `thumb-size`.'
    },
    slotThumbLabel: {
      header: 'Slot: thumb-label',
      desc: 'Using the `thumb-label` slot you can customize the look of the thumb-label.'
    },
    icons: {
      header: 'Icons',
      desc: 'You can add icons to the slider with the `append-icon` and `prepend-icon` props.'
    },
    editableNumericValue: {
      header: 'With an editable numeric value',
      desc: 'Sliders can be combined with other components for a better display.'
    },
    customColors: {
      header: 'Custom colors',
      desc: 'You can set the colors of the slider using the props `color`, `track-color` and `thumb-color`.'
    },
    range: {
      header: 'Range',
      desc: 'Range sliders.'
    }
  }],
  props: {
    step: 'If greater than 0, sets step interval for ticks',
    thumbColor: 'Sets the thumb and thumb label color',
    thumbLabel: 'Show thumb label',
    ticks: '',
    trackColor: 'Sets the track fill color'
  }
}
