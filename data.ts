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

const todosData = [
  {
    id: 0,
    title: "Deck Log | 1200 - 1600 Watch",
    by: "Wayship",
    due: "",
    isCompleted: true,
  },
  {
    id: 1,
    title: "COVID19 Health Guidelines",
    by: "Technical",
    due: "2 days",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Steering Check",
    by: "Captain",
    due: "2 hours",
    isCompleted: false,
  },
  {
    id: 3,
    title: "ECDIS Check",
    by: "Chief Officer",
    due: "6 hours",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Review Noon Report",
    by: "Self",
    due: "8 hours",
    isCompleted: false,
  },
];
export { asideButtonsNames, noticeData, impNoticeData, todosData };
