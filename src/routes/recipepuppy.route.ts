import express from 'express';
import { RecipepuppyController } from '../controllers/recipepuppy.controller';
import { HOME, RECIPE } from './routes';
import { } from 'module';

const app = express.Router();
app.get(HOME, RecipepuppyController.home);
app.get(RECIPE, RecipepuppyController.loadRecipePuppy);

export default app;
