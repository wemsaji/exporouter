import RouteDisplayPage from '@/components/RouteDisplayPage';
import { AllRoutes } from 'expo-router';

const PageForTab1Stack1 = () => {
    const links: AllRoutes[] = ['/stack2' as AllRoutes, '/tab2' as AllRoutes];
    return <RouteDisplayPage componentName='PageForTab1Stack1' links={links} />;
};
export default PageForTab1Stack1;
