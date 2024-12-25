export interface Token {
  id?: number;
  tokenId: string;
  createdAt: Date;
  userId: number;
  exp: Date;
}
