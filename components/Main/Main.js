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
import { useRef, useLayoutEffect, useState } from "react";

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
    };

  return (
    <View style={styles.container}>
      <Header styles={styles.header} transferDataHeader={dataHeader} />
      <ScrollView
        id="ScrollMain"
        onPress={(e) => {
          console.log(e.target);
        }}
        onScroll={(e) => {
          //console.log(e.target.ScrollY);
          //console.log(document.querySelector("#ScrollMain"));
          if (
            scrollOld >=
            document.querySelector("#ScrollMain").scrollHeight -
              document.querySelector("#ScrollMain").scrollTop
          ) {
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
          scrollOld =
            document.querySelector("#ScrollMain").scrollHeight -
            document.querySelector("#ScrollMain").scrollTop;
          //alert(display_header)
        }}
        onScrollEndDrag={(e) => {
          //console.log(e.target.ScrollY);
          //console.log(document.querySelector("#ScrollMain"));
          if (
            scrollOld >=
            document.querySelector("#ScrollMain").scrollHeight -
              document.querySelector("#ScrollMain").scrollTop
          ) {
            //DecrementoHeight(HeightHeader, valorIncremento)
            //IncrementeHeight(HeightHeader)
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
          scrollOld =
            document.querySelector("#ScrollMain").scrollHeight -
            document.querySelector("#ScrollMain").scrollTop;
          //alert(display_header)
        }}
        onScrollBeginDrag={(e) => {
          //console.log(e.target.ScrollY);
          //console.log(document.querySelector("#ScrollMain"));
          if (
            scrollOld >=
            document.querySelector("#ScrollMain").scrollHeight -
              document.querySelector("#ScrollMain").scrollTop
          ) {
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
          scrollOld =
            document.querySelector("#ScrollMain").scrollHeight -
            document.querySelector("#ScrollMain").scrollTop;
          //alert(display_header)
        }}
      >
        <TouchableHighlight>
          <View style={styles.main} id="ViewMain">
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
            <Text style={styles.text_main}>This is main</Text>
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
