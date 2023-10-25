// Define logic for reservation module

import { useForm } from "react-hook-form";
import { API, Amplify } from "aws-amplify";
import { createReservation, createUser } from "@/graphql/mutations";
import { CreateReservationMutation } from "@/API";
import awsConfig from "@/aws-exports";

Amplify.configure(awsConfig);

export const useLogic = () => {
  // difine types to hold data corresponding to the form
  type Inputs = {
    name: string;
    email: string;
    departureFlight: string;
    departurePlace: string;
    destination: string;
    date: string;
    numberOfSuitecase: string;
    comments: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (input: Inputs) => {
    // register data to database using graphql mutation
    const res = await API.graphql({
      query: createUser,
      variables: {
        input: {
          name: input.name,
          email: input.email,
        },
      },
      authMode: "API_KEY",
    });
    if ("data" in res) {
      const reservation = await API.graphql({
        query: createReservation,
        variables: {
          input: {
            departureFlight: input.departureFlight,
            departurePlace: input.departurePlace,
            destination: input.destination,
            date: input.date,
            numberOfSuitecase: input.numberOfSuitecase,
            comments: input.comments,
            reservationUserId: res.data.createUser.id,
          },
        },
        authMode: "API_KEY",
      });

      console.log(reservation);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
