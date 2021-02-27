import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        giftcards: state.giftcards
    };
};

function RenderGiftcard({giftcard}) {
    if (giftcard) {
        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card 
                    featuredTitle={giftcard.name}
                    image={{uri: baseUrl + giftcard.image}}>
                    <Text style={{margin: 10}}>
                        {giftcard.description}
                    </Text>
                </Card>
            </Animatable.View>
        );
    }
    return <View />;
}

class GiftInfo extends Component {

    static navigationOptions = {
        title: 'Giftcard Information'
    }

    render() {
        const giftcardId = this.props.navigation.getParam('giftcardId');
        const giftcard = this.props.giftcards.giftcards.filter(giftcard => giftcard.id === giftcardId)[0];
        return <RenderGiftcard giftcard={giftcard} />;
    }
}

export default connect(mapStateToProps)(GiftInfo);