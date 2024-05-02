import { AllRoutes, usePathname } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from './LinkButton';
import { getOtherRouteLinks } from '@/helpers/RouteHelper';

const RouteDisplayPage = ({
    componentName,
}: {
    componentName?: string;
}) => {
    console.log(Date.now(), componentName);
    const currentPath = usePathname();
    const links: AllRoutes[] = getOtherRouteLinks(currentPath);
    return <View style={styles.container}>
        {componentName && <Text>{componentName}</Text>}
        <Text>{currentPath}</Text>
        {links && links.map(link => <LinkButton key={link as string} pathname={link} />)}
    </View>;
};
export default RouteDisplayPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 28,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});