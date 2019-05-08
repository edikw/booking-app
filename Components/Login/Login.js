import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TouchableOpacity, Modal, TouchableHighlight} from 'react-native';
// import { Input, Icon } from 'react-native-elements';

export default class Login extends React.Component {
	state = {
		modalVisible: true
	}
	  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  close = () => {
  	this.props.navigation.navigate('Home')
  	console.log('tes')
  }
	render() {
		return (
			 <View style={{marginTop: 22}}>
		        <Modal
		          animationType="slide"
		          transparent={false}
		          visible={this.state.modalVisible}
		          onRequestClose={this.close}>
		          <View style={{marginTop: 22}}>
		            <View>
		                <Button title="Close" onPress={() => {
		                  this.setModalVisible(!this.state.modalVisible);
		                }} />
		            </View>
		          </View>
		        </Modal>
		      </View>

		)
	}
}