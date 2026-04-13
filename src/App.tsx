import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import SignupScreen from './auth/screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { STATIC_VALUES } from './constants/strings';
import CustomTab from './customComponents/customTab';
import { Home } from './screens/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

const Tab: any = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const navigationOptions = { headerShown: false, gestureEnabled: false };

const { SCREEN } = STATIC_VALUES.COMMON;

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN.HOME_VIDEO}>
      <Stack.Screen
        name={SCREEN.HOME_VIDEO}
        component={Home}
        options={navigationOptions}
      />
      {/* <Tab.Screen
        name={SCREEN.MARKET}
        component={<Text>Market</Text>}
        options={navigationOptions}
      />
      <Tab.Screen
        name={SCREEN.UPLOAD}
        component={<Text>Upload</Text>}
        options={navigationOptions}
      />
      <Tab.Screen
        name={SCREEN.NOTIFICATION}
        component={<Text>Notifications</Text>}
        options={navigationOptions}
      />
      <Tab.Screen
        name={SCREEN.MESSAGE_MEDIATOR}
        component={<Text>Message Mediator</Text>}
        options={navigationOptions}
      />
      <Tab.Screen
        name={SCREEN.PROFILE}
        component={<Text>Profile</Text>}
        options={navigationOptions}
      /> */}
    </Stack.Navigator>
  );
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarHideOnKeyboard: true }}
      tabBar={(props: any) => <CustomTab {...props} />}
    >
      <Tab.Screen
        name={SCREEN.HOME}
        component={HomeStack}
        options={navigationOptions}
      />
    </Tab.Navigator>
  );
}

function AppContent() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={MainTabs}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={SignupScreen}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
