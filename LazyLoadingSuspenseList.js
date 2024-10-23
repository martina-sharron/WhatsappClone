import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

// Lazily loaded component for displaying individual list items
const LazyItem = React.lazy(() => import('./LazyItem')); // Ensure this file exists

const LazyLoadingSuspenseList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch data from an open API (e.g., JSONPlaceholder)
  const fetchData = async (pageNumber = 1) => {
    if (loading) return; // Prevent multiple requests

    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: pageNumber, _limit: 10 }, // Pagination params
      });

      const newData = response.data;
      if (newData.length > 0) {
        setData(pageNumber === 1 ? newData : [...data, ...newData]);
      } else {
        setHasMore(false); // No more data
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load more data when reaching the end of the list
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Render each item
  const renderItem = ({ item }) => (
    <LazyItem item={item} /> // No need for suspense here, handled globally now
  );

  // Conditionally render the ListFooterComponent based on loading state and page number
  const renderFooter = () => {
    // Only show loading text on the first page load, otherwise show activity indicator
    if (loading && page === 1) {
      return (
        <View style={styles.loadingtxt}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Loading Items...</Text>
        </View>
      );
    } else if (loading && page > 1) {
      return <ActivityIndicator size="large" color="blue" />;
    } else {
      return null; // No footer when not loading
    }
  };

  return (
    <View style={styles.container}>
      {/* Suspense wraps the whole FlatList now */}
      <Suspense fallback={<View style={styles.loadingtxt}><Text style={{fontSize:22,fontWeight:'bold'}}>Loading Items...</Text></View>}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter} // Handle loading footer conditionally
        />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingtxt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LazyLoadingSuspenseList;
