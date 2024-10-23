import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Community = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Communities</Text>
        <View style={styles.headerIcons}>
          <Icon name='qrcode-scan' color='white' size={24} />
          <Icon name='camera' color='white' size={24} />
          <Icon name='dots-vertical' color='white' size={24} />
        </View>
      </View>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={require('../assets/images/comm.jpeg')} />
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.staytxt}>Stay Connected with a community</Text>
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.commutxt1} numberOfLines={1} ellipsizeMode="tail">Communities bring Members together in topic based groups</Text>
        <Text style={styles.commutxt2}>and make it easy to get admin announcement. Any</Text>
        <Text style={styles.commutxt3}> community you 're added to will appear here</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 10, }}>
        <Text style={{ fontSize: 14, color: '#25D366' }}>See sample communities </Text>
        <MaterialIcons name='keyboard-arrow-right' size={20} color='#25D366' />
      </View>
      <View style={{ marginVertical: 30, justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start your Community</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Community

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111a13',
    padding: 5,
  },
  header: {
    backgroundColor: '#111a13',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30
  },
  img: {
    height: 250,
    width: 250,
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  staytxt: {
    color: 'white',
    fontSize: 20,
  },
  txtcontainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  commutxt1: {
    color: 'white',
    fontSize: 16,
    marginLeft: 0,
  },
  commutxt2: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto-Italic',
    marginLeft: 15,
  },
  commutxt3: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto-Italic',
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '90%',

  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})