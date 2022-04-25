import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Details = (props) => {

    const navigation =useNavigation();

    const { item } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderIconsView}>
        <TouchableOpacity
         style={styles.IconsView}>
        <Ionicons name="reorder-three-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.IconsView}>
        <Ionicons name="md-cart-outline" size={30} color="blue" />
        </View>
      </View>

      <View style={styles.ImageView}>
        <Image source={item.image} style={styles.Image} />
      </View>

      <View style={styles.DetailsView}>
        <Text style={styles.ProductNameText}>{item.name}</Text>

        <View style={styles.StarsView}>
          <Text>Review:</Text>
          <Text>{item.rate}</Text>
        </View>

        <View style={styles.horizontalLinesView}></View>

        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aliquid sequi? At sunt, impedit dolore voluptatum vitae
          </Text>
        </View>
        <View style={styles.PriceCartView}>
        <View>
          <Text style={styles.totalAmt}>Total Amount</Text>
          <Text style={styles.totalPrice}>${item.price}</Text>
        </View>

        <TouchableOpacity style={styles.AddToCartTouchable}>
          <Text style={styles.AddToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 100,
    backgroundColor: "#fff",
  },

  HeaderIconsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 5,
  },

  ImageView: {
    flex: 30,
    borderTopColor: "#F4F4FB",
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "white",

    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 200,
    borderTopLeftRadius: 20,
  },

  DetailsView: {
    flex: 50,
  },

  PriceCartView: {
    flex: .3,
    backgroundColor: "#757DEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },

  IconsView: {
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },

  backIcon: {
    fontSize: 20,
    backgroundColor: "white",
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100 / 5,
    overflow: "hidden",
  },

  cartIcon: {
    color: "#757DEF",
    fontSize: 20,
    backgroundColor: "white",
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100 / 5,
    overflow: "hidden",
  },

  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  LoveIconView: {
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },

  LoveIcon: {
    color: "#757DEF",
    fontSize: 20,
    backgroundColor: "white",
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100 / 5,

    overflow: "hidden",
    position: "absolute",
    top: -200,
    left: 285,
  },

  ProductNameText: {
    // flex: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  StarsView: {
    flexDirection: "row",
    marginVertical: 10,
  },

  horizontalLinesView: {
    width: 40,
    height: 4,
    backgroundColor: "#757DEF",
    marginVertical: 10,
  },

  sizes: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },

  sizesCurrent: {
    backgroundColor: "#757DEF",
    color: "white",
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },

  marterialDescriptionView: {},

  marterialDescriptionText: {
    marginVertical: 20,
    color: "#AFB4F5",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    overflow: "hidden",
  },

  totalAmt: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },

  totalPrice: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  AddToCartTouchable: {
    backgroundColor: "#4F4FEC",
    padding: 10,
    borderRadius: 10,
  },

  AddToCartText: {
    color: "white",
    fontWeight: "bold",
  },
});
