import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'

const data = [
    { id: 1, pic: require('../assets/ContactImages/img1.jpg'), name: 'Martina (You)', status: 'Message yourself' },
    { id: 2, pic: require('../assets/ContactImages/img2.jpg'), name: 'Aathi', status: 'Hey there! I am using Whatsapp' },
    { id: 3, pic: require('../assets/ContactImages/img3.jpg'), name: 'Aarthi', status: '✨Beauty is simplicity😊' },
    { id: 4, pic: require('../assets/ContactImages/img4.jpg'), name: 'Abel', status: 'Leav a legacy of kindness' },
    { id: 5, pic: require('../assets/ContactImages/img5.jpg'), name: 'Abigayl', status: 'Urgent calls only' },
    { id: 6, pic: require('../assets/ContactImages/img6.jpg'), name: 'Adam', status: 'Busy' },
    { id: 7, pic: require('../assets/ContactImages/img7.jpg'), name: 'Barani', status: 'Available' },
    { id: 8, pic: require('../assets/ContactImages/lion.jpg'), name: 'Bala', status: 'Beauty is simplicity' },
    { id: 9, pic: require('../assets/ContactImages/img9.jpg'), name: 'Benazir', status: 'Beauty is simplicity' },
    { id: 10, pic: require('../assets/ContactImages/img10.png'), name: 'Blessy', status: 'Beauty is simplicity' },
    { id: 11, pic: require('../assets/ContactImages/img11.jpg'), name: 'Celvin sir', status: 'Beauty is simplicity' },
    { id: 12, pic: require('../assets/ContactImages/img12.jpg'), name: 'College divya', status: 'Beauty is simplicity' },
    { id: 13, pic: require('../assets/ContactImages/img13.jpg'), name: 'Cyna', status: 'Beauty is simplicity' },
    { id: 14, pic: require('../assets/ContactImages/img14.jpg'), name: 'Dani', status: 'Beauty is simplicity' },
    { id: 15, pic: require('../assets/ContactImages/img15.jpg'), name: 'Deva', status: 'Beauty is simplicity' },
    { id: 16, pic: require('../assets/ContactImages/img16.jpg'), name: 'Divya', status: 'Beauty is simplicity' },
    { id: 17, pic: require('../assets/ContactImages/img17.jpg'), name: 'Eden', status: 'Beauty is simplicity' },
    { id: 18, pic: require('../assets/ContactImages/img18.jpg'), name: 'Emi', status: 'Beauty is simplicity' },
    { id: 19, pic: require('../assets/ContactImages/img19.jpg'), name: 'Eugene', status: 'Amuley' },
    { id: 20, pic: require('../assets/ContactImages/img20.jpg'), name: 'Fyaaz', status: 'Beauty is simplicity' },
]

const renderItem = ({ item }) => (

    <View style={styles.contactcontainer}>
        <Image source={item.pic} style={styles.image} />
        <View>
            <Text style={{ color: 'white', fontSize: 20 }}>{item.name}</Text>
            <Text style={{ color: '#757575', fontSize: 16 }}>{item.status}</Text>
        </View>
    </View>

)

const Addchat = () => {
    return (
        <ScrollView style={styles.container}>
            <View>

                <View style={styles.newcontainer}>
                    <View style={styles.imgback}>
                        <Image source={require('../assets/images/contactgrp.png')}
                            style={styles.icon} />
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.txtname}>New group</Text>
                    </View>
                </View>
                <View style={styles.newcontainer}>
                    <View style={styles.imgback}>
                        <Image source={require('../assets/images/contactplus.png')}
                            style={styles.icon} />
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.txtname}>New contact</Text>
                    </View>
                    <View style={styles.scaniconcontainer}>
                        <Image source={require('../assets/images/scanset.png')}
                            style={styles.icon1} />
                    </View>
                </View>
                <View style={styles.newcontainer}>
                    <View style={styles.imgback}>
                        <Image source={require('../assets/images/community.png')}
                            style={styles.icon} />
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.txtname}>New community</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ color: '#757575', fontSize: 18 }}>Contacts on WhatsApp</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    )
}

export default Addchat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111a13',
        padding: 20,
    },
    newcontainer: {
        flexDirection: 'row',
        gap: 20,
        marginVertical: 15,
    },
    icon: {
        height: 30,
        width: 30,

    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    icon1: {
        height: 25,
        width: 25,
        tintColor: 'white',
    },
    imgback: {
        borderRadius: 30,
        backgroundColor: '#25D366',
        borderWidth: 1,
        borderColor: '#25D366',
        height: 60,
        width: 60,
        alignItems: 'center',
        padding: 10,
    },
    txtname: {
        color: 'white',
        fontSize: 20,

    },
    txtcontainer: {
        justifyContent: 'center',
    },
    scaniconcontainer: {
        justifyContent: 'center',
        left: 100,
    },
    contactcontainer: {
        top: 8,
        padding: 5,
        flexDirection: 'row',
        gap: 15,
        marginVertical: 5,
    }
})