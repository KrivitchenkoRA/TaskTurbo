import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainPhotoStyle: {
    width,
    height: width * 0.64,
  },
  listPhotosButtonContainerStyle: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
  listPhotosButtonBcgImageStyle: {
    width: width - 60,
    height: width - 60,
  },
  imageCoverView: {
    flex: 1,
    backgroundColor: colors.opacityBlackColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photosCountTextStyle: {
    color: colors.whiteColor,
    fontSize: 20,
  },
});
