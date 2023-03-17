import React from "react";
import Checkbox from "./Checkbox.jsx";
import Input from "./Input.jsx";
import RadioButtons from "./RadioButtons.jsx";
import Select from "./Select.jsx";
import Textarea from "./Textarea.jsx";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
