import { Member } from "../interfaces/Member.ts";
import { get_all_members_sorted } from "../utils/BandUtils.ts";

function ExportData() {
  const getMembersCSV = (members: Member[]) => {
    return members
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
    const members = get_all_members_sorted();
    const members_minus_self = members.filter((member) => member.name != 'You')

    const headers = "Musician,Income\n";
    const membersCSV = getMembersCSV(members_minus_self);
    const totalsCSV = getTotalsCSV(members);
    const csvContent = `data:text/csv;charset=utf-8,${headers}${membersCSV}\n\n${totalsCSV}`;

    const encodedURI = encodeURI(csvContent);
    window.open(encodedURI);
  };

  return <button onClick={downloadCSV}>Export Data</button>;
}

export default ExportData;
