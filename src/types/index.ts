export interface User {
  id: string;
  email: string;
  name: string;
  role: 'investor' | 'admin' | 'analyst';
  avatar?: string;
  lastLogin?: Date;
  twoFactorEnabled: boolean;
}

export interface Fund {
  id: string;
  name: string;
  vintage: number;
  size: number;
  committed: number;
  called: number;
  distributed: number;
  nav: number;
  tvpi: number;
  dpi: number;
  irr: number;
  status: 'active' | 'fundraising' | 'closed';
}

export interface PortfolioCompany {
  id: string;
  name: string;
  description: string;
  sector: string;
  investmentDate: Date;
  amountInvested: number;
  currentValuation: number;
  status: 'active' | 'exited' | 'written-off';
  logo?: string;
  lastUpdate?: Date;
}

export interface Document {
  id: string;
  title: string;
  type: 'legal' | 'financial' | 'tax' | 'report';
  category: string;
  uploadDate: Date;
  size: number;
  downloadUrl: string;
  fundId?: string;
  companyId?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: Date;
  priority: 'high' | 'medium' | 'low';
  author: string;
  readBy: string[];
}

export interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  date: Date;
  read: boolean;
  thread?: string;
}