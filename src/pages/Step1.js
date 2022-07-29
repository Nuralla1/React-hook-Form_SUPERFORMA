import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import Input from "../components/Input";
import MainContainer from "../components/MainContainer";
import PrimaryButton from "../components/PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("Required"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Required"),
});

const Step1 = () => {
  const navigate = useNavigate();
  const { data, setValues } = useDataContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    navigate("/step2");
    setValues(data);
  }

  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          label="First Name"
          type="text"
          id="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />

        <Input
          {...register("lastName")}
          label="Last Name"
          type="text"
          id="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
