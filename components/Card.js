import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const Card = ({ cardDetails }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.card}
    >
      <View style={styles.chip} />
      <Text style={[styles.cardNumber, { fontFamily: 'Roboto_400Regular' }]}>
        {cardDetails.number}
      </Text>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={[styles.label, { fontFamily: 'Roboto_400Regular' }]}>
            Card Holder
          </Text>
          <Text style={[styles.value, { fontFamily: 'Roboto_400Regular' }]}>
            {cardDetails.holder}
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={[styles.label, { fontFamily: 'Roboto_400Regular' }]}>
            Expiry
          </Text>
          <Text style={[styles.value, { fontFamily: 'Roboto_400Regular' }]}>
            {cardDetails.expiry}
          </Text>
        </View>
      </View>
      <Text style={[styles.brand, { fontFamily: 'Inter_900Black' }]}>VISA</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 200,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  chip: {
    width: 40,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#d4af37',
    marginBottom: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'column',
  },
  label: {
    color: '#aaa',
    fontSize: 12,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  brand: {
    color: '#fff',
    fontSize: 24,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
});

export default Card;
