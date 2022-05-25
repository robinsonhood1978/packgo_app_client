// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the user

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

const RegisterUser = ({navigation}) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Registration Failed');
          }
        },
      );
    });
  };
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <Icon
            name="arrow-left"
            onPress={() => navigation.goBack()}
            isRotateRTL
          />
        }
        centerComponent={
          <Text h4 medium black>
            {t('demos:sqlite')}
          </Text>
        }
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1}}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <KeyboardAvoidingView
                behavior="padding"
                style={{flex: 1, justifyContent: 'space-between'}}>
                <Mytextinput
                  placeholder="Enter Name"
                  onChangeText={(userName) => setUserName(userName)}
                  style={{padding: 10}}
                />
                <Mytextinput
                  placeholder="Enter Contact No"
                  onChangeText={(userContact) => setUserContact(userContact)}
                  maxLength={10}
                  keyboardType="numeric"
                  style={{padding: 10}}
                />
                <Mytextinput
                  placeholder="Enter Address"
                  onChangeText={(userAddress) => setUserAddress(userName)}
                  maxLength={225}
                  numberOfLines={5}
                  multiline={true}
                  style={{textAlignVertical: 'top', padding: 10}}
                />
                <Mybutton title="Submit" customClick={register_user} />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
            Example of SQLite Database in React Native
          </Text>
          <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
            www.aboutreact.com
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RegisterUser;
