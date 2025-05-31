import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice.js';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: ''
  };
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const requiredField = Yup.string().trim().required().min(3).max(50);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          name: requiredField,
          number: requiredField
        })}>
        <Form className={css.form}>
          <div className={css.fieldContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.fieldContainer}>
            <label htmlFor={phoneFieldId}>Phone</label>
            <Field type="text" name="number" id={phoneFieldId} />
            <ErrorMessage name="number" component="span" className={css.error} />
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </section>
  );
}
