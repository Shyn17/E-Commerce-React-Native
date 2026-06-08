import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#43df64ff',
    },

    background: {
        flex: 1,
        width: '100%',
        height: '20%',
        zIndex: 0,
        backgroundColor: '#4a7cb6ff'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 360,
    },

    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingTop: 280,
        paddingBottom: 30,
    },

    logo: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        width: 250,
        height: 250,
        resizeMode: 'contain',
        zIndex: 0,

    },

    title: {
        color: '#fff',
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    linkText: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },

    input: {
        width: '80%',
        fontSize: 18,
        color: '#fff',
        paddingVertical: 8,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    },

    forgot: {
        width: '80%',
        color: '#eee',
        textAlign: 'right',
        marginBottom: 25,
    },

    signInBtn: {
        width: '80%',
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderRadius: 3,
        marginBottom: 20,
    },

    btn: {
        width: '80%',
        paddingVertical: 13,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
    },

    signInText: {
        textAlign: 'center',
        color: '#0057b8',
        fontWeight: 'bold',
        fontSize: 18,
    },

    btnText: {
        textAlign: 'center',
        color: '#0057b8',
        fontSize: 18,
        fontWeight: 'bold',
    },

    or: {
        color: '#fff',
        marginVertical: 10,
    },

    googleBtn: {
        width: '80%',
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderRadius: 3,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    googleIconLabel: {
        color: '#d9534f',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10,
    },

    googleText: {
        color: '#d9534f',
        fontWeight: 'bold',
        fontSize: 16,
    },

    create: {
        color: '#fff',
        fontSize: 15,
        marginTop: 5,
        textDecorationLine: 'underline',
    },

    dateContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    dateInput: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
        paddingVertical: 5,
    },

    arrowIcon: {
        color: '#fff',
        fontSize: 12,
        paddingRight: 5,
    },
});
export default styles;