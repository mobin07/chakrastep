// author: Abhishek Kumar Singh - https://abheist.com/

import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 100);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
          })}
        />
        <FormLabel htmlFor="name">Password</FormLabel>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
        <Input
          id="password"
          placeholder="password"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
          })}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
