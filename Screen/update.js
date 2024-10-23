import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const RecentstatusData = [
  { id: '1', name: 'jeni', time: '9 minutes ago', image: require('../assets/StatusImages/simg1.jpeg') },
  { id: '2', name: 'John ', time: '6:04 pm', image: require('../assets/StatusImages/simg2.jpeg') },
  { id: '3', name: 'Jane ', time: 'Yesterday', image: require('../assets/StatusImages/simg3.jpeg') },
  { id: '4', name: 'Smith', time: 'Yesterday', image: require('../assets/StatusImages/simg4.jpeg') },
  { id: '5', name: 'jashima', time: 'Yesterday', image: require('../assets/StatusImages/simg5.jpeg') },
]
const viewedStatusData = [
  { id: '1', name: 'rita', time: '3:11 pm', image: require('../assets/StatusImages/simg6.jpeg') },
  { id: '2', name: 'tata', time: '11:00 am', image: require('../assets/StatusImages/simg8.jpeg') },
  { id: '3', name: 'moana', time: '3:11 pm', image: require('../assets/StatusImages/simg7.jpeg') },

];
const horiImages = [
  { pic: require('../assets/StatusImages/whatsapp.png'), heading: 'Whatsapp' },
  { pic: require('../assets/StatusImages/channel2.jpg'), heading: 'Sun News' },
  { pic: require('../assets/StatusImages/channel1.jpg'), heading: 'RJ Kajal', },
  { pic: require('../assets/StatusImages/channel3.jpg'), heading: 'Squak Rahulraj' },
  { pic: require('../assets/StatusImages/channel4.jpg'), heading: 'Priyanka ' },
  { pic: require('../assets/StatusImages/channel5.jpg'), heading: 'Justin Bieber' },
]

const HoriItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.pic} style={styles.image} />
      <Text style={styles.heading}>{item.heading}</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  )
}
const Update = () => {
  const renderRecentItem = (item) => (
    <View style={styles.statusItem} key={item.id}>
      <Image source={item.image} style={styles.statusImage} />
      <View style={styles.textContainer}>
        <Text style={styles.statusName}>{item.name}</Text>
        <Text style={styles.statusTime}>{item.time}</Text>
      </View>
    </View>
  )
  const renderViewItem = (item) => (
    <View style={styles.statusItem} key={item.id}>
      <Image source={item.image} style={styles.statusImage1} />
      <View style={styles.textContainer}>
        <Text style={styles.statusName}>{item.name}</Text>
        <Text style={styles.statusTime}>{item.time}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Updates</Text>
        <View style={styles.headerIcons}>
          <Icon name="qrcode-scan" color="white" size={24} />
          <Icon name="camera" color="white" size={24} />
          <Ionicons name="search" color="white" size={24} />
          <Icon name="dots-vertical" color="white" size={24} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.statustxt}>Status</Text>
        <View style={styles.stsContainer}>
          <Image source={require('../assets/images/photoplus.png')} style={styles.stsPic} />
          <View style={styles.stsTextContainer}>
            <Text style={styles.stsText1}>My status</Text>
            <Text style={styles.stsText2}>Tap to add status update</Text>
          </View>
        </View>

        <Text style={styles.recentUpdatesText}>Recent Updates</Text>
        {RecentstatusData.map((item) => renderRecentItem(item))}

        <Text style={styles.viewedUpdatesText}>Viewed Updates</Text>
        {viewedStatusData.map((item) => renderViewItem(item))}
        <View style={{ marginVertical: 10, gap: 10 }}>
          <Text style={styles.headerTitle}>Channels</Text>
          <Text style={styles.statusTime}>Stay updated on topics that matter to you. Find channels to follow below.</Text>
        </View>

        <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
          <FlatList
            data={horiImages}
            renderItem={HoriItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={160}
          />
        </View>
        <TouchableOpacity style={styles.followButton1}>
          <Text style={styles.buttonText1}>Explore more</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ height: 250 }} />
        </ScrollView>
      </ScrollView>
      <View style={styles.metabtncontainer}>
        <Image source={require('../assets/images/pencil.png')} style={{ height: 40, width: 40, tintColor: 'white', }} />
      </View>
      <View style={styles.btncontainer}>
        <AntDesign name="camera" size={30} color="black" />
      </View>
    </View>
  )
}

export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111a13',
    padding: 15,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  statustxt:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    marginTop:15,
  },
  card: {
    justifyContent: 'center',
    backgroundColor: '#1c2f2f',
    borderColor: '#1c2f2f',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    width: 140,
    alignItems: 'center',
  },
  heading: {
    fontSize: 14,
    marginTop: 25,
    color: 'white',
  },
  followButton: {
    backgroundColor: '#438161',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#438161',
    width: 100,
  },
  followButton1: {
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#25D366',
    width: 130,
  },
  buttonText: {
    color: '#bce5b0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'nowrap',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  stsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap:5,
    padding:5,
  },
  stsPic: {
    height: 70,
    width: 70,
    borderRadius: 25,
    tintColor: 'white',
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
  recentUpdatesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
  viewedUpdatesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 20,
    marginBottom: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding:5,
    gap:2,
  },
  statusImage: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 15,
    borderColor: '#25D366',
    borderWidth: 3,
  },
  statusImage1: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 15,
    borderColor: 'gray',
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
  },
  statusName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  statusTime: {
    color: 'gray',
    fontSize: 14,
  },
  btncontainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#25D366',
    height: 70,
    width: 70,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  metabtncontainer: {
    position: 'absolute',
    bottom: 120,
    right: 30,
    backgroundColor: '#1c2f2f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    height: 60,
    width: 60,
  },
})
