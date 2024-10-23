import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const ChatScreen = ({ route, navigation }) => {
    const { name, avatar, id } = route.params;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { text: `Hi ${name}, how are you?`, senderId: id },
        { text: 'Waiting for your response...', senderId: id },
    ]);

    const handleSendMessage = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, senderId: 'userId' }, // Replace 'userId' with actual user ID
        ]);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <Text style={styles.chatTitle}>Chat with {name}</Text>
            </View>

            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageBubble,
                            item.senderId === id && styles.receiverMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message"
                />
                <TouchableOpacity onPress={handleSendMessage}>
                    <Text style={styles.sendButton}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
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
    messageBubble: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    receiverMessage: {
        backgroundColor: '#f7f7f7',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    sendButton: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 10,
    },
});

export default ChatScreen;