import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
    container: {
        paddingTop: 200,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        borderBottomColor: '#096ce5',
        borderBottomWidth: 1,
        padding: 4,
        fontSize: 18,
        color: '#fff',
        margin: 10,
    },
    button: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#096ce5',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
