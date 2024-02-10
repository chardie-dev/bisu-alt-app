export const current_employment_list_const = [
  "Gainfully Employed",
  "Not Employed",
  "Self Employed"
] as const

export type currentEmploymentStatusType = {
  key: string,
  value: string
}

export const current_employment_list = [
  {
    key: 'employed',
    value: 'Gainfully Employed'
  },
  {
    key: 'not_employed',
    value: 'Not Employed'
  },
  {
    key: 'self_employed',
    value: 'Self Employed'
  }
]

export const number_of_job_experience_list_const = [
  "Never been employed (No job experience except for OJT or internships)",
  "Single or multiple employment (1 or more job experience in different companies)"
] as const

export type numberOfJobExperienceType = {
  key: string,
  value: string
}

export const number_of_job_experience_list = [
  {
    key: 'never_been_employed',
    value: 'Never been employed (No job experience except for OJT or internships)'
  },
  {
    key: 'single_multiple_employment',
    value: 'Single or multiple employment (1 or more job experience in different companies)'
  },
]

export const no_experience_reason_list_const = [
  "Advanced for further studies",
  "Family concerns and decided not to find a job",
  "Health-related concern(s)",
  "Fear of inadequacy of skill(s)",
  "No job opportunity",
  "Did not look for a job",
  "Lack of professional eligibility requirements",
  "Other reason(s)"
] as const

export const no_experience_reason_list_arr = [
  "Advanced for further studies",
  "Family concerns and decided not to find a job",
  "Health-related concern(s)",
  "Fear of inadequacy of skill(s)",
  "No job opportunity",
  "Did not look for a job",
  "Lack of professional eligibility requirements",
  "Other reason(s)"
] as const

export type noExperienceReasonType = {
  key: string,
  value: string
}

export const no_experience_reason_list = [
  { 
    key: "no_experience_reason_1",
    value: "Advanced for further studies",
  },
  { 
    key: "no_experience_reason_2",
    value: "Family concerns and decided not to find a job",
  },
  { 
    key: "no_experience_reason_3",
    value: "Health-related concern(s)",
  },
  { 
    key: "no_experience_reason_4",
    value: "Fear of inadequacy of skill(s)",
  },
  { 
    key: "no_experience_reason_5",
    value: "No job opportunity",
  },
  { 
    key: "no_experience_reason_6",
    value: "Did not look for a job",
  },
  { 
    key: "no_experience_reason_7",
    value: "Lack of professional eligibility requirements",
  },
  { 
    key: "no_experience_reason_8",
    value: "Other reason(s)"
  },
]