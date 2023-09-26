import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead() {
  const [now, setNow] = useState(new Date());
  const formattedDate = `${now.getUTCFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일`;
  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceHolder, {height: top}]} />
      <StatusBar backgroundColor={'#26a69a'} barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
  statusBarPlaceHolder: {
    backgroundColor: '#26a69a',
  },
});
export default DateHead;
