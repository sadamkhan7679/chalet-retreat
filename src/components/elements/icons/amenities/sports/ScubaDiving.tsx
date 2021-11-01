import React from 'react'
import {palette} from 'src/components/foundation/palette'

const ScubaDivingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({stroke}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.38477 2.38477C5.00516 3.06036 5.8655 3.46606 6.78142 3.51495C7.69735 3.56384 8.59599 3.25201 9.28477 2.6463C9.92391 3.20463 10.7438 3.51232 11.5925 3.51232C12.4411 3.51232 13.261 3.20463 13.9002 2.6463C14.5386 3.20616 15.3587 3.51485 16.2078 3.51485C17.057 3.51485 17.8771 3.20616 18.5155 2.6463C19.1547 3.20463 19.9746 3.51232 20.8232 3.51232C21.6719 3.51232 22.4918 3.20463 23.1309 2.6463C23.8256 3.25205 24.7289 3.56352 25.6493 3.5147C26.5697 3.46588 27.435 3.06061 28.0617 2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2158 11.7461L21.4004 13.1922L23.6389 12.9461C23.8452 12.9411 24.0458 13.0138 24.201 13.1498C24.3562 13.2857 24.4547 13.475 24.4769 13.6802C24.4992 13.8853 24.4436 14.0913 24.3211 14.2574C24.1987 14.4234 24.0184 14.5375 23.8158 14.5769L21.1389 14.8692C21.0699 14.8769 21.0002 14.8769 20.9312 14.8692"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3312 10.8921L15.2543 12.546C15.1234 12.6184 14.9793 12.6639 14.8305 12.6799C14.6817 12.6959 14.5313 12.682 14.388 12.639C14.2446 12.596 14.1114 12.5248 13.9959 12.4295C13.8805 12.3343 13.7853 12.217 13.7159 12.0844V12.0844C13.5738 11.8191 13.5426 11.5082 13.6291 11.2199C13.7156 10.9316 13.9127 10.6893 14.1774 10.546L17.2543 8.89213C17.5197 8.75005 17.8305 8.71885 18.1188 8.80534C18.4071 8.89183 18.6494 9.08898 18.7928 9.35366C18.8652 9.4846 18.9107 9.62868 18.9267 9.77746C18.9427 9.92624 18.9288 10.0767 18.8858 10.22C18.8428 10.3633 18.7716 10.4966 18.6763 10.612C18.5811 10.7275 18.4638 10.8227 18.3312 10.8921V10.8921Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1842 16.3306L20.8304 15.8921L20.6381 13.6229V12.9844C20.6378 12.6463 20.5505 12.3139 20.3846 12.0194C20.2186 11.7248 19.9796 11.4779 19.6906 11.3024C19.4016 11.127 19.0722 11.0289 18.7343 11.0177C18.3963 11.0065 18.0612 11.0824 17.7612 11.2383L10.9765 14.7383L7.48423 13.346C7.36301 13.2955 7.23302 13.2693 7.1017 13.269C6.97038 13.2688 6.84029 13.2944 6.71886 13.3444C6.59743 13.3944 6.48704 13.4678 6.39398 13.5605C6.30093 13.6531 6.22704 13.7632 6.17653 13.8844C6.12603 14.0056 6.09989 14.1356 6.09961 14.267C6.09934 14.3983 6.12493 14.5284 6.17493 14.6498C6.22493 14.7712 6.29836 14.8816 6.39103 14.9747C6.48369 15.0677 6.59378 15.1416 6.715 15.1921L10.6304 16.7306C10.7596 16.7895 10.8999 16.8199 11.0419 16.8199C11.1839 16.8199 11.3243 16.7895 11.4535 16.7306L14.1688 15.3229L13.3535 17.2075L12.9765 18.0306L8.515 19.6921C8.29639 19.7729 8.1132 19.9281 7.99754 20.1304C7.88187 20.3327 7.8411 20.5693 7.88239 20.7987C7.92368 21.0281 8.04438 21.2356 8.22334 21.3849C8.4023 21.5342 8.6281 21.6157 8.86115 21.6152C8.97916 21.6141 9.09614 21.5933 9.2073 21.5537L14.0611 19.746C14.1829 19.7008 14.2945 19.632 14.3895 19.5436C14.4846 19.4551 14.5612 19.3488 14.615 19.2306L15.4765 17.3383L19.1304 15.4075L19.2458 16.6921C19.2549 16.8829 19.3308 17.0645 19.4601 17.205C19.5895 17.3456 19.7641 17.4363 19.9535 17.4614L23.9535 17.9844H24.0611C24.1682 17.9915 24.2757 17.9774 24.3773 17.943C24.4789 17.9085 24.5728 17.8544 24.6535 17.7837C24.7342 17.713 24.8002 17.627 24.8477 17.5308C24.8952 17.4346 24.9233 17.33 24.9304 17.2229C24.9375 17.1158 24.9234 17.0084 24.8889 16.9068C24.8545 16.8051 24.8004 16.7113 24.7296 16.6306C24.6589 16.5498 24.573 16.4838 24.4768 16.4363C24.3806 16.3888 24.2759 16.3607 24.1688 16.3537L24.1842 16.3306Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.623 12.2694C22.5236 12.2694 23.2537 11.5392 23.2537 10.6386C23.2537 9.73793 22.5236 9.00781 21.623 9.00781C20.7223 9.00781 19.9922 9.73793 19.9922 10.6386C19.9922 11.5392 20.7223 12.2694 21.623 12.2694Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1612 10.3999H7.47656"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.08492 8.79248H4.76953"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ScubaDivingIcon.defaultProps = {
  stroke: palette.grey?.[500],
}

export default ScubaDivingIcon
