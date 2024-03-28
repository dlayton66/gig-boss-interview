import data from "../data/income_data_2023_24.json";
import Band from "../interfaces/Band.ts";

function ExportData() {
  const getMembersCSV = (members: Member[]) => {
    return members
      .sort((a, b) => b.income - a.income)
      .map((member: Member) => `${member.name},${member.income}`)
      .join("\n");
  };

  const getTotalsCSV = (members: Member[]) => {
    let output = "";
    output += "Total Paid to Members Who Made >= $600,";
    output += members
      .filter((member) => member.income >= 600 && member.name != "You")
      .reduce((accumulator, member) => accumulator + member.income, 0);
    output += "\n";
    output += "Total Paid to Members Who Made < $600,";
    output += members
      .filter((member) => member.income < 600 && member.name != "You")
      .reduce((accumulator, member) => accumulator + member.income, 0);
    output += "\n";
    output += "Total Paid to All Members,";
    output += members
      .filter((member) => member.name != "You")
      .reduce((accumulator, member) => accumulator + member.income, 0);
    output += "\n";
    output += "Total Income for 2023-24,";
    output += members.reduce(
      (accumulator, member) => accumulator + member.income,
      0
    );
    output += "\n";
    output += "Total Personal Income,";
    output += members
      .filter((member) => member.name === "You")
      .reduce((accumulator, member) => accumulator + member.income, 0);
    return output;
  };

  const downloadCSV = () => {
    const members = data.bands.flatMap((band: Band) => band.members);

    const headers = "Musician,Income\n";
    const membersCSV = getMembersCSV(members);
    const totalsCSV = getTotalsCSV(members);
    const csvContent = `data:text/csv;charset=utf-8,${headers}${membersCSV}\n\n${totalsCSV}`;

    const encodedURI = encodeURI(csvContent);
    window.open(encodedURI);
  };

  return <button onClick={downloadCSV}>Export Data</button>;
}

export default ExportData;
