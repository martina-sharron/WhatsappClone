import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator,Image } from 'react-native';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ChatDetail = ({ route, navigation }) => {
  const { name, avatar, id } = route.params;

  const [messages, setMessages] = useState([
    { text: `Hi ${name}, how are you?`, sent: false, ticks: null, date: '28 September 2024', senderId: id },
    { text: "I'm good, thanks! How about you?", sent: true, ticks: 'double', date: 'Yesterday', senderId: id },
    { text: "👍", sent: false, ticks: null, date: '', senderId: id },
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef();

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sent: true, ticks: 'single', date: 'Today' };
      setMessages([...messages, newMessage]);
      setInput('');

      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((msg, idx) =>
            idx === prevMessages.length - 1 ? { ...msg, ticks: 'double' } : msg
          )
        );
      }, 2000);

      flatListRef.current?.scrollToEnd({ animated: true });
    }
  };

  const renderMessage = ({ item }) => (
    <>
    
      {item.date && (
        <View style={styles.date}>
          <Text style={styles.txt}>{item.date}</Text>
        </View>
      )}
      <View style={[styles.txtbck, item.sent ? styles.sent : styles.received]}>
        <Text style={styles.txt}>{item.text}</Text>
        {item.sent && (
          <Icon
            name={item.ticks === 'single' ? 'check' : 'check-all'}
            size={16}
            color={item.ticks === 'double' ? '#34B7F1' : '#666'}
          />
        )}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/theme1.jpg')} style={styles.img}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
          style={{ flex: 1 }}
        />

        <View style={styles.inputContainer}>
          <Icon name="emoticon-outline" size={24} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            placeholderTextColor="#999"
            multiline
            value={input}
            onChangeText={setInput}
          />
          <View style={styles.iconGroup}>
            <Icon name="paperclip" size={24} color="#666" />
            <FontAwesome name="rupee" size={24} color="#666" />
            <Ionicons name="camera" size={24} color="#666" />
          </View>
        </View>

        <TouchableOpacity onPress={sendMessage} style={styles.sendIcon}>
          {input.trim().length > 0 ? (
            <Ionicons name="send" size={24} color="black" />
          ) : (
            <MaterialIcons name="keyboard-voice" size={28} color="black" />
          )}
        </TouchableOpacity>


      </ImageBackground>
    </View>
  );
};

export default ChatDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  txtbck: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  received: {
    backgroundColor: '#1c2f2f',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  sent: {
    backgroundColor: '#128C7E',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#1c2f2f',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    width: '85%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    paddingHorizontal: 10,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  date: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#1c2f2f',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sendIcon: {
    borderRadius: 35,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 60,
    width: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    left: 2,
    bottom: 15,
  },
  emojiContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    height: 300,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
},
avatar: {
  width: 60,
  height: 60,
  borderRadius: 30,
},
chatTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 10,
},
});
