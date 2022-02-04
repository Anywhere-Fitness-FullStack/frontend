import React, { useState, useEffect } from "react";
import EditClassForm from "./EditClassForm";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "../../validations/FormSchema";

const initialFormValues = {
  class_name: "",
  class_type: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  max_class_size: "",
  current_clients: "",
  instructor_id: "",
};

const initialFormErrors = {
  class_name: "",
  class_type: "",
};

const initialDisabled = true;

const EditClass = () => {
  const [editClass, setEditClass] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { class_id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://anywhere-fitness-07-backend.herokuapp.com/api/classes/${class_id}`
      )
      .then((res) => {
        setEditClass(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [class_id]);


  const handleDelete = (id) => {
    axios
      .delete(
        `https://anywhere-fitness-07-backend.herokuapp.com/api/classes/${id}`
      )
      .then((resp) => {
        push("/available-classes");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setEditClass({
      ...editClass,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    axios
      .put(
        `https://anywhere-fitness-07-backend.herokuapp.com/api/classes/update`,
        editClass
      )
      .then((res) => {
        console.log(res.data);
        push("/available-classes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    schema.isValid(editClass).then((valid) => setDisabled(!valid));
  }, [editClass]);

  return (
    <div>
      <EditClassForm
        values={editClass}
        change={inputChange}
        submit={handleSubmit}
        disabled={disabled}
        errors={formErrors}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EditClass;
