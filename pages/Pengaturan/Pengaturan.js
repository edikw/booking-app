import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Alert, Modal, TouchableHighlight} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon, Avatar, ListItem } from 'react-native-elements';

const list = [
	
	{
		title: 'Syarat & Ketentuan',
	},
	{
		title: 'Kebijakan Privasi'
	},
]
export default class Pengaturan extends React.Component {
	state = {
		indonesia: true,
		inggris: false
	}


	changeLanguageIndonesia = () => {
		console.log('woooo')
		if(this.state.indonesia == false) {
			this.state.indonesia = true
			this.setState({language: this.state.indonesia})
			this.state.inggris = false
		}else
			this.state.indonesia = false
			// this.setState({language: false})
	}
	changeLanguageInggris = () => {
		console.log('wooooi')
		if(this.state.inggris == false) {
			this.state.inggris = true
			this.setState({inggris: this.state.inggris})
			this.state.indonesia = false
			// this.setState({language: true})
		}else
			this.state.inggris = false
		
	}
	render(){
		return (
			<View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
				<View style={{marginTop: 25}}>
					<View style={styles.view}>
						<Text style={{fontSize: 17}}>Bahasa</Text>
						<View style={{flexDirection: 'row'}}>
							<View style={{marginRight: 5}} >
								<Button 
									color={this.state.indonesia === true ? 'rgba(34, 167, 240, 1)' : 'gray'} 
									title="Indonesia" onPress={() => this.changeLanguageIndonesia()} />
							</View>
							<Button color={this.state.inggris == true ? 'rgba(34, 167, 240, 1)' : 'gray'} title="Inggris" onPress={() => this.changeLanguageInggris()} />
						</View>
					</View>
					{list.map((data, i) => {
						return (
							<View key={i}>
								<ListItem 
									bottomDivider={true} 
									chevron={true} 
									title={data.title} 
									containerStyle={{padding: 15}}
									 onPress={() => this.props.navigation.navigate('SyaratKetentuan')} />
							</View>
						)
					})}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		flexDirection:'row', 
		justifyContent: 'space-between',
		padding: 15,
		borderWidth: 1,
		backgroundColor: '#fff',
		borderColor: '#f5f5f5',
	    elevation: 1,
	    marginBottom: 10,
	    alignItems: 'center'
	}
})