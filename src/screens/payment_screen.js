import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, View, Alert} from 'react-native';
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';

// eslint-disable-next-line no-undef
export default PaymentScreen = (props) => {
  const {navigation} = props;
  const [card, setCard] = useState(CardFieldInput.Details | null);
  const {confirmPayment, handleCardAction} = useStripe();
  const API_URL = 'http://localhost:4242';
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  const clientSecret =
    'sk_test_51JerMkBKfUykjlb51eL9QCWutkPCYE8IYrx3r3XvK88DLBurpG2O0oJ9EsbMZEuiWMlWlbTDu0VJoeZwkQ6JbMQq00HYvxWynt';

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {paymentIntent, ephemeralKey, customer} = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();
    const {error} = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet({clientSecret});
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };
  useEffect(() => {
    initializePaymentSheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        disabled={!loading}
        title="Checkout"
        color="#841584"
        onPress={openPaymentSheet}
      />
      <Button
        style={styles.button}
        title="Return"
        color="#841584"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
  },
});
