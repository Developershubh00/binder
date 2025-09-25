export const USER_ROLES = {
  MASTER_ADMIN: 'master_admin',
  COMPANY_ADMIN: 'company_admin', 
  MANAGER: 'manager',
  EMPLOYEE: 'employee'
};

export const DEMO_USERS = [
  {
    id: '1',
    email: 'admin@binder.com',
    password: 'admin123',
    role: USER_ROLES.MASTER_ADMIN,
    name: 'System Administrator',
    company: 'Binder Platform'
  },
  {
    id: '2', 
    email: 'company@textilex.com',
    password: 'company123',
    role: USER_ROLES.COMPANY_ADMIN,
    name: 'John Smith',
    company: 'TextileX Manufacturing'
  },
  {
    id: '3',
    email: 'manager@textilex.com', 
    password: 'manager123',
    role: USER_ROLES.MANAGER,
    name: 'Sarah Johnson',
    company: 'TextileX Manufacturing'
  }
];