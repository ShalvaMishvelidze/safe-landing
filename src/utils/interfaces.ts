export interface Business {
  Id: string;
  Name: string;
  Header: string;
  Description: string;
  Path: string;
  TargetAmount: number;
  CurrentAmount: number;
  Deadline: string;
  Charity: false;
  Percent: number;
  State: string;
  CreatedAt: string;
  IsOwner: true;
  Investments: any[];
  Charities: any[];
}

export interface User {
  Id: string;
  Username: string;
  Email: string;
  Phone: string;
  Path: string;
  IsOwner: boolean;
  Businesses: Business[];
}
