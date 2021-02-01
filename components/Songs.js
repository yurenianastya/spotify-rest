import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, Image, ScrollView, Button } from 'react-native';
import {getSongs, deleteSong} from '../actions'
import {connect} from 'react-redux'
import _ from 'lodash';

const MIN_HEIGHT = 80;
const MAX_HEIGHT = 150;

class Songs extends Component {

componentDidMount () {
  this.props.getSongs()
}

toPostPage = () => {

}

  render() {
    return (
      <ScrollView>
        <Image
              style={styles.logo}
              source={require('../assets/spotifylogo.png')}
            />
        <Button
          color="#212121"
          title="Post Group"
          style={styles.buttonDesign}
          onPress={() => this.props.navigation.navigate('Post')}/>
        <FlatList
          style = {styles.flatListStyle}
          data = {this.props.listOfSongs}
          keyExtractor = {(item) => item.key}
          renderItem = {({item}) => {
            return(
              <View style = {styles.gamesViewStyle}>
                 <View style = {styles.iconsViewStyle}>
                  <TouchableHighlight onPress = {() => this.props.navigation.navigate('Edit', {...item})}>
                    <View style = {styles.iconStyle}>
                      <Text>Edit</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.props.deleteSong(item.key)}>
                    <View >
                      <Text>Delete</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <Text style = {styles.mainTitleStyle}>{item.groupName}</Text>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Albums: </Text>
                  <Text style = {styles.contentStyle}>{item.albums}</Text>
                </View>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Popular Songs: </Text>
                  <Text style = {styles.contentStyle}>{item.popularSongs}</Text>
                </View>
                <View style = {styles.viewBoxStyle}>
                  <Text style = {styles.titleStyle}>Last Relizes: </Text>
                  <Text style = {styles.contentStyle}>{item.lastRelizes}</Text>
                </View>
              </View>
            )
          }}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#696969',
  },
  flatListStyle: {
    width: '100%',
    height: 1500,
    backgroundColor: 'white'
  },
  gamesViewStyle:{
    padding:10,
    elevation:8,
    borderRadius: 15,
    backgroundColor: "#1db954",
    marginBottom: 5

  },
  titleStyle:{
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#212121'
  },
  contentStyle: {
    fontSize: 16,
    color: '#212121',
  },
  iconsViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5
  },
  iconStyle: {
    marginHorizontal: 20,
  },
  mainTitleStyle:{
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#212121'
  },
  viewBoxStyle: {
    flexDirection: 'row'
  },
  headerText:{
    backgroundColor: "transparent",
    color: 'white',
    fontSize: 40,
    backgroundColor: 'black',
    padding: 10
  },
  textImage: {
    color: 'black',
    paddingTop: 70,
    fontSize: 20,
  },
  logo: {
    width: 400,
    height: 150,
    alignSelf: 'center'
  },
  buttonDesign:{
    padding: 35
  }
});

function mapStateToProps (state) {
const listOfSongs = _.map(state.songsList.songsList, (val, key)=> {
  return {
    ...val,
    key:key
  }
})

  return {
    listOfSongs
  }
}

export default connect(mapStateToProps, {getSongs, deleteSong})(Songs);
