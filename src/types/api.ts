export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  status: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  status: string;
  score: number;
  source: string;
  createdAt: string;
}

export interface Opportunity {
  id: string;
  title: string;
  value: number;
  stage: string;
  probability: number;
  contactId: string;
  expectedCloseDate: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  dueDate: string;
  assignedTo: string;
  createdAt: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  contactId: string;
  assignedTo?: string;
  createdAt: string;
}