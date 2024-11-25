// import { useEffect, useState } from "react";

import { IPageMMSONSchema } from "../../interface/config-schema/page-schema.interface";

import "./page.css";

function Page(args: { active: boolean, config: IPageMMSONSchema }) {

  return <>
    { args.config.title }
  </>;
}

export default Page;
