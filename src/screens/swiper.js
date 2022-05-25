import React, {Component} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
const {width} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    flex: 1,
  },
};

class MySwiper extends Component {
  render() {
    const {navigation, t} = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              onPress={() => navigation.goBack()}
              isRotateRTL
            />
          }
          centerComponent={
            <Text h4 medium black>
              {t('demos:swiper')}
            </Text>
          }
        />
        <Swiper style={styles.wrapper} height={100} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>

        <Swiper
          style={styles.wrapper}
          height={150}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10,
          }}
          autoplay
          loop>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Why Stone split from Garfield</Text>
            }>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/3.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/4.jpg')}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

export default function SwiperComponent(props) {
  const {t} = useTranslation();
  return <MySwiper {...props} t={t} />;
}
