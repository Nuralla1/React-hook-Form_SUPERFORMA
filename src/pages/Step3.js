import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FileInput from "../components/Fileinput";
import Form from "../components/Form";
import MainContainer from "../components/MainContainer";
import PrimaryButton from "../components/PrimaryButton";
import { useDataContext } from "../context/DataContext";

const Step3 = () => {
  const { data, setValues } = useDataContext();
  const { control, handleSubmit } = useForm({
    defaultValues: { files: data.files },
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/result");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography>Step3</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
