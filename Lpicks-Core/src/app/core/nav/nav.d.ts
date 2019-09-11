interface NavItem {
  displayName: string;
  icon?: string;
  route?: string;
  disabled?: boolean;
  children?: NavItem[];
}