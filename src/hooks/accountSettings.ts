import React from 'react'
import {userInfoSelector} from 'src/store/selectors/userSelector'
import {useSelector, useDispatch} from 'react-redux'
import {GetphonenumberUser, updateUser} from 'src/services/api'
import {updateUserAction} from 'src/store/actions/userAction'
import {fetchingApiData} from 'src/store/actions/accountSettingsAction'

const defaultSettings = {
  platform_notifications: {
    active: true,
    text: true,
    email: {
      active: true,
      to: 'test@test.com',
    },
    marketing_notifications: {
      active: true,
    },
  },
}

export function useNotifications() {
  const dispatch = useDispatch()
  const userInfo = useSelector(userInfoSelector)
  dispatch(fetchingApiData(false))

  const settings =
    userInfo?.settings && userInfo?.settings?.platform_notifications
      ? userInfo.settings
      : defaultSettings

  const [notifications, setNotifications] = React.useState(
    settings.platform_notifications,
  )

  const updateNotifications = (updatedSettings: any) => {
    dispatch(fetchingApiData(true))
    updateUser({settings: {platform_notifications: updatedSettings}})
      .then((res) => {
        console.log(res)
        GetphonenumberUser()
        res.status === 200 && dispatch(updateUserAction(res.data))
        dispatch(fetchingApiData(false))
      })
      .catch((err) => {
        console.log(err)
        dispatch(fetchingApiData(false))
      })
  }

  React.useEffect(() => {
    const settings =
      userInfo?.settings && userInfo?.settings?.platform_notifications
        ? userInfo.settings
        : defaultSettings
    setNotifications(settings.platform_notifications)
  }, [userInfo])

  return {notifications, updateNotifications}
}

export function usePersonalInfo() {
  const userInfo = useSelector(userInfoSelector)
  const [userData, setUserData] = React.useState<any>(getUserData(userInfo))

  const [preview, setPreview] = React.useState<any>(null)

  const [profilePic, setProfilePic] = React.useState<any>(
    userInfo?.picture?.url,
  )

  const hasPic =
    (!userInfo.picture && !preview) ||
    (userInfo.picture &&
      !preview &&
      !userInfo.picture?.url &&
      !userInfo.picture?.name &&
      profilePic)
      ? false
      : true

  const [hasProfilePic, setHasProfilePic] = React.useState(hasPic)

  React.useEffect(() => {
    setUserData(getUserData(userInfo))

    const fbData = userInfo?.socialDetails?.find((data: any) => {
      return data.social_type === 'facebook'
    })
    fbData && fbData.image && userInfo.picture && setProfilePic(fbData.image)

    const hasPic =
      (!userInfo.picture && !preview) ||
      (userInfo.picture &&
        !preview &&
        !userInfo.picture?.url &&
        !userInfo.picture?.name &&
        profilePic)
        ? false
        : true
    setHasProfilePic(hasPic)
  }, [userInfo])

  return {
    userData,
    setUserData,
    preview,
    setPreview,
    profilePic,
    setProfilePic,
    hasProfilePic,
  }
}

export function useSecurityConnections() {
  const userInfo = useSelector(userInfoSelector)
  const [facebookData, setFacebookData] = React.useState<any>(null)
  const [googleData, setGoogleData] = React.useState<any>(null)

  const initialPasswordDataState = {
    current_password: '',
    password: '',
    password_confirmation: '',
  }
  const [PasswordData, setPasswordData]: any = React.useState(
    initialPasswordDataState,
  )

  React.useEffect(() => {
    const fbData = userInfo?.socialDetails?.find((data: any) => {
      return data.social_type === 'facebook'
    })
    const googleData = userInfo?.socialDetails?.find((data: any) => {
      return data.social_type === 'google'
    })

    setFacebookData(fbData)
    setGoogleData(googleData)
  }, [userInfo])

  return {PasswordData, setPasswordData, facebookData, googleData}
}

const getUserData = (userInfo: any) => {
  return {
    firstName: userInfo?.name?.split(' ')[0],
    lastName: userInfo?.name?.split(' ')[1],
    email: userInfo?.email,
    gender: userInfo?.gender ? userInfo?.gender?.toString() : '1',
    language: 'English',
    birthdate: userInfo?.birthdate
      ? userInfo?.birthdate
      : new Date('1-1-1970').toLocaleString(),
    phone_no: userInfo?.phone_no,
  }
}
