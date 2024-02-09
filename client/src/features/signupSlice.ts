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

type ProfessionalExaminationType = {
  nameOfExamination: string,
  dateOfExamination: string,
  rating: string,
}

export type EducationalBackgroundType = {
  campus: string,
  college: string,
  program: string,
  yearGraduated: number,
  professionalExaminations?: Array<ProfessionalExaminationType>
}

export type AdvancedStudiesType = {
  title: string,
  date: string,
  placeOfTrainingOrInstitution: string,
  reason?: string
}

export type AdvancedStudiesListType = Array<AdvancedStudiesType> | []

type SignupState = {
  generalInformation: GeneralInformationType,
  educationalBackground: EducationalBackgroundType,
  advancedStudies: AdvancedStudiesListType
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
  },
  educationalBackground: {
    campus: "",
    college: "",
    program: "",
    yearGraduated: 0,
    professionalExaminations: []
  },
  advancedStudies: []
}

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    saveGeneralInformation(state, action: PayloadAction<GeneralInformationType>) {
      const { payload } = action
      state = {
        ...state,
        generalInformation: payload
      }
      return state
    },
    saveEducationalBackground(state, action: PayloadAction<EducationalBackgroundType>) {
      const { payload } = action
      state = {
        ...state,
        educationalBackground: payload
      }
      return state
    },
    saveAdvancedStudies(state, action: PayloadAction<AdvancedStudiesListType>) {
      const { payload } = action
      state = {
        ...state,
        advancedStudies: payload
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
export const { saveGeneralInformation, saveEducationalBackground, saveAdvancedStudies, clearSignupData } = signupSlice.actions
export const signupReducer = signupSlice.reducer