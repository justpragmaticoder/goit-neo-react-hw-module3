import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Invalid phone number, please use 000-00-00 format")
    .required("Required"),
});

const ContactForm = ({ submitHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <label className={css.contactFormLabel}>
          Name <br />
          <Field type="text" name="name" placeholder="Contact name" />
        </label>
        <ErrorMessage className={css.contactFormError} name="name" component="span" />

        <label className={css.contactFormLabel}>
          Number <br />
          <Field type="text" name="number" placeholder="000-00-00" />
        </label>
        <ErrorMessage className={css.contactFormError} name="number" component="span" />

        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
