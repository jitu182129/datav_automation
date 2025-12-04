const environments = {
  dev: { baseURL: 'https://qa.datav.in/', credentials: { email: 'datav@skill-mine.com', password: 'DataV123@'} },
  staging: { baseURL: 'https://staging.example.com', credentials: { email: 'staginguser@example.com', password: 'StagingPass123' } },
  production: { baseURL: 'https://example.com', credentials: { email: 'produser@example.com', password: 'ProdPass123' } }
};

const env = process.env.NODE_ENV || 'dev';

if (!environments[env]) 
  throw new Error(`Environment "${env}" is not defined`);

module.exports = environments[env];
