import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, ScrollView } from 'react-native';

const tradingData = [
    { id: '1', name: 'AAPL', price: 154.30, change: '+1.5%' },
    { id: '2', name: 'TSLA', price: 710.85, change: '-0.8%' },
    { id: '3', name: 'BTC', price: 45000, change: '+2.4%' },
    { id: '4', name: 'ETH', price: 3200, change: '+3.8%' },
];

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.appName}>Money Mines</Text>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Balance: $10,000</Text>
                    <Pressable style={styles.depositButton}>
                        <Text style={styles.depositButtonText}>Deposit</Text>
                    </Pressable>
                </View>
            </View>

            {/* Market Overview */}
            <ScrollView contentContainerStyle={styles.marketOverview}>
                <Text style={styles.sectionTitle}>Market Overview</Text>
                <FlatList
                    data={tradingData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.stockCard}>
                            <Text style={styles.stockName}>{item.name}</Text>
                            <Text style={styles.stockPrice}>${item.price}</Text>
                            <Text style={item.change.startsWith('-') ? styles.stockChangeNegative : styles.stockChangePositive}>
                                {item.change}
                            </Text>
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>

            {/* Call-to-Action Buttons */}
            <View style={styles.actions}>
                <Pressable style={styles.actionButton} onPress={() => navigation.navigate('TradeScreen')}>
                    <Text style={styles.actionButtonText}>Trade Now</Text>
                </Pressable>
                <Pressable style={styles.actionButton} onPress={() => navigation.navigate('PortfolioScreen')}>
                    <Text style={styles.actionButtonText}>Portfolio</Text>
                </Pressable>
                <Pressable style={styles.actionButton} onPress={() => navigation.navigate('MarketScreen')}>
                    <Text style={styles.actionButtonText}>Market</Text>
                </Pressable>
            </View>

            {/* Trending Section */}
            <ScrollView style={styles.trendingSection}>
                <Text style={styles.sectionTitle}>Trending Assets</Text>
                <FlatList
                    data={tradingData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.trendingCard}>
                            <Text style={styles.trendingName}>{item.name}</Text>
                            <Text style={styles.trendingPrice}>${item.price}</Text>
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <Pressable onPress={() => navigation.navigate('PortfolioScreen')}>
                    <Text style={styles.navText}>Portfolio</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('MarketScreen')}>
                    <Text style={styles.navText}>Market</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
                    <Text style={styles.navText}>Profile</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 40,
    },
    header: {
        backgroundColor: '#007bff',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appName: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    balanceContainer: {
        alignItems: 'center',
    },
    balanceText: {
        color: '#fff',
        fontSize: 16,
    },
    depositButton: {
        marginTop: 5,
        backgroundColor: '#0056b3',
        padding: 10,
        borderRadius: 5,
    },
    depositButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    marketOverview: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    stockCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginRight: 15,
        width: 120,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    stockName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stockPrice: {
        fontSize: 16,
        marginTop: 10,
    },
    stockChangePositive: {
        color: 'green',
        fontSize: 14,
        marginTop: 5,
    },
    stockChangeNegative: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
    actions: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    actionButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    trendingSection: {
        marginTop: 20,
    },
    trendingCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginRight: 15,
        width: 140,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    trendingName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    trendingPrice: {
        fontSize: 14,
        marginTop: 5,
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default HomePage;
