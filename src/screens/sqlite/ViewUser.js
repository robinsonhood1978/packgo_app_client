// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user

import React, {useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';
import {useTranslation} from 'react-i18next';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';

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

const ViewUser = ({navigation}) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
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
            <Mytextinput
              placeholder="Enter User Id"
              onChangeText={(inputUserId) => setInputUserId(inputUserId)}
              style={{padding: 10}}
            />
            <Mybutton title="Search User" customClick={searchUser} />
            <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
              <Text>User Id: {userData.user_id}</Text>
              <Text>User Name: {userData.user_name}</Text>
              <Text>User Contact: {userData.user_contact}</Text>
              <Text>User Address: {userData.user_address}</Text>
            </View>
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

export default ViewUser;
