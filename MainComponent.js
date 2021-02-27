import React, { Component } from 'react';
import Home from './HomeComponent'; 
import Join from './JoinComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Directory from './DirectoryComponent';
import GiftInfo from './GiftInfoComponent';
import Order from './OrderComponent';
import Login from './LoginComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image,
    Alert, ToastAndroid } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchGiftcards, fetchAdvertisements } from '../redux/ActionCreators';
import NetInfo from '@react-native-community/netinfo';

const mapDispatchToProps = {
    fetchGiftcards,
    fetchAdvertisements
};

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        GiftInfo: { screen: GiftInfo },
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#1c37ce',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            color: '#fff',
            },
        },
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1c37ce'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        color: '#fff'
        },
        headerLeft: <Icon
            name='home'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
); 

const JoinNavigator = createStackNavigator(
    {
        Join: { screen: Join },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1c37ce'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        color: '#fff'
        },
        headerLeft: <Icon
            name='plus'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
      })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1c37ce'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        color: '#fff'
        },
        headerLeft: <Icon
            name='info-circle'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1c37ce'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        color: '#fff'
        },
        headerLeft: <Icon
            name='address-card'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const OrderNavigator = createStackNavigator(
    {
        Order: { screen: Order },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1c37ce'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        color: '#fff'
        },
        headerLeft: <Icon
            name='hand-o-up'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1c37ce'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponet = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image 
                        source={require('./images/logogc.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Gift Cards</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Directory: { 
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Order: { 
            screen: OrderNavigator,
            navigationOptions: {
                drawerLabel: 'Order Form',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='hand-o-up'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Join: { 
            screen: JoinNavigator,
            navigationOptions: {
                drawerLabel: 'Join Us',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='plus'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponet
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    handleConnectivityChange = connectionInfo => {
        let connectionMsg = 'You are now connected to an active network.';
        switch (connectionInfo.type) {
            case 'none':
                connectionMsg = 'No network connection is active.';
                break;
            case 'unknown':
                connectionMsg = 'The network connection state is now unknown.';
                break;
            case 'cellular':
                connectionMsg = 'You are now connected to a cellular network.';
                break;
            case 'wifi':
                connectionMsg = 'You are now connected to a WiFi network.';
                break;
        }
        (Platform.OS === 'ios')
            ? Alert.alert('Connection change:', connectionMsg)
            : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
    }

    componentDidMount() {
        this.props.fetchGiftcards();
        this.props.fetchAdvertisements();
        this.showNetInfo(); 

        this.unsubscribeNetInfo = NetInfo.addEventListener(connectionInfo => {
            this.handleConnectivityChange(connectionInfo);
        });
    }

    async showNetInfo() {
        const connectionInfo = await NetInfo.fetch();
        (Platform.OS === 'ios')
                ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
                : ToastAndroid.show('Initial Network Connectivity Type: ' +
                    connectionInfo.type, ToastAndroid.LONG);
    }

    componentWillUnmount() {
        this.unsubscribeNetInfo();
    }
    
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#1c37ce',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main);
