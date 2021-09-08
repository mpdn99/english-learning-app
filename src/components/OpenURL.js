import React, { useCallback } from "react";
import { Text, Linking, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const OpenURLButton = ({ title, url }) => {

  const handlePress = useCallback(async () => {
    await Linking.openURL(url)
  }, [url]);

  return (
    <Button
        onPress={handlePress}
        style={styles.container}
        uppercase={false}
    >
        <Text style={styles.textStyle}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
  },
  textStyle: {
    color: 'white',
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  }
});

export default OpenURLButton;