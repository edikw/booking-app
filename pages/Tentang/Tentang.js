import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image,TextInput, Button, TouchableOpacity} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon, Avatar, ListItem } from 'react-native-elements';

export default class Tentang extends React.Component {
	render(){
		return (
			<View>
				<View style={{marginTop: 30}}>
					<Text style={{paddingHorizontal: 10}}>
						It is a long established fact that a reader will 
						be distracted by the readable content of a page 
						when looking at its layout. The point of using 
						Lorem Ipsum is that it has a more-or-less normal 
						distribution of letters, as opposed to using 'Content 
						here, content here', making it look like readable English.
						Many desktop publishing packages and web page 
						editors now use Lorem Ipsum as their default 
						model text, and a search for 'lorem ipsum' will 
						uncover many web sites still in their infancy. 
						Various versions have evolved over the years, 
						sometimes by accident, sometimes on purpose 
						(injected humour and the like).
					</Text>
				</View>
			</View>
		)
	}
}