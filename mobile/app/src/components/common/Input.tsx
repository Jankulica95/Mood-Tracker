import { TextInput, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Input({ style, ...props }: any) {
    return (
        <TextInput 
            style={[styles.input, style]}
            placeholderTextColor={Colors.placeholder}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
  }
});

export default Input;
