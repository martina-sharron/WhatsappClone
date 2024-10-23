import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const data = [
  { id: 1, pic: require('../assets/CallsImages/cimg1.jpeg'), name: 'kevin (2)', time: '14 September, 4:49 pm', call: require('../assets/images/calls.png') },
  { id: 2, pic: require('../assets/CallsImages/cimg2.jpeg'), name: '+987654321(1)', time: '12 September, 1:45 pm', call: require('../assets/images/calls.png') },
  { id: 3, pic: require('../assets/CallsImages/cimg3.jpeg'), name: 'Stella', time: '3 September, 9:42 pm', call: require('../assets/images/video.png') },
  { id: 4, pic: require('../assets/CallsImages/cimg4.jpeg'), name: 'Mala', time: '1 September, 8:23 pm', call: require('../assets/images/video.png') },
  { id: 5, pic: require('../assets/CallsImages/cimg5.jpeg'), name: 'Deepa', time: '14 August, 2:49 pm', call: require('../assets/images/calls.png') },
  { id: 6, pic: require('../assets/CallsImages/cimg6.jpeg'), name: 'Aaron (2)', time: '11 August, 4:49 am', call: require('../assets/images/video.png') },
  { id: 7, pic: require('../assets/CallsImages/cimg7.jpeg'), name: '+9178635426(2)', time: '8 August, 6:50 pm', call: require('../assets/images/calls.png') },
  { id: 8, pic: require('../assets/CallsImages/cimg8.jpeg'), name: 'Quiny', time: '02/06/24, 12:49 am', call: require('../assets/images/video.png') },
  { id: 9, pic: require('../assets/CallsImages/cimg9.jpeg'), name: 'Laiza', time: '05/05/24, 4:49 pm', call: require('../assets/images/calls.png') },
  { id: 10, pic: require('../assets/CallsImages/cimg10.jpeg'), name: 'alen', time: '22/03/24, 5:49 am', call: require('../assets/images/calls.png') },
]

const Calls = () => {

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
      <Image source={item.pic} style={styles.img} />
      <View style={{ marginLeft: 15 }}>
        {item.id % 2 !== 0 ? (
          <Text style={styles.txt}>{item.name}</Text>) : (<Text style={styles.txt1}>{item.name}</Text>)}
        <View style={{ flexDirection: 'row' }}>
          {item.id % 2 === 0 ? (
            <Feather name='arrow-down-left' size={24} color='red' />
          ) : (
            <Feather name='arrow-up-right' size={24} color='#25D366' />)}
          <Text style={styles.subText}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.callIconContainer}>
        <Image source={item.call} style={styles.callIcon} />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Calls</Text>
        <View style={styles.headerIcons}>
          <Icon name='qrcode-scan' color='white' size={24} />
          <Icon name='camera' color='white' size={24} />
          <Ionicons name='search' color='white' size={24} />
          <Icon name='dots-vertical' color='white' size={24} />
        </View>
      </View>
      <ScrollView>
        <View style={{ marginVertical: 5 }}>
          <Text style={styles.txt}>Favourites</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 25, gap: 20 }}>
          <View style={styles.btncontainer}>
            <AntDesign name="heart" size={30} color="black" />
          </View>
          <Text style={{ fontSize: 20, color: 'white', top: 15 }}>Add favourite</Text>
        </View>
        <View style={{ marginVertical: 10 }}><Text style={styles.txt}>Recent</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
        />
        </ScrollView>
        <View style={styles.btncontainercall}>
          <MaterialIcons name="add-call" size={30} color="black" />
        </View>
      
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111a13',
    padding: 15,
  },
  header: {
    backgroundColor: '#111a13',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  txt: {
    fontSize: 20,
    color: 'white',
  },
  txt1: {
    fontSize: 20,
    color: 'red',
  },
  subText: {
    fontSize: 14,
    color: 'grey',
  },
  btncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D366',
    height: 60,
    width: 60,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 35,
  },
  callIconContainer: {
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  callIcon: {
    height: 25,
    width: 24,
    tintColor: 'white',
  },
  btncontainercall: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D366',
    height: 70,
    width: 70,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
})
