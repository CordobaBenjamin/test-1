import  React,{useState, useRef, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import { styles } from './Styles';

import { String } from '../../Helper/string';
import Button from '../../Componets/ButtonComponets/Button';

const SwiperScreen = ({ navigation}) => {
const [activeIndex, setActiveIndex] = useState(0);
const swiperRef = useRef(null);
const onPressNext = () => {
  if (swiperRef.current) {
    const currentIndex = swiperRef.current.state.index;
    const totalSlides = swiperRef.current.state.total;

    if (currentIndex === totalSlides - 1) {
      swiperRef.current.scrollBy(-currentIndex, true);
    } else {
      swiperRef.current.scrollBy(1);
    }
  }
};



 return (
<View style={styles.container}>
  <View style={{alignSelf:'flex-end',padding:20}}>
 
      <TouchableOpacity onPress={()=>{
    navigation.navigate("LoginScreen")
   }}> 
      
<Text style={[styles.textskip, {color:'white', fontSize:19}]}>Skip</Text>
      </TouchableOpacity>

  </View>
  <Swiper
  style={styles.wrapper}
  loop={false}
  onIndexChanged={(index) => setActiveIndex(index)}
  paginationStyle={{ height: '25%' }}
  ref={(ref) => {
    swiperRef.current = ref;
  }}
  activeDotStyle={{
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'pink',
    width: 40,
    height: 13,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    // marginTop:50
  }}
>
  {/* Slide 1 */}
  <View style={styles.slide1}>
    <Image
      source={require('../../../assets/images/firstimg.png')}
      style={styles.img}
    />
    <View style={styles.Viewstyle}>
      <Text style={styles.textstyle}>{String.thebestapp}</Text>
      <Text style={styles.textstyle2}>{String.Semper}</Text>
      <Button onPress={onPressNext} 
      title={String.Next}
      NEXTButton={styles.NEXTButton} />
    </View>
  </View>

  {/* Slide 2 */}
  <View style={styles.slide2}>
    <Image
      source={require('../../../assets/images/seconimg.png')}
      style={styles.img}
    />
    <View style={styles.Viewstyle}>
      <Text style={styles.textstyle}>{String.betterfuture}</Text>
      <Text style={styles.textstyle2}>{String.Semper}</Text>
      <Button onPress={onPressNext}
       NEXTButton={styles.NEXTButton}
      title={String.Next} />
    </View>
  </View>

  {/* Slide 3 */}
  <View style={styles.slide3}>
    <Image
      source={require('../../../assets/images/thriedimg.png')}
      style={styles.img}
    />
    <View style={[styles.Viewstyle, { height: '47%' }]}>
      <Text style={[styles.textstyle,{marginTop:5}]}>{String.application}</Text>
      <Text style={[styles.textstyle2,{marginTop:5}]}>{String.Semper}</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        title={String.get}
        getButton={styles.getButton}
      />
    </View>
  </View>
</Swiper>
    <View>
    </View>
    
      </View>
 
  );
};



  export default SwiperScreen;



