/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReservation = /* GraphQL */ `query GetReservation($id: ID!) {
  getReservation(id: $id) {
    id
    user {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    departureFlight
    departurePlace
    destination
    date
    numberOfSuitecase
    comments
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    reservationUserId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReservationQueryVariables,
  APITypes.GetReservationQuery
>;
export const listReservations = /* GraphQL */ `query ListReservations(
  $filter: ModelReservationFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      departureFlight
      departurePlace
      destination
      date
      numberOfSuitecase
      comments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reservationUserId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReservationsQueryVariables,
  APITypes.ListReservationsQuery
>;
export const syncReservations = /* GraphQL */ `query SyncReservations(
  $filter: ModelReservationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReservations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      departureFlight
      departurePlace
      destination
      date
      numberOfSuitecase
      comments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reservationUserId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReservationsQueryVariables,
  APITypes.SyncReservationsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
