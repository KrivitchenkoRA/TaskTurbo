import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {colors} from '../../constants';

export default StyleSheet.create({
  mainContainer: {
    width,
    height: width / 2,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 5,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 5,
  },
  imageCoverView: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: colors.opacityBlackColor,
  },
  nameAdTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameAdTextStyle: {
    color: colors.whiteColor,
    fontSize: 20,
  },
  vipTextStyle: {
    color: colors.whiteColor,
    fontSize: 16,
  },
  adDataContainer: {
    paddingBottom: 5,
    paddingLeft: 5,
  },
  adDataTextStyle: {
    color: colors.whiteColor,
    fontSize: 12,
  },
});
