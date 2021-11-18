import React from 'react';
import { Picker } from 'react-mobile-style-picker';
import 'react-mobile-style-picker/dist/index.css'; // or index.less

const Reactmobilestylepicker = () => {
  const test = '';

  const pickerStyle = {
    width: '100%',
    height: '15vh',
  };

  const indicatorStyle = {
    border: '1px solid red',
    width: '15vw',
    height: '15vw',
    borderRadius: '50%',
  };
  return (
    <Picker
      mode="horizontal"
      size={3}
      style={pickerStyle}
      indicatorStyle={indicatorStyle}
      itemMargin={5}
      itemSize={100}
    >
      <Picker.Item value={0}>zero</Picker.Item>
      <Picker.Item value={1}>one</Picker.Item>
      <Picker.Item value={2}>two</Picker.Item>
      <Picker.Item value={3}>three</Picker.Item>
      <Picker.Item value={4}>four</Picker.Item>
      <Picker.Item value={5}>five</Picker.Item>
    </Picker>
  );
};

export default Reactmobilestylepicker;
