import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../Hooks/UseAuth";

const MyVerticallyCenteredModal = (props) => {
  const { user } = useAuth();
  console.log(user.displayName);

  const [users, setUsers] = useState({});
  const { id } = useParams();

  console.log(users.name);
  useEffect(() => {
    fetch(`http://localhost:5000/offers/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/booking", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully");
      }
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Form.Label>User Name</Form.Label>
          <Form.Control
            placeholder="Name"
            value={user.displayName}
            {...register("userName")}
          />
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            {...register("email")}
            value={user.email}
          />
          <br />
          {/* register your input into the hook by invoking the "register" function */}
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            placeholder="Package Name"
            value={users.name}
            {...register("name")}
          />
          <br />
          <Form.Label>Price</Form.Label>
          <Form.Control
            placeholder="Price"
            value={users.price}
            {...register("price")}
          />
          <br />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="Phone Number" {...register("phone")} />

          {/* include validation with required or other standard HTML validation rules */}

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <Form.Control className="bg-primary" type="submit" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
