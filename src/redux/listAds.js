export const LIST_ADS_SET_DATA = 'LIST_ADS_SET_DATA';
export const LIST_ADS_UPDATE_DATA = 'LIST_ADS_UPDATE_DATA';
export const LIST_ADS_SET_CURSOR = 'LIST_ADS_SET_CURSOR';
export const LIST_ADS_CLEAN = 'LIST_ADS_CLEAN';

export const listAdsSetData = data => ({
  type: LIST_ADS_SET_DATA,
  data,
});

export const listAdsUpdateData = data => ({
  type: LIST_ADS_UPDATE_DATA,
  data,
});

export const listAdsSetCursor = data => ({
  type: LIST_ADS_SET_CURSOR,
  data,
});

export const listAdsClean = () => ({
  type: LIST_ADS_CLEAN,
});

const initialState = {
  listAds: [],
  cursor: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_ADS_SET_DATA:
      return {
        ...state,
        listAds: action.data,
      };
    case LIST_ADS_UPDATE_DATA:
      return {
        ...state,
        listAds: [...state.listAds, ...action.data],
      };
    case LIST_ADS_SET_CURSOR:
      return {
        ...state,
        cursor: action.data,
      };
    case LIST_ADS_CLEAN:
      return initialState;
    default:
      return state;
  }
};
