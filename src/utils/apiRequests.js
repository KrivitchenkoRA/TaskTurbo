import store from '../redux';
import {getData} from '../services/restAPIService';
import * as listAdsReducer from '../redux/listAds';
import * as configReducer from '../redux/config';

export const getAllAdsFromServer = async cursorValue => {
  store.dispatch(configReducer.configDataLoading(true));
  const result = await getData(cursorValue);
  const listVips = [];
  if (result.data.vips && result.data.vips.length > 0) {
    result.data.vips.map(data => {
      let adsForSave = data;
      adsForSave.isVip = true;
      listVips.push(adsForSave);
    });
  }
  if (cursorValue.length > 0) {
    store.dispatch(
      listAdsReducer.listAdsUpdateData([...listVips, ...result.data.ads]),
    );
  } else {
    store.dispatch(
      listAdsReducer.listAdsSetData([...listVips, ...result.data.ads]),
    );
  }
  store.dispatch(configReducer.configDataLoading(false));
};
