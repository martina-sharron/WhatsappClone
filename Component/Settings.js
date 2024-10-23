import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'

const data = [
    { id: 1, pic: require('../assets/images/key.png'), name: 'Account', text: 'Security notifications, change number' },
    { id: 2, pic: require('../assets/images/lock.png'), name: 'Privacy', text: 'Block contacts, disappearing messages' },
    { id: 3, pic: require('../assets/images/avatar.png'), name: 'Avatar', text: 'Create, edit, profile photo' },
    { id: 4, pic: require('../assets/images/heart.png'), name: 'Favourites', text: 'Add, reorder, remove' },
    { id: 5, pic: require('../assets/images/chat.png'), name: 'Chats', text: 'Theme, wallpapers, chat history' },
    { id: 6, pic: require('../assets/images/noti.png'), name: 'Nofifications', text: 'Message, group & call tones' },
    { id: 7, pic: require('../assets/images/storage.png'), name: 'Storage and data', text: 'Network usage, auto-download' },
    { id: 8, pic: require('../assets/images/global.png'), name: 'App language', text: 'English (device language)' },
    { id: 9, pic: require('../assets/images/help.png'), name: 'Help', text: 'Help center, contact us, privacy policy' },
    { id: 10, pic: require('../assets/images/contactgrp.png'), name: 'Invite a friend', text: '' },
    { id: 11, pic: require('../assets/images/mobiletick.png'), name: 'App updates', text: '' },
]

const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', paddingVertical: 20, gap: 10 }}>
        <Image source={item.pic} style={styles.img} />
        <View style={{ marginLeft: 15 }}>
            <Text style={styles.txt}>{item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.subText}>{item.text}</Text>
            </View>
        </View>
    </View>
)

const Settings = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.topcontainer}>
                <View style={styles.stsContainer}>
                    <Image source={require('../assets/ContactImages/img1.jpg')} style={styles.stsPic} />
                    <View style={styles.stsTextContainer}>
                        <Text style={styles.stsText1}>Martina</Text>
                        <Text style={styles.stsText2}>Busy</Text>
                    </View>
                </View>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/images/scanset.png')} style={styles.iconStyle} />
                    <View>
                        <Image source={require('../assets/images/dropdown.png')} style={styles.iconStyle} />
                    </View>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
            />
            <View>
                <Text style={styles.alsotxt}>Also from Meta</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, gap: 10 }}>
                    <Image source={require('../assets/images/insta.png')} style={styles.img} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.txt}>Open Instagram</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, gap: 10 }}>
                    <Image source={require('../assets/images/facebook.png')} style={styles.img} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.txt}>Open Facebook</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, gap: 10 }}>
                    <Image source={require('../assets/images/thread.png')} style={styles.img} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.txt}>Open Threads</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexGrow: 1 }}>
                <View style={{ height: 50 }} />
            </View>
        </ScrollView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111a13',
        padding: 20,
    },
    stsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        gap: 15,
    },
    stsTextContainer: {
        flex: 1,
    },
    stsText1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    stsText2: {
        fontSize: 14,
        color: 'gray',
    },
    alsotxt: {
        fontSize: 18,
        color: 'gray',
    },
    stsPic: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    topcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        right: 80,
        gap: 10,
    },
    iconStyle: {
        height: 30,
        width: 30,
        tintColor: '#25D366',
        marginRight: 10,
    },
    img: {
        height: 30,
        width: 30,

        tintColor: '#888686',
    },
    txt: {
        fontSize: 20,
        color: 'white',
    },
    subText: {
        fontSize: 14,
        color: 'grey',
    },
})
