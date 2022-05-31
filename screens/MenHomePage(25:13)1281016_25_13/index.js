import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_25_14}>
        <View style={styles.View_25_15} />
      </View>
      <View style={styles.View_25_17} />
      <View style={styles.View_25_18} />
      <View style={styles.View_25_19}>
        <Text style={styles.Text_25_19}>MEN</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_25_20}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_24"))
        }
      >
        <Text style={styles.Text_25_20}>WOMEN</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e9fafc1-a943-4543-ae36-fd8aa8e2f9cd"
        }}
        style={styles.ImageBackground_25_21}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5da6509b-0d0a-406e-baaa-2274bd8d1d44"
        }}
        style={styles.TouchableOpacity_25_22}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_49"))
        }
      />
      <View style={styles.View_25_23} />
      <View style={styles.View_25_61}>
        <View style={styles.View_25_24} />
        <View style={styles.View_25_59} />
        <View style={styles.View_25_60} />
      </View>
      <View style={styles.View_25_26} />
      <View style={styles.View_25_62} />
      <View style={styles.View_25_58} />
      <View style={styles.View_25_55} />
      <View style={styles.View_25_28} />
      <View style={styles.View_25_29}>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b53b500-1775-4255-8fa1-456de7f8fedf"
          }}
          style={styles.TouchableOpacity_25_30}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_47"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ed4ab92-2c23-43bc-a2c5-478a38da76a2"
          }}
          style={styles.TouchableOpacity_25_31}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_49"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/385f16b0-5f89-40ae-ad7b-01decc30c806"
          }}
          style={styles.ImageBackground_25_34}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2178782-606d-46fd-b9e8-85952a7d98ab"
          }}
          style={styles.TouchableOpacity_25_35}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_48"))
          }
        />
      </View>
      <View style={styles.View_25_63}>
        <View style={styles.View_25_64} />
        <View style={styles.View_25_65} />
        <View style={styles.View_25_66} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("270%") },
  View_25_14: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("12%")
  },
  View_25_15: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_25_17: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_25_18: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_25_19: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_25_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_25_20: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_25_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_25_21: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  TouchableOpacity_25_22: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_25_23: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%")
  },
  View_25_61: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("84%")
  },
  View_25_24: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_59: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_25_60: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  View_25_26: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("158%")
  },
  View_25_62: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("107%")
  },
  View_25_58: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("211%")
  },
  View_25_55: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("31%")
  },
  View_25_28: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112%")
  },
  View_25_29: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("116%")
  },
  TouchableOpacity_25_30: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  TouchableOpacity_25_31: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_25_34: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_25_35: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_25_63: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-98%"),
    top: hp("84%")
  },
  View_25_64: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_65: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_25_66: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
