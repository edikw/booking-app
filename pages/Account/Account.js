import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon, Avatar, ListItem, Header, Card } from 'react-native-elements';
import profile from '../../assets/profile.jpg'

const list = [
	
	{
		title: 'History Pesanan',
		icon: 'note'
	},
	{
		title: 'Tentang',
		icon: 'book'
	},
	{
		title: 'Bantuan',
		icon: 'question-answer'
	},
	{
		title: 'Pengaturan',
		icon: 'settings'
	},
	{
		title: 'Logout',
		icon: 'exit-to-app'
	},
]

export default class Account extends React.Component {
	linkPage = (data) => {
		if(data.title == 'History Pesanan'){
			this.props.navigation.navigate('History')
		} else if(data.title == 'Pengaturan'){
			this.props.navigation.navigate('Pengaturan')
		} else if(data.title == 'Bantuan'){
			this.props.navigation.navigate('Bantuan')
		} else if(data.title == 'Tentang'){
			this.props.navigation.navigate('Tentang')
		}
	}

	profile = () => {
		this.props.navigation.navigate('Profile') 
	}
	render(){
		return (
			<View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
				<ScrollView>
					<View style={{alignItems: 'center', backgroundColor: 'rgba(34, 167, 240, 1)', height: '20%'}}>
						<View
						style={styles.avatar}
						>	
							<TouchableOpacity style={{width: '20%', marginLeft: 'auto'}} onPress={()=>this.profile()}>
								<Icon name="edit" />
							</TouchableOpacity>
								<TouchableOpacity>
									<Avatar size="large" rounded source={profile}/>
								</TouchableOpacity>
							<Text style={{fontSize: 15, marginTop: 10, color: '#000', marginBottom: 0}}>Edi Kurniawan Wibowo</Text>
						</View>
					</View>
					<View style={{paddingTop: 80, marginBottom: 0}}>
						{list.map((item, i)=>(
							<View style={{marginBottom: 5}} key={i}>
								<ListItem 
									bottomDivider={false} 
									chevron={true}  
									title={item.title} 
									leftIcon={{name: item.icon, color:'rgba(34, 167, 240, 1)'}} 
									containerStyle={{borderRadius: 30, paddingVertical: 12}}
									onPress={()=>this.linkPage(item)} />
							</View>
						))}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	avatar: {
		position: 'relative',
		top: 0,
		alignItems: 'center',
		backgroundColor: '#fff',
		width: '95%',
		paddingVertical: 20,
		borderRadius: 10
	}
})
