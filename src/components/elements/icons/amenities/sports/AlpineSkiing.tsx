import React from 'react'
import {palette} from 'src/components/foundation/palette'

const AlpineSkiingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
  stroke,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="3.0498"
        y="1"
        width="18"
        height="22"
        fill="black"
      >
        <rect fill="white" x="3.0498" y="1" width="18" height="22" />
        <path d="M18.168 2.00001C17.8162 1.99902 17.4687 2.0778 17.1517 2.23042C16.8346 2.38304 16.5563 2.60553 16.3377 2.88117C16.119 3.15682 15.9656 3.47845 15.8892 3.82188C15.8127 4.16532 15.815 4.52162 15.896 4.86401C15.4262 4.57412 14.8775 4.43833 14.3267 4.47562C13.7759 4.51291 13.2505 4.72143 12.824 5.07201L10.552 6.92801L6.81602 5.15201L6.98402 4.81601C7.02345 4.73735 7.03047 4.64636 7.00355 4.56259C6.97662 4.47882 6.91791 4.40896 6.84002 4.36801C6.76039 4.32916 6.66864 4.32334 6.58474 4.3518C6.50083 4.38027 6.43157 4.44072 6.39202 4.52L6.21602 4.86401L5.16002 4.36801C5.108 4.33702 5.04857 4.32065 4.98802 4.32065C4.92747 4.32065 4.86804 4.33702 4.81602 4.36801C4.76589 4.40246 4.72554 4.4493 4.6989 4.50398C4.67226 4.55866 4.66024 4.61931 4.66402 4.68001C4.67138 4.74073 4.69443 4.79848 4.7309 4.84758C4.76738 4.89668 4.81601 4.93543 4.87202 4.96001L5.91202 5.45602L5.72003 5.84001C5.68118 5.91964 5.67535 6.01139 5.70382 6.0953C5.73228 6.1792 5.79273 6.24846 5.87202 6.28801C5.95165 6.32686 6.0434 6.33269 6.1273 6.30422C6.21121 6.27575 6.28048 6.21529 6.32003 6.13601L6.52003 5.73601L9.97602 7.38401L9.39202 7.86401C9.18706 8.02662 9.01585 8.22773 8.88802 8.45602C8.66287 8.93078 8.61575 9.47062 8.75524 9.97721C8.89474 10.4838 9.21157 10.9234 9.64802 11.216L12.848 13.24L9.56002 14.704C9.2999 14.8236 9.08328 15.021 8.94 15.2688C8.79672 15.5167 8.73384 15.8029 8.76002 16.088L4.59202 13.544C4.55482 13.5151 4.51195 13.4943 4.46619 13.483C4.42044 13.4718 4.37282 13.4702 4.32644 13.4786C4.28005 13.4869 4.23595 13.5049 4.19697 13.5314C4.15799 13.5578 4.12503 13.5922 4.1002 13.6323C4.07538 13.6723 4.05926 13.7172 4.05289 13.7639C4.04652 13.8105 4.05004 13.8581 4.06323 13.9033C4.07641 13.9485 4.09897 13.9905 4.12943 14.0265C4.15989 14.0624 4.19757 14.0916 4.24002 14.112L16.408 21.6C16.8841 21.8924 17.4374 22.0343 17.9955 22.0072C18.5536 21.9801 19.0905 21.7852 19.536 21.448C19.5711 21.422 19.6005 21.3893 19.6227 21.3518C19.645 21.3142 19.6595 21.2727 19.6655 21.2295C19.6714 21.1862 19.6687 21.1423 19.6575 21.1001C19.6462 21.058 19.6267 21.0185 19.6 20.984C19.5746 20.9484 19.5424 20.9182 19.5051 20.8952C19.4679 20.8722 19.4264 20.8569 19.3832 20.8502C19.34 20.8435 19.2958 20.8455 19.2534 20.8561C19.2109 20.8667 19.171 20.8858 19.136 20.912C18.7948 21.1724 18.3823 21.3225 17.9535 21.3425C17.5247 21.3625 17.1001 21.2514 16.736 21.024L10.464 17.2H10.528L15.216 15.12C15.6539 14.9201 15.998 14.5592 16.1768 14.1123C16.3555 13.6654 16.3553 13.1667 16.176 12.72C16.0337 12.3695 15.7846 12.0728 15.464 11.872L12.952 10.04L13.816 9.60801L14.984 10.408L16.024 11.128C16.2698 11.3035 16.5662 11.3938 16.8681 11.3852C17.17 11.3765 17.4607 11.2693 17.696 11.08L18.824 11.616C18.8751 11.6455 18.933 11.661 18.992 11.661C19.051 11.661 19.109 11.6455 19.16 11.616C19.2075 11.5814 19.2455 11.5354 19.2707 11.4823C19.2958 11.4292 19.3073 11.3707 19.304 11.312C19.301 11.2532 19.2813 11.1964 19.2473 11.1483C19.2134 11.1001 19.1665 11.0626 19.112 11.04L18.072 10.544C18.1519 10.3351 18.1767 10.1092 18.144 9.88801C18.1164 9.71048 18.0533 9.54034 17.9585 9.38777C17.8636 9.23519 17.739 9.10331 17.592 9.00001L16.704 8.37601H16.8C16.8867 8.35804 16.9688 8.32292 17.0417 8.27274C17.1146 8.22256 17.1767 8.15832 17.2244 8.08379C17.2721 8.00926 17.3044 7.92594 17.3195 7.83874C17.3345 7.75154 17.332 7.66222 17.312 7.57601L17.112 6.65601C17.0928 6.57203 17.0688 6.48922 17.04 6.408C17.3533 6.57699 17.7012 6.67214 18.0569 6.68617C18.4126 6.70019 18.7668 6.63271 19.0925 6.48891C19.4182 6.34511 19.7067 6.12878 19.9359 5.85644C20.1652 5.58411 20.3292 5.26297 20.4154 4.91756C20.5016 4.57216 20.5077 4.21163 20.4332 3.8635C20.3588 3.51537 20.2058 3.18886 19.9859 2.90891C19.7659 2.62896 19.485 2.40298 19.1644 2.24823C18.8437 2.09348 18.492 2.01405 18.136 2.01601L18.168 2.00001ZM17.24 9.53601C17.3148 9.58681 17.3783 9.65253 17.4265 9.72903C17.4747 9.80552 17.5065 9.89115 17.52 9.98054C17.5336 10.0699 17.5285 10.1612 17.505 10.2485C17.4816 10.3358 17.4404 10.4174 17.384 10.488C17.2688 10.6235 17.1066 10.7103 16.93 10.7311C16.7534 10.7518 16.5755 10.705 16.432 10.6L15.632 10.032L15.144 9.69601L14.072 8.95201L13.768 8.73601C13.6975 8.68989 13.637 8.62997 13.5903 8.55985C13.5435 8.48973 13.5115 8.41086 13.496 8.32801L13.368 7.73601C13.3486 7.65035 13.3464 7.5617 13.3615 7.47519C13.3766 7.38868 13.4088 7.30602 13.456 7.232C13.5537 7.08722 13.7021 6.98442 13.872 6.944L14.552 6.80001C14.5964 6.79183 14.6386 6.77482 14.6762 6.74998C14.7138 6.72515 14.7461 6.69299 14.771 6.65544C14.7959 6.61789 14.813 6.57571 14.8213 6.53141C14.8296 6.4871 14.8289 6.44157 14.8193 6.39754C14.8096 6.35352 14.7912 6.31188 14.7651 6.27512C14.739 6.23836 14.7058 6.20722 14.6674 6.18357C14.629 6.15991 14.5863 6.14422 14.5417 6.13742C14.4972 6.13063 14.4517 6.13286 14.408 6.144L13.736 6.29601C13.5633 6.33295 13.3995 6.40379 13.2543 6.50443C13.1091 6.60506 12.9853 6.73349 12.8901 6.8823C12.7949 7.0311 12.7301 7.19732 12.6995 7.37132C12.669 7.54533 12.6732 7.72365 12.712 7.89601L12.84 8.48801C12.902 8.75613 13.0444 8.99894 13.248 9.18401L12.56 9.52801C12.5213 9.5454 12.4881 9.57306 12.464 9.60801C12.4013 9.68116 12.3547 9.76668 12.3271 9.85902C12.2995 9.95135 12.2917 10.0484 12.304 10.144C12.3179 10.2358 12.3507 10.3237 12.4003 10.4022C12.4498 10.4807 12.5151 10.548 12.592 10.6L15.12 12.384C15.3293 12.5127 15.4941 12.7026 15.592 12.928C15.721 13.223 15.7277 13.5571 15.6108 13.857C15.4938 14.1569 15.2626 14.3982 14.968 14.528L10.28 16.608C10.1971 16.6456 10.1071 16.665 10.016 16.665C9.92497 16.665 9.83497 16.6456 9.75202 16.608C9.62394 16.5614 9.51331 16.4766 9.43513 16.3649C9.35695 16.2533 9.315 16.1203 9.315 15.984C9.315 15.8477 9.35695 15.7147 9.43513 15.6031C9.51331 15.4915 9.62394 15.4066 9.75202 15.36L13.04 13.904C13.1475 13.8517 13.24 13.7728 13.3085 13.6748C13.3771 13.5768 13.4196 13.463 13.432 13.344C13.439 13.2238 13.4146 13.1039 13.3613 12.9959C13.308 12.8879 13.2276 12.7956 13.128 12.728L9.92802 10.704C9.63184 10.5037 9.41573 10.2054 9.3177 9.86161C9.21966 9.51776 9.24599 9.15037 9.39202 8.82401C9.48209 8.67135 9.59856 8.53591 9.73602 8.42401L13.184 5.62401C13.5678 5.31201 14.0539 5.15393 14.5478 5.18055C15.0417 5.20717 15.508 5.41658 15.856 5.76801C16.1446 6.05484 16.3446 6.41864 16.432 6.81601L16.632 7.744L16.16 7.84001C16.0631 7.8589 15.974 7.90629 15.9041 7.97613C15.8343 8.04597 15.7869 8.13506 15.768 8.232C15.7517 8.32708 15.7626 8.42483 15.7994 8.514C15.8362 8.60317 15.8974 8.68012 15.976 8.73601L17.24 9.53601ZM18.168 6.00001C17.8366 6.00159 17.5123 5.90468 17.2361 5.72157C16.9599 5.53846 16.7444 5.2774 16.6168 4.97155C16.4893 4.66571 16.4555 4.32887 16.5198 4.00379C16.584 3.67871 16.7434 3.38006 16.9778 3.14575C17.2121 2.91143 17.5107 2.75202 17.8358 2.68777C18.1609 2.62351 18.4977 2.6573 18.8036 2.78484C19.1094 2.91238 19.3705 3.12792 19.5536 3.4041C19.7367 3.68028 19.8336 4.00464 19.832 4.33601C19.832 4.55453 19.789 4.77091 19.7054 4.9728C19.6217 5.17469 19.4992 5.35811 19.3446 5.51263C19.1901 5.66715 19.0067 5.78973 18.8048 5.87335C18.6029 5.95697 18.3865 6.00001 18.168 6.00001Z" />
      </mask>
      <path
        d="M18.168 2.00001C17.8162 1.99902 17.4687 2.0778 17.1517 2.23042C16.8346 2.38304 16.5563 2.60553 16.3377 2.88117C16.119 3.15682 15.9656 3.47845 15.8892 3.82188C15.8127 4.16532 15.815 4.52162 15.896 4.86401C15.4262 4.57412 14.8775 4.43833 14.3267 4.47562C13.7759 4.51291 13.2505 4.72143 12.824 5.07201L10.552 6.92801L6.81602 5.15201L6.98402 4.81601C7.02345 4.73735 7.03047 4.64636 7.00355 4.56259C6.97662 4.47882 6.91791 4.40896 6.84002 4.36801C6.76039 4.32916 6.66864 4.32334 6.58474 4.3518C6.50083 4.38027 6.43157 4.44072 6.39202 4.52L6.21602 4.86401L5.16002 4.36801C5.108 4.33702 5.04857 4.32065 4.98802 4.32065C4.92747 4.32065 4.86804 4.33702 4.81602 4.36801C4.76589 4.40246 4.72554 4.4493 4.6989 4.50398C4.67226 4.55866 4.66024 4.61931 4.66402 4.68001C4.67138 4.74073 4.69443 4.79848 4.7309 4.84758C4.76738 4.89668 4.81601 4.93543 4.87202 4.96001L5.91202 5.45602L5.72003 5.84001C5.68118 5.91964 5.67535 6.01139 5.70382 6.0953C5.73228 6.1792 5.79273 6.24846 5.87202 6.28801C5.95165 6.32686 6.0434 6.33269 6.1273 6.30422C6.21121 6.27575 6.28048 6.21529 6.32003 6.13601L6.52003 5.73601L9.97602 7.38401L9.39202 7.86401C9.18706 8.02662 9.01585 8.22773 8.88802 8.45602C8.66287 8.93078 8.61575 9.47062 8.75524 9.97721C8.89474 10.4838 9.21157 10.9234 9.64802 11.216L12.848 13.24L9.56002 14.704C9.2999 14.8236 9.08328 15.021 8.94 15.2688C8.79672 15.5167 8.73384 15.8029 8.76002 16.088L4.59202 13.544C4.55482 13.5151 4.51195 13.4943 4.46619 13.483C4.42044 13.4718 4.37282 13.4702 4.32644 13.4786C4.28005 13.4869 4.23595 13.5049 4.19697 13.5314C4.15799 13.5578 4.12503 13.5922 4.1002 13.6323C4.07538 13.6723 4.05926 13.7172 4.05289 13.7639C4.04652 13.8105 4.05004 13.8581 4.06323 13.9033C4.07641 13.9485 4.09897 13.9905 4.12943 14.0265C4.15989 14.0624 4.19757 14.0916 4.24002 14.112L16.408 21.6C16.8841 21.8924 17.4374 22.0343 17.9955 22.0072C18.5536 21.9801 19.0905 21.7852 19.536 21.448C19.5711 21.422 19.6005 21.3893 19.6227 21.3518C19.645 21.3142 19.6595 21.2727 19.6655 21.2295C19.6714 21.1862 19.6687 21.1423 19.6575 21.1001C19.6462 21.058 19.6267 21.0185 19.6 20.984C19.5746 20.9484 19.5424 20.9182 19.5051 20.8952C19.4679 20.8722 19.4264 20.8569 19.3832 20.8502C19.34 20.8435 19.2958 20.8455 19.2534 20.8561C19.2109 20.8667 19.171 20.8858 19.136 20.912C18.7948 21.1724 18.3823 21.3225 17.9535 21.3425C17.5247 21.3625 17.1001 21.2514 16.736 21.024L10.464 17.2H10.528L15.216 15.12C15.6539 14.9201 15.998 14.5592 16.1768 14.1123C16.3555 13.6654 16.3553 13.1667 16.176 12.72C16.0337 12.3695 15.7846 12.0728 15.464 11.872L12.952 10.04L13.816 9.60801L14.984 10.408L16.024 11.128C16.2698 11.3035 16.5662 11.3938 16.8681 11.3852C17.17 11.3765 17.4607 11.2693 17.696 11.08L18.824 11.616C18.8751 11.6455 18.933 11.661 18.992 11.661C19.051 11.661 19.109 11.6455 19.16 11.616C19.2075 11.5814 19.2455 11.5354 19.2707 11.4823C19.2958 11.4292 19.3073 11.3707 19.304 11.312C19.301 11.2532 19.2813 11.1964 19.2473 11.1483C19.2134 11.1001 19.1665 11.0626 19.112 11.04L18.072 10.544C18.1519 10.3351 18.1767 10.1092 18.144 9.88801C18.1164 9.71048 18.0533 9.54034 17.9585 9.38777C17.8636 9.23519 17.739 9.10331 17.592 9.00001L16.704 8.37601H16.8C16.8867 8.35804 16.9688 8.32292 17.0417 8.27274C17.1146 8.22256 17.1767 8.15832 17.2244 8.08379C17.2721 8.00926 17.3044 7.92594 17.3195 7.83874C17.3345 7.75154 17.332 7.66222 17.312 7.57601L17.112 6.65601C17.0928 6.57203 17.0688 6.48922 17.04 6.408C17.3533 6.57699 17.7012 6.67214 18.0569 6.68617C18.4126 6.70019 18.7668 6.63271 19.0925 6.48891C19.4182 6.34511 19.7067 6.12878 19.9359 5.85644C20.1652 5.58411 20.3292 5.26297 20.4154 4.91756C20.5016 4.57216 20.5077 4.21163 20.4332 3.8635C20.3588 3.51537 20.2058 3.18886 19.9859 2.90891C19.7659 2.62896 19.485 2.40298 19.1644 2.24823C18.8437 2.09348 18.492 2.01405 18.136 2.01601L18.168 2.00001ZM17.24 9.53601C17.3148 9.58681 17.3783 9.65253 17.4265 9.72903C17.4747 9.80552 17.5065 9.89115 17.52 9.98054C17.5336 10.0699 17.5285 10.1612 17.505 10.2485C17.4816 10.3358 17.4404 10.4174 17.384 10.488C17.2688 10.6235 17.1066 10.7103 16.93 10.7311C16.7534 10.7518 16.5755 10.705 16.432 10.6L15.632 10.032L15.144 9.69601L14.072 8.95201L13.768 8.73601C13.6975 8.68989 13.637 8.62997 13.5903 8.55985C13.5435 8.48973 13.5115 8.41086 13.496 8.32801L13.368 7.73601C13.3486 7.65035 13.3464 7.5617 13.3615 7.47519C13.3766 7.38868 13.4088 7.30602 13.456 7.232C13.5537 7.08722 13.7021 6.98442 13.872 6.944L14.552 6.80001C14.5964 6.79183 14.6386 6.77482 14.6762 6.74998C14.7138 6.72515 14.7461 6.69299 14.771 6.65544C14.7959 6.61789 14.813 6.57571 14.8213 6.53141C14.8296 6.4871 14.8289 6.44157 14.8193 6.39754C14.8096 6.35352 14.7912 6.31188 14.7651 6.27512C14.739 6.23836 14.7058 6.20722 14.6674 6.18357C14.629 6.15991 14.5863 6.14422 14.5417 6.13742C14.4972 6.13063 14.4517 6.13286 14.408 6.144L13.736 6.29601C13.5633 6.33295 13.3995 6.40379 13.2543 6.50443C13.1091 6.60506 12.9853 6.73349 12.8901 6.8823C12.7949 7.0311 12.7301 7.19732 12.6995 7.37132C12.669 7.54533 12.6732 7.72365 12.712 7.89601L12.84 8.48801C12.902 8.75613 13.0444 8.99894 13.248 9.18401L12.56 9.52801C12.5213 9.5454 12.4881 9.57306 12.464 9.60801C12.4013 9.68116 12.3547 9.76668 12.3271 9.85902C12.2995 9.95135 12.2917 10.0484 12.304 10.144C12.3179 10.2358 12.3507 10.3237 12.4003 10.4022C12.4498 10.4807 12.5151 10.548 12.592 10.6L15.12 12.384C15.3293 12.5127 15.4941 12.7026 15.592 12.928C15.721 13.223 15.7277 13.5571 15.6108 13.857C15.4938 14.1569 15.2626 14.3982 14.968 14.528L10.28 16.608C10.1971 16.6456 10.1071 16.665 10.016 16.665C9.92497 16.665 9.83497 16.6456 9.75202 16.608C9.62394 16.5614 9.51331 16.4766 9.43513 16.3649C9.35695 16.2533 9.315 16.1203 9.315 15.984C9.315 15.8477 9.35695 15.7147 9.43513 15.6031C9.51331 15.4915 9.62394 15.4066 9.75202 15.36L13.04 13.904C13.1475 13.8517 13.24 13.7728 13.3085 13.6748C13.3771 13.5768 13.4196 13.463 13.432 13.344C13.439 13.2238 13.4146 13.1039 13.3613 12.9959C13.308 12.8879 13.2276 12.7956 13.128 12.728L9.92802 10.704C9.63184 10.5037 9.41573 10.2054 9.3177 9.86161C9.21966 9.51776 9.24599 9.15037 9.39202 8.82401C9.48209 8.67135 9.59856 8.53591 9.73602 8.42401L13.184 5.62401C13.5678 5.31201 14.0539 5.15393 14.5478 5.18055C15.0417 5.20717 15.508 5.41658 15.856 5.76801C16.1446 6.05484 16.3446 6.41864 16.432 6.81601L16.632 7.744L16.16 7.84001C16.0631 7.8589 15.974 7.90629 15.9041 7.97613C15.8343 8.04597 15.7869 8.13506 15.768 8.232C15.7517 8.32708 15.7626 8.42483 15.7994 8.514C15.8362 8.60317 15.8974 8.68012 15.976 8.73601L17.24 9.53601ZM18.168 6.00001C17.8366 6.00159 17.5123 5.90468 17.2361 5.72157C16.9599 5.53846 16.7444 5.2774 16.6168 4.97155C16.4893 4.66571 16.4555 4.32887 16.5198 4.00379C16.584 3.67871 16.7434 3.38006 16.9778 3.14575C17.2121 2.91143 17.5107 2.75202 17.8358 2.68777C18.1609 2.62351 18.4977 2.6573 18.8036 2.78484C19.1094 2.91238 19.3705 3.12792 19.5536 3.4041C19.7367 3.68028 19.8336 4.00464 19.832 4.33601C19.832 4.55453 19.789 4.77091 19.7054 4.9728C19.6217 5.17469 19.4992 5.35811 19.3446 5.51263C19.1901 5.66715 19.0067 5.78973 18.8048 5.87335C18.6029 5.95697 18.3865 6.00001 18.168 6.00001Z"
        fill={fill}
      />
      <path
        d="M18.168 2.00001C17.8162 1.99902 17.4687 2.0778 17.1517 2.23042C16.8346 2.38304 16.5563 2.60553 16.3377 2.88117C16.119 3.15682 15.9656 3.47845 15.8892 3.82188C15.8127 4.16532 15.815 4.52162 15.896 4.86401C15.4262 4.57412 14.8775 4.43833 14.3267 4.47562C13.7759 4.51291 13.2505 4.72143 12.824 5.07201L10.552 6.92801L6.81602 5.15201L6.98402 4.81601C7.02345 4.73735 7.03047 4.64636 7.00355 4.56259C6.97662 4.47882 6.91791 4.40896 6.84002 4.36801C6.76039 4.32916 6.66864 4.32334 6.58474 4.3518C6.50083 4.38027 6.43157 4.44072 6.39202 4.52L6.21602 4.86401L5.16002 4.36801C5.108 4.33702 5.04857 4.32065 4.98802 4.32065C4.92747 4.32065 4.86804 4.33702 4.81602 4.36801C4.76589 4.40246 4.72554 4.4493 4.6989 4.50398C4.67226 4.55866 4.66024 4.61931 4.66402 4.68001C4.67138 4.74073 4.69443 4.79848 4.7309 4.84758C4.76738 4.89668 4.81601 4.93543 4.87202 4.96001L5.91202 5.45602L5.72003 5.84001C5.68118 5.91964 5.67535 6.01139 5.70382 6.0953C5.73228 6.1792 5.79273 6.24846 5.87202 6.28801C5.95165 6.32686 6.0434 6.33269 6.1273 6.30422C6.21121 6.27575 6.28048 6.21529 6.32003 6.13601L6.52003 5.73601L9.97602 7.38401L9.39202 7.86401C9.18706 8.02662 9.01585 8.22773 8.88802 8.45602C8.66287 8.93078 8.61575 9.47062 8.75524 9.97721C8.89474 10.4838 9.21157 10.9234 9.64802 11.216L12.848 13.24L9.56002 14.704C9.2999 14.8236 9.08328 15.021 8.94 15.2688C8.79672 15.5167 8.73384 15.8029 8.76002 16.088L4.59202 13.544C4.55482 13.5151 4.51195 13.4943 4.46619 13.483C4.42044 13.4718 4.37282 13.4702 4.32644 13.4786C4.28005 13.4869 4.23595 13.5049 4.19697 13.5314C4.15799 13.5578 4.12503 13.5922 4.1002 13.6323C4.07538 13.6723 4.05926 13.7172 4.05289 13.7639C4.04652 13.8105 4.05004 13.8581 4.06323 13.9033C4.07641 13.9485 4.09897 13.9905 4.12943 14.0265C4.15989 14.0624 4.19757 14.0916 4.24002 14.112L16.408 21.6C16.8841 21.8924 17.4374 22.0343 17.9955 22.0072C18.5536 21.9801 19.0905 21.7852 19.536 21.448C19.5711 21.422 19.6005 21.3893 19.6227 21.3518C19.645 21.3142 19.6595 21.2727 19.6655 21.2295C19.6714 21.1862 19.6687 21.1423 19.6575 21.1001C19.6462 21.058 19.6267 21.0185 19.6 20.984C19.5746 20.9484 19.5424 20.9182 19.5051 20.8952C19.4679 20.8722 19.4264 20.8569 19.3832 20.8502C19.34 20.8435 19.2958 20.8455 19.2534 20.8561C19.2109 20.8667 19.171 20.8858 19.136 20.912C18.7948 21.1724 18.3823 21.3225 17.9535 21.3425C17.5247 21.3625 17.1001 21.2514 16.736 21.024L10.464 17.2H10.528L15.216 15.12C15.6539 14.9201 15.998 14.5592 16.1768 14.1123C16.3555 13.6654 16.3553 13.1667 16.176 12.72C16.0337 12.3695 15.7846 12.0728 15.464 11.872L12.952 10.04L13.816 9.60801L14.984 10.408L16.024 11.128C16.2698 11.3035 16.5662 11.3938 16.8681 11.3852C17.17 11.3765 17.4607 11.2693 17.696 11.08L18.824 11.616C18.8751 11.6455 18.933 11.661 18.992 11.661C19.051 11.661 19.109 11.6455 19.16 11.616C19.2075 11.5814 19.2455 11.5354 19.2707 11.4823C19.2958 11.4292 19.3073 11.3707 19.304 11.312C19.301 11.2532 19.2813 11.1964 19.2473 11.1483C19.2134 11.1001 19.1665 11.0626 19.112 11.04L18.072 10.544C18.1519 10.3351 18.1767 10.1092 18.144 9.88801C18.1164 9.71048 18.0533 9.54034 17.9585 9.38777C17.8636 9.23519 17.739 9.10331 17.592 9.00001L16.704 8.37601H16.8C16.8867 8.35804 16.9688 8.32292 17.0417 8.27274C17.1146 8.22256 17.1767 8.15832 17.2244 8.08379C17.2721 8.00926 17.3044 7.92594 17.3195 7.83874C17.3345 7.75154 17.332 7.66222 17.312 7.57601L17.112 6.65601C17.0928 6.57203 17.0688 6.48922 17.04 6.408C17.3533 6.57699 17.7012 6.67214 18.0569 6.68617C18.4126 6.70019 18.7668 6.63271 19.0925 6.48891C19.4182 6.34511 19.7067 6.12878 19.9359 5.85644C20.1652 5.58411 20.3292 5.26297 20.4154 4.91756C20.5016 4.57216 20.5077 4.21163 20.4332 3.8635C20.3588 3.51537 20.2058 3.18886 19.9859 2.90891C19.7659 2.62896 19.485 2.40298 19.1644 2.24823C18.8437 2.09348 18.492 2.01405 18.136 2.01601L18.168 2.00001ZM17.24 9.53601C17.3148 9.58681 17.3783 9.65253 17.4265 9.72903C17.4747 9.80552 17.5065 9.89115 17.52 9.98054C17.5336 10.0699 17.5285 10.1612 17.505 10.2485C17.4816 10.3358 17.4404 10.4174 17.384 10.488C17.2688 10.6235 17.1066 10.7103 16.93 10.7311C16.7534 10.7518 16.5755 10.705 16.432 10.6L15.632 10.032L15.144 9.69601L14.072 8.95201L13.768 8.73601C13.6975 8.68989 13.637 8.62997 13.5903 8.55985C13.5435 8.48973 13.5115 8.41086 13.496 8.32801L13.368 7.73601C13.3486 7.65035 13.3464 7.5617 13.3615 7.47519C13.3766 7.38868 13.4088 7.30602 13.456 7.232C13.5537 7.08722 13.7021 6.98442 13.872 6.944L14.552 6.80001C14.5964 6.79183 14.6386 6.77482 14.6762 6.74998C14.7138 6.72515 14.7461 6.69299 14.771 6.65544C14.7959 6.61789 14.813 6.57571 14.8213 6.53141C14.8296 6.4871 14.8289 6.44157 14.8193 6.39754C14.8096 6.35352 14.7912 6.31188 14.7651 6.27512C14.739 6.23836 14.7058 6.20722 14.6674 6.18357C14.629 6.15991 14.5863 6.14422 14.5417 6.13742C14.4972 6.13063 14.4517 6.13286 14.408 6.144L13.736 6.29601C13.5633 6.33295 13.3995 6.40379 13.2543 6.50443C13.1091 6.60506 12.9853 6.73349 12.8901 6.8823C12.7949 7.0311 12.7301 7.19732 12.6995 7.37132C12.669 7.54533 12.6732 7.72365 12.712 7.89601L12.84 8.48801C12.902 8.75613 13.0444 8.99894 13.248 9.18401L12.56 9.52801C12.5213 9.5454 12.4881 9.57306 12.464 9.60801C12.4013 9.68116 12.3547 9.76668 12.3271 9.85902C12.2995 9.95135 12.2917 10.0484 12.304 10.144C12.3179 10.2358 12.3507 10.3237 12.4003 10.4022C12.4498 10.4807 12.5151 10.548 12.592 10.6L15.12 12.384C15.3293 12.5127 15.4941 12.7026 15.592 12.928C15.721 13.223 15.7277 13.5571 15.6108 13.857C15.4938 14.1569 15.2626 14.3982 14.968 14.528L10.28 16.608C10.1971 16.6456 10.1071 16.665 10.016 16.665C9.92497 16.665 9.83497 16.6456 9.75202 16.608C9.62394 16.5614 9.51331 16.4766 9.43513 16.3649C9.35695 16.2533 9.315 16.1203 9.315 15.984C9.315 15.8477 9.35695 15.7147 9.43513 15.6031C9.51331 15.4915 9.62394 15.4066 9.75202 15.36L13.04 13.904C13.1475 13.8517 13.24 13.7728 13.3085 13.6748C13.3771 13.5768 13.4196 13.463 13.432 13.344C13.439 13.2238 13.4146 13.1039 13.3613 12.9959C13.308 12.8879 13.2276 12.7956 13.128 12.728L9.92802 10.704C9.63184 10.5037 9.41573 10.2054 9.3177 9.86161C9.21966 9.51776 9.24599 9.15037 9.39202 8.82401C9.48209 8.67135 9.59856 8.53591 9.73602 8.42401L13.184 5.62401C13.5678 5.31201 14.0539 5.15393 14.5478 5.18055C15.0417 5.20717 15.508 5.41658 15.856 5.76801C16.1446 6.05484 16.3446 6.41864 16.432 6.81601L16.632 7.744L16.16 7.84001C16.0631 7.8589 15.974 7.90629 15.9041 7.97613C15.8343 8.04597 15.7869 8.13506 15.768 8.232C15.7517 8.32708 15.7626 8.42483 15.7994 8.514C15.8362 8.60317 15.8974 8.68012 15.976 8.73601L17.24 9.53601ZM18.168 6.00001C17.8366 6.00159 17.5123 5.90468 17.2361 5.72157C16.9599 5.53846 16.7444 5.2774 16.6168 4.97155C16.4893 4.66571 16.4555 4.32887 16.5198 4.00379C16.584 3.67871 16.7434 3.38006 16.9778 3.14575C17.2121 2.91143 17.5107 2.75202 17.8358 2.68777C18.1609 2.62351 18.4977 2.6573 18.8036 2.78484C19.1094 2.91238 19.3705 3.12792 19.5536 3.4041C19.7367 3.68028 19.8336 4.00464 19.832 4.33601C19.832 4.55453 19.789 4.77091 19.7054 4.9728C19.6217 5.17469 19.4992 5.35811 19.3446 5.51263C19.1901 5.66715 19.0067 5.78973 18.8048 5.87335C18.6029 5.95697 18.3865 6.00001 18.168 6.00001Z"
        stroke={stroke}
        strokeWidth="0.2"
        mask="url(#path-1-outside-1)"
      />
      <path
        d="M4.99257 11.3776L4.99251 11.378L4.99904 11.3781C5.08241 11.3791 5.16377 11.3525 5.23047 11.3025C5.29692 11.2527 5.34511 11.1823 5.36758 11.1024C5.39258 11.0232 5.39083 10.938 5.36259 10.86C5.33424 10.7816 5.28079 10.7148 5.21056 10.67L5.21037 10.6698L2.57837 9.00583L2.57837 9.00583L2.57808 9.00565C2.53527 8.97899 2.48756 8.96118 2.43777 8.95324C2.38797 8.94531 2.33709 8.94742 2.28813 8.95945C2.23916 8.97147 2.19309 8.99317 2.15263 9.02327C2.11226 9.05331 2.0783 9.0911 2.05273 9.13443C2.00082 9.22011 1.98427 9.32262 2.00654 9.42028C2.02884 9.51806 2.08832 9.60332 2.17238 9.65801L2.17238 9.65802L2.17316 9.6585L4.83716 11.3225L4.83716 11.3225L4.83809 11.3231C4.88549 11.3513 4.93799 11.3698 4.99257 11.3776Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M7.65781 11.1874C7.68624 11.1449 7.70575 11.097 7.71516 11.0468C7.72458 10.9964 7.72365 10.9446 7.71244 10.8946C7.70123 10.8446 7.67997 10.7973 7.64994 10.7558C7.62001 10.7144 7.58198 10.6795 7.53818 10.6532L4.87456 8.98942L4.87457 8.98942L4.87389 8.98901C4.78701 8.93662 4.68328 8.91977 4.58428 8.94196C4.48529 8.96415 4.39866 9.02367 4.34245 9.10813L4.34243 9.10811L4.34153 9.10957C4.31474 9.15295 4.29683 9.20121 4.2888 9.25156C4.28077 9.3019 4.2828 9.35335 4.29476 9.40291C4.30672 9.45247 4.32838 9.49917 4.3585 9.54031C4.38854 9.58136 4.42639 9.61606 4.46988 9.64243L7.13359 11.3062L7.13358 11.3062L7.13413 11.3066C7.21986 11.3586 7.32249 11.3753 7.42027 11.353C7.51794 11.3307 7.60312 11.2713 7.65781 11.1874ZM7.65781 11.1874C7.65775 11.1875 7.65768 11.1876 7.65762 11.1877L7.61608 11.1598L7.65799 11.1871C7.65793 11.1872 7.65787 11.1873 7.65781 11.1874Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
    </svg>
  )
}

AlpineSkiingIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
}

export default AlpineSkiingIcon
