import { AxiosResponse } from 'axios';
import { client } from '../../client';
import { QueryRequestData, QueryRequestParams, QueryRequestConfig } from '../query';
import has from 'lodash-es/has';

type TokensRequestParams = Omit<TokensRequestData, 'action' | 'meta'>;

export class TokensRequestData extends QueryRequestData {
  type?: string;

  constructor(opts: QueryRequestParams) {
    super(opts);
    Object.assign(this, opts);
  }
}

export class TokensRequestConfig extends QueryRequestConfig {
  params: TokensRequestData;

  constructor(opts: QueryRequestParams) {
    super(opts);
    this.params = new TokensRequestData(opts);
  }
}

export function tokens(params?: TokensRequestParams): Promise<AxiosResponse<any>> {
  return client.request(new TokensRequestConfig({ meta: 'tokens', ...params })).then(response => {
    const {
      data: {
        query: { tokens }
      }
    } = response;
    if (has(tokens, 'csrftoken') && tokens.csrftoken === '+\\') {
      throw tokens.csrftoken;
    }
    return response;
  });
}
