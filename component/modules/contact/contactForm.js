import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Textbox } from '../../formik/textbox';


const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
});

export const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <div>
            <Form onSubmit={formik.handleSubmit} >

                <Textbox name="name" label="Name" value={formik.values.name} handleChange={formik.handleChange} error={formik.touched.name && formik.errors.name} />
                <Textbox name="email" label="Email" value={formik.values.email} handleChange={formik.handleChange} error={formik.touched.email && formik.errors.email} />
                <Textbox name="subject" label="Subject" value={formik.values.subject} handleChange={formik.handleChange} error={formik.touched.subject && formik.errors.subject} />
                <Textbox name="message" label="Message" value={formik.values.message} handleChange={formik.handleChange} error={formik.touched.message && formik.errors.message} as="textarea" rows={3} />

                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    )
}
