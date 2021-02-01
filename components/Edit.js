import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {editSong} from '../actions'
import {connect} from 'react-redux'

class Edit extends Component {
  state = {
    groupName: this.props.navigation.state.params.groupName,
    albums:  this.props.navigation.state.params.albums,
    popularSongs:  this.props.navigation.state.params.popularSongs,
    lastRelizes:  this.props.navigation.state.params.lastRelizes
  }

  submit = () => {

    this.props.editSong(
      this.props.navigation.state.params.key,
      this.state.groupName,
      this.state.albums,
      this.state.popularSongs,
      this.state.lastRelizes
      )
    this.setState({
      groupName: "",
      albums: "",
      popularSongs: "",
      lastRelizes: ""
    })
    this.props.navigation.navigate('Songs')
  }

  render() {   
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Edit</Text>  
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="groupName" 
          onChangeText={groupName => this.setState({groupName})} 
          value={this.state.groupName}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="albums" 
          onChangeText={albums => this.setState({albums})} 
          value={this.state.albums}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="popularSongs" 
          onChangeText={popularSongs => this.setState({popularSongs})} 
          value={this.state.popularSongs}/>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder="lastRelizes" 
          onChangeText={lastRelizes => this.setState({lastRelizes})} 
          value={this.state.lastRelizes}/>        
        <Button 
          color = '#1db954'
          title = "Submit"
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

export default connect(null, {editSong})(Edit);