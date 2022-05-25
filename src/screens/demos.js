import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import ListItem from 'src/components/ListItem';
import {fonts, lineHeights, sizes} from 'src/configs/fonts';
const {width} = Dimensions.get('window');
const pad = 25;
const WIDTH_IMAGE_BACKGROUND = width - 2 * pad;

function DemosScreen(props) {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header
        centerComponent={
          <Text h4 medium>
            {t('demos:text_demos')}
          </Text>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('SqliteScreen')}>
            <View style={styles.leftItem}>
              <Icon name="star-circle" color={colors.thirdText} size={22} />
            </View>
            <View style={styles.rightItem}>
              <ListItem
                title={t('demos:sqlite')}
                bottomDivider
                containerStyle={styles.viewItemRight}
                titleStyle={styles.textItem}
                rightElement={
                  <Icon
                    name="chevron-right"
                    size={22}
                    color={colors.chevronRight}
                    isRotateRTL
                  />
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('SwiperScreen')}>
            <View style={styles.leftItem}>
              <Icon name="star-circle" color={colors.thirdText} size={22} />
            </View>
            <View style={styles.rightItem}>
              <ListItem
                title={t('demos:swiper')}
                bottomDivider
                containerStyle={styles.viewItemRight}
                titleStyle={styles.textItem}
                rightElement={
                  <Icon
                    name="chevron-right"
                    size={22}
                    color={colors.chevronRight}
                    isRotateRTL
                  />
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TapsScreen')}>
            <View style={styles.leftItem}>
              <Icon name="star-circle" color={colors.thirdText} size={22} />
            </View>
            <View style={styles.rightItem}>
              <ListItem
                title={t('demos:taps')}
                bottomDivider
                containerStyle={styles.viewItemRight}
                titleStyle={styles.textItem}
                rightElement={
                  <Icon
                    name="chevron-right"
                    size={22}
                    color={colors.chevronRight}
                    isRotateRTL
                  />
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('MultipleImagesScreen')}>
            <View style={styles.leftItem}>
              <Icon name="star-circle" color={colors.thirdText} size={22} />
            </View>
            <View style={styles.rightItem}>
              <ListItem
                title={t('demos:text_multiple_images')}
                bottomDivider
                containerStyle={styles.viewItemRight}
                titleStyle={styles.textItem}
                rightElement={
                  <Icon
                    name="chevron-right"
                    size={22}
                    color={colors.chevronRight}
                    isRotateRTL
                  />
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('DrawerScreen')}>
            <View style={styles.leftItem}>
              <Icon name="star-circle" color={colors.thirdText} size={22} />
            </View>
            <View style={styles.rightItem}>
              <ListItem
                title={t('demos:text_drawer')}
                bottomDivider
                containerStyle={styles.viewItemRight}
                titleStyle={styles.textItem}
                rightElement={
                  <Icon
                    name="chevron-right"
                    size={22}
                    color={colors.chevronRight}
                    isRotateRTL
                  />
                }
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('PaymentScreen')}>
            <View style={styles.leftItem}>
              <Icon name="chart-pie" color={colors.thirdText} size={22} />
            </View>
            <View style={styles.rightItem}>
              <ListItem
                title={t('demos:text_stripe')}
                bottomDivider
                containerStyle={styles.viewItemRight}
                titleStyle={styles.textItem}
                rightElement={
                  <Icon
                    name="chevron-right"
                    size={22}
                    color={colors.chevronRight}
                    isRotateRTL
                  />
                }
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: pad,
  },
  infoUser: {
    borderRadius: 10,
    marginBottom: 20,
  },
  bgImage: {
    width: WIDTH_IMAGE_BACKGROUND,
    marginBottom: 10,
  },
  viewInfo: {
    padding: 20,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
  },
  rightInfo: {
    flex: 1,
    marginLeft: 20,
  },
  iconInfo: {
    marginRight: 9,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItem: {
    width: 41,
    alignItems: 'flex-start',
  },
  rightItem: {
    flex: 1,
  },
  viewItemRight: {
    minHeight: 62,
  },
  textItem: {
    fontFamily: fonts.regular,
    fontSize: sizes.h5,
    lineHeight: lineHeights.h5,
  },
  viewLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLanguage: {
    marginRight: 2,
  },
  itemFooter: {
    marginVertical: 20,
  },
  textTitle: {
    marginTop: 30,
    marginBottom: 20,
  },
});

export default DemosScreen;
