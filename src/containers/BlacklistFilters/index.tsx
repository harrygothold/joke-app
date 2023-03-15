import { ChangeEvent } from "react";
import Filters from "../../components/Filters";
import { blacklistData } from "../../data/blacklist";
import { createFiltersList } from "../../utils/filters";
import { TBlacklistFilters } from "../../utils/types/filters";

interface IBlacklistFiltersProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BlacklistFilters = ({ handleChange }: IBlacklistFiltersProps) => {
  return (
    <Filters
      options={createFiltersList<TBlacklistFilters>(blacklistData)}
      title="Blacklist"
      handleChange={handleChange}
    />
  );
};

export default BlacklistFilters;
