import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCWb0lhHrWcMZo0WmtOFHavSxOjGybF5wQ',
            authDomain: 'auth-40911.firebaseapp.com',
            databaseURL: 'https://auth-40911.firebaseio.com',
            projectId: 'auth-40911',
            storageBucket: 'auth-40911.appspot.com',
            messagingSenderId: '387513575347'
          });
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;