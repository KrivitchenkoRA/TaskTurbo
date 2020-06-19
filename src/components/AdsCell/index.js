import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';

import styles from './styles';

const AdsCell = ({adData, onCellPress, index}) => {
  return (
    <TouchableOpacity onPress={() => onCellPress(index)}>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: adData?.photo,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}>
            <View style={styles.imageCoverView}>
              <View style={styles.nameAdTextContainer}>
                <Text style={styles.nameAdTextStyle}>{adData?.name}</Text>
                {adData.isVip && (
                  <Text style={styles.vipTextStyle}>* Vip</Text>
                )}
              </View>
              <View style={styles.adDataContainer}>
                <Text style={styles.adDataTextStyle}>{`Price: ${
                  adData?.price
                } ${adData?.currency}`}</Text>
                <Text style={styles.adDataTextStyle}>{`City: ${
                  adData?.region.name
                }`}</Text>
                <Text style={styles.adDataTextStyle}>
                  {`Last update at: ${moment(adData?.updated_at).format(
                    'DD MMMM YYYY',
                  )}`}
                </Text>
              </View>
            </View>
          </FastImage>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AdsCell;
