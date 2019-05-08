import React from 'react';
import {createStackNavigator, createAppContainer, navigationOptions, createBottomTabNavigator} from 'react-navigation';
import { TouchableOpacity} from 'react-native';

import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import Pesanan from './pages/Pesanan/Pesanan';
import Profile from './pages/Profile/Profile';
import History from './pages/History/HistoryPesanan';
import Pengaturan from './pages/Pengaturan/Pengaturan';
import Tentang from './pages/Tentang/Tentang';
import Bantuan from './pages/Bantuan/Bantuan';
import Login from './Components/Login/Login';
import SyaratKetentuan from './pages/SyaratKetentuan/SyaratKetentuan';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';




const HomeStack = createStackNavigator({
	Home: {
		screen : Home,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen : Login,
		navigationOptions: {
			header: null
		}
	}
});

const AccountStack = createStackNavigator({
	Account: {
		screen: Account,
		navigationOptions: {
			title: 'Akun Saya',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions:{
			title: 'Profile',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			tabBarVisible: false ,
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	},
	History: {
		screen: History,
		navigationOptions:{
			title: 'History Pesanan',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	},
	Pengaturan: {
		screen: Pengaturan,
		navigationOptions:{
			title: 'Pengaturan',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	},
	Tentang: {
		screen: Tentang,
		navigationOptions:{
			title: 'Tentang',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	},
	Bantuan: {
		screen: Bantuan,
		navigationOptions:{
			title: 'Bantuan',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	},
	SyaratKetentuan: {
		screen: SyaratKetentuan,
		navigationOptions:{
			title: 'Syarat & Ketenteuan',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}
	}
})

AccountStack.navigationOptions = ({navigation}) => {
	let tabBarVisible = true;
	if(navigation.state.index > 0) {
		tabBarVisible = false
	}
	return {
		tabBarVisible
	}
}

const PesananStack = createStackNavigator({
	Pesanan: {
		screen: Pesanan,
		navigationOptions: {
			title: 'Pesanan',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: 'rgba(34, 167, 240, 1)',
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontWeight: 'normal'
			}
		}	
	}
});

export default createAppContainer(createBottomTabNavigator (
	{
		Home: HomeStack,
		Pesanan: PesananStack,
		Akun: AccountStack
	},
	{
		defaultNavigationOptions:({ navigation }) => ({
			tabBarIcon: ({focused, horizontal, tintColor}) => {
				const {routeName} = navigation.state
				let IconComponent = Ionicons
				let iconName;
				let tabBarVisible;
				if(routeName === 'Home'){
					iconName = 'ios-home'
					IconComponent = Ionicons
				} else if(routeName == 'Akun'){
					iconName = 'account-circle'
					IconComponent = Icon
				} else if(routeName == 'Pesanan') {
					iconName = 'payment'
					IconComponent = Icon
				}

				return <IconComponent name={iconName} size={25} color={tintColor} />
			}
		}),
		tabBarOptions: {
			activeTintColor: 'rgba(34, 167, 240, 1)',
			inactiveTinColor: 'gray'
		}
	}
))


