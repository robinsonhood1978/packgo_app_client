import request from 'src/utils/fetch';
import queryString from 'qs';
import axios from 'axios';
import qs from 'qs';
import {NODE_API} from 'src/configs/constant';

// const FormData = require('form-data');
// const formData = new FormData();
// console.log(formData.getHeaders());

export const getImages = (query, token) =>
  request.get(`/wp/v2/media?${queryString.stringify(query)}`, {}, token);
export const updateImages = async (data, token) => {
  let code = 0;
  let msg = 'Success';
  let avatar_url = '';
  try {
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${token}`,
    };
    await axios
      .post(NODE_API + '/upload', data, {
        headers: headers,
      })
      .then((resp) => {
        console.log(resp.data);
        avatar_url = NODE_API + '/' + resp.data.path;
        if (resp.data.code !== 0) {
          // console.log(resp)
          code = 1;
        } else {
          // console.log(resp)
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(`${error.response.status}---${error.response.statusText}`);
        code = 2;
        msg = error.response.statusText;
      });
  } catch (e) {
    console.log(e);
    code = 3;
    msg = e;
  }
  return {code, msg, avatar_url};
};

export const updateMultipleImages = async (data, token) => {
  let code = 0;
  let msg = 'Success';
  let obj = [];
  try {
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${token}`,
    };
    await axios
      .post(NODE_API + '/upload-multiple-images', data, {
        headers: headers,
      })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.length > 0) {
          resp.data.forEach((m) => {
            obj.push(m);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(`${error.response.status}---${error.response.statusText}`);
        code = 2;
        msg = error.response.statusText;
      });
  } catch (e) {
    console.log(e);
    code = 3;
    msg = e;
  }
  return {code, msg, obj};
};
