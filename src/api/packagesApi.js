// http://registry.npmjs.org/-/v1/search?text='reac'&size=10&from=2

import {NPMJS_DOMAIN, JSDELIVR_DOMAIN} from '../constants/domains';
import axios from "axios";

const searchEndpoint = '/-/v1/search';
const versionsEndpoint = '/package/npm/';

export const searchPackagesByName = (packageName, paginationSize,offset) => {
  return axios({
    method: 'get',
    url: searchEndpoint,
    baseURL: NPMJS_DOMAIN,
    params: {
      text: `'${packageName}'`,
      size: paginationSize,
      from: offset
    }
  })
    .then(answer => answer.data)
};

export const getAvailableVersionsByName = (packageName) => {
  return axios({
    method: 'get',
    url: versionsEndpoint + packageName,
    baseURL: JSDELIVR_DOMAIN,
  })
    .then(answer => answer.data)
};