import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon,Avatar } from 'react-native-elements';
import profile from '../../assets/profile.jpg'

export default class Profile extends React.Component {
	state = {
		editName: false,
		editTeam: false,
		editHp: false,
		editEmail: false
	}
	simpan = () =>{
		console.log('simpan')
	}
	render() {
		return (
			<ScrollView style={{backgroundColor: '#f5f5f5'}}>
				<View style={{marginVertical: 25, backgroundColor: '#f5f5f5'}}>
					<View style={{padding: 10}}>
						<Text style={{fontSize: 15, fontWeight: 'bold'}}>Foto Profile & Nama</Text>
					</View>
					<View style={styles.view}>
						<View style={{padding : 10, flexDirection: 'row' }}>
							<Avatar size="large" rounded source={profile}/>
							<View style={{width: '70%', marginLeft: 15 ,  alignSelf: 'center'}}>
								<Text style={{color: 'gray'}}>Jadikan Akun anda lebih personal dengan menambahkan foto.</Text>
							</View>
						</View>
					</View>
					<View style={styles.view}>
						<View style={styles.viewWrapper}>
							<Text>Nama Lengkap</Text>
							{
								this.state.editName == true ? 
								<Text style={styles.text} onPress={()=> this.setState({editName: false})}>Save</Text>
								:
								<Text style={styles.text} onPress={()=> this.setState({editName: true})}>Ganti</Text>
							}
						</View>
						<View style={{padding: 10}}>
							{this.state.editName == true ?
								<Input 
									placeholder="Edi Kurniawan" 
									inputContainerStyle={{borderColor: 'rgba(34, 167, 240, 1)', padding: 0, height: 25}} 
									containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}/>
								:
								<Text style={{paddingRight: 10, fontSize: 15}}>Edi Kurniawan Wibowo</Text>
							}
						</View>
					</View>
					<View style={styles.view}>
						<View style={styles.viewWrapper}>
							<Text>Nama Team</Text>
							{
								this.state.editTeam == true ? 
								<Text style={styles.text} onPress={()=> this.setState({editTeam: false})}>Save</Text>
								:
								<Text style={styles.text} onPress={()=> this.setState({editTeam: true})}>Tambah Nama Team</Text>
							}
						</View>
						<View style={{padding: 10}}>
							{this.state.editTeam == true ?
								<Input 
								placeholder="Edi Kurniawan" 
								inputContainerStyle={{borderColor: 'rgba(34, 167, 240, 1)', padding: 0, height: 25}} 
								containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}/>
								:
								<Text style={{paddingRight: 10, fontSize: 15}}>Edi Kurniawan Wibowo</Text>
							}
						</View>
					</View>
					<View style={styles.view}>
						<View style={styles.viewWrapper}>
							<Text>No Hp</Text>
							{
								this.state.editHp == true ? 
								<Text style={styles.text} onPress={()=> this.setState({editHp: false})}>Save</Text>
								:
								<Text style={styles.text} onPress={()=> this.setState({editHp: true})}>Tambah No Hp</Text>
							}
						</View>
						<View style={{padding: 10}}>
							{this.state.editHp == true ?
								<Input 
								placeholder="0987654321" 
								inputContainerStyle={{borderColor: 'rgba(34, 167, 240, 1)', padding: 0, height: 25}} 
								containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}/>
								:
								<Text style={{paddingRight: 10, fontSize: 15}}>0987654321</Text>
							}
						</View>
					</View>
					<View style={styles.view}>
						<View style={styles.viewWrapper}>
							<Text>Email</Text>
							{
								this.state.editEmail == true ? 
								<Text style={styles.text} onPress={()=> this.setState({editEmail: false})}>Save</Text>
								:
								<Text style={styles.text} onPress={()=> this.setState({editEmail: true})}>Ganti</Text>
							}
						</View>
						<View style={{padding: 10}}>
							{this.state.editEmail == true ?
								<Input 
								placeholder="edi@gmail.com" 
								inputContainerStyle={{borderColor: 'rgba(34, 167, 240, 1)', padding: 0, height: 25}} 
								containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}/>
								:
								<Text style={{paddingRight: 10, fontSize: 15}}>edi@gmail.com</Text>
							}
						</View>
					</View>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	labelStyle: {
		color: 'rgba(34, 167, 240, 1)', 
		fontWeight: 'normal',
	},
	view: {
		borderWidth: 1,
		borderColor: '#f5f5f5',
		padding: 5,
	    elevation: 1,
	    marginBottom: 10,
	    backgroundColor: '#fff'
	},
	text: {
		fontStyle: 'italic',
		color: 'orange'
	},
	viewWrapper : {
		justifyContent: 'space-between',
		flexDirection: 'row', 
		borderBottomWidth: 1, 
		borderColor: '#ddd', 
		padding: 10
	}

})
