interface Dropdown {
  title: string;
  items: DropdownItem[];
}

interface DropdownItem {
  icon?: string;
  link: string;
  name: string;
  sub?: DropdownItem[]
}