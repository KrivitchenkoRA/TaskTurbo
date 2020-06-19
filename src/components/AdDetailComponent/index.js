import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const AdDetailComponent = ({
  model,
  make,
  region,
  year,
  category,
  color,
  engineVolume,
  power,
  fuelType,
  mileage,
  transmission,
  gear,
  isNew,
  price,
  currency,
}) => {
  const listItemsData = [
    {
      title: 'Model: ',
      value: model.name,
    },
    {
      title: 'Make: ',
      value: make.name,
    },
    {
      title: 'City: ',
      value: region.name,
    },
    {
      title: 'Year: ',
      value: year,
    },
    {
      title: 'Category: ',
      value: category.name,
    },
    {
      title: 'Color: ',
      value: color.name,
    },
    {
      title: 'Engine Volume: ',
      value: engineVolume,
    },
    {
      title: 'Power: ',
      value: power,
    },
    {
      title: 'Fuel Type: ',
      value: fuelType.name,
    },
    {
      title: 'Mileage: ',
      value: mileage,
    },
    {
      title: 'Transmission: ',
      value: transmission.name,
    },
    {
      title: 'Gear: ',
      value: gear.name,
    },
    {
      title: 'Is New: ',
      value: isNew ? 'Yes' : 'No',
    },
    {
      title: 'Price: ',
      value: `${price} ${currency}`,
    },
  ];

  const renderRowsWithAdDetail = (data, index) => {
    return (
      <View style={styles.detailItemRow} key={data.title}>
        <Text style={styles.detailItemTextStyle}>{data.title}</Text>
        <Text style={styles.detailItemTextStyle}>{data.value}</Text>
      </View>
    );
  };

  return (
    <View>
      {listItemsData.map((data, index) => renderRowsWithAdDetail(data, index))}
    </View>
  );
};

export default AdDetailComponent;
