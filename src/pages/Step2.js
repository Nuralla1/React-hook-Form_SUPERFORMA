import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Input from "../components/Input";
import MainContainer from "../components/MainContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useDataContext } from "../context/DataContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Required"),
});

const normolizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

const Step2 = () => {
  const navigate = useNavigate();
  const { data, setValues } = useDataContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNum: data.phoneNum,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    navigate("/step3 ");
    setValues(data);
  };

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          label="Email"
          type="text"
          id="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          label="Do you have a phone?"
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              {...register("hasPhone")}
            />
          }
        />
        {hasPhone && (
          <Input
            {...register("phoneNum")}
            type="tel"
            label="Phone Number"
            onChange={(event) =>
              (event.target.value = normolizePhoneNumber(event.target.value))
            }
          />
        )}

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
