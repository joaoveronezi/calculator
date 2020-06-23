import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={() => setDisplayValue(0)} />
        <Button label="/" operation />
        <Button label="7" onClick={() => setDisplayValue(7)} />
        <Button label="8" onClick={() => setDisplayValue(8)} />
        <Button label="9" onClick={() => setDisplayValue(9)} />
        <Button label="*" operation />
        <Button label="4" onClick={() => setDisplayValue(4)} />
        <Button label="5" onClick={() => setDisplayValue(5)} />
        <Button label="6" onClick={() => setDisplayValue(6)} />
        <Button label="-" operation />
        <Button label="1" onClick={() => setDisplayValue(1)} />
        <Button label="2" onClick={() => setDisplayValue(2)} />
        <Button label="3" onClick={() => setDisplayValue(3)} />
        <Button label="+" operation />
        <Button label="0" double onClick={() => setDisplayValue(0)} />
        <Button label="." onClick={() => setDisplayValue('.')} />
        <Button label="=" operation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
