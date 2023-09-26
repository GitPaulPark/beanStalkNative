import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeDrawer from './components/drawer/HomeDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingDrawer from './components/drawer/SettingDrawer';
import HomeTodo from './components/todoList/HomeTodo';
import HomeTts from './components/tts/HomeTts';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function JsApp() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator initialRouteName="Home">*/}
      {/*  <Stack.Screen*/}
      {/*    name={'Home'}*/}
      {/*    component={HomeScreen}*/}
      {/*    options={{*/}
      {/*      title: '홈',*/}
      {/*      headerStyle: {*/}
      {/*        backgroundColor: '#29b6f6',*/}
      {/*      },*/}
      {/*      headerTintColor: '#ffffff',*/}
      {/*      headerTitleStyle: {*/}
      {/*        fontWeight: 'bold',*/}
      {/*        fontSize: 20,*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name={'Detail'}*/}
      {/*    component={DetailScreen}*/}
      {/*    options={{*/}
      {/*      headerTitle: ({children}) => (*/}
      {/*        <View>*/}
      {/*          <Text>{children}</Text>*/}
      {/*        </View>*/}
      {/*      ),*/}
      {/*      //   title: `상세정보 - ${route.params.id}`,*/}
      {/*      // headerBackVisible: false, // 안드로이드 :  Left 화살표 기본없애기*/}
      {/*      // headerShown: false, // 헤더안보이게하기*/}
      {/*      headerLeft: ({onPress}) => (*/}
      {/*        <TouchableOpacity onPress={onPress}>*/}
      {/*          <Text>Left {onPress}</Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*      ),*/}

      {/*      headerRight: () => (*/}
      {/*        <TouchableOpacity>*/}
      {/*          <Text>Right</Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name={'Todo'}*/}
      {/*    component={HomeTodo}*/}
      {/*    options={{*/}
      {/*      title: 'ToDo 연습',*/}
      {/*      headerStyle: {*/}
      {/*        backgroundColor: '#26a69a',*/}
      {/*      },*/}
      {/*      headerTintColor: '#ffffff',*/}
      {/*      headerTitleStyle: {*/}
      {/*        fontWeight: 'bold',*/}
      {/*        fontSize: 20,*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Stack.Navigator>*/}
      <Drawer.Navigator
        initialRouteName={'Home'}
        drawerPosition={'Left'}
        backBehavior="history"
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}
        // drawerContent={({navigation}) => (
        //   <SafeAreaView>
        //     <Text>custom drawer</Text>
        //     <Button title={'닫기'} onPress={() => navigation.closeDrawer()} />
        //   </SafeAreaView>
        // )}
      >
        <Drawer.Screen
          name={'Home'}
          component={HomeDrawer}
          options={{title: '홈'}}
        />
        <Drawer.Screen
          name={'Setting'}
          component={SettingDrawer}
          options={{title: '설정'}}
        />
        <Drawer.Screen
          name={'Todo'}
          component={HomeTodo}
          options={{title: '투두'}}
        />
        <Drawer.Screen
          name={'Tts'}
          component={HomeTts}
          options={{title: 'TTS'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'white',
  },
  align: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avoid: {
    flex: 1,
  },
});
export default JsApp;
