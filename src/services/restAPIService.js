import {create} from 'apisauce';

import {API_QUERY} from '../constants/config';

const API = create({
  baseURL: API_QUERY,
  headers: {
    Accept: 'application/json',
  },
  timeout: 30000,
});

export const getData = async cursorValue => {
  try {
    if (cursorValue.length > 0) {
      API.setBaseURL(`${API_QUERY}?cursor=${cursorValue}`);
    }
    const response = await API.get();
    return response;
  } catch (error) {
    console.warn('Error get data: ', error);
    return null;
  }
};
