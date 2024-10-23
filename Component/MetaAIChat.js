import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MetaAIChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // Function to simulate Meta AI response
  const getMetaAIResponse = (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Meta AI: You said "${userMessage}"`);
      }, 1000); // Simulates a 1-second delay
    });
  };

  // Handle sending a message
  const sendMessage = async () => {
    if (inputText.trim()) {
      const userMessage = { text: inputText, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputText('');

      const metaResponse = await getMetaAIResponse(inputText);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: metaResponse, sender: 'meta-ai' },
      ]);
    }
  };

  // Rendering each message
  const renderMessage = ({ item }) => {
    const isUser = item.sender === 'user';
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.aiMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#757575" 
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          {inputText.trim().length > 0 ? (
            <Ionicons name="send" size={24} color="black" />
          ) : (
            <MaterialIcons name="keyboard-voice" size={28} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MetaAIChat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111a13',
  },
  messageList: {
    padding: 10,
    flex: 1,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  aiMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#111a13',
    borderTopWidth: 1,
    borderColor: '#555454',
    color:'white',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#555454',
    borderRadius: 20,
    padding: 10,
    color:'white',
    fontSize:20,
    
  },
  sendButton: {
    justifyContent: 'center',
    paddingHorizontal: 15,
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
    left: 5,
    bottom: 15,
    top:2,
  },
  sendText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
