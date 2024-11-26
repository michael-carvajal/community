import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SearchResult = {
    id: string;
    title: string;
    description: string;
};

const dummyResults: SearchResult[] = [
    {
        id: '1',
        title: 'Green Bay Packers',
        description: 'NFL Team • Wisconsin',
    },
    {
        id: '2',
        title: 'Lambeau Field',
        description: 'Stadium • Green Bay, WI',
    },
    // Add more dummy data as needed
];

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    const renderSearchItem = ({ item }: { item: SearchResult }) => (
        <TouchableOpacity style={styles.resultItem}>
            <View style={styles.resultIcon}>
                <Ionicons name="search-outline" size={24} color="#666" />
            </View>
            <View style={styles.resultInfo}>
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            <FlatList
                data={dummyResults}
                renderItem={renderSearchItem}
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f5f5f5',
        margin: 16,
        borderRadius: 10,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        padding: 0,
    },
    list: {
        flex: 1,
    },
    resultItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'center',
    },
    resultIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    resultInfo: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    resultDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
}); 