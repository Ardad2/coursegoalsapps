import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
