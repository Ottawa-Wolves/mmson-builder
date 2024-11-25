export interface IPageMMSONSchema {
  children: Map<string, IPageMMSONSchema>;
  preventNav?: boolean;
  pageId: string;
  title: string;
}
