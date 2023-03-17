import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2 mt-5" htmlFor={name}>
        {label}
      </label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return (
            <div className="flex flex-wrap justify-between">
              {options.map((option) => (
                <div className="flex items-center mb-2 mr-2" key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                    className="mr-2 h-4 w-4 text-blue-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-sm font-medium text-gray-700"
                  >
                    {option.key}
                  </label>
                </div>
              ))}
            </div>
          );
        }}
      </Field>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
