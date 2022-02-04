import React from "react";
import { Button, Form, Input, Label } from "reactstrap";
import { Link, useParams } from "react-router-dom";

const EditClassForm = ({
  values,
  change,
  submit,
  disabled,
  errors,
  handleDelete,
}) => {
  const { class_id } = useParams();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const onDelete = (id) => {
    handleDelete(id);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Edit Class</h2>

      <div>
        <div>{errors.class_name}</div>
        <div>{errors.class_type}</div>
        <div>{errors.intensity_level}</div>
        <div>{errors.start_time}</div>
      </div>
      <Label>
        Class Name:
        <Input
          name="class_name"
          type="text"
          value={values.class_name}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Class Type
        <Input
          type="text"
          name="class_type"
          value={values.class_type}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Start Time
        <Input
          type="string"
          name="start_time"
          value={values.start_time}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Duration
        <Input
          name="duration"
          type="string"
          //min="0"
          placeholder="duration"
          value={values.duration}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Intensity Level
        <select
          name="intensity_level"
          value={values.intensity_level}
          onChange={onChange}
        >
          <option>-Select Intensity-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </Label>
      <br />
      <Label>
        Location
        <Input
          type="text"
          name="location"
          value={values.location}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Current Clients
        <Input
          name="current_clients"
          type="number"
          //min="0"
          value={values.current_clients}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Max Class Size
        <Input
          type="number"
          //min="0"
          name="max_class_size"
          value={values.max_class_size}
          onChange={onChange}
        />
      </Label>
      <br />

      {/* ERRORS */}
      <Button disabled={disabled} type="submit">
        Submit
      </Button>
      <Link to="/available-classes">
        <input type="button" value="Cancel" />
      </Link>
      <Button onClick={() => onDelete(class_id)}>Delete</Button>
    </Form>
  );
};

export default EditClassForm;
