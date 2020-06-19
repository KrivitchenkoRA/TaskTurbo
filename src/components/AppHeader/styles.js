import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {isIphoneXorAbove} from '../../utils/checkIphoneX';
import {colors} from '../../constants';

export default StyleSheet.create({
  mainContainer: {
    width,
    height: isIphoneXorAbove() ? 80 : 60,
    paddingTop: isIphoneXorAbove() ? 30 : 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rightPaddingValue: {
    paddingRight: 50,
  },
  titleTextStyle: {
    flex: 1,
    textAlign: 'center',
    color: colors.blackColor,
    fontSize: 20,
  },
  backButton: {
    width: 50,
    height: isIphoneXorAbove() ? 50 : 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
