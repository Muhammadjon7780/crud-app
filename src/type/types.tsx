export interface BranchProps {
  id: number;
  name: string;
  region:
    | {
        label: string;
        value: string;
      }
    | undefined;
  login?: string;
  password?: string;
  phone?: string;
  leader:
    | {
        label: string;
        value: string;
      }
    | undefined;
}
