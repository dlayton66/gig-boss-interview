import { ChangeEvent } from 'react';

interface Props {
  band_names: string[];
  isIncomeByMusician: boolean;
  onSelect: (selection: string) => void;
}

function BandDropdown({ band_names, isIncomeByMusician, onSelect }: Props) {
  const passSelection = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value)
  }

  return (
    <select className="band-select" defaultValue="" onChange={passSelection}>
      <option value="" hidden>Income by Band</option>
      {isIncomeByMusician && (
        <option value="All Bands">All Bands</option>
      )}
      {band_names.map((band_name) => (
        <option key={band_name} value={band_name}>{band_name}</option>
      ))}
    </select>
  );
}

export default BandDropdown;
