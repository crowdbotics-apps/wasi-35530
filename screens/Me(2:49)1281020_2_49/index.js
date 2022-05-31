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
      <View style={styles.View_2_80} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce6b2c29-f026-4194-8b86-1f028bdb3d60"
        }}
        style={styles.TouchableOpacity_2_81}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_47"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0db83693-58e7-4e55-84e8-14bdd4104df1"
        }}
        style={styles.ImageBackground_2_82}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94c14af1-c8c5-44c7-8546-2bb105ebecb7"
        }}
        style={styles.TouchableOpacity_2_92}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_24"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40f1c4b9-e269-4fb8-ba5f-23fa4e945941"
        }}
        style={styles.TouchableOpacity_11_10}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_48"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_11_42}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_48"))
        }
      >
        <Text style={styles.Text_11_42}>My Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_11_41}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("25_40"))
        }
      >
        <Text style={styles.Text_11_41}>Track My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_11_43}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <Text style={styles.Text_11_43}>sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_11_44}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("25_40"))
        }
      >
        <Text style={styles.Text_11_44}>my orders</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_80: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_2_81: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_2_82: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_2_92: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_11_10: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  TouchableOpacity_11_42: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_11_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_11_41: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_11_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_11_43: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_11_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_11_44: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_11_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
