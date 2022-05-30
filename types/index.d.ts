type ButtonNames =
  | "Home"
  | "Workspace"
  | "MARPOL"
  | "OH&S"
  | "Insights"
  | "History"
  | "Apps"
  | "Settings";

interface AsideButtonProps {
  name: ButtonNames;
}

interface GetAsideButtonIconProps {
  name: ButtonNames;
}

type HandleTodoComplete = (id: string | number) => void;

export {
  AsideButtonProps,
  GetAsideButtonIconProps,
  ButtonNames,
  HandleTodoComplete,
};
