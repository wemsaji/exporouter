import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Href, Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const LinkButton = ({
    pathname,
}: {
    pathname: string;
}) => {
    return (<View style={styles.container}>
        <Link style={styles.link} href={{ pathname } as Href<string>}>
            <FontAwesome size={18} name='link' color='white' />
            &nbsp;&nbsp;Link to [&nbsp;{pathname}&nbsp;]
        </Link>
    </View>);
};
export default LinkButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        padding: 6,
        borderRadius: 6,
    },
    link: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        verticalAlign: 'middle',
    },
});