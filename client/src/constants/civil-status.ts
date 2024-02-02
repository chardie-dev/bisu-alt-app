export const civil_status_list_const = [
  "Single",
  "Married",
  "Single Parent",
  "Separated",
  "Widow/Widower"
] as const

export type civilStatusType = {
  name: string,
  key: string,
}

export const civil_status_list = [
  { name: "Single", key: "SGL" },
  { name: "Married", key: "MRD" },
  { name: "Single Parent", key: "SPT" },
  { name: "Separated", key: "SEP" },
  { name: "Widow/Widower", key: "WDW" },
]