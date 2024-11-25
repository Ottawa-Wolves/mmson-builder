import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SchemaValidationError } from "./error/schema-validation.error.ts";

import { IBaseMMSONSchema } from "./interface/config-schema/base-schema.interface.ts";

import MMSONWrapper from "./component/wrapper/mmson-wrapper.tsx";
import { IPageMMSONSchema } from "./interface/config-schema/page-schema.interface.ts";

export namespace MMSON {
  export function bootstrap(config: IBaseMMSONSchema, rootNode: string): void {

    if (validateBaseConfig(config)) {
      createRoot(document.getElementById(rootNode)!).render(
        <StrictMode>
          <MMSONWrapper config={config} />
        </StrictMode>
      );
    }
  }

  export function validateBaseConfig(config: IBaseMMSONSchema): boolean {

    if (!config.pages) {
      throw new SchemaValidationError("Pages must be defined in the base schema", config);
    }

    let errorMessage: string | undefined;

    config.pages.forEach((page: IPageMMSONSchema, key: string) => {

      errorMessage = _validatePageConfig(page, key);

      if (errorMessage) {
        throw new SchemaValidationError(errorMessage, config);
      }
    });

    return true;
  }


  function _validatePageConfig(pageConfig: IPageMMSONSchema, key: string): string | undefined {

    if (pageConfig.pageId !== key) {
      return `The pages must be mapped to their own page ID. ${pageConfig.pageId} is instead mapped to ${key}.`;
    }

    return undefined;
  }
}
