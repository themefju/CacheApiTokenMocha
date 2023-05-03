export interface TokenObject {
  token_type: string;
  expires_in: number;
  access_token: string;
}

export interface AnimalsResponse {
  animals: Array<object>;
  pagination: object;
}
