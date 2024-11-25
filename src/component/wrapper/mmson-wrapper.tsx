import { useEffect, useState } from "react";

import { IBaseMMSONSchema } from "../../interface/config-schema/base-schema.interface";
import { IPageMMSONSchema } from "../../interface/config-schema/page-schema.interface";

import Page from "../page/page";

import "./wrapper.css";

function MMSONWrapper(args: { config: IBaseMMSONSchema }) {

  const [currentPage, setCurrentPage] = useState<IPageMMSONSchema>();
  const [pages, setPages] = useState<Map<string, IPageMMSONSchema>>(new Map<string, IPageMMSONSchema>());

  useEffect(() => {

    setPages(
      (args?.config?.pages ?? new Map<string, IPageMMSONSchema>())
    );

    setCurrentPage(args?.config?.pages?.get(args?.config?.landingPage));
  }, [args.config]);

  function isActive(pageId: string): boolean {

    return (pageId === currentPage?.pageId);
  }

  return <>
    {
      pages.forEach((page: IPageMMSONSchema, pageId: string) => {
        <Page active={isActive(pageId)} config={page}></Page>
      })
    }
  </>;
}

export default MMSONWrapper;
