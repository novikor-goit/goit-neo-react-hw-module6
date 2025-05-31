import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

export default function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: ''
  };
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const requiredField = Yup.string().trim().required().min(3).max(50);

  const handleSubmit = (values, actions) => {
    values = { ...values, id: crypto.randomUUID() };
    onSubmit(values);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
