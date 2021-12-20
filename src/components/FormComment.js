import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../constants/Colors';

const Error = ({ text }) => <Text style={styles.errorText}>{text}</Text>;

const FormComment = ({ postComment }) => {
    const formSchema = Yup.object().shape({
        name: Yup.string().max(50, 'Nombre demasiado largo').required('Nombre Obligatorio'),
        comment: Yup.string().max(500, 'Comentario demasiado largo').required('Comentario obligatorio'),
        email: Yup.string().email('Email no válido').required('Email obligatorio')
    });

    return (
        <View style={styles.container}>
            <Text style={styles.titleComment}>Comentarios</Text>
            <Formik
                initialValues={{ name: '', email: '', comment: '' }}
                validationSchema={formSchema}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                    postComment(values);
                    Alert.alert('Comentario', 'Comentario creado correctamente');
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.containerForm}>
                        <TextInput
                            placeholder="Tu nombre"
                            style={styles.input}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <Error text={errors.name} />
                        <TextInput
                            placeholder="Correo electrónico"
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Error text={errors.email} />
                        <TextInput
                            placeholder="Comentario (máx. 500 caracteres)"
                            style={styles.commentInput}
                            onChangeText={handleChange('comment')}
                            onBlur={handleBlur('comment')}
                            value={values.comment}
                            multiline={true}
                            numberOfLines={4}
                        />
                        <Error text={errors.comment} />
                        <Button color={Colors.violet.background} onPress={handleSubmit} title="Enviar" />
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15
    },
    titleComment: {
        paddingTop: 10
    },
    errorText: {
        color: 'red',
        paddingLeft: 15
    },
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFF'
    },
    input: {
        paddingLeft: 20,
        height: 50,
        borderWidth: 1,
        marginBottom: 20,
        margin: 5
    },
    commentInput: {
        paddingLeft: 20,
        height: 50,
        borderWidth: 1,
        marginBottom: 20,
        padding: 5,
        margin: 5,
        height: 100,
        textAlignVertical: 'top'
    }
});

export default FormComment;
