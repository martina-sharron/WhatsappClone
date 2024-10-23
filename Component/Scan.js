import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Scan = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.texthead}>
                    To scan any UPI QR code, add a bank account.{' '}
                    <Text style={styles.getStarted}>Get Started</Text>
                </Text>
                <View style={styles.imgcontainer}>
                    <Image source={require('../assets/images/scan.jpg')} style={styles.img} />
                    <Text style={styles.texthead}> Scan any UPI QR code to pay</Text>
                </View>
                <View style={styles.flexGrow} />
                <View style={styles.iconcontainer}>
                    <Image source={require('../assets/images/galleryscan.png')} style={styles.icon} />
                    <Image source={require('../assets/images/flash.png')} style={styles.icon} />
                </View>
            </View>
        </>
    );
};

export default Scan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111a13',
        padding: 15,
    },
    texthead: {
        color: 'white',
        fontSize: 20,

        paddingVertical: 10,
    },
    getStarted: {
        color: '#25D366',
    },
    img: {
        height: 200,
        width: 200,
    },
    imgcontainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    flexGrow: {
        flexGrow: 1,
    },
    icon: {
        height: 30,
        width: 30,
        tintColor: 'white',
    },
    iconcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20, // Optionally add padding at the bottom
    },
});
