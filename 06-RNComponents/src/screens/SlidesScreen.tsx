import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const isVisible = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 3,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={{...styles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.subtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  const setPagination = (index: number) => {
    setActiveIndex(index);
    if (index === 2) {
      fadeIn();
      isVisible.current = true;
    }
  };

  return (
    <View style={{flex: 1, paddingTop: 50, backgroundColor: colors.background}}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index: number) => setPagination(index)}
        style={{backgroundColor: colors.background}}
      />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              width: 140,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => {
              isVisible.current ? navigation.navigate('HomeScreen') : null;
            }}>
            <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 16,
  },
});
