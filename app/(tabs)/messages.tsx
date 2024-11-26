import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';

type ChatPreview = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
};

const dummyChats: ChatPreview[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '2m ago',
    avatar: 'https://picsum.photos/200',
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    time: '1h ago',
    avatar: 'https://picsum.photos/201',
  },
  // Add more dummy data as needed
];

export default function MessagesScreen() {
  const renderChatItem = ({ item }: { item: ChatPreview }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
});