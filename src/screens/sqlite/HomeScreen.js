// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
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

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);
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
            <Mytext text="SQLite Example" />
            <Mybutton
              title="Register"
              customClick={() => navigation.navigate('RegisterUser')}
            />
            <Mybutton
              title="Update"
              customClick={() => navigation.navigate('UpdateUser')}
            />
            <Mybutton
              title="View"
              customClick={() => navigation.navigate('ViewUser')}
            />
            <Mybutton
              title="View All"
              customClick={() => navigation.navigate('ViewAllUser')}
            />
            <Mybutton
              title="Delete"
              customClick={() => navigation.navigate('DeleteUser')}
            />
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

export default HomeScreen;
