import { StyleSheet, Text, View } from 'react-native';
import CustomLayout from '../customComponents/CustomLayout';
import CustomInput from '../customComponents/CustomInput';
import CustomButton from '../customComponents/CutomButton';
import useForm from '../hooks/useForm';

const Login = () => {
    const schema = {
        email: {
            value: '',
            error: '',
            required: true,
            validator: {
                func: (value: string) => /\S+@\S+\.\S+/.test(value),
                error: 'Invalid Email typed',
            },
        },
        password: {
            value: '',
            error: '',
            required: true,
        },
    };

    const {
        values,
        errors,
        dirty,
        handleOnChange,
        handleSubmit,
    } = useForm(schema, (formValues: any) => { console.log(formValues) });

    return (
        <CustomLayout>
            <Text style={styles.loginText}>Login to continue</Text>
            <CustomInput
                label="Email address"
                name="email"
                value={values.email}
                error={errors.email}
                showError={dirty.email}
                onChangeText={handleOnChange}
            />

            <CustomInput
                label="Password"
                name="password"
                value={values.password}
                error={errors.password}
                showError={dirty.password}
                onChangeText={handleOnChange}
                secureTextEntry
            />
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            <View style={styles.buttonWrapper}>
                <CustomButton title="Login" variant="primary" onPress={handleSubmit} />
            </View>
        </CustomLayout>
    );
};

export default Login;

const styles = StyleSheet.create({
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 42,
        paddingBottom: 18,
    },
    forgotPasswordText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'right',
        marginTop: 20,
    },
    buttonWrapper: { marginTop: 10 },
});
