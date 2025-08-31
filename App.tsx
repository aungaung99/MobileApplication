import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import './global.css';

function App(): React.JSX.Element {
  return (
    <View className="flex-1 bg-red-500">
      <Text className="text-red">Hello</Text>
    </View>
  );
}

export default App;
