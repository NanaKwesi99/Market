import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const ShopPage = () => {

    const {navigate} = useNavigation();

    const list = [
        {
            name: "Chocolate",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵20.00",
            image: require("../../assets/Chocolate.jpg"),
          },
          {
            name: "Flakes",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵35.00",
            image: require("../../assets/Flakes.jpg"),
          },
          {
            name: "Milk",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵20.00",
            image: require("../../assets/Milk.jpg"),
          },
          {
            name: "Oat",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵40.00",
            image: require("../../assets/Oat.jpg"),
          },
          {
            name: "Soap",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵20.00",
            image: require("../../assets/Soap.jpg"),
          },
          {
            name: "Washing-powder",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵20.00",
            image: require("../../assets/Washing-powder.jpg"),
          },
          {
            name: "Oil",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵45.00",
            image: require("../../assets/Oil.jpg"),
          },
        {
          name: "Bell Pepper",
          rate: "⭐⭐⭐⭐★",
          price: "GH₵5.00",
          image: require("../../assets/Bell-pepper.jpg"),
        },
        {
          name: "Cabbage",
          rate: "⭐⭐⭐★★",
          price: "GH₵10.00",
          image: require("../../assets/Cabbage.jpg"),
        },
        {
          name: "Carrot",
          rate: "⭐⭐⭐⭐⭐",
          price: "GH₵10.00",
          image: require("../../assets/Carrot.jpg"),
        },
        {
            name: "Tomatoes",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵5.00",
            image: require("../../assets/Tomatoes.jpg"),
          },
          {
            name: "Onion",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵5.00",
            image: require("../../assets/Onion.jpg"),
          },
          {
            name: "Pepper",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵2.00",
            image: require("../../assets/Pepper.jpg"),
          },
          {
            name: "Garden Eggs",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵5.00",
            image: require("../../assets/Garden-eggs.jpg"),
          },
          {
            name: "Eggs",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵30.00",
            image: require("../../assets/Eggs.jpg"),
          },
          {
            name: "Chicken",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵50.00",
            image: require("../../assets/Chicken.jpg"),
          },
          {
            name: "Meat",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵35.00",
            image: require("../../assets/Meat.jpg"),
          },
          {
            name: "Smoked-tilapia",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵90.00",
            image: require("../../assets/Smoked-tilapia.jpg"),
          },
          {
            name: "Plantain",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵60.00",
            image: require("../../assets/Plantain.jpg"),
          },
          {
            name: "Ripe-plantain",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵90.00",
            image: require("../../assets/Ripe-plantain.jpg"),
          },
          {
            name: "Corn",
            rate: "⭐⭐⭐⭐★",
            price: "GH₵20.00",
            image: require("../../assets/corn.jpg"),
          },
      ];

  return (
    <View style={styles.container}>
      <View style={styles.HeaderIconsView}>
        <View style={styles.IconsView}>
        <Ionicons name="reorder-three-outline" size={30} color="black" />
        </View>
        <View style={styles.IconsView}>
        <Ionicons name="md-cart-outline" size={30} color="blue" />
        </View>
      </View>

      <View style={styles.TitleSearchBarView}>
        <Text style={styles.headerText}>Grocery Shop</Text>
        <TextInput
          type="text"
          placeholder="search your grocery..."
          style={styles.searchInput}
        />
        <Text style={styles.filterText}>Filter</Text>
      </View>
      <View style={styles.JacketsView}>
        <FlatList
          keyExtractor={(item, index) => {
            return index;
          }}
          data={list}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.FlatListView}
                onPress={() => navigate('Details', {item: item})}
              >
                <View style={styles.JacketImagesView}>
                  <Image style={styles.JacketImages} 
                  source={item.image} />
                </View>

                <View style={styles.JacketInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <View style={styles.reviews}>
                  <Text>{item.rate}</Text>
                  </View>

                  <Text style={styles.productPrice}> {item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ShopPage;

const styles = StyleSheet.create({
  container: {
    flex: 100,
    paddingHorizontal: 16,
    backgroundColor: "#f4f4fc",
  },
  HeaderIconsView: {
    flex: 7,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  TitleSearchBarView: {
    flex: 15,

    position: "relative",
  },

  JacketsView: {
    flex: 82,
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

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    paddingRight: 0,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
  },

  filterText: {
    position: "absolute",
    left: 310,
    top: 60,
    fontSize: 10,
    color: "#757DEF",
    fontWeight: "bold",
  },

  JacketImagesView: {
    flex: 2.5,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 20,
  },

  JacketImages: {
    width: 100,
    height: 120,
  },

  FlatListView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },

  JacketInfo: {
    flexDirection: "column",
    flex: 5,
    marginLeft: 30,
  },

  reviews: {
    alignSelf: "flex-start",
  },
  productName: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 12,
  },

  productPrice: {
    fontWeight: "bold",
    color: "#757DEF",
    marginTop: 10,
  },
});
