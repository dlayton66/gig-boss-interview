import { useState } from "react";
import "../components/RenderArea.css";
import Band from "../interfaces/Band";
import {
  get_all_members_sorted,
  get_band_income,
  get_band_members_sorted,
  get_my_income,
} from "../utils/BandUtils";
import { Member } from "../interfaces/Member";

interface Props {
  band: Band | undefined;
  isIncomeByMusician: boolean;
}

function RenderArea({ band, isIncomeByMusician }: Props) {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("All Members");

  let filtered_members: Member[] = [];
  let my_income: number = 0;

  if (isIncomeByMusician) {
    let members_plus_self = band
      ? get_band_members_sorted(band)
      : get_all_members_sorted();
    my_income = get_my_income(members_plus_self);
    filtered_members = members_plus_self.filter(
      (member) => member.name != "You"
    );

    if (dropdown === "Members >= $600") {
      filtered_members = filtered_members.filter(
        (member) => member.income >= 600
      );
    } else if (dropdown === "Members < $600") {
      filtered_members = filtered_members.filter(
        (member) => member.income < 600
      );
    }

    if (search) {
      filtered_members = filtered_members.filter((member) =>
        member.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const applyThresholdColor = (income: number) => {
    return income >= 600 && dropdown === "All Members"
      ? "over-threshold"
      : "";
  };

  return (
    <div className="render-area-background">
      <div className="render-area">
        {band && !isIncomeByMusician && (
          <>
            <div className="render-title">{band.band_name}</div>
            <div>Total Band Income: ${get_band_income(band)}</div>
            <div className="divider"></div>
            <div className="bottom-container">
              {band.members.map((member) => (
                <div>
                  {member.name === "You" ? "My Income" : member.name}: $
                  {member.income}
                </div>
              ))}
            </div>
          </>
        )}
        {isIncomeByMusician && (
          <>
            <div className="filter-options">
              <input
                className="search-filter"
                type="text"
                placeholder="Search by name"
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="dropdown-filter"
                defaultValue="All Members"
                onChange={(e) => setDropdown(e.target.value)}
              >
                <option value="All Members">All Members</option>
                <option value="Members >= $600">{"Members >= $600"}</option>
                <option value="Members < $600">{"Members < $600"}</option>
              </select>
            </div>
            <div className="render-title">{dropdown}</div>
            <div className={applyThresholdColor(my_income)}>
              My Income: ${my_income}
            </div>
            <div className="divider"></div>
            <div className="bottom-container">
              {filtered_members
                .filter((member) => member.name != "You")
                .map((member) => (
                  <div className={applyThresholdColor(member.income)}>
                    {member.name}: ${member.income}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RenderArea;
