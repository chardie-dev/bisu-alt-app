export const createEnumFromObject = <T extends Record<string, string>> (obj: T): Record<keyof T, keyof T> => {
  const enumObj: Record<keyof T, keyof T> = {} as Record<keyof T, keyof T>;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      enumObj[key] = key;
    }
  }

  return enumObj;
}