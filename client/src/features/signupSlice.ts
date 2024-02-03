import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

export type GeneralInformationType = {
  name: {
    first: string,
    middle?: string,
    last: string
  },
  permanentAddress: {
    province: string,
    city: string,
    street: string
  },
  placeOfBirth: {
    province: string,
    city: string
  },
  email: string,
  mobileNumber: string,
  civilStatus: string,
  sex: string,
  dateOfBirth: string,
  familyIncome: number
}

type SignupState = {
  generalInformation: GeneralInformationType
}

const initialState: SignupState = {
  generalInformation: {
    name: {
      first: "",
      middle: "",
      last: ""
    },
    permanentAddress: {
      province: "",
      city: "",
      street: ""
    },
    placeOfBirth: {
      province: "",
      city: ""
    },
    email: "",
    mobileNumber: "",
    civilStatus: "",
    sex: "",
    dateOfBirth: "",
    familyIncome: 0
  }
}

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    saveGeneralInformation (state, action: PayloadAction<GeneralInformationType>) {
      const { payload } = action
      state = {
        ...state,
        generalInformation: payload
      }
      return state
    },
    clearSignupData (state) {
      state = initialState
      return state
    }
  }
})

export const signupSelector = (state: RootState) => state.signupData
export const { saveGeneralInformation, clearSignupData } = signupSlice.actions
export const signupReducer = signupSlice.reducer