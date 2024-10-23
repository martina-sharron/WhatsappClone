import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, IconButton } from 'react-native-paper';

const WhatsAppMenu = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setVisible(false);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <IconButton
                        icon="dots-vertical"
                        iconColor='white'
                        size={24}
                        onPress={openMenu}
                    />
                }
                contentStyle={{
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    backgroundColor:'#111a13',
                }}
            >
                <Menu.Item
                    onPress={() => { closeMenu(); }}
                    titleStyle={styles.menuItem}
                    title="New group"
                />
                <Menu.Item
                    onPress={() => { closeMenu(); }}
                    titleStyle={styles.menuItem}
                    title="New broadcast"
                />
                <Menu.Item
                    onPress={() => { closeMenu(); }}
                    titleStyle={styles.menuItem}
                    title="Linked devices"
                />
                <Menu.Item
                    onPress={() => { closeMenu(); }}
                    titleStyle={styles.menuItem}
                    title="Starred messages"
                />
                <Menu.Item
                    onPress={() => { closeMenu(); }}
                    titleStyle={styles.menuItem}
                    title="Payments"
                />
                <Menu.Item
                    onPress={() => { 
                        closeMenu(); 
                        navigation.navigate('setting');
                    }}
                    titleStyle={styles.menuItem}
                    title="Settings"
                />
            </Menu>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  menuItem: {
    fontSize: 14,
    paddingVertical: 4,
    color: 'white',
  },
});

export default WhatsAppMenu;