import { IPageMMSONSchema } from "./page-schema.interface";


export interface IBaseMMSONSchema {
  landingPage: string;
  pages: Map<string, IPageMMSONSchema>;
}
