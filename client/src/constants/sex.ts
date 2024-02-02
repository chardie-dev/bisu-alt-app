export const sex_list_const = [
  "Male",
  "Female",
  "Intersex"
] as const

export type sexType = {
  name: string,
  key: string
}

export const sex_list = [
  { name: "Male", key: "M" },
  { name: "Female", key: "F" },
  { name: "Intersex", key: "I" },
]