// import React from "react";
// import AppNavigation from "./src/navigation";
// export default function App() {
//   return <AppNavigation />;
// }


import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/minhthc1997/sample/main/drinks.json');
      const json = await response.json();
      this.setState({ data: json.products });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <ScrollView>
        <View>
        
        <View style ={{width: 400, height: 80, backgroundColor: '#21E7C1', justifyContent: 'center', paddingLeft: 160}}>
          <Text style ={{color: '#FFF', fontSize: 25, fontWeight: "bold"}}>Home</Text>
          <Image style={{width: 30, height:30, color: '#FFF',marginLeft: 190}} source={require('./assets/menu_icon.png')}/>
        </View>
        <Text style ={{fontSize: 25, fontWeight: "bold"}}>Sản phẩm bán chạy</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style = {{flex: 1, width:100, height:100, flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                <View>
                  <Image source={{uri: item.Images}} style={{width: 100, height: 100}} />
                </View>
                <View>
                  <Text style = {{flex: 5}}>{item.title}</Text>
                </View>
                <View>
                <Text style={{color: '#21E7C1'}}>{item.cost}</Text>
                </View>
              </View>
            )}
          />
        )}
        <View style = {{width: 390, height: 60, backgroundColor : '#00EEBE', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Image style={{width: 30, height:30, color: '#FFF'}} source={require('./assets/Home.png')}/>
        <Image style={{width: 30, height:30, color: '#FFF'}} source={require('./assets/search.png')}/>
        <Image style={{width: 30, height:30, color: '#FFF'}} source={require('./assets/Basket.png')}/>
        <Image style={{width: 30, height:30, color: '#FFF'}} source={require('./assets/profile.png')}/>
        </View>
      </View>
      </ScrollView>
    );
  }
};
// const styles = StyleSheet.create({
//     product: {
//       flex: 1
//     }
//   });

// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, FlatList } from "react-native";


// const App = () =>{
//   const [data, setdata] = useState([]);
//   const [isLoading, setisLoading] = useState(true);
//   useEffect(()=>{
//     GetListProduct(); 
//     return() => {

//     }
//   }, [])
//   GetListProduct = () =>{
//     const APIURL = 'https://jsonplaceholder.typicode.com/photos';
//     fetch(APIURL)
//     .then((res) => res.json())
//     .then ((resJson) => {
//       setdata(resJson)
//     }).catch((error) => {
//       console.log('Error: ', error);
//     }).finally(() => setisLoading(false))
//   }
 
//   renderItem = ({item, index}) => {
//     return(
//       <View style = {styles.item}>
//         <Image
//           style = {styles.image}
//           source = {{uri: item.url}}
//           resizeMode = 'contain'
//         />
//         <View style = {styles.wrapText}>
//           <Text>{item.title}</Text>
//         </View>
//       </View>
//     )
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//         style = {styles.list}
//         data = {data}
//         renderItem = {renderItem}
//         keyExtractor = {item => `key-${item.id}`}
//       />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   list: {
//     flex: 1,
//     pading: 8
//   },
//   item: {
//     flexDirection: 'row',
//     marginTop: 8,
//     pading: 5,
//     shadowColor: '#000',
//     shadowRadius: 4,
//     shadowOpacity: 0.25
//   },
//   image: {
//     width: 100,
//     height: 100
//   },
//   wrapText: {
//     flex: 1,
//     marginTop: 16,
//     marginLeft: 8
//   }
// });

// export default App;

// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, FlatList } from "react-native";

// const App = () => {
//   const [data, setdata] = useState([]);
//   const [isLoading, setisLoading] = useState(true);
  // useEffect(()=>{
  //   GetListProduct(); 
  //   return() => {

  //   }
  // }, [])
  // GetListProduct = () =>{
  //   const APIURL = 'https://jsonplaceholder.typicode.com/photos';
  //   fetch(APIURL)
  //   .then((res) => res.json())
  //   .then ((resJson) => {
  //     setdata(resJson)
  //   }).catch((error) => {
  //     console.log('Error: ', error);
  //   }).finally(() => setisLoading(false))
  // }
 
  // renderItem = ({item, index}) => {
  //   return(
  //     <View style = {styles.item}>
  //       <Image
  //         style = {styles.image}
  //         source = {{uri: item.url}}
  //         resizeMode = 'contain'
  //       />
  //       <View style = {styles.wrapText}>
  //         <Text>{item.title}</Text>
  //       </View>
  //     </View>
  //   )
  // }
//   return(
//     <SafeAreaView>
//       <Text>container</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   list: {
//     flex: 1,
//     pading: 8
//   },
//   item: {
//     flexDirection: 'row',
//     marginTop: 8,
//     pading: 5,
//     shadowColor: '#000',
//     shadowRadius: 4,
//     shadowOpacity: 0.25
//   },
//   image: {
//     width: 100,
//     height: 100
//   },
//   wrapText: {
//     flex: 1,
//     marginTop: 16,
//     marginLeft: 8
//   }
// });
// export default App;
