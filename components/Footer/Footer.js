import { Text, View, StyleSheet, Image } from "react-native";

export default function Footer({ transferDataFooter }) {
  return (
    <View style={[styles.footer, transferDataFooter]}>
      <Text style={styles.text_footer}>This is footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    /*
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    */
    flexDirection: "Row",
    backgroundColor: "black",
    //height: "10%",
    width: "100%",
  },
  text_footer: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
