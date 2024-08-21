export const RouteByComponentName: { [key: string]: string } = {
    PageForTab1Stack1: '/',
    PageForTab1Stack2: '/stack2',
    PageForTab2: '/tab2',
    PageForTab3Stack1: '/tab3',
    PageForTab3Stack2: '/tab3/stack2',
} as const;

export const getOtherRouteLinks = (currentPath: string)
    : string[] => Object.values(RouteByComponentName)
        .filter(r => r !== currentPath);
