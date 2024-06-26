import { Dispatch, ReactNode } from 'react'

import { TipMessagesProps } from '@/shared/dynamicallyVariable/context/config'
import { B3SStorage } from '@/utils'

export interface CustomerInfo {
  phoneNumber: string
  firstName: string
  lastName: string
  emailAddress: string
  customerGroupId?: number
}

export type AlertTip = 'error' | 'info' | 'success' | 'warning'
export interface State {
  stateCode?: string
  stateName?: string
  id?: string
}
export interface Country {
  countryCode: string
  countryName: string
  id?: string
  states: State[]
}

export interface ChannelCurrenciesProps {
  channel_id: number
  default_currency: string
  enabled_currencies: Array<string>
}

export interface QuoteConfigProps {
  key: string
  value: string
  extraFields: CustomFieldItems
}

export interface CurrencyProps {
  auto_update: boolean
  country_iso2: string
  currency_code: string
  currency_exchange_rate: string
  decimal_places: number
  decimal_token: string
  default_for_country_codes: Array<string>
  enabled: boolean
  id: string
  is_default: boolean
  is_transactional: boolean
  last_updated: string
  name: string
  thousands_token: string
  token: string
  token_location: 'left' | 'right'
}

export interface OpenAPPParamsProps {
  quoteBtn: string
  shoppingListBtn: string
}

export interface TimeFormatProps {
  display: string
  export: string
  extendedDisplay: string
  offset: number
}

export interface GlobalState {
  isCheckout: boolean
  isCloseGotoBCHome: boolean
  isB2BUser: boolean
  realRole: number | string
  logo: string
  isCompanyAccount: boolean
  isAgenting: boolean
  salesRepCompanyId: string
  salesRepCompanyName: string
  salesRepCustomerGroupId: string
  B3UserId: number | string
  tipMessage: TipMessagesProps
  addressConfig?: {
    key: string
    isEnabled: string
  }[]
  storefrontConfig?: {
    [k: string]:
      | boolean
      | {
          value: boolean
          enabledStatus: boolean
        }
    shoppingLists: boolean
    tradeProfessionalApplication: boolean
  }
  bcLanguage: string
  storeEnabled: boolean
  storeName: string
  currentChannelId: number
  b2bChannelId: number
  countriesList?: Country[]
  productQuoteEnabled: boolean
  cartQuoteEnabled: boolean
  shoppingListEnabled: boolean
  registerEnabled: boolean
  quoteConfig: QuoteConfigProps[]
  openAPPParams: OpenAPPParamsProps
  showPageMask: boolean
  timeFormat: TimeFormatProps
  enteredInclusiveTax: boolean
  blockPendingAccountOrderCreation: boolean
  quoteDetailHasNewMessages: boolean
  shoppingListClickNode: HTMLElement | null
  multiStorefrontEnabled: boolean
}

export const initState: GlobalState = {
  isCheckout: false,
  isCloseGotoBCHome: false,
  isB2BUser: B3SStorage.get('isB2BUser') || false,
  B3UserId: B3SStorage.get('B3UserId') || '',
  realRole: B3SStorage.get('realRole') || 100,
  isAgenting: B3SStorage.get('isAgenting') || false,
  salesRepCompanyId: B3SStorage.get('salesRepCompanyId') || '',
  salesRepCompanyName: B3SStorage.get('salesRepCompanyName') || '',
  salesRepCustomerGroupId: B3SStorage.get('salesRepCustomerGroupId') || '',
  logo: '',
  bcLanguage: 'en',
  isCompanyAccount: false,
  storeEnabled: false,
  storeName: '',
  currentChannelId: 1,
  b2bChannelId: 1,
  countriesList: [],
  productQuoteEnabled: false,
  cartQuoteEnabled: false,
  shoppingListEnabled: false,
  registerEnabled: true,
  quoteConfig: [],
  openAPPParams: {
    quoteBtn: '',
    shoppingListBtn: '',
  },
  showPageMask: false,
  timeFormat: B3SStorage.get('timeFormat') || {},
  enteredInclusiveTax: false,
  blockPendingAccountOrderCreation:
    B3SStorage.get('blockPendingAccountOrderCreation') || true,
  quoteDetailHasNewMessages: false,
  shoppingListClickNode: null,
  tipMessage: {},
  multiStorefrontEnabled: false,
}

export interface GlobalAction {
  type: string
  payload: Partial<GlobalState>
}

export type DispatchProps = Dispatch<Partial<GlobalAction>>
export interface GlobalContext {
  state: GlobalState
  dispatch: DispatchProps
}

export interface GlobaledProviderProps {
  children: ReactNode
}
