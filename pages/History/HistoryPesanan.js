import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon, Card } from 'react-native-elements';

const list = [
	{
		lapangan: 'Salvator',
		address: 'Yoyakarta',
		date: '20/2/2019',
		duration: '14:00 - 16:00 (2 jam)',
		status: 'played'
	},
	{
		lapangan: 'Total',
		address: 'Yoyakarta',
		date: '21/2/2019',
		duration: '14:00 - 16:00 (2 jam)',
		status: 'waiting'
	},
]
export default class History extends React.Component {
	detail = () => {
		console.log('detail')
	}
	render(){
		return (
			<View style={{flex: 1}, {justifyContent: 'center'}}>
				<View>
					{list.map((list, i)=>(
						<Card key={i}>
							<Text>{list.date}</Text>
							<Text>{list.duration}</Text>
							<Text>{list.lapangan}</Text>
							<Text>{list.address}</Text>
							<Text>{list.status}</Text>
							<View style={{width: '30%', marginTop: 10}}>
								<Button
									color='rgba(34, 167, 240, 1)'
								    title='Detail' onPress={() => this.detail()} />
							</View>
						</Card>
					))}
				</View>
			</View>
		)
	}
}