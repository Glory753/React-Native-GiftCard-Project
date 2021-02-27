import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Join extends Component {

    static navigationOptions = {
        title: 'Join'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInLeft' duration={2000} delay={1000}>
                    <Card>
                        <Text style= {{fontWeight: 'bold'}}>Be Your Own Boss</Text>
                        <Text>More freedom. More flexibility. A Gift Card independent buisness offers you a 
                        path filled with possibilities, all on your terms. It's a low-cost, low-risk way to 
                        start your own business. You supply the passion and hard work, we'll provide the 
                        training, support, and rewards.. be in buisness for yourself but not by yourself.</Text>
                    </Card>
                    <Card>
                        <Text style= {{fontWeight: 'bold'}}>Get To Know Us</Text>
                        <Text>Launched in 1966, our family-owned company built a successful 
                        business model on the power of giving. Now, we are a global community with 
                        more than three thousand people building their own business in over 50 
                        countries and territories.</Text>
                        <Text>Low-cost opportunity to start your own business with a 100% 
                        money-back guarantee in your first 60 days.</Text>
                        <Text>$50.2M in bonuses and incentives have been paid to Gift Card buisness 
                        owners worldwide since 1966.</Text>
                        <Text>Start Your Buisness Today.</Text>
                    </Card>
                    <Card>
                        <Text style= {{fontWeight: 'bold'}}>3 Ways To Make Money</Text>
                        <Text style= {{fontWeight: 'bold'}}>1. Retail Margin</Text>
                        <Text>Buy the products at a special price, sell them to customers at a price you 
                        determine- you keep the difference - the retail margin.</Text>
                        <Text style= {{fontWeight: 'bold'}}>2. Bonuses</Text>
                        <Text>Earn performance points on products sold and, as your business grows, 
                        earn points from products sold by those you sponsor.</Text>
                        <Text style= {{fontWeight: 'bold'}}>3. Incentives</Text>
                        <Text>Elective Growth Incentives and rewards include Quick Incentive Program awards, 
                        rewards for key achievements in extraordinary growth and helping others succeed, 
                        along with one-time cash awards.</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Join;
