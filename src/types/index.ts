export type EmployeeType = {
  id: string;
  name: string;
  last_name: string;
  birthday: Date;
};

export type EmployeeSubmitForm = {
  name: string;
  last_name: string;
  birthday: Date;
};

export interface AuthState {
  value: string;
  status: "notAuthenticated" | "authenticated";
}

export type StoreState = {
  employees: Array<EmployeeType>;
  auth: AuthState;
};

export type Image = {
  image: {
    src: any;
    id: string;
  };
};

export type Images = {
  images: Image[];
};
