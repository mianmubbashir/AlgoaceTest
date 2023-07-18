import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {ArrowLeft, ExternalLink} from '../assets/SVG';

const BookScreen = ({route}: any) => {
  const {book} = route.params;
  const navigation = useNavigation();

  const handleLinkPress = () => {
    console.log(book.link);
  };

  const goBack = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <ScrollView key={book.title} style={styles.itemWrapper}>
      <TouchableOpacity onPress={goBack} style={styles.header}>
        <ArrowLeft width={120} height={40} stroke={'black'} />
      </TouchableOpacity>

      <View style={styles.imgCont}>
        <Image
          source={{uri: book.imageLink}}
          style={{width: '80%', height: '80%', borderRadius: 15}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
          <View>
            <Text style={styles.imgText}>Rating</Text>
            <AirbnbRating
              count={5}
              defaultRating={book.rating}
              size={15}
              showRating={false}
              isDisabled
            />
          </View>

          <View>
            <Text style={styles.imgText}>Review</Text>
            <Text style={styles.review}>({book.reviews})</Text>
          </View>

          <View>
            <Text style={styles.imgText}>Price</Text>
            <Text style={styles.price}>${book.price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.secCont}>
        <Text style={styles.title}>{book.title}</Text>

        <Text style={styles.baseText}>
          Author:
          <Text style={styles.innerText}> {book.author}</Text>
        </Text>

        <Text style={styles.baseText}>
          Country:
          <Text style={styles.innerText}> {book.country}</Text>
        </Text>

        <Text style={styles.baseText}>
          Language:
          <Text style={styles.innerText}> {book.language}</Text>
        </Text>

        <Text style={styles.baseText}>
          Year:
          <Text style={styles.innerText}> {book.year}</Text>
        </Text>

        <Text style={styles.baseText}>
          Pages:
          <Text style={styles.innerText}> {book.pages}</Text>
        </Text>

        <TouchableOpacity style={styles.btn} onPress={handleLinkPress}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
            }}>
            View Details
            <ExternalLink
              width={24}
              height={24}
              stroke={'white'}
              style={styles.icon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
  },

  header: {
    position: 'relative',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    marginBottom: -40,
    marginLeft: -18,
  },

  imgCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginHorizontal: 30,
    borderRadius: 15,
    height: 480,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  secCont: {
    flex: 1,
    marginHorizontal: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginVertical: 15,
    width: '100%',
    color: 'black',
  },

  imgText: {
    fontWeight: '600',
    color: 'black',
    marginBottom: 6,
    alignSelf: 'center',
    marginTop: 10,
  },

  baseText: {
    fontWeight: '600',
    marginBottom: 6,
    color: 'black',
  },

  innerText: {
    fontWeight: '300',
  },

  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
    height: '15%',
    backgroundColor: 'rgba(0, 77, 109, 1)',
    marginVertical: 13,
  },

  price: {
    left: 10,
    color: 'black',
    fontWeight: '200',
  },

  review: {
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: '200',
    color: 'black',
  },

  icon: {},
});

export default BookScreen;
