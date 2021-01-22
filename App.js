import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
  const cities = [
    {
      label: 'Delhi',
      value: 'Delhi',
    },
    {
      label: 'Mumbai',
      value: 'mumbai',
    },
    {
      label: 'Ambala',
      value: 'ambala',
    },
    {
      label: 'Chandigarh',
      value: 'chandigarh',
    },
    {
      label: 'Kurukshetra',
      value: 'kurukshetra',
    },
    {
      label: 'Edmonton',
      value: 'edmonton',
    },
    {
      label: 'Toronto',
      value: 'Toronto',
    },
  ];
  const api = {
    key: '4441fb0e67b049a6ad94235f55a64aba',
  };

  const [city, setCity] = useState('');
  const [weather, setweather] = useState({});
  const placeholder = {
    label: 'select city',
    value: null,
    color: '#9EA0A4',
  };

  const onchange = (value) => {
    setCity(value);
  };
  const fetchData = () => {
    fetch(
      `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api.key}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setweather(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          new Date().getHours() < 12
            ? ['rgb(250,225,119)', 'rgb(253,200,139)', 'rgb(255,190,148)']
            : [
                'rgba(190, 169, 222, 1)',
                'rgba(84, 107, 171, 1)',
                'rgba(24, 43, 98, 1)',
              ]
        } //rgb(124,230,254)', 'rgb(90,200,250)
        start={{x: 0.3, y: -0.2}}
        style={styles.linearGradient}>
        <View style={styles.inputContainer}>
          <RNPickerSelect
            placeholder={placeholder}
            items={cities}
            onValueChange={(value) => {
              onchange(value);
            }}
            onClose={() => {
              fetchData();
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
              value: {
                color: 'rgb(47,46,98)',
                fontSize: 30,
                textAlign: 'center',
              },
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
        </View>

        {typeof weather.main == 'undefined' ? null : (
          <View style={styles.container2}>
            <Image
              style={styles.season}
              source={
                new Date().getHours() < 12
                  ? require('./assets/sun.png')
                  : require('./assets/moon.png')
              }
            />
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'rgb(45,45,89)',
                  fontSize: 19,
                  fontWeight: '600',
                }}>
                {`${weather.weather[0].description}`}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'rgb(45,45,89)',
                  fontSize: 100,
                  marginTop: 30,
                }}>
                {Math.round(weather.main.temp)}°C
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '70%',

                justifyContent: 'space-evenly',
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="air" style={{fontSize: 18}} />

                <Text style={{fontSize: 15}}>
                  {'  '}
                  {weather.wind.speed}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon2 name="droplet" style={{fontSize: 18}} />
                <Text style={{fontSize: 15}}>
                  {'  '}
                  {weather.main.humidity}
                </Text>
              </View>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  season: {width: 200, height: 200},
  inputContainer: {
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

export default App;
