import {http} from './http'
import {CalendarValues} from 'src/types/form'

export async function getCalendarsApi(propertyId: number) {
  const {data} = await http.get(`/api/v1/property/${propertyId}/calendars`)

  return data
}

export async function getCalendarApi(calendarId: number) {
  const {data} = await http.get(`/api/v1/calendars/${calendarId}`)

  return data
}

export async function addCalendarApi(
  calendar: CalendarValues,
  propertyId: number,
) {
  const {data} = await http.post(
    `/api/v1/property/${propertyId}/calendar`,
    calendar,
  )

  return data
}

export async function updateCalendarApi(calendar: CalendarValues) {
  const {data} = await http.put(`/api/v1/calendar/${calendar.id}`, calendar)

  return data
}

export async function deleteCalendarApi(id: number) {
  const data = await http.delete(`/api/v1/calendar/${id}`)

  return data
}
