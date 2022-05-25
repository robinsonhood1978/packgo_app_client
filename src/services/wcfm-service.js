import request from 'src/utils/fetch';
import queryString from 'qs';
import qs from 'qs';
import axios from 'axios';
import {API} from 'src/configs/constant';

const apiPath = `${API}/api`;
const apiPackage = `${apiPath}/parcels/`;
const apiProfile = `${apiPath}/packgo/profile/`;
const apiAddress = `${apiPath}/freightcustomers/addresses/`;
const apiVerifyAddress = `${apiPath}/freightcustomers/verify_address/`;
const apiRegister = `${apiPath}/freightcustomers/register/`;
const apiGetAddress = `${apiPath}/freightcustomers/get_address/`;
const apiEditParcelEndpoint = `${apiPackage}edit_parcel/`;
const apiQuote = `${apiPath}/freightorders/quote/`;
const apiOrder = `${apiPath}/freightorders/`;
const apiActiveAccount = `${apiPath}/home/active/`;
const apiIsActive = `${apiPath}/packgo/isactive/`;
const apiForgotPwd = `${apiPath}/home/forgot_pwd/`;
const apiVerifyEmail = `${apiPath}/home/verify_email/`;
const apiResetPwd = `${apiPath}/home/resetpwd/`;

const getParcels = async (query, token) => {
  let data;
  await axios
    .get(apiPackage, {
      params: query,
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
    .then((ret) => {
      data = ret.data;
    });
  return data;
};

const getSubParcels = async (query, token, parcels) => {
  console.log(token);
  if (!parcels) {
    parcels = await getParcels(query, token);
  }
  // eslint-disable-next-line object-curly-newline
  const {
    parcelState = null,
    filed = null,
    unsent = null,
    forceRefresh = true,
    search = '',
    perPage = 10,
    page = 1,
    sortBy = 'id',
    sortDesc = false,
    status = null,
  } = query;

  const queryLowered = search.toLowerCase();
  const filteredData = parcels.filter(
    (parcel) =>
      (parcel.title.toLowerCase().includes(queryLowered) ||
        parcel.local_courier_number.toLowerCase().includes(queryLowered)) &&
      parcel.state === (parcelState || parcel.state) &&
      (unsent != null
        ? unsent === 1
          ? parcel.dform === null
          : parcel.dform != null
        : true) &&
      (filed != null
        ? filed === 0
          ? parcel.total === 0
          : parcel.total > 0
        : true),
  );
  return filteredData;
};
// request.get(`/wcfmmp/v1/products?${queryString.stringify(query)}`, {}, token);

const getCategories = (query, token) =>
  request.get(
    `/mobile-builder/v1/categories?${queryString.stringify(query)}`,
    {},
    token,
  );

const addProduct = (data, token) => {
  const {image, ...rest} = data;
  const dataAdd =
    image && image.length > 0
      ? {
          ...rest,
          featured_image: {
            src: image,
          },
        }
      : {...rest};
  return request.post(
    '/wcfmmp/v1/products',
    JSON.stringify(dataAdd),
    'POST',
    token,
  );
};

const updateProduct = (productId, data, token) => {
  const {image, ...rest} = data;
  const dataUpdate = {
    ...rest,
    featured_image: {
      src: image,
    },
  };
  return request.put(
    `/wcfmmp/v1/products/quick-edit/${productId}`,
    JSON.stringify(dataUpdate),
    token,
  );
};

const deleteProduct = (id, token) =>
  request.delete(`/wcfmmp/v1/products/${id}`, {}, token);

const getOrders = (query, token) =>
  request.get(`/wcfmmp/v1/orders?${queryString.stringify(query)}`, {}, token);

const updateOrders = (idOrder, data, token) =>
  request.put(`/wcfmmp/v1/orders/${idOrder}`, JSON.stringify(data), token);

const getSales = (query, token) =>
  request.get(
    `/wcfmmp/v1/sales-stats?${queryString.stringify(query)}`,
    {},
    token,
  );

const getDataReport = (query, token) =>
  request.get(
    `/mobile-builder/v1/wcfm-report-chart?${queryString.stringify(query)}`,
    {},
    token,
  );

const getAllReviews = (query, token) =>
  request.get(`/wcfmmp/v1/reviews?${queryString.stringify(query)}`, {}, token);

const getStore = (id, token) =>
  request.get(`/wcfmmp/v1/settings/id/${id}`, {}, token);

const getProfile = (query, token) =>
  request.get(
    `/wcfmmp/v1/user-profile${queryString.stringify(query)}`,
    {},
    token,
  );
// const updateProfile = (id, data, token) =>
//   request.put(
//     `/mobile-builder/v1/customers/${id}`,
//     JSON.stringify(data),
//     token,
//   );
const updateProfile = async (query, token) => {
  let code = 0;
  let msg = 'Success';
  try {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `JWT ${token}`,
    };
    await axios
      .post(apiProfile, qs.stringify(query), {
        headers: headers,
      })
      .then((resp) => {
        // data = ret.data
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
  return {code, msg};
};

const updateStore = (data = {}, token) =>
  request.post(
    '/mobile-builder/v1/wcfm-profile-settings',
    JSON.stringify(data),
    'POST',
    token,
  );

export default {
  getParcels,
  getSubParcels,
  getOrders,
  addProduct,
  updateProduct,
  deleteProduct,
  updateOrders,
  getSales,
  getAllReviews,
  getDataReport,
  getStore,
  updateStore,
  getProfile,
  updateProfile,
  getCategories,
};
