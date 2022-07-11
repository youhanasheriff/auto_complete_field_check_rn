/* eslint-disable camelcase */

export type CardId = number | undefined;

export interface CreditCard {
  id: number;
  isPrimary: boolean;
  endDigits: string;
  tokenId: string;
  cardType: string;
  createdAt: string;
}

export interface CreditCardResponse {
  id: number;
  attributes: {
    is_primary: boolean;
    end_digits: string;
    token_id: string;
    card_type: string;
    created_at: string;
  };
}
