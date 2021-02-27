import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        giftcards: state.giftcards
    };
};

class Directory extends Component {

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Animatable.View animation='fadeInRightBig' duration={2000}>
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        onPress={() => navigate('GiftInfo', { giftcardId: item.id })}
                        leftAvatar={{source: {uri: baseUrl + item.image}}}
                    />
                </Animatable.View>
            );
        };

        if (this.props.giftcards.isLoading) {
            return <Loading />;
        }
        if (this.props.giftcards.errMess) {
            return (
                <View>
                    <Text>{this.props.giftcards.errMess}</Text>
                </View>
            );
        }
        return (
            <Animatable.View animation='fadeInRightBig' duration={2000}>
                <FlatList
                    data={this.props.giftcards.giftcards}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Animatable.View>
        );
    }
}

export default connect(mapStateToProps)(Directory);