import { useState } from "react";
import {Button, StyleSheet, Text, View, Alert, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {

   const [isPresented, setIsPresented] = useState(false);
   function handlePress() {
    alert("Alert Button pressed!")
   }
  return (
    <View style={styles.container}>
      <View style={styles.topleftRow}>
        <Image 
          source= {{uri: 'https://media.istockphoto.com/id/626205158/photo/portrait-of-young-man-with-shocked-facial-expression.jpg'}}
          style={styles.roundimageSmall}
          />
      <View >

        <Text style={styles.screenTitle}>ootd_everyday</Text>
        <Text style = {styles.screenSubtitle}>via frenchie_fry39</Text>
      </View>
      </View>
    <View style={styles.imagecontainerTest}>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1497443047/photo/young-woman-lounging-on-the-sofa-and-scrolling-online-via-smart-phone.jpg'}}
        style={styles.imageTest}
        />
      </View>

    <View style={styles.imitationButtons}>
      <View style={styles.leftButtons}>
      <TouchableOpacity style={styles.fakeButton}>
        <Ionicons name="heart-outline" size={26} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fakeButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fakeButton}>
          <Ionicons name="paper-plane-outline" size={24} color="#000" />
          </TouchableOpacity>
          </View>
      <TouchableOpacity>
        <Ionicons name="bookmark-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>

  
    
    <View style={styles.textpartTwo}>
      <View style={styles.threeImages}>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/856174332/photo/surprised-happy-beautiful-woman-looking-in-excitement.jpg'}}
          style={styles.roundImageButSmaller}
          />
          <Image
          source={{ uri: 'https://media.istockphoto.com/id/1138637828/photo/surprised-amazing-woman-isolated-on-white-background.jpg'}}
          style={[styles.roundImageButSmaller, styles.overlap]}
          />
          <Image
          source={{ uri: 'https://media.istockphoto.com/id/629771548/photo/surprised-happy-beautiful-woman-looking-sideways-in-excitement-isolated.jpg'}}
          style={[styles.roundImageButSmaller, styles.overlap]}
          />
          </View>

      <Text>Liked by paisley.print.48 and 7 others</Text>
      <Text> frenchie_fry39 Fresh shot on a sunny day! </Text>
      <Text> View all 12 comments </Text>
      <Text>lil_wyatt838 Awesome tones </Text>
      <Text> pia.in.a.pod Gorg. Love it! </Text>
      <Text> 1 day ago </Text>


    </View>




      <View style = {styles.buttonPush}> 
        <Button title="Alert" onPress={handlePress} />
        </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  roundimageSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
    left: 15,
  },

  roundImageButSmaller: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#fff',

  },

  threeImages: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8,

  },

  overlap: {
    marginLeft: -6,
  },

  topleftRow: {

    flexDirection: 'row',
    alignItems: 'center'
  },

  imitationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  leftButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fakeButton: {
    marginRight: 16,
  },

  imagecontainerTest: {
    flex: 3,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    overflow: 'hidden',
  },

  imageTest: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  textpartTwo: {
    flex: 2,
    flexDirection: 'flex-start'
  },

  buttonPush: {
    position: 'absolute',
    bottom: 60,
    left: 16, 
    right: 16,
  },

  screenTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222222",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    flexDirection: 'column',
  },
  screenSubtitle: {
    fontSize: 12,
    color: "#27272c"
  }
});

