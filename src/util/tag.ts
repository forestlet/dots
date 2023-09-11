import { tags_path } from '../data/path'

const fs = require('fs-extra')

export let read_tags = () => {
  let tags = fs.readJsonSync(tags_path)
  // console.log(tags);
  return tags
}

export let write_tags = (new_tags: []) => {
  fs.writeJsonSync(tags_path, new_tags)
}
