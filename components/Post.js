import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {postSong} from '../actions'
import {connect} from 'react-redux'

class Post extends Component {
  state = {
    groupName: "",
    albums: "",
    popularSongs: "",
    lastRelizes: ""
  }

  submit = () => {
    this.props.postSong(
      this.state.groupName, 
      this.state.albums,
      this.state.popularSongs,
      this.state.lastRelizes)
    this.setState({
      groupName: '',
      albums: '',
      popularSongs: '',
      lastRelizes: ''
    })
    this.props.navigation.navigate('Songs')
  }

  render() {   
    return (
      <View style={styles.container}>  
        <Text style={styles.textHeader}>Post Group Info</Text>  
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Group Name" 
          onChangeText={groupName => this.setState({groupName})} 
          value={this.state.groupName}/>
          <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Albums" 
          onChangeText={albums => this.setState({albums})} 
          value={this.state.albums}/>
          <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Popular Songs" 
          onChangeText={popularSongs => this.setState({popularSongs})} 
          value={this.state.popularSongs}/>
          <TextInput 
          style = {styles.textInputStyle} 
          placeholder="Last Relizes" 
          onChangeText={lastRelizes => this.setState({lastRelizes})} 
          value={this.state.lastRelizes}/>
        <Button 
          title = "Submit"
          color = '#1db954'
          onPress = {this.submit}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  }, 
  textInputStyle: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  textHeader: {
    fontSize: 46,
  }
});

export default connect(null, {postSong})(Post);