import React from 'react';
import { StyleSheet, Image } from 'react-native';
const Card = ({ cardDetails }) => {
  return <Image source={cardDetails.img} style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 220,
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
    marginRight: 40,
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
