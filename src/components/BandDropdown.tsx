interface Props {
  band_names: string[];
  onSelect: (selection: string) => void;
}

function BandDropdown({ band_names, onSelect }: Props) {
  const passSelection = (event) => {
    onSelect(event.target.value)
  }

  return (
    <select onChange={passSelection}>
      <option value="" hidden selected>Income by Band</option>
      {band_names.map((band_name) => (
        <option key={band_name} value={band_name}>{band_name}</option>
      ))}
    </select>
  );
}

export default BandDropdown;
