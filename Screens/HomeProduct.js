import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

    header: {
        backgroundColor: '#0057b8',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 10,
    },

    menuIcon: {
        color: '#fff',
        fontSize: 24
    },

    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    headerIcons: {
        flexDirection: 'row'
    },

    icon: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 15
    },

    heroSection: {
        width: '100%',
        height: 220,
    },

    heroOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 87, 184, 0.6)',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    heroTitle: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 40,
    },

    heroSubtitle: {
        color: '#eee',
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 20
    },

    shopNowBtn: {
        color: '#beebc0ff',
        fontSize: 16,
        fontWeight: 'bold'
    },


    dotsContainer: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        flexDirection: 'row',
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 3
    },

    activeDot: {
        backgroundColor: '#fff'
    },

    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: '#fff',
    },
    catItem: {
        alignItems: 'center'
    },

    catCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },

    catImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'contain',
    },
    activeCatCircle: {
        borderWidth: 2,
        borderColor: '#0057b8'
    },
    catText: {
        fontSize: 12,
        color: '#333'
    },


    promoContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c9c8c8ff',
        height: 120,
        overflow: 'hidden',
    },
    promoLeft: {
        flex: 1,
        backgroundColor: '#fff3b0',
        justifyContent: 'center',
        alignItems: 'center'
    },

    promoRight: {
        flex: 1.5,
        padding: 15,
        justifyContent: 'center'
    },
    promoImage: {
        width: 150,
        height: 150,
        resizeMode: 'center'
    },
    promoTitle: {
        color: '#555',
        fontSize: 12,
        fontWeight: 'bold'
    },
    promoDiscount: {
        color: '#fdd835',
        fontSize: 32,
        fontWeight: 'bold'
    },
    promoSubtitle: {
        color: '#fdd835',
        fontSize: 24,
        fontWeight: 'bold'
    },

    sectionHeader: {
        marginLeft: 15,
        marginBottom: 10,
        color: '#0057b8',
        fontWeight: 'bold'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    productCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        elevation: 0.5,
    },
    productImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    productPrice: {
        fontSize: 12,
        color: '#888',
        marginTop: 5
    },



    backIcon: {
        fontSize: 20,
        color: '#333',
    },

    productDImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 10
    },
    oldPrice: {
        fontSize: 16,
        color: '#888',
        textDecorationLine: 'line-through',
        marginRight: 10
    },
    discount: {
        fontSize: 16,
        color: '#ff6b6b'
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        marginTop: 10
    },
    selectorContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    sizeBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: '#f9f9f9'
    },
    activeSize: {
        backgroundColor: '#0057b8',
        borderColor: '#0057b8'
    },
    sizeText: {
        color: '#333'
    },
    activeSizeText: {
        color: '#fff'
    },
    colorCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#fff'
    },
    activeColor: {
        borderWidth: 2,
        borderColor: '#333'
    },
    qtyRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 80
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qtyBtn: {
        width: 35,
        height: 35,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    qtyBtnText: {
        fontSize: 20,
        color: '#333'
    },
    qtyValue: {
        fontSize: 18,
        marginHorizontal: 20,
        fontWeight: 'bold'
    },
    addToCartBtn: {
        backgroundColor: '#2ecc71',
        padding: 18,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    addToCartText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default styles;