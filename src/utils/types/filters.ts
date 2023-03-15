export type TBlacklistFilters =
  | 'nsfw'
  | 'religious'
  | 'political'
  | 'racist'
  | 'sexist'
  | 'explicit';

export type TCategory =
  | 'Any'
  | 'Programming'
  | 'Misc'
  | 'Dark'
  | 'Pun'
  | 'Spooky'
  | 'Christmas';

export interface IFilterOption {
  label: string;
  value: TBlacklistFilters | TCategory;
  default?: boolean;
}
