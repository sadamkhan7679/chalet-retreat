import {
  LoginUserBody,
  LoginUserResponse,
  RegisterUserBody,
  RegisterUserResponse,
  PhoneUserBody,
  PhoneVerify,
  UpdatePassword,
} from 'src/types/auth'

import {http} from './http'

export async function socialLogin(body: any) {
  const {data} = await http.post('/api/v1/social_login', body)
  return data as LoginUserResponse
}

export async function socialConnect(body: any) {
  const {data} = await http.post('/api/v1/social_connect', body)
  return data
}

export async function deleteSocialConnect(body: any) {
  const {data} = await http.delete(`/api/v1/social_connect/${body}`)
  return data
}

export async function removeUserImage() {
  const {data} = await http.delete('/api/v1/user/remove_image')
  return data
}

export async function registerUser(body: RegisterUserBody) {
  const {data} = await http.post('/api/v1/register', body)
  return data as RegisterUserResponse
}

export async function updateUser(body: FormData | any) {
  const data = await http.post('/api/v1/user', body)
  return data
}

export async function verifyUserApi(token: any) {
  const data = await http.get(`/api/v1/email/verify/${token}`)
  return data
}

export async function getMeService() {
  const {data} = await http.get('/api/v1/me')
  return data
}

export async function userResetPassword(email: any) {
  const data = await http.post('/api/v1/reset_password', {email})
  return data
}

export async function userEmailResetPassword(email: any) {
  const data = await http.post(
    `/api/v1/reset_password/${localStorage.getItem('token')}`,
    {email},
  )
  return data
}

export async function loginUser(body: LoginUserBody) {
  const {data} = await http.post('/api/v1/login', body)
  return data as LoginUserResponse
}

export async function logoutUser() {
  const {data} = await http.post('/api/v1/logout')
  return data
}

export async function phonenumberUser(datas: PhoneUserBody) {
  const {data} = await http.post('/api/v1/user/phone_number', datas)
  return data
}

export async function updatePhoneNumberApi(datas: PhoneUserBody, id: number) {
  const {data} = await http.put(`/api/v1/user/phone_number/${id}`, datas)
  return data
}

export async function resendVerificationApi(phoneNumber: string) {
  const {data} = await http.post('/api/v1/user/phone_number/resend', {
    phone_number: phoneNumber,
  })
  return data
}

export async function verifyPhoneNumberApi(token: string, phoneNumber: string) {
  const {data} = await http.post('/api/v1/user/phone_number/verify', {
    phone_number: phoneNumber,
    token,
  })
  return data
}

export async function GetphonenumberUser() {
  const data = await http.get('/api/v1/user/phone_numbers')
  return data
}
export async function UpdateCurrentPassword(passwords: UpdatePassword) {
  const data = await http.post('/api/v1/update_password', passwords)
  return data
}
export async function verifyPhoneUserApi(datas: PhoneVerify) {
  const data = await http.post('/api/v1/user/phone_number/verify', datas)
  return data
}
