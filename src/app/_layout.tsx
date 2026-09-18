import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => (
              <View style={styles.titleContainer}>
              <Text style= {styles.textNotSoBold}>OOTD_EVERYDAY</Text>
              <Text style= {styles.textBolder}>Posts</Text>
                </View>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  textNotSoBold: {
    fontSize: 12,
    color:  '#494949'
  },
  
  textBolder: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center'
  },
});
