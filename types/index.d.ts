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

export { AsideButtonProps, GetAsideButtonIconProps, ButtonNames };
