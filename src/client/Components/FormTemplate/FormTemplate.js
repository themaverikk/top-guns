import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';
import './FormTemplate.css';

const FormTemplate = (props) => {
  const { fields, validation, getData } = props;

  const validateDynamic = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    }

    return error;
  };

  const renderSelect = (input) => {
    return (
      <Fragment key={input.name}>
        <div>
          <Field name={input.name} validate={validateDynamic}>
            {(property) => {
              const { field } = property;
              const { errors, touched } = property.form;
              const hasError =
                errors[input.name] && touched[input.name]
                  ? 'FormTemplate__hasError'
                  : '';

              const defaultOption = (
                <option key="default" value={field.value}>
                  {field.value}
                </option>
              );
              const options = input.data.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ));
              const selectOptions = [defaultOption, ...options];
              return (
                <div className="dropdown">
                  <select
                    value={field.value}
                    {...field}
                    className={`FormTemplate__select ${hasError} mb-3`}
                  >
                    {selectOptions}
                  </select>
                </div>
              );
            }}
          </Field>
        </div>
      </Fragment>
    );
  };

  // style checkbox and textArea

  const renderCheckBox = (input) => {
    return (
      <Fragment key={input.name}>
        <label htmlFor={input.name}>{input.label}</label>
        <Field name={input.name}>
          {(prop) => {
            const { field } = prop;
            return (
              <input
                id={input.name}
                name={input.name}
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
              />
            );
          }}
        </Field>
      </Fragment>
    );
  };

  const renderTextArea = (input) => {
    return (
      <Fragment key={input.name}>
        <label htmlFor={input.name}>{input.label}</label>
        <div>
          <Field name={input.name}>
            {(property) => {
              const { field } = property;
              const { errors, touched } = property.form;
              const hasError =
                errors[input.name] && touched[input.name] ? 'hasError' : '';
              return (
                <div>
                  <textarea {...field} id={hasError} />
                </div>
              );
            }}
          </Field>
        </div>
      </Fragment>
    );
  };

  const getInitialValues = (inputs) => {
    // declare an empty initialValues object
    const initialValues = {};
    // loop loop over fields array
    // if prop does not exit in the initialValues object,
    // pluck off the name and value props and add it to the initialValues object;
    inputs.forEach((field) => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    // return initialValues object
    return initialValues;
  };

  const renderFields = (inputs) => {
    return inputs.map((input) => {
      if (input.type === 'select') return renderSelect(input);
      if (input.type === 'textarea') return renderTextArea(input);
      if (input.type === 'checkbox') return renderCheckBox(input);

      return (
        <div key={input.name}>
          <div className="my-4 FormTemplate__input mx-auto">
            <Field name={input.name} validate={validateDynamic}>
              {(property) => {
                const { field } = property;
                const { errors, touched } = property.form;

                const hasError =
                  errors[input.name] && touched[input.name]
                    ? 'FormTemplate__hasError'
                    : '';
                return (
                  <label
                    htmlFor={field.name}
                    className="has-float-label my-auto"
                  >
                    <input
                      defaultValue={input.value}
                      className={`form-control ${hasError}`}
                      {...field}
                      type={input.type === 'number' ? 'number' : 'text'}
                      placeholder={input.label}
                      id={field.name}
                    />
                    <span>{input.label}</span>
                  </label>
                );
              }}
            </Field>
          </div>
        </div>
      );
    });
  };

  const initialValues = getInitialValues(fields);

  return (
    <Formik
      onSubmit={(values) => {
        getData(values);
      }}
      validationSchema={validation}
      initialValues={initialValues}
    >
      {(form) => {
        const errorMessageShow = Object.keys(form.errors).length > 0;

        return (
          <div>
            <form
              onSubmit={form.handleSubmit}
              className="mx-auto text-center mb-4"
            >
              {renderFields(fields)}
              <Button type="submit" variant="customPrimary">
                Submit
              </Button>

              {errorMessageShow && (
                <small className="text-danger d-block text-center mt-3">
                  Please fill the required fields
                </small>
              )}
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default FormTemplate;

FormTemplate.propTypes = {
  validation: PropTypes.instanceOf(Object),
  fields: PropTypes.instanceOf(Array).isRequired,
  getData: PropTypes.func.isRequired,
};

FormTemplate.defaultProps = {
  validation: undefined,
};
