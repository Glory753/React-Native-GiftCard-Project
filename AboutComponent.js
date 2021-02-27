import React, { Component } from "react";
import { Text, Image, ScrollView, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class About extends Component {
    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInRight' duration={2000} delay={1000}>
                    <Card title="Our Mission">
                    <Image style = {{ width: 260, height: 200 }} source={require("./images/aboutgc.jpg")} /> 
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }

    static navigationOptions = {
        title: "About Us",
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        margin: 10
    },
})

export default About;
