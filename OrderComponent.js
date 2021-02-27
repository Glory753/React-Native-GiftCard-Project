import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Button, Modal } from 'react-native';

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gcSelection: 1,
            amount: 1,
            showModal: false
        };
    }

    static navigationOptions = {
        title: 'Order Form'
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleOrder() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            gcSelection: 1,
            amount: 1,
            showModal: false
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Gift Card Selection:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.gcSelection}
                        onValueChange={itemValue => this.setState({gcSelection: itemValue})}
                        >
                            <Picker.Item label='Visa $25' value='Visa $25' />
                            <Picker.Item label='Visa $50' value='Visa $50' />
                            <Picker.Item label='Visa $75' value='Visa $75' />
                            <Picker.Item label='Visa $100' value='Visa $100' />
                            <Picker.Item label='Olive Garden' value='Olive Garden' />
                            <Picker.Item label='Red Lobster' value='Red Lobster' />
                            <Picker.Item label='Cracker Barrel' value='Cracker Barrel' />
                            <Picker.Item label='Applebees' value='Applebees' />
                            <Picker.Item label='Lowes' value='Lowes' />
                            <Picker.Item label='Walmart' value='Walmart' />
                            <Picker.Item label='Home Depot' value='Home Depot' />
                            <Picker.Item label='AutoZone' value='AutoZone' />
                            <Picker.Item label='Victorias Secret' value='Victorias Secret' />
                            <Picker.Item label='Macys' value='Macys' />
                            <Picker.Item label='Target' value='Target' />
                            <Picker.Item label='Barnes & Noble' value='Barnes & Noble' />
                        </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Amount:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.amount}
                        onValueChange={itemValueA => this.setState({amount: itemValueA})}
                        >
                            <Picker.Item label='$25' value='$25' />
                            <Picker.Item label='$50' value='$50' />
                            <Picker.Item label='$75' value='$75' />
                            <Picker.Item label='$100' value='$100' /> 
                        </Picker>
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleOrder()}
                        title='Submit'
                        color='#5637DD'
                        accessibilityLabel='Tap me to submit the order'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Order Form</Text>
                        <Text style={styles.modalText}>
                        Gift Card Selection {this.state.gcSelection}
                        </Text>
                        <Text style={styles.modalText}>
                        Amount {this.state.amount}
                        </Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Order;