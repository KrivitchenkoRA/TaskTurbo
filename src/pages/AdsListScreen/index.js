import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppHeader} from '../../components';
import {AdsCell} from '../../components';

import {getAllAdsFromServer} from '../../utils/apiRequests';
import * as listAdsReducer from '../../redux/listAds';

import styles from './styles';

const AdsListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onCellPress = index =>
    navigation.navigate('AdDetailScreen', listAds[index]);

  const {listAds, cursor} = useSelector(({listAds}) => ({
    listAds: listAds.listAds,
    cursor: listAds.cursor,
  }));

  useEffect(() => {
    getAllAdsFromServer(cursor);
  }, [cursor]);

  const loadMoreAds = () => {
    const lastCursor = listAds[listAds.length - 1].cursor;
    dispatch(listAdsReducer.listAdsSetCursor(lastCursor));
  };

  return (
    <View style={styles.container}>
      <AppHeader title="List of Ads" />
      <FlatList
        style={styles.listOfAds}
        keyExtractor={(item, index) => `key-${index}`}
        renderItem={({item, index}) => {
          return (
            <AdsCell adData={item} onCellPress={onCellPress} index={index} />
          );
        }}
        data={listAds}
        scrollEnabled
        onEndReached={loadMoreAds}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </View>
  );
};

export default AdsListScreen;
