import { IBaseMMSONSchema } from "../interface/config-schema/base-schema.interface";

export class SchemaValidationError extends Error {

  schema: IBaseMMSONSchema;

  constructor(message: string, schema: IBaseMMSONSchema) {

    super(message);

    this.schema = schema;
  }
}
