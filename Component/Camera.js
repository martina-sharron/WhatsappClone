import { ImageBackground, StyleSheet, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Camera = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/floor.jpg')} style={styles.background}>
                <View style={styles.topiconcontainer}>
                    <Image source={require('../assets/images/xmark.png')} style={styles.icon} />
                    <Image source={require('../assets/images/flashround.png')} style={styles.icon} />
                </View>

                <View style={styles.scrollContainerWrapper}>
                    <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
                        <Image source={require('../assets/images/mount.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/girl.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/snow.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/hima.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/rose.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/snow.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/hima.jpg')} style={styles.iconhori} />
                        <Image source={require('../assets/images/rose.jpg')} style={styles.iconhori} />
                    </ScrollView>
                    <View style={styles.lastcontainer}>
                        <Image source={require('../assets/images/gallerycam.png')} style={styles.icon} />
                        <Image source={require('../assets/images/record.png')} style={styles.icon} />
                        <Image source={require('../assets/images/switch.png')} style={styles.icon} />
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', gap: 15, right: 40 }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Video</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>Photo</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
};

export default Camera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
    },
    icon: {
        height: 50,
        width: 50,
    },
    topiconcontainer: {
        position: 'absolute',
        top: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    scrollContainerWrapper: {
        position: 'absolute',
        bottom: 120,
        width: '100%',
        paddingVertical: 10,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    iconhori: {
        height: 100,
        width: 100,
        marginHorizontal: 10,
    },
    lastcontainer: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});