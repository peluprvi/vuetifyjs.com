export default {
  header: 'Resize 디렉티브(directive)',
  headerText: '`v-resize` 디렉티브는 윈도우의 크기를 변경할 때 특정 함수를 호출하기 위해 사용됩니다.',
  components: ['v-resize'],
  examples: [{
    default: {
      header: '기본값',
      desc: '윈도우의 크기를 변경하고 변화를 관찰하세요',
      uninverted: true
    }
  }],
  params: [{
    'v-resize': [
      {
        name: 'callback',
        type: '함수',
        default: 'null'
      },
      {
        name: 'quiet',
        type: '부울',
        default: 'false',
        desc: '디렉티브가 연결(bound)될때 콜백을 호출하지 않음'
      },
      {
        name: 'debounce',
        type: '숫자',
        default: '200'
      }
    ]
  }]
}
