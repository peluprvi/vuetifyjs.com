import client from '@/plugins/axios'

class Filesystem {
  constructor (client) {
    this.client = client
    this.file = null
  }

  read (file) {
    this.file = file

    return this
  }

  write (file) {
    this.file = file

    return this
  }

  fromAdmin () {
    return this.from(true)
  }

  fromDocs () {
    return this.from(false)
  }

  toAdmin (data) {
    return this.to(data, true)
  }

  toDocs (data) {
    return this.to(data, true)
  }

  from (crud) {
    return this.client.get('read', {
      params: {
        file: this.getFilePath(crud)
      }
    })
  }

  to (data, crud) {
    return this.client.post('write', {
      data,
      file: this.getFilePath(crud)
    })
  }

  getFilePath (crud) {
    return crud
      ? `../cruds/${this.file}`
      : `../../../data/${this.file}`
  }
}

export default new Filesystem(client)
