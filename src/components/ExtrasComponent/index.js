import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const ExtrasComponent = ({extras = []}) => {
  return (
    <View>
      <Text style={styles.titleTextStyle}>Extras:</Text>
      {extras.map(data => {
        return (
          <View key={data.name} style={styles.extrasRow}>
            <Text>{`- ${data.name}`}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ExtrasComponent;
