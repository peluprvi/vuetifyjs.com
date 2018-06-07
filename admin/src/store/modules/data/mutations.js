import { set } from '@/store/utils'

export default {
  RESET_ITEM: state => {
    state.item = {}
  },
  SET_IS_EDITING: set('isEditing'),
  SET_ITEM: set('item'),
  SET_ITEMS: set('items'),
  SET_SCAFFOLD: set('scaffold'),
  SET_SCAFFOLDS: set('scaffolds')
}
