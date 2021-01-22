import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';

const SelectCity = () => {
  const cities = [
    {
      label: 'Delhi',
      value: 'Delhi',
    },
    {
      label: 'mumbai',
      value: 'mumbai',
    },
    {
      label: 'ambala',
      value: 'ambala',
    },
  ];

  const [city, setCity] = useState('');
  const placeholder = {
    label: 'select city',
    value: null,
    color: '#9EA0A4',
  };
  const onchange = (value) => {
    setCity(value);
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={placeholder}
        items={cities}
        onValueChange={(value) => {
          onchange(value);
        }}
        style={{
          inputIOSContainer: {
            height: 60,
            width: '75%',
            marginTop: 30,
            marginLeft: 0,
            justifyContent: 'center',
            color: 'rgb(47,46,98)',
            fontSize: 30,
            textAlign: 'center',
          },
          placeholder: {
            color: 'rgb(47,46,98)',
            fontSize: 30,
            textAlign: 'center',
          },
          value: {color: 'rgb(47,46,98)', fontSize: 30, textAlign: 'center'},
          iconContainer: {right: 35},
        }}
        value={city}
        textInputProps={{
          color: 'rgb(47,46,98)',
          fontSize: 30,
          textAlign: 'center',
        }}
        Icon={() => {
          return (
            <Icon
              name="chevron-small-down"
              style={styles.downicon}
              pointerEvents="none"
            />
          );
        }}
        doneText="Select"
      />

      <Icon name="location-pin" style={styles.icon} pointerEvents="none" />
      <TouchableWithoutFeedback
        onPress={() => {
          alert('buy premium to seee data by date');
        }}>
        <Icon name="calendar" style={styles.calendar} />
      </TouchableWithoutFeedback>
      <Text>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  icon: {
    color: 'red',
    fontSize: 35,
    position: 'absolute',
    top: '47%',
    left: 20,
    color: 'rgb(47,46,98)',
  },
  downicon: {
    color: 'rgb(47,46,98)',
    fontSize: 35,
  },
  calendar: {
    position: 'absolute',
    right: 20,
    top: '47%',
    fontSize: 30,
    color: 'rgb(47,46,98)',
  },
});

export default SelectCity;
