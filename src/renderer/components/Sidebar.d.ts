interface SidebarProps {
    currentPage: 'home' | 'installed' | 'marketplace' | 'settings';
    onPageChange: (page: 'home' | 'installed' | 'marketplace' | 'settings') => void;
}
export default function Sidebar({ currentPage, onPageChange }: SidebarProps): JSX.Element;
export {};
//# sourceMappingURL=Sidebar.d.ts.map