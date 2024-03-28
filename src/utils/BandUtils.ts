import Band from "../interfaces/Band";
import data from "../data/income_data_2023_24.json";

export const get_band_income = (band: Band) => {
  return band.members.reduce((accumulator, member) => accumulator + member.income, 0);
}

export const get_band_by_name = (bandName: string) => {
  return data.bands.find((band) => band.band_name === bandName)
}