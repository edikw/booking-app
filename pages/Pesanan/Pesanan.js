import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon, Header, Card } from 'react-native-elements';

const list = [
	{
		lapangan: 'Salvator',
		address: 'Yoyakarta',
		date: '20/2/2019',
		duration: '14:00 - 16:00 (2 jam)',
		status: 'waiting'
	},
	{
		lapangan: 'Total',
		address: 'Yoyakarta',
		date: '21/2/2019',
		duration: '14:00 - 16:00 (2 jam)',
		status: 'waiting'
	},
]
export default class Pesanan extends React.Component {
	detail = () => {
		console.log('detail')
	}
	render(){
		return (
			<View style={{flex: 1}, {justifyContent: 'center'}}>
				<View style={{marginTop: 30}}>
					<Card>
						<Icon
						  reverse
						  name='ios-folder-open'
						  type='ionicon'
						  color='#517fa4'
						  size= {50}
						  containerStyle={{alignItems: 'center'}}
						/>
						<Text style={{fontSize: 15 , textAlign: 'center', marginTop: 10}}>Anda Tidak Memiliki Pesanan Aktif</Text>
					</Card>
				</View>
			</View>
		)
	}
}