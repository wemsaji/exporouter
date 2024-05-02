import RouteDisplayPage from '@/components/RouteDisplayPage';
import { AllRoutes } from 'expo-router';

const PageForTab1Stack2 = () => {
    const links: AllRoutes[] = ['' as AllRoutes, '/tab2' as AllRoutes];
    return <RouteDisplayPage componentName='PageForTab1Stack2' links={links} />;
};
export default PageForTab1Stack2;
