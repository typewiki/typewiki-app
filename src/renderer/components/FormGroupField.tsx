import { FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { IFormGroupProps } from '@blueprintjs/core/src/components/forms/formGroup';
import { useId } from 'react-id-generator';

const renderFormGroup: React.FC<WrappedFieldProps & IFormGroupProps> = ({
  label,
  input,
  meta: { touched, error },
  helperText,
  ...props
}) => {
  const [htmlId] = useId();
  const intent = touched && !!error ? Intent.DANGER : Intent.PRIMARY;
  return (
    <FormGroup label={label} helperText={helperText} labelFor={htmlId}>
      <InputGroup id={htmlId} intent={intent} {...input} {...props} />
      {touched && !!error && <span className="bp3-text-small text-error">{error}</span>}
    </FormGroup>
  );
};

export const FormGroupField: React.FC<IFormGroupProps & any> = ({ ...props }) => {
  return <Field component={renderFormGroup} {...props} />;
};
