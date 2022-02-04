import React, { useState, useEffect } from "react";
import AddClassForm from "./AddClassForm";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "../../validations/FormSchema";

const initialFormValues = {
  class_name: "",
  class_type: "",
  start: "",
  duration: "",
  dropdown: "",
  location: "",
  maxSize: "",
  currentClients: "",
};

const initialFormErrors = {
  class_name: "",
  class_type: "",
};

const initialDisabled = true;

const AddClass = () => {
  const [newClass, setNewClass] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();

  // const postNewClass = newClass => {

  // }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setNewClass({
      ...newClass,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    // e.preventDefault();
    axios
      .post(
        "https://anywhere-fitness-07-backend.herokuapp.com/api/classes",
        newClass
      )
      .then((res) => {
        setNewClass(res.data);
        push("/available-classes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    schema.isValid(newClass).then((valid) => setDisabled(!valid));
  }, [newClass]);

  return (
    <div>
      <AddClassForm
        values={newClass}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
};

export default AddClass;
