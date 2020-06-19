import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';

import {AppHeader} from '../../components';
import {AdDetailComponent} from '../../components';
import {ExtrasComponent} from '../../components';
import {AdDescriptionComponent} from '../../components';

import styles from './styles';

const AdDetailScreen = props => {
  const [visible, setIsImageViewVisible] = useState(false);
  const [productPhotos, setProductPhotos] = useState([]);
  const navigation = useNavigation();
  const backButtonPress = () => navigation.goBack();
  const adData = props.route.params;

  useEffect(() => {
    let listObjectsWithPhotos = [];
    adData?.photos.map(photo => listObjectsWithPhotos.push({uri: photo}));
    setProductPhotos(listObjectsWithPhotos);
  }, [adData]);

  return (
    <View style={styles.container}>
      <AppHeader
        title={adData.name}
        isShowBackButton
        backButtonPress={backButtonPress}
      />
      <ScrollView>
        <FastImage
          style={styles.mainPhotoStyle}
          source={{
            uri: adData?.photo,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <AdDetailComponent
          model={adData.model}
          make={adData.make}
          region={adData.region}
          year={adData.year}
          category={adData.category}
          color={adData.color}
          engineVolume={adData.engine_volume}
          power={adData.power}
          fuelType={adData.fuel_type}
          mileage={adData.mileage}
          transmission={adData.transmission}
          gear={adData.gear}
          isNew={adData.new}
          price={adData.price}
          currency={adData.currency}
        />
        <ExtrasComponent extras={adData.extras} />
        <AdDescriptionComponent description={adData.description} />
        <View style={styles.listPhotosButtonContainerStyle}>
          <TouchableOpacity onPress={() => setIsImageViewVisible(true)}>
            {productPhotos.length > 0 && (
              <FastImage
                style={styles.listPhotosButtonBcgImageStyle}
                source={{
                  uri: productPhotos[0].uri,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}>
                <View style={styles.imageCoverView}>
                  <Text style={styles.photosCountTextStyle}>
                    {productPhotos.length}
                  </Text>
                </View>
              </FastImage>
            )}
          </TouchableOpacity>
        </View>
        <ImageView
          images={productPhotos}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsImageViewVisible(false)}
        />
      </ScrollView>
    </View>
  );
};

export default AdDetailScreen;
