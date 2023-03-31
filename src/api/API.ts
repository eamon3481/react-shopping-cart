import axios, { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';
import { CustomError, ERROR_TYPE } from '../constants/error';

// MSW Test 를 위한 baseURL 설정
const BASE_URL = window.location.origin;

const API = axios.create({
  timeout: 2000,
  baseURL: BASE_URL,
});

const call = async <T>(caller: () => Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const { data } = await caller();
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new CustomError(ERROR_TYPE.API, error?.response?.status);
    }
    throw new CustomError(ERROR_TYPE.UNKNOWN);
  }
};

export { API, call };
