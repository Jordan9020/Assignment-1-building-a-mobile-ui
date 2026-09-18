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
              <View>
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
    fontSize: 12
  },
  
  textBolder: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center'
  },
});
