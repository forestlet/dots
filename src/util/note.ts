import { notes_path } from "@/data/path";
import { ref } from "vue";
import { select_tag, date_range } from "@/data/filter";

const fs = require("fs-extra");
const path = require("path");

// export const init_note_tree = () => {
//   let notes_tree = {};

//   let years = fs.readdirSync(notes_path);
//   for (const year of years) {
//     notes_tree[year] = {};
//     let years_path = path.join(notes_path, year);
//     let months = fs.readdirSync(years_path);
//     for (const month of months) {
//       let blocks_path = path.join(notes_path, year, month);
//       let items = fs.readdirSync(blocks_path);

//       notes_tree[year][month] = items;
//     }
//   }
//   // console.log(notes_tree);
//   return notes_tree;
// };

export const init_notes_list = () => {
  let notes_list_all = [];

  let years = fs.readdirSync(notes_path);
  for (const year of years) {
    let years_path = path.join(notes_path, year);
    let months = fs.readdirSync(years_path);
    for (const month of months) {
      let blocks_path = path.join(notes_path, year, month);
      let items = fs.readdirSync(blocks_path);
      for (const item of items) {
        notes_list_all.push(path.join(notes_path, year, month, item));
      }
    }
  }
  // console.log(notes_list_all);
  return notes_list_all;
};

export const note_show = (
  tag: string,
  date: Date,
  select_tag: string,
  date_range: Date[] | string
) => {
  if (select_tag && tag != select_tag) return false;
  else if (
    date_range &&
    (date < new Date(date_range[0]) || date > new Date(date_range[1]))
  )
    return false;
  return true;
};

export const filter_notes_list = () => {
  let notes_list_all = init_notes_list();
  let notes_list_show = [];

  let notes_filename;
  let tag = "";
  let date = null;

  for (const note_path of notes_list_all) {
    notes_filename = path.basename(note_path).replace(".json", "");
    tag = notes_filename.split("_")[1];
    date = new Date(notes_filename.split("_")[0].replace("-", "/"));

    if (note_show(tag, date, select_tag.value, date_range.value))
      notes_list_show.push(note_path);
  }

  return notes_list_show;
};

export let notes_list_show = ref(filter_notes_list());
