import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
    container: {
        paddingTop: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    button: {
        backgroundColor: '#096ce5',
        paddingHorizontal: 12,
        paddingVertical: 6,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
