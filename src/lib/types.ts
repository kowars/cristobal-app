export type StatusOption = 'Trabajando' | 'Estudiando' | 'Durmiendo' | 'Libre';

export interface Status {
  type: StatusOption;
  message: string;
  mood: number;
}
