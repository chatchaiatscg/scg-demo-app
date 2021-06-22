export enum ITypeNavLink {
    NavLink = "navLink",
    Hide = "hide"
}

export interface IPropRouteComponent {
    label: string
    path: string
    type: ITypeNavLink
    icon: React.ReactElement
    Component: React.ReactElement
}
