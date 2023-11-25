import { Text, View, StyleSheet, Image } from "react-native";
import { useRef, useLayoutEffect } from "react";

export default function Header({ transferDataHeader }) {
  //const containerRef = useRef();

  return (
    <View style={[styles.header, transferDataHeader]} name="Header">
      <Text style={styles.text_header}>This is Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    //alignItems: 'center',
    //justifyContent: 'center',
    //padding: 24,
    flexDirection: "Row",
    backgroundColor: "gray",
    //height: "10%",
    width: "100%",
    zIndex: 3,
  },
  text_header: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
