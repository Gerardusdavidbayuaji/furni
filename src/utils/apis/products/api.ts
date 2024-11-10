import axiosWithConfig from "../axiosWithConfig";

export const getFeaturedProducts = async () => {
  try {
    const response = await axiosWithConfig.get(`/products?featured=true`);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axiosWithConfig.get(`/products`);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
