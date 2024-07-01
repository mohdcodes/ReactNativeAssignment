// ----------------------------------------------------------- IMPORT SECTION------------------------------------------
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from './Card';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
// ------------------------------------------------------------END OF IMPORT SECTION----------------------------------------------------

// ---------------------------------------------------CUSTOM CARD DATA----------------------------------------------------------------
const initialCards = [
  {
    id: 1,
    number: '3234 8678 4234 7628',
    expiry: '08/24',
    holder: 'Maya Singh',
  },
  {
    id: 2,
    number: '1234 5678 9101 1122',
    expiry: '11/24',
    holder: 'Jane Smith',
  },
  {
    id: 3,
    number: '1234 5678 9101 1123',
    expiry: '10/25',
    holder: 'Robert Brown',
  },
  {
    id: 4,
    number: '1234 5678 9101 1124',
    expiry: '09/26',
    holder: 'Lucy Johnson',
  },
  {
    id: 5,
    number: '1234 5678 9101 1125',
    expiry: '08/27',
    holder: 'David Wilson',
  },
  {
    id: 6,
    number: '1234 5678 9101 1126',
    expiry: '07/28',
    holder: 'Laura White',
  },
  {
    id: 7,
    number: '1234 5678 9101 1127',
    expiry: '06/29',
    holder: 'Peter Davis',
  },
  {
    id: 8,
    number: '1234 5678 9101 1128',
    expiry: '05/30',
    holder: 'Emily Martinez',
  },
  {
    id: 9,
    number: '1234 5678 9101 1129',
    expiry: '04/31',
    holder: 'Daniel Garcia',
  },
  {
    id: 10,
    number: '1234 5678 9101 1130',
    expiry: '03/32',
    holder: 'Samantha Rodriguez',
  },
];
// --------------------------------------------------------------CUSTOM CARD DATA ENDS-------------------------------------

const HomePage = () => {
  const [cards, setCards] = useState(initialCards);

  const handleCardSlide = (index) => {
    const updatedCards = [...cards];
    const [removedCard] = updatedCards.splice(index, 1);
    updatedCards.push(removedCard);
    setCards(updatedCards);
  };

  return (
    <>
      {/* ---------------------------------------------UPPER PART OF THE PAGE------------------------------------------ */}
      <View style={{ backgroundColor: '#1c1c1c' }}>
        <StatusBar hidden />
        <View
          style={{
            backgroundColor: '#000000',
            position: 'relative',
            // marginTop: 20,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 40,
              margin: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../assets/profileIcon.png')}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#454545',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <AntDesign name="bulb1" size={15} color="#FFA500" />
                <Text style={{ marginLeft: 4, color: '#ffffff', fontSize: 14 }}>
                  Tips
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: '#ffffff' }}
            >
              All your credit cards
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                marginTop: 10,
                marginBottom: 30,
              }}
            >
              Find all your credit cards here
            </Text>
          </View>
        </View>
        {/* -----------------------------------------------------TABS PART OF THE PAGE--------------------------------------------------- */}
        <View style={styles.container}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="fingerprint"
              size={30}
              color="#939393"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="flight-takeoff" size={24} color="#939393" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name="droplet" size={24} color="#939393" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="health-and-safety" size={24} color="#939393" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="history-edu" size={24} color="#939393" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="card-membership" size={24} color="#939393" />
          </TouchableOpacity>
        </View>
        {/* -----------------------------------------------------------THE CARD SECTION----------------------------------- */}
        <View style={styles.container2}>
          {cards.slice(0, 3).map((card, index) => (
            <SlidingCard
              key={card.id}
              cardDetails={card}
              onSlide={() => handleCardSlide(index)}
              index={index}
            />
          ))}
        </View>
        {/* -------------------------------------------PLUS ICON----------------------------- */}
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#ffffff',
            borderRadius: 50,
            marginTop: 350,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 300,
          }}
        >
          <TouchableOpacity>
            <Entypo name="plus" size={24} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

// -----------------------------------------------------------------------ANIMATION CODING--------------------------------------------------------
const SlidingCard = ({ cardDetails, gradientColors, onSlide, index }) => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      opacity.value = withTiming(1 - Math.abs(event.translationX) / 300, {
        duration: 200,
      });
    })
    .onEnd((event) => {
      if (event.translationX > 150) {
        translateX.value = withTiming(300, { duration: 200 }, () => {
          runOnJS(onSlide)();
          translateX.value = withSpring(0, { damping: 20, stiffness: 100 });
          opacity.value = withTiming(1, { duration: 200 });
        });
      } else {
        translateX.value = withSpring(0, { damping: 20, stiffness: 100 });
        opacity.value = withTiming(1, { duration: 200 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
      zIndex: index - 3,
      position: 'absolute',
      top: index * 40, // Adjust this value to create spacing between stacked cards
    };
  });
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.cardContainer, animatedStyle]}>
        <Card cardDetails={cardDetails} />
      </Animated.View>
    </GestureDetector>
  );
};
// --------------------------------------------------STYLING SECTION----------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  container2: {
    marginTop: 50,
    backgroundColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default HomePage;
