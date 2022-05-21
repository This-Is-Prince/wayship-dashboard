import { ButtonNames } from "./types";

const asideButtonsNames: ButtonNames[] = [
  "Home",
  "Workspace",
  "MARPOL",
  "OH&S",
  "Insights",
  "History",
  "Apps",
  "Settings",
];
const noticeData = [
  {
    id: 0,
    person: "Second Officer Oliver",
    desc: "submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
    time: "UTC 1105 | LT +06:30",
  },
  {
    id: 1,
    person: "Third Engineer Edward",
    desc: "submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
    time: "UTC 1055 | LT +06:30",
  },
];
const impNoticeData = [
  {
    id: 0,
    title: "Captain's Bridge Order dated Nov 27, 2020",
    desc: "Captain's Bridge Order for clean the ship and change engine oil we are going to stay here, this order is passed on Nov 27, 2020",
    seen: 1,
  },
];
export { asideButtonsNames, noticeData, impNoticeData };
