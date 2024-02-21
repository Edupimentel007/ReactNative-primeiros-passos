import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
<View style={styles.secondaryContainer}>

<Text style= {{color: 'blue',  fontWeight: 'bold', fontSize: 30, textAlign: 'right'}}>Eduardo Gramignolli Pimentel</Text>
<Text style= {{color: 'blue',  fontStyle: 'italic', fontSize: 25, borderWidth: 1, borderColor: 'red' }}>Notebook 13</Text>
<Text style= {{color: 'blue',  fontSize: 20, textAlign: 'center', backgroundColor: 'pink'}}>7</Text>
<Text style= {{color: 'blue',  fontSize: 15, textAlign: 'center', borderWidth: 1, borderColor: 'blue', backgroundColor: 'yellow'}}>text</Text>

</View>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,


},
secondaryContainer: {
flex: 1,
width: '100%',
justifyContent: 'center',
backgroundColor: '#fff',
},
});
