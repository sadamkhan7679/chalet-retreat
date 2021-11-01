import React from 'react'
import {palette} from 'src/components/foundation/palette'

const FishingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({fill}) => {
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
        x="1"
        y="1"
        width="9"
        height="22"
        fill="black"
      >
        <rect fill="white" x="1" y="1" width="9" height="22" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.82734 22C7.97161 21.9667 9.68673 20.2084 9.66667 18.064V12.48C9.66675 12.1944 9.48494 11.9405 9.21457 11.8486C8.94419 11.7567 8.64531 11.8472 8.47134 12.0737L6.14867 15.0933C5.99371 15.2946 5.96662 15.5665 6.07881 15.7944C6.191 16.0223 6.42296 16.1667 6.677 16.1667H7.33333V18.1667C7.33241 18.5907 7.15247 18.9946 6.83787 19.2788C6.52327 19.5631 6.10325 19.7013 5.68134 19.6593C4.89731 19.5519 4.3179 18.8745 4.33334 18.0833V2.66667C4.33334 2.29848 4.03486 2 3.66667 2H2.66667C2.29848 2 2 2.29848 2 2.66667V18.1667C2.00256 20.2804 3.71365 21.9941 5.82733 22L5.82734 22ZM2.66665 2.6669H3.66665V18.0836C3.64364 19.2802 4.59503 20.2689 5.79165 20.2919C6.98826 20.3149 7.97697 19.3635 7.99998 18.1669V15.8336C7.99998 15.6495 7.85074 15.5002 7.66665 15.5002H6.67698L8.99998 12.4802V18.0642C9.01642 19.7201 7.78362 21.1229 6.13932 21.3192C5.25057 21.4045 4.36707 21.111 3.70599 20.5109C3.04491 19.9108 2.66755 19.0597 2.66665 18.1669L2.66665 2.6669Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.82734 22C7.97161 21.9667 9.68673 20.2084 9.66667 18.064V12.48C9.66675 12.1944 9.48494 11.9405 9.21457 11.8486C8.94419 11.7567 8.64531 11.8472 8.47134 12.0737L6.14867 15.0933C5.99371 15.2946 5.96662 15.5665 6.07881 15.7944C6.191 16.0223 6.42296 16.1667 6.677 16.1667H7.33333V18.1667C7.33241 18.5907 7.15247 18.9946 6.83787 19.2788C6.52327 19.5631 6.10325 19.7013 5.68134 19.6593C4.89731 19.5519 4.3179 18.8745 4.33334 18.0833V2.66667C4.33334 2.29848 4.03486 2 3.66667 2H2.66667C2.29848 2 2 2.29848 2 2.66667V18.1667C2.00256 20.2804 3.71365 21.9941 5.82733 22L5.82734 22ZM2.66665 2.6669H3.66665V18.0836C3.64364 19.2802 4.59503 20.2689 5.79165 20.2919C6.98826 20.3149 7.97697 19.3635 7.99998 18.1669V15.8336C7.99998 15.6495 7.85074 15.5002 7.66665 15.5002H6.67698L8.99998 12.4802V18.0642C9.01642 19.7201 7.78362 21.1229 6.13932 21.3192C5.25057 21.4045 4.36707 21.111 3.70599 20.5109C3.04491 19.9108 2.66755 19.0597 2.66665 18.1669L2.66665 2.6669Z"
        fill={fill}
      />
      <path
        d="M5.82734 22L5.76673 22.0795L5.79427 22.1005L5.82889 22.1L5.82734 22ZM9.66667 18.064H9.56667L9.56668 18.0649L9.66667 18.064ZM9.66667 12.48L9.56667 12.48V12.48H9.66667ZM9.21457 11.8486L9.24675 11.7539L9.24675 11.7539L9.21457 11.8486ZM8.47134 12.0737L8.5506 12.1346L8.55064 12.1346L8.47134 12.0737ZM6.14867 15.0933L6.22791 15.1543L6.22794 15.1543L6.14867 15.0933ZM6.677 16.1667V16.0667H6.67699L6.677 16.1667ZM7.33333 16.1667H7.43333V16.0667H7.33333V16.1667ZM7.33333 18.1667L7.43333 18.1669V18.1667H7.33333ZM6.83787 19.2788L6.77082 19.2046L6.77082 19.2046L6.83787 19.2788ZM5.68134 19.6593L5.66776 19.7585L5.67144 19.7588L5.68134 19.6593ZM4.33334 18.0833L4.43334 18.0853V18.0833H4.33334ZM2 18.1667H1.9L1.9 18.1668L2 18.1667ZM5.82733 22L5.88794 21.9205L5.86121 21.9001L5.82761 21.9L5.82733 22ZM2.66665 2.6669V2.5669H2.56665V2.6669L2.66665 2.6669ZM3.66665 2.6669H3.76665V2.5669H3.66665V2.6669ZM3.66665 18.0836L3.76665 18.0855V18.0836H3.66665ZM7.99998 18.1669L8.09998 18.1688V18.1669H7.99998ZM6.67698 15.5002L6.59772 15.4393L6.4739 15.6002H6.67698V15.5002ZM8.99998 12.4802H9.09998V12.1862L8.92072 12.4193L8.99998 12.4802ZM8.99998 18.0642H8.89997L8.89998 18.0652L8.99998 18.0642ZM6.13932 21.3192L6.14887 21.4188L6.15117 21.4185L6.13932 21.3192ZM2.66665 18.1669H2.56665L2.56665 18.167L2.66665 18.1669ZM5.82889 22.1C8.02814 22.0659 9.78724 20.2625 9.76667 18.0631L9.56668 18.0649C9.58622 20.1544 7.91508 21.8676 5.82579 21.9L5.82889 22.1ZM9.76667 18.064V12.48H9.56667V18.064H9.76667ZM9.76667 12.48C9.76676 12.1516 9.55768 11.8596 9.24675 11.7539L9.18238 11.9433C9.4122 12.0214 9.56674 12.2372 9.56667 12.48L9.76667 12.48ZM9.24675 11.7539C8.93582 11.6482 8.59211 11.7523 8.39204 12.0127L8.55064 12.1346C8.69852 11.9421 8.95256 11.8652 9.18238 11.9433L9.24675 11.7539ZM8.39207 12.0127L6.06941 15.0324L6.22794 15.1543L8.5506 12.1346L8.39207 12.0127ZM6.06943 15.0323C5.89122 15.2638 5.86007 15.5765 5.98909 15.8386L6.16853 15.7503C6.07316 15.5565 6.09619 15.3254 6.22791 15.1543L6.06943 15.0323ZM5.98909 15.8386C6.1181 16.1007 6.38487 16.2667 6.67701 16.2667L6.67699 16.0667C6.46106 16.0667 6.26389 15.944 6.16853 15.7503L5.98909 15.8386ZM6.677 16.2667H7.33333V16.0667H6.677V16.2667ZM7.23333 16.1667V18.1667H7.43333V16.1667H7.23333ZM7.23333 18.1664C7.23247 18.5622 7.0645 18.9393 6.77082 19.2046L6.90491 19.353C7.24043 19.0499 7.43234 18.6191 7.43333 18.1669L7.23333 18.1664ZM6.77082 19.2046C6.47715 19.47 6.08508 19.599 5.69123 19.5598L5.67144 19.7588C6.12143 19.8036 6.56938 19.6562 6.90491 19.353L6.77082 19.2046ZM5.69491 19.5603C4.96114 19.4597 4.41887 18.8258 4.43332 18.0853L4.23336 18.0814C4.21693 18.9233 4.83348 19.6441 5.66776 19.7584L5.69491 19.5603ZM4.43334 18.0833V2.66667H4.23334V18.0833H4.43334ZM4.43334 2.66667C4.43334 2.24325 4.09009 1.9 3.66667 1.9V2.1C3.97963 2.1 4.23334 2.35371 4.23334 2.66667H4.43334ZM3.66667 1.9H2.66667V2.1H3.66667V1.9ZM2.66667 1.9C2.24325 1.9 1.9 2.24325 1.9 2.66667H2.1C2.1 2.35371 2.35371 2.1 2.66667 2.1V1.9ZM1.9 2.66667V18.1667H2.1V2.66667H1.9ZM1.9 18.1668C1.90263 20.3355 3.6583 22.094 5.82706 22.1L5.82761 21.9C3.769 21.8943 2.10249 20.2252 2.1 18.1665L1.9 18.1668ZM5.76673 22.0795L5.76673 22.0795L5.88794 21.9205L5.88794 21.9205L5.76673 22.0795ZM2.66665 2.7669H3.66665V2.5669H2.66665V2.7669ZM3.56665 2.6669V18.0836H3.76665V2.6669H3.56665ZM3.56667 18.0816C3.5426 19.3335 4.53789 20.3678 5.78973 20.3919L5.79357 20.1919C4.65217 20.17 3.74468 19.2269 3.76663 18.0855L3.56667 18.0816ZM5.78973 20.3919C7.04156 20.416 8.07589 19.4207 8.09996 18.1688L7.9 18.165C7.87805 19.3064 6.93497 20.2139 5.79357 20.1919L5.78973 20.3919ZM8.09998 18.1669V15.8336H7.89998V18.1669H8.09998ZM8.09998 15.8336C8.09998 15.5942 7.90597 15.4002 7.66665 15.4002V15.6002C7.79551 15.6002 7.89998 15.7047 7.89998 15.8336H8.09998ZM7.66665 15.4002H6.67698V15.6002H7.66665V15.4002ZM6.75624 15.5612L9.07924 12.5412L8.92072 12.4193L6.59772 15.4393L6.75624 15.5612ZM8.89998 12.4802V18.0642H9.09998V12.4802H8.89998ZM8.89998 18.0652C8.91592 19.6701 7.7211 21.0296 6.12746 21.2199L6.15117 21.4185C7.84613 21.2161 9.11692 19.7702 9.09997 18.0632L8.89998 18.0652ZM6.12977 21.2197C5.26906 21.3023 4.41343 21.018 3.77321 20.4368L3.63878 20.5849C4.32072 21.204 5.23208 21.5067 6.14887 21.4188L6.12977 21.2197ZM3.77321 20.4368C3.13298 19.8557 2.76752 19.0315 2.76665 18.1668L2.56665 18.167C2.56758 19.088 2.95685 19.9659 3.63878 20.5849L3.77321 20.4368ZM2.76665 18.1669L2.76665 2.6669L2.56665 2.6669L2.56665 18.1669H2.76665Z"
        fill={fill}
        mask="url(#path-1-outside-1)"
      />
      <path
        d="M18.0229 8.0504C18.3819 8.0504 18.673 7.75936 18.673 7.40035C18.673 7.04133 18.3819 6.75029 18.0229 6.75029C17.6639 6.75029 17.3729 7.04133 17.3729 7.40035C17.3729 7.75936 17.6639 8.0504 18.0229 8.0504Z"
        fill={fill}
        stroke="#5A6987"
        strokeWidth="0.1"
      />
      <mask
        id="path-4-outside-2"
        maskUnits="userSpaceOnUse"
        x="9.66699"
        y="1.01611"
        width="13"
        height="22"
        fill="black"
      >
        <rect fill="white" x="9.66699" y="1.01611" width="13" height="22" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0863 7.36358C19.676 5.02258 18.8003 2.80425 17.6553 2.11092C17.501 2.01862 17.3161 1.99237 17.1422 2.03809C16.9684 2.08382 16.8202 2.19766 16.7313 2.35392L16.3337 3.05092L15.9407 2.36325C15.8515 2.20581 15.7022 2.09136 15.527 2.04616C15.3519 2.00097 15.1658 2.02891 15.0117 2.12358C13.8803 2.82158 13.0147 5.01992 12.6053 7.34058C12.1637 7.53325 10.667 10.5692 10.667 12.7166C10.667 13.2279 11.049 13.6686 11.9003 13.6686C12.1936 13.6636 12.4849 13.6205 12.767 13.5402C13.22 15.3402 14.015 16.9012 15.036 17.6419C13.359 18.1799 12.1714 19.6753 12.027 21.4306C12.0136 21.6066 12.0892 21.7777 12.2284 21.8863C12.3675 21.9949 12.5518 22.0267 12.7193 21.9709C13.1851 21.7806 13.6641 21.6247 14.1527 21.5042C16.0809 21.0384 18.1072 21.1971 19.9393 21.9576C20.1086 22.0267 20.3015 22.0035 20.4496 21.8963C20.5977 21.789 20.6799 21.6129 20.667 21.4306V21.4276C20.5212 19.6727 19.3327 18.1784 17.6557 17.6416C18.6756 16.9019 19.47 15.3446 19.9223 13.5452C20.1984 13.6224 20.4833 13.6639 20.77 13.6686C21.614 13.6686 22.0003 13.2332 22.0003 12.7166C22.0003 10.5666 20.525 7.55991 20.0863 7.36357L20.0863 7.36358ZM15.3617 2.69338L15.7551 3.38171C15.8738 3.58927 16.0946 3.71734 16.3337 3.71734C16.5729 3.71734 16.7937 3.58927 16.9124 3.38171L17.3104 2.68438C16.9281 2.46572 16.9207 2.46271 17.3104 2.68138C18.0771 3.14471 18.7981 4.68538 19.2391 6.54171C17.3689 7.22356 15.3182 7.22356 13.4481 6.54171C13.8867 4.69505 14.6031 3.16004 15.3617 2.69338H15.3617ZM11.422 12.8966C11.3606 12.8584 11.3263 12.7885 11.3337 12.7166C11.3337 11.5013 11.9023 9.87259 12.4073 8.82759C12.2769 10.185 12.3479 11.5543 12.618 12.8909C12.057 13.0499 11.6053 13.0236 11.422 12.8966ZM19.9773 21.2563C19.6189 21.1181 19.2527 21.0011 18.8806 20.906C18.7329 20.3668 18.4695 19.8663 18.1086 19.4393C18.028 19.3517 17.9067 19.3137 17.7905 19.3397C17.6743 19.3657 17.5808 19.4517 17.5452 19.5654C17.5096 19.679 17.5373 19.803 17.6179 19.8907C17.8291 20.1447 17.9998 20.4299 18.1239 20.736C17.6427 20.649 17.1557 20.5974 16.6669 20.5817V19.6663C16.6669 19.4822 16.5177 19.333 16.3336 19.333C16.1495 19.333 16.0003 19.4822 16.0003 19.6663V20.582C15.5111 20.5987 15.024 20.6523 14.5429 20.7423C14.667 20.4346 14.8377 20.1476 15.0489 19.8917C15.1654 19.7552 15.153 19.5511 15.0209 19.4298C14.8888 19.3085 14.6843 19.3134 14.5583 19.441C14.1971 19.8698 13.9337 20.3721 13.7863 20.913C13.4225 21.0069 13.0644 21.1214 12.7136 21.256C12.9653 19.4432 14.5152 18.0936 16.3454 18.0936C18.1756 18.0936 19.7256 19.4432 19.9773 21.256L19.9773 21.2563ZM16.3294 17.4331C15.0961 17.4188 13.9161 15.5825 13.3534 13.1618C13.3761 13.0774 13.3561 12.9873 13.2997 12.9205C12.9132 11.033 12.9153 9.08651 13.3057 7.19981C15.2714 7.89531 17.4161 7.89531 19.3817 7.19981C19.7735 9.08695 19.7754 11.0342 19.3874 12.9221C19.3272 12.9907 19.3062 13.0852 19.3317 13.1728C18.9671 14.7331 17.9274 17.4271 16.3294 17.4331V17.4331ZM21.2457 12.897C20.8669 13.0434 20.4471 13.0434 20.0683 12.897C20.337 11.5703 20.4096 10.2114 20.2837 8.86366C20.7783 9.89999 21.3337 11.5113 21.3337 12.7167C21.341 12.7886 21.3069 12.8585 21.2457 12.897Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0863 7.36358C19.676 5.02258 18.8003 2.80425 17.6553 2.11092C17.501 2.01862 17.3161 1.99237 17.1422 2.03809C16.9684 2.08382 16.8202 2.19766 16.7313 2.35392L16.3337 3.05092L15.9407 2.36325C15.8515 2.20581 15.7022 2.09136 15.527 2.04616C15.3519 2.00097 15.1658 2.02891 15.0117 2.12358C13.8803 2.82158 13.0147 5.01992 12.6053 7.34058C12.1637 7.53325 10.667 10.5692 10.667 12.7166C10.667 13.2279 11.049 13.6686 11.9003 13.6686C12.1936 13.6636 12.4849 13.6205 12.767 13.5402C13.22 15.3402 14.015 16.9012 15.036 17.6419C13.359 18.1799 12.1714 19.6753 12.027 21.4306C12.0136 21.6066 12.0892 21.7777 12.2284 21.8863C12.3675 21.9949 12.5518 22.0267 12.7193 21.9709C13.1851 21.7806 13.6641 21.6247 14.1527 21.5042C16.0809 21.0384 18.1072 21.1971 19.9393 21.9576C20.1086 22.0267 20.3015 22.0035 20.4496 21.8963C20.5977 21.789 20.6799 21.6129 20.667 21.4306V21.4276C20.5212 19.6727 19.3327 18.1784 17.6557 17.6416C18.6756 16.9019 19.47 15.3446 19.9223 13.5452C20.1984 13.6224 20.4833 13.6639 20.77 13.6686C21.614 13.6686 22.0003 13.2332 22.0003 12.7166C22.0003 10.5666 20.525 7.55991 20.0863 7.36357L20.0863 7.36358ZM15.3617 2.69338L15.7551 3.38171C15.8738 3.58927 16.0946 3.71734 16.3337 3.71734C16.5729 3.71734 16.7937 3.58927 16.9124 3.38171L17.3104 2.68438C16.9281 2.46572 16.9207 2.46271 17.3104 2.68138C18.0771 3.14471 18.7981 4.68538 19.2391 6.54171C17.3689 7.22356 15.3182 7.22356 13.4481 6.54171C13.8867 4.69505 14.6031 3.16004 15.3617 2.69338H15.3617ZM11.422 12.8966C11.3606 12.8584 11.3263 12.7885 11.3337 12.7166C11.3337 11.5013 11.9023 9.87259 12.4073 8.82759C12.2769 10.185 12.3479 11.5543 12.618 12.8909C12.057 13.0499 11.6053 13.0236 11.422 12.8966ZM19.9773 21.2563C19.6189 21.1181 19.2527 21.0011 18.8806 20.906C18.7329 20.3668 18.4695 19.8663 18.1086 19.4393C18.028 19.3517 17.9067 19.3137 17.7905 19.3397C17.6743 19.3657 17.5808 19.4517 17.5452 19.5654C17.5096 19.679 17.5373 19.803 17.6179 19.8907C17.8291 20.1447 17.9998 20.4299 18.1239 20.736C17.6427 20.649 17.1557 20.5974 16.6669 20.5817V19.6663C16.6669 19.4822 16.5177 19.333 16.3336 19.333C16.1495 19.333 16.0003 19.4822 16.0003 19.6663V20.582C15.5111 20.5987 15.024 20.6523 14.5429 20.7423C14.667 20.4346 14.8377 20.1476 15.0489 19.8917C15.1654 19.7552 15.153 19.5511 15.0209 19.4298C14.8888 19.3085 14.6843 19.3134 14.5583 19.441C14.1971 19.8698 13.9337 20.3721 13.7863 20.913C13.4225 21.0069 13.0644 21.1214 12.7136 21.256C12.9653 19.4432 14.5152 18.0936 16.3454 18.0936C18.1756 18.0936 19.7256 19.4432 19.9773 21.256L19.9773 21.2563ZM16.3294 17.4331C15.0961 17.4188 13.9161 15.5825 13.3534 13.1618C13.3761 13.0774 13.3561 12.9873 13.2997 12.9205C12.9132 11.033 12.9153 9.08651 13.3057 7.19981C15.2714 7.89531 17.4161 7.89531 19.3817 7.19981C19.7735 9.08695 19.7754 11.0342 19.3874 12.9221C19.3272 12.9907 19.3062 13.0852 19.3317 13.1728C18.9671 14.7331 17.9274 17.4271 16.3294 17.4331V17.4331ZM21.2457 12.897C20.8669 13.0434 20.4471 13.0434 20.0683 12.897C20.337 11.5703 20.4096 10.2114 20.2837 8.86366C20.7783 9.89999 21.3337 11.5113 21.3337 12.7167C21.341 12.7886 21.3069 12.8585 21.2457 12.897Z"
        fill={fill}
      />
      <path
        d="M20.0863 7.36358L20.0416 7.45302L20.2191 7.54176L20.1848 7.34632L20.0863 7.36358ZM17.6553 2.11092L17.7071 2.02538L17.7067 2.0251L17.6553 2.11092ZM16.7313 2.35392L16.8182 2.40348L16.8182 2.40338L16.7313 2.35392ZM16.3337 3.05092L16.2468 3.10054L16.3337 3.25258L16.4205 3.10047L16.3337 3.05092ZM15.9407 2.36325L15.8536 2.41252L15.8538 2.41287L15.9407 2.36325ZM15.0117 2.12358L14.9593 2.03837L14.9591 2.03848L15.0117 2.12358ZM12.6053 7.34058L12.6453 7.43224L12.6945 7.41079L12.7038 7.35795L12.6053 7.34058ZM11.9003 13.6686V13.7686L11.902 13.7686L11.9003 13.6686ZM12.767 13.5402L12.864 13.5158L12.8388 13.4159L12.7396 13.4441L12.767 13.5402ZM15.036 17.6419L15.0665 17.7371L15.2544 17.6768L15.0947 17.561L15.036 17.6419ZM12.027 21.4306L11.9273 21.4224L11.9273 21.423L12.027 21.4306ZM12.2284 21.8863L12.1668 21.9651H12.1668L12.2284 21.8863ZM12.7193 21.9709L12.751 22.066L12.7571 22.0635L12.7193 21.9709ZM14.1527 21.5042L14.1292 21.407L14.1287 21.4071L14.1527 21.5042ZM19.9393 21.9576L19.901 22.0499L19.9015 22.0501L19.9393 21.9576ZM20.4496 21.8963L20.5083 21.9773H20.5083L20.4496 21.8963ZM20.667 21.4306H20.5667L20.5672 21.4376L20.667 21.4306ZM20.667 21.4276H20.7673L20.7666 21.4193L20.667 21.4276ZM17.6557 17.6416L17.5969 17.5606L17.437 17.6766L17.6252 17.7368L17.6557 17.6416ZM19.9223 13.5452L19.9492 13.4489L19.8504 13.4213L19.8253 13.5209L19.9223 13.5452ZM20.77 13.6686L20.7683 13.7686H20.77V13.6686ZM20.0863 7.36357L20.1272 7.2723L20.0416 7.45302L20.0863 7.36357ZM15.3617 2.69338L15.4486 2.64377L15.4198 2.59338H15.3617V2.69338ZM15.7551 3.38171L15.6683 3.43133L15.6683 3.43137L15.7551 3.38171ZM16.9124 3.38171L16.9992 3.43137L16.9993 3.43128L16.9124 3.38171ZM17.3104 2.68438L17.3973 2.73395L17.4468 2.64718L17.3601 2.59757L17.3104 2.68438ZM17.3104 2.68138L17.3622 2.59575L17.3593 2.59417L17.3104 2.68138ZM19.2391 6.54171L19.2733 6.63566L19.3569 6.60518L19.3364 6.5186L19.2391 6.54171ZM13.4481 6.54171L13.3508 6.5186L13.3302 6.60518L13.4138 6.63566L13.4481 6.54171ZM15.3617 2.69338V2.59338H15.3334L15.3093 2.6082L15.3617 2.69338ZM11.422 12.8966L11.479 12.8143L11.4748 12.8117L11.422 12.8966ZM11.3337 12.7166L11.4337 12.7268V12.7166H11.3337ZM12.4073 8.82759L12.5069 8.83716L12.3173 8.78408L12.4073 8.82759ZM12.618 12.8909L12.6453 12.9871L12.7344 12.9619L12.716 12.8711L12.618 12.8909ZM19.9773 21.2563L19.9413 21.3496L20.075 21.4012L20.0772 21.2579L19.9773 21.2563ZM18.8806 20.906L18.7841 20.9324L18.7995 20.9885L18.8558 21.0029L18.8806 20.906ZM18.1086 19.4393L18.185 19.3747L18.1822 19.3716L18.1086 19.4393ZM17.5452 19.5654L17.4497 19.5355H17.4497L17.5452 19.5654ZM17.6179 19.8907L17.6949 19.8267L17.6915 19.823L17.6179 19.8907ZM18.1239 20.736L18.1061 20.8344L18.2849 20.8667L18.2166 20.6984L18.1239 20.736ZM16.6669 20.5817H16.5669V20.6785L16.6637 20.6816L16.6669 20.5817ZM16.0003 20.582L16.0037 20.682L16.1003 20.6786V20.582H16.0003ZM14.5429 20.7423L14.4502 20.705L14.3819 20.8742L14.5613 20.8406L14.5429 20.7423ZM15.0489 19.8917L14.9729 19.8268L14.9718 19.828L15.0489 19.8917ZM15.0209 19.4298L14.9532 19.5034L14.9532 19.5034L15.0209 19.4298ZM14.5583 19.441L14.4869 19.3705L14.4818 19.3766L14.5583 19.441ZM13.7863 20.913L13.8113 21.0098L13.8675 20.9953L13.8827 20.9393L13.7863 20.913ZM12.7136 21.256L12.6145 21.2423L12.5913 21.4101L12.7494 21.3494L12.7136 21.256ZM19.9773 21.256L20.0773 21.2576L20.0774 21.2499L20.0763 21.2423L19.9773 21.256ZM16.3294 17.4331L16.3282 17.5331L16.4294 17.5343V17.4331H16.3294ZM13.3534 13.1618L13.2568 13.1358L13.2503 13.16L13.256 13.1845L13.3534 13.1618ZM13.2997 12.9205L13.2018 12.9405L13.2069 12.9655L13.2233 12.985L13.2997 12.9205ZM13.3057 7.19981L13.3391 7.10554L13.231 7.06731L13.2078 7.17955L13.3057 7.19981ZM19.3817 7.19981L19.4797 7.17949L19.4564 7.06733L19.3484 7.10554L19.3817 7.19981ZM19.3874 12.9221L19.4625 12.9881L19.48 12.9682L19.4854 12.9423L19.3874 12.9221ZM19.3317 13.1728L19.4291 13.1956L19.4351 13.17L19.4277 13.1448L19.3317 13.1728ZM16.3294 17.4331L16.329 17.3331L16.2294 17.3335V17.4331H16.3294ZM21.2457 12.897L21.2817 12.9903L21.2907 12.9868L21.2989 12.9816L21.2457 12.897ZM20.0683 12.897L19.9703 12.8771L19.9536 12.9599L20.0323 12.9903L20.0683 12.897ZM20.2837 8.86366L20.3739 8.82059L20.1841 8.87296L20.2837 8.86366ZM21.3337 12.7167H21.2332L21.2342 12.7268L21.3337 12.7167ZM20.1848 7.34632C19.9786 6.16992 19.6551 5.02192 19.2378 4.0789C18.822 3.13964 18.3065 2.38829 17.7071 2.02538L17.6035 2.19646C18.1492 2.52688 18.6439 3.23136 19.0549 4.15985C19.4642 5.08458 19.7837 6.21625 19.9878 7.38085L20.1848 7.34632ZM17.7067 2.0251C17.5293 1.919 17.3167 1.88881 17.1168 1.94138L17.1677 2.1348C17.3155 2.09592 17.4728 2.11825 17.604 2.19673L17.7067 2.0251ZM17.1168 1.94138C16.9169 1.99395 16.7466 2.12483 16.6444 2.30446L16.8182 2.40338C16.8938 2.2705 17.0198 2.17369 17.1677 2.1348L17.1168 1.94138ZM16.6445 2.30436L16.2468 3.00136L16.4205 3.10047L16.8182 2.40348L16.6445 2.30436ZM16.4205 3.0013L16.0275 2.31363L15.8538 2.41287L16.2468 3.10054L16.4205 3.0013ZM16.0277 2.31399C15.9252 2.13293 15.7535 2.00131 15.552 1.94933L15.5021 2.14299C15.651 2.18141 15.7779 2.27869 15.8536 2.41252L16.0277 2.31399ZM15.552 1.94933C15.3506 1.89736 15.1366 1.9295 14.9593 2.03837L15.064 2.2088C15.195 2.12833 15.3532 2.10458 15.5021 2.14299L15.552 1.94933ZM14.9591 2.03848C14.3671 2.40373 13.8576 3.15091 13.4463 4.08321C13.0333 5.0192 12.7125 6.15704 12.5068 7.32321L12.7038 7.35795C12.9074 6.20346 13.2242 5.0818 13.6292 4.16395C14.0359 3.24242 14.5248 2.54144 15.0642 2.20869L14.9591 2.03848ZM12.5653 7.24892C12.5224 7.26765 12.4809 7.29972 12.442 7.3365C12.4022 7.37423 12.3602 7.42173 12.3167 7.47696C12.2297 7.58745 12.1324 7.73442 12.0299 7.90932C11.8246 8.25946 11.5941 8.72853 11.378 9.25778C10.9466 10.3141 10.567 11.6239 10.567 12.7166H10.767C10.767 11.6619 11.1357 10.3801 11.5631 9.33338C11.7764 8.81113 12.0028 8.35087 12.2024 8.01047C12.3023 7.8401 12.3944 7.7015 12.4738 7.60069C12.5135 7.55027 12.5489 7.5107 12.5795 7.48174C12.6111 7.45183 12.633 7.4376 12.6453 7.43224L12.5653 7.24892ZM10.567 12.7166C10.567 12.9983 10.673 13.2651 10.8991 13.4601C11.1241 13.654 11.4581 13.7686 11.9003 13.7686V13.5686C11.4912 13.5686 11.2086 13.4628 11.0297 13.3086C10.852 13.1554 10.767 12.9462 10.767 12.7166H10.567ZM11.902 13.7686C12.2039 13.7634 12.5039 13.719 12.7943 13.6364L12.7396 13.4441C12.4659 13.5219 12.1832 13.5638 11.8986 13.5686L11.902 13.7686ZM12.67 13.5646C13.1249 15.372 13.9275 16.9613 14.9773 17.7229L15.0947 17.561C14.1025 16.8412 13.3151 15.3085 12.864 13.5158L12.67 13.5646ZM15.0054 17.5467C13.2899 18.0971 12.075 19.6268 11.9273 21.4224L12.1267 21.4388C12.2677 19.7238 13.4281 18.2628 15.0665 17.7371L15.0054 17.5467ZM11.9273 21.423C11.9113 21.6324 12.0013 21.8359 12.1668 21.9651L12.2899 21.8074C12.1771 21.7194 12.1159 21.5808 12.1267 21.4382L11.9273 21.423ZM12.1668 21.9651C12.3324 22.0943 12.5516 22.1321 12.7509 22.0658L12.6877 21.876C12.552 21.9212 12.4027 21.8955 12.2899 21.8074L12.1668 21.9651ZM12.7571 22.0635C13.2184 21.8751 13.6928 21.7206 14.1766 21.6013L14.1287 21.4071C13.6355 21.5287 13.1518 21.6862 12.6815 21.8783L12.7571 22.0635ZM14.1761 21.6014C16.0837 21.1405 18.0884 21.2976 19.901 22.0499L19.9777 21.8652C18.126 21.0966 16.078 20.9362 14.1292 21.407L14.1761 21.6014ZM19.9015 22.0501C20.1028 22.1323 20.3322 22.1048 20.5083 21.9773L20.3909 21.8153C20.2709 21.9022 20.1144 21.921 19.9771 21.865L19.9015 22.0501ZM20.5083 21.9773C20.6843 21.8497 20.782 21.6404 20.7667 21.4235L20.5672 21.4376C20.5777 21.5855 20.511 21.7283 20.3909 21.8153L20.5083 21.9773ZM20.767 21.4306V21.4276H20.567V21.4306H20.767ZM20.7666 21.4193C20.6175 19.6241 19.4017 18.0955 17.6861 17.5463L17.6252 17.7368C19.2637 18.2614 20.4249 19.7213 20.5673 21.4358L20.7666 21.4193ZM17.7144 17.7225C18.7631 16.962 19.5651 15.3763 20.0193 13.5696L19.8253 13.5209C19.3749 15.3128 18.5882 16.8418 17.5969 17.5606L17.7144 17.7225ZM19.8954 13.6415C20.1798 13.721 20.4731 13.7637 20.7683 13.7686L20.7716 13.5686C20.4935 13.564 20.2171 13.5238 19.9492 13.4489L19.8954 13.6415ZM20.77 13.7686C21.2085 13.7686 21.5416 13.6554 21.7668 13.4622C21.9932 13.2679 22.1003 13.0011 22.1003 12.7166H21.9003C21.9003 12.9488 21.8143 13.1579 21.6365 13.3104C21.4575 13.4641 21.1755 13.5686 20.77 13.5686V13.7686ZM22.1003 12.7166C22.1003 11.6228 21.7261 10.3197 21.3005 9.26988C21.0872 8.74389 20.8597 8.27805 20.6568 7.9301C20.5555 7.7563 20.4594 7.61017 20.3733 7.50015C20.3302 7.44515 20.2886 7.3978 20.2492 7.36011C20.2107 7.32334 20.1696 7.29129 20.1272 7.2723L20.0455 7.45485C20.0579 7.4604 20.0797 7.47484 20.111 7.50475C20.1414 7.53372 20.1765 7.57319 20.2157 7.6234C20.2943 7.72378 20.3854 7.86155 20.484 8.03083C20.6812 8.36904 20.9047 8.82605 21.1151 9.34502C21.5368 10.3851 21.9003 11.6603 21.9003 12.7166H22.1003ZM20.0416 7.45302L20.0416 7.45302L20.131 7.27414L20.131 7.27413L20.0416 7.45302ZM15.2749 2.74299L15.6683 3.43133L15.8419 3.3321L15.4486 2.64377L15.2749 2.74299ZM15.6683 3.43137C15.8048 3.67006 16.0588 3.81734 16.3337 3.81734V3.61734C16.1305 3.61734 15.9428 3.50848 15.8419 3.33206L15.6683 3.43137ZM16.3337 3.81734C16.6087 3.81734 16.8627 3.67006 16.9992 3.43137L16.8256 3.33206C16.7247 3.50848 16.537 3.61734 16.3337 3.61734V3.81734ZM16.9993 3.43128L17.3973 2.73395L17.2236 2.63481L16.8256 3.33214L16.9993 3.43128ZM17.3601 2.59757C17.2644 2.54289 17.1923 2.50169 17.1439 2.47407C17.1197 2.46025 17.1015 2.44987 17.0893 2.44289C17.0832 2.43939 17.0787 2.4368 17.0757 2.43508C17.0742 2.4342 17.0732 2.43364 17.0727 2.43333C17.0724 2.43315 17.0724 2.43319 17.0727 2.43336C17.0728 2.43341 17.0733 2.43373 17.074 2.43417C17.0744 2.43438 17.0752 2.43487 17.0761 2.43552C17.0766 2.43585 17.0778 2.43667 17.0785 2.43716C17.0796 2.43793 17.0825 2.44009 17.0843 2.44151C17.0879 2.44467 17.1019 2.46022 17.1102 2.47396C17.116 2.5499 17.0359 2.61774 17.0036 2.61737C16.9967 2.61589 16.987 2.61295 16.9842 2.6119C16.9827 2.6113 16.9803 2.61027 16.9794 2.60987C16.9778 2.60911 16.9765 2.60848 16.9761 2.60828C16.9756 2.608 16.9751 2.60777 16.9749 2.60765C16.9741 2.60726 16.9737 2.60701 16.974 2.60717C16.9743 2.60734 16.9751 2.60777 16.9765 2.60856C16.9792 2.61009 16.9835 2.61249 16.9895 2.61581C17.0013 2.62243 17.0192 2.63249 17.0433 2.64602C17.0914 2.67307 17.164 2.7139 17.2615 2.76859L17.3593 2.59417C17.262 2.53952 17.1894 2.49873 17.1412 2.47167C17.1172 2.45816 17.0992 2.44804 17.0873 2.44135C17.0813 2.43802 17.0768 2.43547 17.0737 2.43376C17.0722 2.43294 17.0708 2.43218 17.0698 2.43159C17.0693 2.43137 17.0684 2.43084 17.0673 2.43029C17.0673 2.43028 17.0651 2.42913 17.0624 2.42791C17.0615 2.42749 17.0591 2.42646 17.0576 2.42585C17.0548 2.4248 17.0452 2.42186 17.0382 2.42037C17.0059 2.42 16.9258 2.48785 16.9316 2.56379C16.9399 2.57753 16.9539 2.59309 16.9575 2.59625C16.9593 2.59768 16.9622 2.59985 16.9633 2.60062C16.964 2.60112 16.9652 2.60195 16.9657 2.60229C16.9668 2.60298 16.9676 2.6035 16.968 2.60374C16.9688 2.60426 16.9695 2.60468 16.9698 2.60486C16.9705 2.60529 16.9712 2.6057 16.9717 2.60599C16.9728 2.60663 16.9742 2.60744 16.9758 2.60837C16.9791 2.61025 16.9838 2.61296 16.99 2.61648C17.0023 2.62351 17.0206 2.63396 17.0447 2.64775C17.0931 2.67537 17.1652 2.71654 17.2608 2.77119L17.3601 2.59757ZM17.2587 2.76697C17.6166 2.98329 17.978 3.46249 18.3071 4.13322C18.6342 4.80006 18.9225 5.64192 19.1418 6.56482L19.3364 6.5186C19.1146 5.58517 18.8219 4.72853 18.4866 4.04513C18.1533 3.3656 17.7709 2.84281 17.3621 2.5958L17.2587 2.76697ZM19.2048 6.44776C17.3568 7.12154 15.3303 7.12154 13.4823 6.44776L13.4138 6.63566C15.3061 7.32557 17.3811 7.32557 19.2733 6.63566L19.2048 6.44776ZM13.5454 6.56482C13.7634 5.64674 14.05 4.80865 14.3748 4.14394C14.7014 3.47538 15.0598 2.99652 15.4141 2.77856L15.3093 2.6082C14.905 2.8569 14.5259 3.37887 14.1951 4.05615C13.8623 4.73727 13.5714 5.59002 13.3508 6.5186L13.5454 6.56482ZM15.3617 2.79338H15.3617V2.59338H15.3617V2.79338ZM11.4748 12.8117C11.4459 12.7937 11.4297 12.7607 11.4332 12.7267L11.2342 12.7064C11.223 12.8164 11.2753 12.9231 11.3692 12.9815L11.4748 12.8117ZM11.4337 12.7166C11.4337 11.5239 11.9946 9.91154 12.4974 8.8711L12.3173 8.78408C11.8101 9.83363 11.2337 11.4786 11.2337 12.7166H11.4337ZM12.3078 8.81802C12.1764 10.1853 12.2479 11.5644 12.52 12.9107L12.716 12.8711C12.4478 11.5441 12.3773 10.1848 12.5069 8.83716L12.3078 8.81802ZM12.5907 12.7947C12.318 12.872 12.0745 12.9035 11.8796 12.901C11.6808 12.8985 11.5462 12.861 11.479 12.8144L11.3651 12.9788C11.4812 13.0592 11.6641 13.0983 11.8771 13.101C12.0942 13.1037 12.3571 13.0688 12.6453 12.9871L12.5907 12.7947ZM20.0132 21.163C19.6512 21.0234 19.2813 20.9052 18.9054 20.8091L18.8558 21.0029C19.2241 21.097 19.5866 21.2128 19.9413 21.3496L20.0132 21.163ZM18.977 20.8796C18.8256 20.3264 18.5552 19.8128 18.185 19.3748L18.0322 19.5039C18.3837 19.9197 18.6403 20.4072 18.7841 20.9324L18.977 20.8796ZM18.1822 19.3716C18.0774 19.2577 17.9197 19.2083 17.7687 19.2421L17.8123 19.4373C17.8937 19.4191 17.9786 19.4457 18.035 19.507L18.1822 19.3716ZM17.7687 19.2421C17.6176 19.2759 17.496 19.3878 17.4497 19.5355L17.6406 19.5953C17.6655 19.5157 17.731 19.4555 17.8123 19.4373L17.7687 19.2421ZM17.4497 19.5355C17.4035 19.6832 17.4395 19.8444 17.5443 19.9584L17.6915 19.823C17.6351 19.7616 17.6157 19.6748 17.6406 19.5953L17.4497 19.5355ZM17.541 19.9546C17.7456 20.2007 17.911 20.477 18.0313 20.7736L18.2166 20.6984C18.0886 20.3827 17.9126 20.0887 17.6948 19.8268L17.541 19.9546ZM18.1417 20.6376C17.6557 20.5497 17.1638 20.4976 16.6702 20.4817L16.6637 20.6816C17.1476 20.6972 17.6297 20.7483 18.1061 20.8344L18.1417 20.6376ZM16.7669 20.5817V19.6663H16.5669V20.5817H16.7669ZM16.7669 19.6663C16.7669 19.427 16.5729 19.233 16.3336 19.233V19.433C16.4625 19.433 16.5669 19.5375 16.5669 19.6663H16.7669ZM16.3336 19.233C16.0943 19.233 15.9003 19.427 15.9003 19.6663H16.1003C16.1003 19.5375 16.2047 19.433 16.3336 19.433V19.233ZM15.9003 19.6663V20.582H16.1003V19.6663H15.9003ZM15.9968 20.4821C15.5027 20.499 15.0105 20.5531 14.5245 20.6441L14.5613 20.8406C15.0374 20.7516 15.5196 20.6985 16.0037 20.682L15.9968 20.4821ZM14.6357 20.7797C14.756 20.4814 14.9214 20.2034 15.1261 19.9553L14.9718 19.828C14.7541 20.0919 14.5781 20.3877 14.4502 20.705L14.6357 20.7797ZM15.125 19.9566C15.2764 19.7792 15.2602 19.5139 15.0885 19.3561L14.9532 19.5034C15.0457 19.5884 15.0544 19.7313 14.9729 19.8268L15.125 19.9566ZM15.0885 19.3561C14.9168 19.1984 14.651 19.2049 14.4871 19.3707L14.6294 19.5113C14.7176 19.422 14.8607 19.4185 14.9532 19.5034L15.0885 19.3561ZM14.4818 19.3766C14.1113 19.8165 13.841 20.3318 13.6898 20.8867L13.8827 20.9393C14.0264 20.4124 14.283 19.9231 14.6348 19.5054L14.4818 19.3766ZM13.7613 20.8162C13.3938 20.911 13.0321 21.0267 12.6778 21.1626L12.7494 21.3494C13.0966 21.2161 13.4512 21.1028 13.8113 21.0098L13.7613 20.8162ZM12.8126 21.2698C13.0575 19.5064 14.5651 18.1936 16.3454 18.1936V17.9936C14.4653 17.9936 12.8731 19.38 12.6145 21.2423L12.8126 21.2698ZM16.3454 18.1936C18.1257 18.1936 19.6334 19.5064 19.8782 21.2698L20.0763 21.2423C19.8178 19.38 18.2256 17.9936 16.3454 17.9936V18.1936ZM19.8773 21.2544L19.8773 21.2548L20.0772 21.2579L20.0773 21.2576L19.8773 21.2544ZM16.3306 17.3332C15.7641 17.3266 15.1865 16.8988 14.6726 16.1436C14.1619 15.393 13.7302 14.3411 13.4508 13.1392L13.256 13.1845C13.5393 14.4032 13.979 15.4798 14.5072 16.2561C15.0324 17.0278 15.6614 17.5254 16.3282 17.5331L16.3306 17.3332ZM13.45 13.1878C13.4812 13.0718 13.4537 12.9478 13.3762 12.856L13.2233 12.985C13.2585 13.0267 13.2711 13.0831 13.2568 13.1358L13.45 13.1878ZM13.3977 12.9004C13.0139 11.0262 13.0159 9.09347 13.4037 7.22008L13.2078 7.17955C12.8146 9.07954 12.8125 11.0397 13.2018 12.9405L13.3977 12.9004ZM13.2724 7.29409C15.2596 7.99722 17.4279 7.99722 19.4151 7.29409L19.3484 7.10554C17.4043 7.7934 15.2831 7.7934 13.3391 7.10554L13.2724 7.29409ZM19.2838 7.22014C19.6728 9.09393 19.6747 11.0275 19.2895 12.902L19.4854 12.9423C19.8761 11.041 19.8742 9.07996 19.4797 7.17949L19.2838 7.22014ZM19.3123 12.8561C19.2295 12.9504 19.2006 13.0804 19.2357 13.2008L19.4277 13.1448C19.4118 13.0901 19.4249 13.031 19.4625 12.9881L19.3123 12.8561ZM19.2344 13.1501C19.0534 13.9242 18.7053 14.9776 18.2066 15.8356C17.7033 16.7015 17.0695 17.3304 16.329 17.3331L16.3298 17.5331C17.1873 17.5299 17.8723 16.8087 18.3795 15.9361C18.8913 15.0555 19.2454 13.9818 19.4291 13.1956L19.2344 13.1501ZM16.2294 17.4331V17.4331H16.4294V17.4331H16.2294ZM21.2096 12.8037C20.854 12.9411 20.46 12.9411 20.1044 12.8037L20.0323 12.9903C20.4343 13.1456 20.8797 13.1456 21.2817 12.9903L21.2096 12.8037ZM20.1664 12.9168C20.437 11.5806 20.51 10.2118 20.3832 8.85436L20.1841 8.87296C20.3091 10.211 20.2371 11.5601 19.9703 12.8771L20.1664 12.9168ZM20.1934 8.90674C20.6859 9.93848 21.2337 11.5337 21.2337 12.7167H21.4337C21.4337 11.489 20.8708 9.86151 20.3739 8.82059L20.1934 8.90674ZM21.2342 12.7268C21.2376 12.7609 21.2215 12.7941 21.1924 12.8124L21.2989 12.9816C21.3923 12.9229 21.4443 12.8163 21.4332 12.7066L21.2342 12.7268Z"
        fill={fill}
        mask="url(#path-4-outside-2)"
      />
      <path
        d="M16.8021 6.04396C16.8138 5.88472 16.7616 5.72738 16.657 5.60677C16.5523 5.48616 16.404 5.41221 16.2447 5.40131C16.0848 5.3869 15.926 5.43818 15.8048 5.54334C15.6835 5.6485 15.6103 5.79848 15.602 5.95875C15.5768 6.31038 15.0218 14.6247 18.1126 18.9511C18.2335 19.1348 18.4452 19.2376 18.6642 19.2191C18.8833 19.2007 19.0748 19.0638 19.1632 18.8625C19.2517 18.6612 19.2229 18.4277 19.0883 18.2538C16.2525 14.2821 16.7943 6.12557 16.8021 6.04397L16.8021 6.04396Z"
        fill={fill}
      />
      <mask
        id="path-7-outside-3"
        maskUnits="userSpaceOnUse"
        x="6.66699"
        y="6.3335"
        width="4"
        height="4"
        fill="black"
      >
        <rect fill="white" x="6.66699" y="6.3335" width="4" height="4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.66699 8.3335C7.66699 8.88578 8.11471 9.3335 8.66699 9.3335C9.21928 9.3335 9.66699 8.88578 9.66699 8.3335C9.66699 7.78121 9.21928 7.3335 8.66699 7.3335C8.11471 7.3335 7.66699 7.78121 7.66699 8.3335ZM9.0003 8.33371C9.0003 8.51781 8.85107 8.66705 8.66697 8.66705C8.48288 8.66705 8.33364 8.51781 8.33364 8.33371C8.33364 8.14962 8.48288 8.00038 8.66697 8.00038C8.85107 8.00038 9.0003 8.14962 9.0003 8.33371Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.66699 8.3335C7.66699 8.88578 8.11471 9.3335 8.66699 9.3335C9.21928 9.3335 9.66699 8.88578 9.66699 8.3335C9.66699 7.78121 9.21928 7.3335 8.66699 7.3335C8.11471 7.3335 7.66699 7.78121 7.66699 8.3335ZM9.0003 8.33371C9.0003 8.51781 8.85107 8.66705 8.66697 8.66705C8.48288 8.66705 8.33364 8.51781 8.33364 8.33371C8.33364 8.14962 8.48288 8.00038 8.66697 8.00038C8.85107 8.00038 9.0003 8.14962 9.0003 8.33371Z"
        fill={fill}
      />
      <path
        d="M7.56699 8.3335C7.56699 8.94101 8.05948 9.4335 8.66699 9.4335V9.2335C8.16994 9.2335 7.76699 8.83055 7.76699 8.3335H7.56699ZM8.66699 9.4335C9.2745 9.4335 9.76699 8.94101 9.76699 8.3335H9.56699C9.56699 8.83055 9.16405 9.2335 8.66699 9.2335V9.4335ZM9.76699 8.3335C9.76699 7.72598 9.2745 7.2335 8.66699 7.2335V7.4335C9.16405 7.4335 9.56699 7.83644 9.56699 8.3335H9.76699ZM8.66699 7.2335C8.05948 7.2335 7.56699 7.72598 7.56699 8.3335H7.76699C7.76699 7.83644 8.16994 7.4335 8.66699 7.4335V7.2335ZM8.9003 8.33371C8.9003 8.46258 8.79584 8.56705 8.66697 8.56705V8.76705C8.90629 8.76705 9.1003 8.57304 9.1003 8.33371H8.9003ZM8.66697 8.56705C8.5381 8.56705 8.43364 8.46258 8.43364 8.33371H8.23364C8.23364 8.57304 8.42765 8.76705 8.66697 8.76705V8.56705ZM8.43364 8.33371C8.43364 8.20485 8.5381 8.10038 8.66697 8.10038V7.90038C8.42765 7.90038 8.23364 8.09439 8.23364 8.33371H8.43364ZM8.66697 8.10038C8.79584 8.10038 8.9003 8.20485 8.9003 8.33371H9.1003C9.1003 8.09439 8.90629 7.90038 8.66697 7.90038V8.10038Z"
        fill={fill}
        mask="url(#path-7-outside-3)"
      />
      <mask
        id="path-9-outside-4"
        maskUnits="userSpaceOnUse"
        x="4.66699"
        y="3.99951"
        width="4"
        height="4"
        fill="black"
      >
        <rect fill="white" x="4.66699" y="3.99951" width="4" height="4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.83366 4.99951C6.18933 4.99951 5.66699 5.52184 5.66699 6.16618C5.66699 6.81051 6.18932 7.33285 6.83366 7.33285C7.47799 7.33285 8.00032 6.81052 8.00032 6.16618C8.00032 5.52185 7.47799 4.99951 6.83366 4.99951ZM6.83364 6.6664C6.5575 6.6664 6.33364 6.44254 6.33364 6.1664C6.33364 5.89026 6.5575 5.6664 6.83364 5.6664C7.10978 5.6664 7.33364 5.89026 7.33364 6.1664C7.33364 6.44254 7.10978 6.6664 6.83364 6.6664Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.83366 4.99951C6.18933 4.99951 5.66699 5.52184 5.66699 6.16618C5.66699 6.81051 6.18932 7.33285 6.83366 7.33285C7.47799 7.33285 8.00032 6.81052 8.00032 6.16618C8.00032 5.52185 7.47799 4.99951 6.83366 4.99951ZM6.83364 6.6664C6.5575 6.6664 6.33364 6.44254 6.33364 6.1664C6.33364 5.89026 6.5575 5.6664 6.83364 5.6664C7.10978 5.6664 7.33364 5.89026 7.33364 6.1664C7.33364 6.44254 7.10978 6.6664 6.83364 6.6664Z"
        fill={fill}
      />
      <path
        d="M6.83366 4.89951C6.1341 4.89951 5.56699 5.46661 5.56699 6.16618H5.76699C5.76699 5.57707 6.24456 5.09951 6.83366 5.09951V4.89951ZM5.56699 6.16618C5.56699 6.86574 6.13409 7.43285 6.83366 7.43285V7.23285C6.24455 7.23285 5.76699 6.75528 5.76699 6.16618H5.56699ZM6.83366 7.43285C7.53322 7.43285 8.10032 6.86575 8.10032 6.16618H7.90032C7.90032 6.75529 7.42276 7.23285 6.83366 7.23285V7.43285ZM8.10032 6.16618C8.10032 5.46662 7.53322 4.89951 6.83366 4.89951V5.09951C7.42276 5.09951 7.90032 5.57708 7.90032 6.16618H8.10032ZM6.83364 6.5664C6.61273 6.5664 6.43364 6.38731 6.43364 6.1664H6.23364C6.23364 6.49777 6.50227 6.7664 6.83364 6.7664V6.5664ZM6.43364 6.1664C6.43364 5.94548 6.61273 5.7664 6.83364 5.7664V5.5664C6.50227 5.5664 6.23364 5.83503 6.23364 6.1664H6.43364ZM6.83364 5.7664C7.05455 5.7664 7.23364 5.94548 7.23364 6.1664H7.43364C7.43364 5.83503 7.16501 5.5664 6.83364 5.5664V5.7664ZM7.23364 6.1664C7.23364 6.38731 7.05455 6.5664 6.83364 6.5664V6.7664C7.16501 6.7664 7.43364 6.49777 7.43364 6.1664H7.23364Z"
        fill={fill}
        mask="url(#path-9-outside-4)"
      />
      <mask
        id="path-11-outside-5"
        maskUnits="userSpaceOnUse"
        x="6.66699"
        y="1.3335"
        width="5"
        height="5"
        fill="black"
      >
        <rect fill="white" x="6.66699" y="1.3335" width="5" height="5" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.66699 3.8335C7.66699 4.66192 8.33857 5.3335 9.16699 5.3335C9.99542 5.3335 10.667 4.66192 10.667 3.8335C10.667 3.00507 9.99542 2.3335 9.16699 2.3335C8.33894 2.33441 7.66791 3.00545 7.66699 3.8335ZM10.0003 3.83372C10.0003 4.29395 9.62721 4.66705 9.16697 4.66705C8.70673 4.66705 8.33364 4.29395 8.33364 3.83372C8.33364 3.37348 8.70673 3.00038 9.16697 3.00038C9.38798 3.00038 9.59994 3.08818 9.75622 3.24446C9.9125 3.40074 10.0003 3.6127 10.0003 3.83372Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.66699 3.8335C7.66699 4.66192 8.33857 5.3335 9.16699 5.3335C9.99542 5.3335 10.667 4.66192 10.667 3.8335C10.667 3.00507 9.99542 2.3335 9.16699 2.3335C8.33894 2.33441 7.66791 3.00545 7.66699 3.8335ZM10.0003 3.83372C10.0003 4.29395 9.62721 4.66705 9.16697 4.66705C8.70673 4.66705 8.33364 4.29395 8.33364 3.83372C8.33364 3.37348 8.70673 3.00038 9.16697 3.00038C9.38798 3.00038 9.59994 3.08818 9.75622 3.24446C9.9125 3.40074 10.0003 3.6127 10.0003 3.83372Z"
        fill={fill}
      />
      <path
        d="M7.66699 3.8335L7.56699 3.83339V3.8335H7.66699ZM9.16699 2.3335V2.2335L9.16688 2.2335L9.16699 2.3335ZM7.56699 3.8335C7.56699 4.71715 8.28334 5.4335 9.16699 5.4335V5.2335C8.39379 5.2335 7.76699 4.60669 7.76699 3.8335H7.56699ZM9.16699 5.4335C10.0506 5.4335 10.767 4.71715 10.767 3.8335H10.567C10.567 4.60669 9.94019 5.2335 9.16699 5.2335V5.4335ZM10.767 3.8335C10.767 2.94984 10.0506 2.2335 9.16699 2.2335V2.4335C9.94019 2.4335 10.567 3.0603 10.567 3.8335H10.767ZM9.16688 2.2335C8.28369 2.23447 7.56798 2.9502 7.56699 3.83339L7.76699 3.83361C7.76785 3.0607 8.3942 2.43435 9.1671 2.4335L9.16688 2.2335ZM9.9003 3.83372C9.9003 4.23872 9.57198 4.56705 9.16697 4.56705V4.76705C9.68244 4.76705 10.1003 4.34918 10.1003 3.83372H9.9003ZM9.16697 4.56705C8.76196 4.56705 8.43364 4.23872 8.43364 3.83372H8.23364C8.23364 4.34918 8.65151 4.76705 9.16697 4.76705V4.56705ZM8.43364 3.83372C8.43364 3.42871 8.76196 3.10038 9.16697 3.10038V2.90038C8.65151 2.90038 8.23364 3.31825 8.23364 3.83372H8.43364ZM9.16697 3.10038C9.36146 3.10038 9.54799 3.17765 9.68551 3.31517L9.82694 3.17375C9.6519 2.99872 9.41451 2.90038 9.16697 2.90038V3.10038ZM9.68551 3.31517C9.82304 3.4527 9.9003 3.63922 9.9003 3.83372H10.1003C10.1003 3.58618 10.002 3.34879 9.82694 3.17375L9.68551 3.31517Z"
        fill={fill}
        mask="url(#path-11-outside-5)"
      />
    </svg>
  )
}

FishingIcon.defaultProps = {
  fill: palette.grey?.[500],
}

export default FishingIcon