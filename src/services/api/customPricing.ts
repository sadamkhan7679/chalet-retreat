import {http} from './http'
import {CustomPricingValues} from 'src/types/form'

export async function addCustomPricingApi(
  customPricing: CustomPricingValues,
  calendarId: number,
) {
  const {data} = await http.post(
    `/api/v1/calendar/${calendarId}/custom_pricing`,
    customPricing,
  )

  return data
}

export async function updateCustomPricingApi(
  customPricing: CustomPricingValues,
) {
  const {data} = await http.put(
    `/api/v1/custom_pricing/${customPricing.id}`,
    customPricing,
  )

  return data
}

export async function deleteCustomPricingApi(id: number) {
  const data = await http.delete(`/api/v1/custom_pricing/${id}`)

  return data
}
