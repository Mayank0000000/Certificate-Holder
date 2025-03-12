import { createSlice } from "@reduxjs/toolkit";

interface CertificateDetails {
  certification: string;
  issuer: string;
  file: File | "";
}

interface InitialValue {
  certificates: CertificateDetails[];
  totalFileUploaded: number;
}

const initialState: InitialValue = {
  certificates:[],
  totalFileUploaded:0
};

const detailsSlice = createSlice({
  name: "Details",
  initialState,
  reducers: {
    fetchDetails: (state, action) => {
      state.certificates.push(action.payload); 
      state.totalFileUploaded += 1; 
    },
  },
});

export const detailsActions = detailsSlice.actions;

export default detailsSlice;
