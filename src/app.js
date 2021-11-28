import express from 'express';
import cors from 'cors';

import * as lawyerController from './controllers/lawyerController.js';
import * as companyController from './controllers/companyController.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sign-lawyer-up', lawyerController.createLawyer);

app.post('/sign-company-up', companyController.createCompany);

export default app;
