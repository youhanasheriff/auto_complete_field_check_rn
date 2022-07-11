/* eslint-disable camelcase */
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { AddressDetails } from '../types/address';

export interface ChatMessage extends GiftedChatMessage {
  component?: ChatComponent;
  isActive: boolean;
  isSelf: boolean;
  value?: string | number | boolean | AddressDetails;
  tooltip?: string;
  type?: MeyaMessageType;
}

export interface ChatComponent {
  type: ComponentType;
  dataSource?: string;
  defaultValue?: string;
  defaultTitle?: string;
  route?: string;
  params?: { slug: string };
}

export enum ComponentType {
  QuickReply = 'quick_reply',
  DatePicker = 'datepicker',
  Address = 'address',
  RadioSelect = 'radio_select',
  MultiSelect = 'multi_select',
  NumberInput = 'number_input',
  QuestionsCompleted = 'questions_completed',
  End = 'end',
}

// Meya-specific message type
export interface MeyaMessage {
  id: string;
  isActiveEvent: boolean;
  isSelfEvent: boolean;
  type: MeyaMessageType;
  data: MeyaMessageData;
}

export enum MeyaMessageType {
  Say = 'meya.text.event.say',
  Ask = 'meya.text.event.ask',
  Continue = 'meya.orb.event.screen.continue',
  Open = 'meya.session.event.page.open',
}

export interface MeyaMessageData {
  text?: string;
  context: MeyaMessageContext;
  user_id: string;
}

export interface MeyaMessageContext {
  component?: {
    type: ComponentType;
    data_source?: string;
    default_value?: string;
    default_title?: string;
    route?: string;
    params?: { slug: string };
  };
  tooltip?: string;
  value?: string;
}
