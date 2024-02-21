import React from 'react';
import { useForm } from 'react-hook-form';

type FormControlProps = {
  id: string;
  title: string;
  required: boolean;
  placeholder: string;
};

const FormControl = ({
  id,
  title,
  required,
  placeholder,
}: FormControlProps) => {
  const {
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
};

export default FormControl;
