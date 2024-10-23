import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LazyItem = ({ item }) => (
  <View style={styles.item}>
    
    <Text style={styles.heading}>{item.title}</Text>
    <Text style={styles.body}>{item.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  body: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
});

export default LazyItem;
