import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooks} from '../store/bookSlice';
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {HeartIcon} from '../assets/SVG';

const HomeScreen: React.FC = () => {
  const books = useSelector((state: any) => state.books.books.data);
  const loading = useSelector((state: any) => state.books.loading);
  const [searchTitle, setSearchTitle] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const renderBookItem = ({item}: any) => {
    if (searchTitle && !item.title.includes(searchTitle)) {
      return null;
    }

    const heartColor = item.is_liked ? 'red' : 'white';

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BookScreen', {book: item});
        }}>
        <View key={item.title} style={styles.itemWrapper}>
          <Image
            source={{uri: item.imageLink}}
            style={{width: 150, height: 219}}
          />
          <HeartIcon
            width={25}
            height={25}
            fill={heartColor}
            style={styles.heart}
          />
          <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <AirbnbRating
              count={5}
              defaultRating={item.rating}
              size={15}
              showRating={false}
              isDisabled
            />
            <Text style={styles.review}>({item.reviews})</Text>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const numColumns = 2;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderCont}>
        <Text style={styles.titleText}>Hi Nick</Text>
        <Image
          source={require('../../src/assets/images/Nick.png')}
          width={157}
          height={186.01}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../src/assets/images/Search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search..."
          value={searchTitle}
          onChangeText={setSearchTitle}
          style={styles.input}
        />
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        <FlatList
          data={books}
          renderItem={renderBookItem}
          initialNumToRender={4}
          removeClippedSubviews={true}
          keyExtractor={item => item.title}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: Platform.OS === 'ios' ? 50 : 20,
  },

  itemWrapper: {
    flex: 1,
    alignItems: 'center',
    margin: Platform.OS === 'ios' ? 15 : 5,
  },

  loaderContainer: {
    marginTop: 300,
  },

  HeaderCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleText: {
    top: 15,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: 'black',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 100,
    height: 40,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    marginVertical: 20,
  },

  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 20,
  },

  input: {
    flex: 1,
  },

  title: {
    top: 10,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#000',
    marginBottom: 15,
    width: 147,
  },

  price: {
    width: '90%',
    marginVertical: 10,
    justifyContent: 'flex-start',
    color: 'black',
  },

  review: {
    fontWeight: '200',
    color: 'black',
  },

  heart: {
    position: 'absolute',
    top: 10,
    left: 125,
  },
});

export default HomeScreen;
