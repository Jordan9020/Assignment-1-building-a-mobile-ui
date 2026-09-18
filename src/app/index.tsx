import { useState } from "react";
import {Button, StyleSheet, Text, View, Alert, Image } from "react-native";


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

    <View style={styles.textpartTwo}>

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
    justifyContent: 'space-between'
    
  },

  roundimageSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
    left: 15,
  },

  topleftRow: {

    flexDirection: 'row',
    alignItems: 'center'
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

