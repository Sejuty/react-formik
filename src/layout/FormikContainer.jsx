import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../component/FormikControl";

function FormikContainer() {
  const noEmojis =
    /^((?![\p{Extended_Pictographic}\p{Regional_Indicator}]).)*$/u;

  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];

  const requireErrorMessage = "Required";
  const emojiErrorMessage = "Emoji not allowed";

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required(requireErrorMessage),
    description: Yup.string().matches(noEmojis, emojiErrorMessage),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("form Data", values);
    onSubmitProps.resetForm();
  };
  const handleReplaceClick = (formik) => {
    const newDescription = formik.values.description.replace(
      /[\p{Extended_Pictographic}\p{Regional_Indicator}]/gu,
      ""
    );
    formik.setFieldValue("description", newDescription);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="flex items-center justify-center min-h-screen">
              <Form className="border border-gray-300 p-6 rounded w-3/4">
                <div className="text-3xl mb-4">Form</div>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl />
                <FormikControl
                  control="textarea"
                  type="textarea"
                  label="Description"
                  name="description"
                />
                <button
                  type="button"
                  className="bg-black p-3 rounded text-white mr-auto"
                  onClick={() => handleReplaceClick(formik)}
                >
                  {" "}
                  Replace{" "}
                </button>
                <FormikControl />
                <FormikControl
                  control="select"
                  label="Select a topic"
                  name="selectOption"
                  options={dropdownOptions}
                />
                <FormikControl
                  control="radio"
                  label="Radio topic"
                  name="radioOption"
                  options={radioOptions}
                />

                <FormikControl
                  control="checkbox"
                  label="Checkbox topics"
                  name="checkboxOption"
                  options={checkboxOptions}
                />

                <button
                  type="submit"
                  className="bg-black p-3 rounded text-white mr-auto"
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikContainer;
