import RouteDisplayPage from '@/components/RouteDisplayPage';
import { AllRoutes } from 'expo-router';

const PageForTab2 = () => {
    const links: AllRoutes[] = ['' as AllRoutes, '/stack2' as AllRoutes];
    return <RouteDisplayPage componentName='PageForTab2' links={links} />;
};
export default PageForTab2;
