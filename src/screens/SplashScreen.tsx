import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.splash}>
      <Image
        source={require('../../src/assets/images/Splash.png')}
        width={157}
        height={186.01}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default SplashScreen;
