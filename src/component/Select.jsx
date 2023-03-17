import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2 mt-3" htmlFor={name}>
        {label}
      </label>
      <Field
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        as="select"
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
        <ErrorMessage name={name} component={TextError} />
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
