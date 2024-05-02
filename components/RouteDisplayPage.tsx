import { AllRoutes, usePathname } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from './LinkButton';

const RouteDisplayPage = ({
    componentName,
    links,
}: {
    componentName?: string;
    links?: AllRoutes[];
}) => {
    console.log(Date.now(), componentName);
    const pathName = usePathname();
    return <View style={styles.container}>
        {componentName && <Text>{componentName}</Text>}
        <Text>{pathName}</Text>
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