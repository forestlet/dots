import { collection_path } from "@/data/path";
import { ref } from "vue";
import { select_tag, date_range } from "@/data/filter";

const fs = require("fs-extra");
const path = require("path");

export const init_collection = () => {
  let collection_all = [];

  let years = fs.readdirSync(collection_path);
  for (const year of years) {
    let years_path = path.join(collection_path, year);

    if (!fs.lstatSync(years_path).isDirectory()) continue;

    let months = fs.readdirSync(years_path);
    for (const month of months) {
      let pieces_path = path.join(collection_path, year, month);
      let items = fs.readdirSync(pieces_path);
      for (const item of items) {
        collection_all.push(path.join(collection_path, year, month, item));
      }
    }
  }
  // console.log(collection_all);
  return collection_all;
};

export const collection_filter = (
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

export const filter_collection = () => {
  let collection_all = init_collection();
  let collection_filtered = [];

  let pieces_filename;
  let tag = "";
  let date = null;

  for (const piece_path of collection_all) {
    pieces_filename = path.basename(piece_path).replace(".md", "");
    tag = pieces_filename.split("_")[1];
    date = new Date(pieces_filename.split("_")[0].replace("-", "/"));

    if (collection_filter(tag, date, select_tag.value, date_range.value))
      collection_filtered.push(piece_path);
  }

  return collection_filtered;
};

export let collection_filtered = ref(filter_collection());
