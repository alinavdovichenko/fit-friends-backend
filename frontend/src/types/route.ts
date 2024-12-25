import { AppRoute } from '../consts';

export type Route = (typeof AppRoute)[keyof typeof AppRoute];
