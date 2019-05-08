import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input, Icon, Header, Button} from 'react-native-elements';
// import { Dropdown } from 'react-native-material-dropdown';
import background from '../../assets/futsal.jpg'



export default class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			datePicker: false,
			timePicker: false,
			date: '',
			time:'',
			location: '',
			durations: '',
			dr: false
		}
	}

	
	showDate = () => {
		console.log('tutu')
		this.setState({datePicker: true})
	}

	

	handleDate = (date) => {
		var x = date.toString()
		var data = x.slice(0,16)
		console.log(data)
		this.setState({date: data})
		this.hideDate()
	}

	hideDate = () => this.setState({datePicker: false})
	
	showTime = () => this.setState({timePicker: true})
	
	handleTime = (time) => {
		var x = time.toString()
		var data = x.slice(16, 25)
		this.setState({time: data})
		this.hideTime()
	}

	hideTime = () => this.setState({timePicker: false})
	
	handleInput = (e) => {
		console.log(e)
		this.setState({location: e})
	}
	handleInputDurations = (e) =>{
		this.setState({durations: e})
	}

	search = () => {
		var search = {
			date: this.state.date,
			time: this.state.time,
			location: this.state.location,
			durations: this.state.durations
		}

		console.log(search)
	}

	login = () => {
		this.props.navigation.navigate('Login')
	}

	showDropdown(){
		console.log("YUHU")
		this.state.dr = true
		this.setState({dr: this.state.dr})
	}

	render() {
		let data = [{
	      value: 'Banana',
	    }, {
	      value: 'Mango',
	    }, {
	      value: 'Pear',
	    }];

    	let icon = (<TouchableOpacity style={{width: '100%'}}>
					<Icon type="font-awesome" name="ellipsis-v" color="#fff"/>
					</TouchableOpacity>)
    
		return (
			<View style={{alignItems: 'center', backgroundColor: '#000'}}>
			<Header
				placement="left"
				leftComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
				rightComponent={ icon }
				containerStyle={{ borderBottomWidth: 0}}
			/>

				<ImageBackground style={{width: '100%', height: '100%', opacity: 0.3}} source={background}>
				</ImageBackground>
				
				<View style={styles.input}>
					<TouchableOpacity style={{marginBottom: 10}} onPress={this.showDate}>
						<Input 
							inputContainerStyle={styles.inputContainerStyle} 
							placeholder={this.state.date.length > 0 ? this.state.date : "Date"} 
							rightIcon={{type: 'font-awesome', name: 'calendar', size: 20, color: 'rgba(34, 167, 240, 1)'}} />
					</TouchableOpacity>
					<View style={{flex: 2, flexDirection: 'row'}}>
						<TouchableOpacity onPress={this.showTime} style={{width: '50%', height: 50}}>
							<Input 
								inputContainerStyle={styles.inputContainerStyle} 
								placeholder={this.state.time.length > 0 ? this.state.time : "Time"} 
								rightIcon={{type: 'font-awesome', name: 'clock-o',size: 20, color: 'rgba(34, 167, 240, 1)'}} />
						</TouchableOpacity>
						<Input 
							placeholder="Durations" 
							inputStyle={{color: '#fff'}} 
							keyboardType = 'numeric' 
							containerStyle={{width: '50%', height: 50}} 
							inputContainerStyle={styles.inputContainerStyle} 
							name="durations" 
							onChangeText={this.handleInputDurations.bind(this)}
							rightIcon={{type: 'onicon', name: 'timer',size: 20, color: 'rgba(34, 167, 240, 1)'}} />	
					</View>
					<TouchableOpacity>
						<Input 
							inputContainerStyle={styles.inputContainerStyle} 
							placeholder="Locations" 
							inputStyle={{color: '#fff'}} 
							rightIcon={{type: 'font-awesome', name: 'map',size: 20, color: 'rgba(34, 167, 240, 1)'}} 
							name="locations" 
							onChangeText={this.handleInput.bind(this)} />
					</TouchableOpacity>
					<View style={{margin: 10}}>
						<Button 
							title="Search" 
							color="rgba(34, 167, 240, 1)" 
							onPress={this.search} 
							buttonStyle={{borderRadius: 25}} />
					</View>
					<DateTimePicker 
						mode="date" 
						isVisible={this.state.datePicker} 
						onConfirm={this.handleDate} 
						onCancel={this.hideDate} />
					<DateTimePicker 
						mode="time" 
						isVisible={this.state.timePicker} 
						onConfirm={this.handleTime} 
						onCancel={this.hideTime} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(000, 000, 000, .6)',
		justifyContent: 'center',
		top: '30%',
		position: 'absolute'
	},
	inputContainerStyle: { 
		backgroundColor: 'rgba(255,255,255, .3)',
		borderRadius: 25,
		borderBottomWidth: 0,
		paddingHorizontal: 10
	}
});
