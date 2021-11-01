import {http} from './http'

export async function getCustomerInformation() {
  const data = await http.get(`/api/v1/stripe/customer/`)
  return data
}

export async function createCustomer() {
  const data = await http.post(`/api/v1/stripe/customer`)
  return data
}

export async function addPaymentMethod(token: string) {
  const data = await http.post(`/api/v1/stripe/payment_methods`, {
    token: token,
  })
  return data
}

export async function getPaymentMethods() {
  const data = await http.get(`/api/v1/stripe/payment_methods`)
  return data
}
