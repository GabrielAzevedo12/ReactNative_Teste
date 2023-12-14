// You can import supported modules from npm
//import { Card } from "react-native-paper";
// or any files within the Snack
//import AssetExample from "./components/AssetExample";
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import Main from "./components/Main/Main";
import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
/*
import { ApplicationProvider, Layout, Text as TextKitten } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TextKitten category='h1'>HOME</TextKitten>
  </Layout>
);
*/
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}
/*
Rascunho: 

<SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>

 */

const styles = StyleSheet.create({
  container: {
    //flex: 2,
    height: 480,
    //justifyContent: 'center',
    backgroundColor: "#ecf0f1",
    flexDirection: "column-reverse",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
