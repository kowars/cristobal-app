export type StatusOption = 'Working' | 'Studying' | 'Sleeping' | 'Free';

export interface Status {
  type: StatusOption;
  message: string;
  mood: number;
}
