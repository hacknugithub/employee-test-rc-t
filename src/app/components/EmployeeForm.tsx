import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { EmployeeSubmitForm } from "../../types";
import { useAppDispatch } from "../hooks";

import "react-datepicker/dist/react-datepicker.css";
import { createEmployeeAsync } from "../../features/employees/employeeSlice";

type Props = {};

export default function EmployeeForm({}: Props) {
  const dispatch = useAppDispatch();
  const validatorSchema = Yup.object().shape({
    name: Yup.string().required("your name is required").max(30),
    last_name: Yup.string().required("your last name is required").max(30),
    birthday: Yup.date().nullable().min(new Date(1900, 0, 1)),
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<EmployeeSubmitForm>({
    resolver: yupResolver(validatorSchema),
  });

  const onSubmit = (data: EmployeeSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    dispatch(createEmployeeAsync(data));
    reset();
  };

  return (
    <div className="container p-2">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jane"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name")}
            />

            <div className="invalid-feedback">{errors.name?.message}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Doe"
              className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
              {...register("last_name")}
            />
            <div className="invalid-feedback">{errors.last_name?.message}</div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDatePicker">
            <Form.Label>Birthday</Form.Label>
            <Controller
              control={control}
              name="birthday"
              render={({ field }) => (
                <DatePicker
                  className="form-control"
                  placeholderText="Select Birthday"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
