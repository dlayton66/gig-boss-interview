import Band from "../interfaces/Band";
import data from "../data/income_data_2023_24.json";
import { Member } from "../interfaces/Member";

export const get_band_income = (band: Band) => {
  return band.members.reduce((accumulator, member) => accumulator + member.income, 0);
}

export const get_band_by_name = (bandName: string) => {
  return data.bands.find((band) => band.band_name === bandName)
}

export const get_band_members_sorted = (band: Band) => {
  return band.members.sort((a, b) => b.income - a.income)
}

export const get_my_income = (members: Member[]) => {
  return members.filter((member) => member.name === 'You').reduce((accumulator, member) => accumulator + member.income, 0)
}

export const get_all_members_sorted = () => {
  return data.bands.flatMap((band: Band) => band.members).sort((a, b) => b.income - a.income)
}