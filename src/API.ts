/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReservationInput = {
  id?: string | null,
  departureFlight: string,
  departurePlace: string,
  destination: string,
  date: string,
  numberOfSuitecase: number,
  comments?: string | null,
  _version?: number | null,
  reservationUserId?: string | null,
};

export type ModelReservationConditionInput = {
  departureFlight?: ModelStringInput | null,
  departurePlace?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  date?: ModelStringInput | null,
  numberOfSuitecase?: ModelIntInput | null,
  comments?: ModelStringInput | null,
  and?: Array< ModelReservationConditionInput | null > | null,
  or?: Array< ModelReservationConditionInput | null > | null,
  not?: ModelReservationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  reservationUserId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Reservation = {
  __typename: "Reservation",
  id: string,
  user?: User | null,
  departureFlight: string,
  departurePlace: string,
  destination: string,
  date: string,
  numberOfSuitecase: number,
  comments?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  reservationUserId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReservationInput = {
  id: string,
  departureFlight?: string | null,
  departurePlace?: string | null,
  destination?: string | null,
  date?: string | null,
  numberOfSuitecase?: number | null,
  comments?: string | null,
  _version?: number | null,
  reservationUserId?: string | null,
};

export type DeleteReservationInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelReservationFilterInput = {
  id?: ModelIDInput | null,
  departureFlight?: ModelStringInput | null,
  departurePlace?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  date?: ModelStringInput | null,
  numberOfSuitecase?: ModelIntInput | null,
  comments?: ModelStringInput | null,
  and?: Array< ModelReservationFilterInput | null > | null,
  or?: Array< ModelReservationFilterInput | null > | null,
  not?: ModelReservationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  reservationUserId?: ModelIDInput | null,
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection",
  items:  Array<Reservation | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionReservationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  departureFlight?: ModelSubscriptionStringInput | null,
  departurePlace?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  numberOfSuitecase?: ModelSubscriptionIntInput | null,
  comments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReservationFilterInput | null > | null,
  or?: Array< ModelSubscriptionReservationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateReservationMutationVariables = {
  input: CreateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type CreateReservationMutation = {
  createReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type UpdateReservationMutationVariables = {
  input: UpdateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type UpdateReservationMutation = {
  updateReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type DeleteReservationMutationVariables = {
  input: DeleteReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type DeleteReservationMutation = {
  deleteReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetReservationQueryVariables = {
  id: string,
};

export type GetReservationQuery = {
  getReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type ListReservationsQueryVariables = {
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationsQuery = {
  listReservations?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "Reservation",
      id: string,
      departureFlight: string,
      departurePlace: string,
      destination: string,
      date: string,
      numberOfSuitecase: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      reservationUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncReservationsQueryVariables = {
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReservationsQuery = {
  syncReservations?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "Reservation",
      id: string,
      departureFlight: string,
      departurePlace: string,
      destination: string,
      date: string,
      numberOfSuitecase: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      reservationUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnCreateReservationSubscription = {
  onCreateReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type OnUpdateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnUpdateReservationSubscription = {
  onUpdateReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type OnDeleteReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnDeleteReservationSubscription = {
  onDeleteReservation?:  {
    __typename: "Reservation",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    departureFlight: string,
    departurePlace: string,
    destination: string,
    date: string,
    numberOfSuitecase: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    reservationUserId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
