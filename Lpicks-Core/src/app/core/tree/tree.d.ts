interface TreeItem {
    displayName: string;
    icon?: string;
    route: string;
    routelink?: string;
    disabled?: boolean;
    children?: TreeItem[];
}