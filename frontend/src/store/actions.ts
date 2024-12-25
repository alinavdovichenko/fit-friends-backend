import { createAction } from '@reduxjs/toolkit';
import { Route } from '../types/route';

export const redirectToRoute = createAction<Route>('app/redirectToRoute');
