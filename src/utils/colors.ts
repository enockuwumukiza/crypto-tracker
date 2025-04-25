// utils/colors.ts
export const getTextColorByValue = (value: number): string => {
  return value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";
};
