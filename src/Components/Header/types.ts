export interface HeaderProps {
  name: string;
  role: string;
  location: string;
  social?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}
