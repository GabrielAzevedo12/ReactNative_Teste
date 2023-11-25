import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRef, useLayoutEffect, useState, React } from "react";
import { LottieView } from "lottie-react-native";
import { Animated } from "react-native-web";
//import Animation from "../../assets/animation.json";

var display_header = "none",
  scrollOld,
  scrollNew;

export default function Main() {
  const [dataHeaderHeight, setHeaderHeight] = useState(10),
    [dataFooterHeight, setFooterHeight] = useState(10),
    [dataHeader, setDataHeader] = useState({ display: "" }),
    [dataFooter, setDataFooter] = useState({ display: "" });

  const IncrementoHeight = (valorIncrementado, valorIncremento) => {
      if (valorIncrementado === 10) {
        return valorIncrementado;
      } else {
        return valorIncrementado + valorIncremento;
      }
    },
    DecrementoHeight = (valorDecrementado, valorDecrementando) => {
      if (valorDecrementado === 0) {
        return valorDecrementado;
      } else {
        return valorDecrementado - valorDecrementando;
      }
    },
    ScrollMain_onScroll = (e) => {
      if (scrollOld >= e.scrollHeight - e.scrollTop) {
        //setHeaderHeight(DecrementoHeight(dataHeaderHeight, 2));
        //setFooterHeight(IncrementoHeight(dataFooterHeight, 2));
        //setDataHeader({ height: dataHeaderHeight + "%" });
        //setDataFooter({ height: dataFooterHeight + "%" });
        //setDataFooter({width: ""});
        setDataHeader({ display: "none" });
        setDataFooter({ display: "" });
      } else {
        //setFooterHeight(DecrementoHeight(dataFooterHeight, 2));
        //setHeaderHeight(IncrementoHeight(dataHeaderHeight, 2));
        //setDataHeader({ height: dataHeaderHeight + "%" });
        //setDataFooter({ height: dataFooterHeight + "%" });
        //setDataHeader({width: ""});
        //setDataFooter({width: "none"});
        setDataHeader({ display: "" });
        setDataFooter({ display: "none" });
      }
      scrollOld = e.scrollHeight - e.scrollTop;
    },
    scrollYAnimated = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Header styles={styles.header} transferDataHeader={dataHeader} />
      <ScrollView
        id="ScrollMain"
        onPress={(e) => {
          console.log(e.target);
        }}
        onScroll={(e) => {
          ScrollMain_onScroll(document.querySelector("#ScrollMain"));
        }}
        onScrollEndDrag={(e) => {
          ScrollMain_onScroll(document.querySelector("#ScrollMain"));
        }}
        onScrollBeginDrag={(e) => {
          ScrollMain_onScroll(document.querySelector("#ScrollMain"));
        }}
      >
        <TouchableHighlight>
          <View style={styles.main} id="ViewMain">
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Animated.FlatList
              data={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollYAnimated } } }],
                { useNativeDriver: true },
              )}
            />
          </View>
        </TouchableHighlight>
      </ScrollView>
      <Footer styles={styles.footer} transferDataFooter={dataFooter} />
    </View>
  );
}
/*
 if (document.getElementById("Header")) {
            alert("Existe")
            //console.log(document.querySelector("#Header"))
          } else {
            alert("Não Existe");
          }

  <LottieView
              ref={animationRef}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
              autoPlay={language !== ""}
            />         
          
 */
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    padding: 24,
    flexDirection: "Column",
    backgroundColor: "powderblue",
    height: "100%",
    //flex: 1,
    width: "100%",
  },
  text_main: {
    margin: 24,
    marginTop: 0,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    height: 500,
    backgroundColor: "red",
  },
  container: {
    //flex: 2,
    height: 480,
    //justifyContent: 'center',
    backgroundColor: "#ecf0f1",
    flexDirection: "column-reverse",
  },
  header: {
    display: display_header,
  },
  footer: {
    display: "none",
  },
});
