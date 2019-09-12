interface NavItem {
  displayName: string;
  icon?: string;
  route: string;
  routelink?: string;
  disabled?: boolean;
  children?: NavItem[];
}