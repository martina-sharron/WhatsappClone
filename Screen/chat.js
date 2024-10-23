import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import WhatsAppMenu from '../Component/WhatsAppMenu'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



const data = [
  {
    id: '1',
    name: 'John Doe ',
    message: 'Hey! How are you? 😍',
    time: '5:30 pm',
    avatar: 'https://cdn2.momjunction.com/wp-content/uploads/2019/07/Love-adventure.jpg',
    unread: '0',
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Are you coming tomorrow?',
    time: '2:02 pm',
    avatar: 'https://th.bing.com/th/id/OIP.bmEz3her-CvOu9M_Wam-6gHaHa?rs=1&pid=ImgDetMain',
    unread: '1',
  },
  {
    id: '3',
    name: 'Darwin',
    message: 'Am Busy Right Now 😸',
    time: '11.00 am',
    avatar: 'https://yohohindi.com/wp-content/uploads/2022/08/26-girls-dp-yohohindi.com_.jpeg',
    unread: '2',
  },
  {
    id: '4',
    name: 'Rose',
    message: '🚫 This message was deleted',
    time: 'Yesterday',
    avatar: 'https://gyanvaan.com/wp-content/uploads/2023/04/whatsapp-DP-images-for-girl-free-download-1.jpg',
    unread: '0',

  },
  {
    id: '5',
    name: 'Kelwin',
    message: 'Morning!..',
    time: '11:00 AM',
    avatar: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=sea-sky-beach-457882.jpg&fm=jpg',
    unread: '0',
  },
  {
    id: '6',
    name: 'Jerald',
    message: 'மிக்க நன்றி!🙏',
    time: 'Yesterday',
    avatar: 'https://politic365.com/wp-content/uploads/2020/04/back-side-dp.jpg',
    unread: '0',
  },
  {
    id: '7',
    name: 'Lorenz',
    message: 'I just saw the funniest meme! 🤣',
    time: 'Yesterday',
    avatar: 'https://i0.wp.com/sohohindipro.com/wp-content/uploads/2022/11/1_girls-dp-sohohindipro.com_.jpg',
    unread: '2',
  },
  {
    id: '8',
    name: 'Kane',
    message: 'You got this!',
    time: 'Yesterday',
    avatar: 'https://sohohindipro.com/wp-content/uploads/2022/11/27_girls-dp-sohohindipro.com_-1024x1024.jpg',
    unread: '0',
  },
  {
    id: '9',
    name: 'Jokov',
    message: 'Sending you positive vibes! ?',
    time: '02/10/24',
    avatar: 'https://i.pinimg.com/736x/65/c4/36/65c436d2472243d296d580f5f91c8421.jpg',
    unread: '0',
  },
  {
    id: '10',
    name: 'Dwarf ellen',
    message: 'Im so excited for the weekend',
    time: '01/10/24',
    avatar: 'https://images.srkh.in/wp-content/uploads/2020/08/Cute-cat-under-pink-blanket-WhatsApp-Dp-Image.jpg',
    unread: '1',
  },
  {
    id: '11',
    name: 'Ruban',
    message: 'Im so excited for the weekend',
    time: '11:00 AM',
    avatar: 'https://th.bing.com/th/id/OIP.H6OYttk-4MV1xHEZZ5FSXAHaE8?rs=1&pid=ImgDetMain',
    unread: '3',
  },
  {
    id: '12',
    name: 'Mary George',
    message: 'Im so excited for the weekend',
    time: '28/09/24',
    avatar: 'https://hindistatusnow.com/wp-content/uploads/2023/01/Smile-Whatsapp-DP-Images-9.jpg',
    unread: '0',
  },
]


const Chat = ({ navigation }) => {

  const [isPressedScan, setIsPressedScan] = useState(false);  
  const [isPressedCam, setIsPressedCam] = useState(false);  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatScreen', { 
        name: item.name, 
        avatar: item.avatar, 
        id: item.id, 
      })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatDetails}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatHeader}>
          <Text style={styles.chatMessage}>{item.message}</Text>
          {item.unread > 0 && (
            <View style={styles.unreadcontainer}>
              <Text style={styles.chatunread}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
        <TouchableOpacity
        onPress={() => navigation.navigate('scanpage')}
        onPressIn={() => setIsPressedScan(true)}   
        onPressOut={() => setIsPressedScan(false)} 
        style={[styles.touchableButton, isPressedScan && styles.pressedButton]}
        activeOpacity={0.8}
      >
        <Icon name='qrcode-scan' color='white' size={wp('6%')} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('campage')}
        onPressIn={() => setIsPressedCam(true)}   
        onPressOut={() => setIsPressedCam(false)} 
        style={[styles.touchableButton, isPressedCam && styles.pressedButton]}
        activeOpacity={0.8}
      >
        <Icon name='camera' color='white' size={wp('6%')} />
      </TouchableOpacity>

          <WhatsAppMenu navigation={navigation} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.metaBarContainer}>
          <View style={styles.metaBarContent}>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/images/meta1.png')} style={styles.metaImage} />
              <TextInput
                style={styles.metaInput}
                placeholder='Ask Meta AI or Search'
                placeholderTextColor="#868080"
              />
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </ScrollView>
      <View style={styles.metabtncontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('metapage')}>
          <Image source={{ uri: 'https://biz-file.com/c/2404/734670-700x364.png?5' }} style={styles.metaImageBtn} />
        </TouchableOpacity>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('addchat')}>
          <AntDesign name="plussquare" size={wp('7%')} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111a13',
    padding: wp('1%'),
  },
  header: {
    backgroundColor: '#111a13',
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
  },
  headerTitle: {
    color: 'white',
    fontSize: wp('7%'),
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('6%'),
  },
  chatItem: {
    flexDirection: 'row',
    padding: wp('3%'),
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    marginRight: wp('2%'),
  },
  chatDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
    color: 'white',
  },
  chatTime: {
    fontSize: wp('3.5%'),
    color: '#757575',
  },
  chatMessage: {
    fontSize: wp('4%'),
    color: '#757575',
  },
  chatunread: {
    color: 'black',
    fontSize: wp('3%'),
    fontWeight: '600',
  },
  unreadcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('50%'),
    backgroundColor: '#25D366',
    height: wp('5%'),
    width: wp('5%'),
  },
  btncontainer: {
    position: 'absolute',
    bottom: wp('5%'),
    right: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D366',
    height: wp('18%'),
    width: wp('18%'),
    borderRadius: wp('6%'),
  },
  metabtncontainer: {
    bottom: wp('30%'),
    right: wp('6%'),
    position: 'absolute',

  },
  metaBarContainer: {
    backgroundColor: '#111a13',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
  },
  metaBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555454',
    borderRadius: wp('7%'),
    paddingLeft: wp('12%'),  // Reduce from 12% to 5%
    paddingVertical: hp('0.5%'),  // Slightly reduce vertical padding
    paddingRight: wp('2%'),  // Reduce from 4% to 2%
    flex: 1,
  },
  metaImage: {
    width: wp('7%'),
    height: wp('7%'),
    position: 'absolute',
    left: wp('3%'),
  },
  metaImageBtn: {
    height: wp('15%'),
    width: wp('15%'),
    borderRadius: wp('6%'),
  },
  metaInput: {
    flex: 1,
    fontSize: wp('4.5%'),
    color: '#333',
  },
  touchableButton: {
    padding: wp('2%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressedButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light white background when pressed
  },
});