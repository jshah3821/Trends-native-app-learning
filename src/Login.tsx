import { StyleSheet, Text } from "react-native"
import CustomLayout from "./customComponents/CustomLayout";
import CustomInput from "./customComponents/CustomInput";

const Login = () => {
    return (
        <CustomLayout>
            <Text style={styles.text}>Login to continue</Text>
            <CustomInput
                placeholder="Email address"
            />

            <CustomInput
                placeholder="Password"
                secureTextEntry
            />
        </CustomLayout>)
}

export default Login;

const styles = StyleSheet.create({
    text: { color: "white", fontSize: 16, fontWeight: 'bold', textAlign: 'center', paddingTop: 42 }
})