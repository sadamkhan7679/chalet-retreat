import React from 'react'
import {palette} from 'src/components/foundation/palette'

const MountainBikingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        x="2.3418"
        y="2.396"
        width="22"
        height="20"
        fill="black"
      >
        <rect fill="white" x="2.3418" y="2.396" width="22" height="20" />
        <path d="M22.6429 20.1181V16.6203L15.6475 18.67L14.0036 17.8795L9.96719 20.8036L22.6429 20.1181ZM3.4894 17.8445C3.7009 18.6102 4.13473 19.2959 4.736 19.8149C5.33727 20.3339 6.07896 20.663 6.86727 20.7604C7.65557 20.8578 8.45507 20.7193 9.16462 20.3623C9.87416 20.0053 10.4619 19.4458 10.8534 18.7547C11.245 18.0636 11.4228 17.2719 11.3643 16.4798C11.3059 15.6876 11.0138 14.9306 10.525 14.3045C10.0362 13.6784 9.37275 13.2113 8.61848 12.9623C7.86421 12.7133 7.05304 12.6937 6.28758 12.9058C5.77647 13.047 5.2984 13.2881 4.88097 13.6151C4.46354 13.9421 4.11501 14.3486 3.8555 14.811C3.596 15.2734 3.43065 15.7827 3.36901 16.3093C3.30738 16.836 3.35067 17.3697 3.49639 17.8795L3.4894 17.8445ZM8.15536 19.6704C7.5832 19.8273 6.97734 19.8112 6.41435 19.6239C5.85136 19.4367 5.3565 19.0868 4.9923 18.6184C4.6281 18.1501 4.4109 17.5842 4.36815 16.9925C4.3254 16.4007 4.45902 15.8096 4.75212 15.2937C5.04522 14.7778 5.48465 14.3604 6.01488 14.0942C6.54511 13.828 7.14236 13.725 7.73115 13.7981C8.31994 13.8712 8.87384 14.1171 9.32288 14.5049C9.77192 14.8927 10.0959 15.4049 10.254 15.9768C10.3645 16.3589 10.3979 16.7592 10.3524 17.1544C10.3068 17.5496 10.1831 17.9318 9.98843 18.2787C9.7938 18.6257 9.53213 18.9305 9.21864 19.1754C8.90515 19.4203 8.5461 19.6004 8.16236 19.7053L8.15536 19.6704ZM13.9056 15.0114C14.11 15.7812 14.5387 16.4729 15.1372 16.9984C15.7356 17.524 16.4769 17.8597 17.2667 17.9628C18.0565 18.0659 18.8591 17.9318 19.5725 17.5776C20.2859 17.2234 20.8778 16.6649 21.2729 15.9734C21.6681 15.2818 21.8487 14.4884 21.7917 13.694C21.7347 12.8995 21.4428 12.1399 20.953 11.5119C20.4631 10.8838 19.7976 10.4156 19.041 10.1668C18.2843 9.91795 17.4708 9.89979 16.7038 10.1146C15.6809 10.4004 14.8129 11.0798 14.2898 12.0041C13.7667 12.9284 13.6311 14.0223 13.9126 15.0464L13.9056 15.0114ZM18.5786 16.8442C18.0064 17.0012 17.4006 16.985 16.8376 16.7978C16.2746 16.6105 15.7797 16.2606 15.4155 15.7923C15.0513 15.3239 14.8341 14.7581 14.7914 14.1663C14.7486 13.5745 14.8822 12.9834 15.1753 12.4675C15.4684 11.9517 15.9079 11.5343 16.4381 11.2681C16.9683 11.0019 17.5656 10.8988 18.1544 10.9719C18.7432 11.045 19.2971 11.291 19.7461 11.6788C20.1951 12.0665 20.5192 12.5787 20.6772 13.1506C20.7877 13.5328 20.8212 13.9331 20.7756 14.3283C20.73 14.7234 20.6063 15.1056 20.4117 15.4526C20.217 15.7995 19.9554 16.1043 19.6419 16.3492C19.3284 16.5941 18.9693 16.7743 18.5856 16.8792L18.5786 16.8442ZM12.8843 9.47798L15.5635 8.73647C15.6452 8.72739 15.7238 8.70068 15.7941 8.65819C15.8644 8.6157 15.9246 8.55844 15.9705 8.49038C16.0165 8.42232 16.0471 8.34509 16.0602 8.26403C16.0734 8.18296 16.0688 8.10002 16.0467 8.02092C16.0246 7.94183 15.9856 7.86847 15.9323 7.80595C15.8791 7.74342 15.8129 7.69322 15.7383 7.65881C15.6638 7.6244 15.5826 7.60661 15.5005 7.60668C15.4184 7.60674 15.3373 7.62465 15.2627 7.65917L12.9542 8.29576L10.7787 6.33003C10.6352 6.19974 10.4619 6.10672 10.2741 6.05914C10.0862 6.01157 9.88953 6.01091 9.70136 6.05721C9.53594 6.08761 9.37978 6.15583 9.24509 6.25655C9.11039 6.35727 9.0008 6.48776 8.92486 6.63783L6.82623 10.3734C6.69308 10.6375 6.66315 10.9418 6.74228 11.2268C6.79922 11.4339 6.91022 11.6221 7.06388 11.772C7.21755 11.922 7.40835 12.0284 7.61672 12.0803L11.0515 12.9128L11.9119 16.0327C11.9704 16.2442 12.1104 16.4239 12.3013 16.5321C12.4922 16.6403 12.7183 16.6683 12.9298 16.6098C13.1413 16.5514 13.3209 16.4113 13.4291 16.2205C13.5374 16.0296 13.5653 15.8035 13.5069 15.592L12.4366 11.6955C12.4 11.4863 12.295 11.2951 12.138 11.152C11.981 11.0089 11.7809 10.922 11.5691 10.9051L9.60342 10.4713L10.9535 8.12786L12.2337 9.28911C12.3143 9.38045 12.4174 9.44915 12.5328 9.48842C12.6481 9.52768 12.7717 9.53614 12.8913 9.51296L12.8843 9.47798ZM11.9049 6.13416C12.167 6.05483 12.3999 5.90038 12.575 5.68992C12.7501 5.47947 12.8597 5.22228 12.89 4.9502C12.9204 4.67811 12.8702 4.40311 12.7458 4.15924C12.6214 3.91538 12.4281 3.71338 12.19 3.57826C11.9519 3.44315 11.6794 3.38086 11.4063 3.39911C11.1331 3.41736 10.8713 3.51535 10.6533 3.68095C10.4353 3.84654 10.2706 4.07245 10.1798 4.3307C10.0889 4.58895 10.0758 4.86818 10.1421 5.13381C10.1893 5.31861 10.2726 5.49221 10.3874 5.64454C10.5022 5.79687 10.6461 5.9249 10.8107 6.0212C10.9753 6.11751 11.1575 6.18017 11.3465 6.20557C11.5355 6.23096 11.7277 6.21858 11.9119 6.16914L11.9049 6.13416Z" />
      </mask>
      <path
        d="M22.6429 20.1181V16.6203L15.6475 18.67L14.0036 17.8795L9.96719 20.8036L22.6429 20.1181ZM3.4894 17.8445C3.7009 18.6102 4.13473 19.2959 4.736 19.8149C5.33727 20.3339 6.07896 20.663 6.86727 20.7604C7.65557 20.8578 8.45507 20.7193 9.16462 20.3623C9.87416 20.0053 10.4619 19.4458 10.8534 18.7547C11.245 18.0636 11.4228 17.2719 11.3643 16.4798C11.3059 15.6876 11.0138 14.9306 10.525 14.3045C10.0362 13.6784 9.37275 13.2113 8.61848 12.9623C7.86421 12.7133 7.05304 12.6937 6.28758 12.9058C5.77647 13.047 5.2984 13.2881 4.88097 13.6151C4.46354 13.9421 4.11501 14.3486 3.8555 14.811C3.596 15.2734 3.43065 15.7827 3.36901 16.3093C3.30738 16.836 3.35067 17.3697 3.49639 17.8795L3.4894 17.8445ZM8.15536 19.6704C7.5832 19.8273 6.97734 19.8112 6.41435 19.6239C5.85136 19.4367 5.3565 19.0868 4.9923 18.6184C4.6281 18.1501 4.4109 17.5842 4.36815 16.9925C4.3254 16.4007 4.45902 15.8096 4.75212 15.2937C5.04522 14.7778 5.48465 14.3604 6.01488 14.0942C6.54511 13.828 7.14236 13.725 7.73115 13.7981C8.31994 13.8712 8.87384 14.1171 9.32288 14.5049C9.77192 14.8927 10.0959 15.4049 10.254 15.9768C10.3645 16.3589 10.3979 16.7592 10.3524 17.1544C10.3068 17.5496 10.1831 17.9318 9.98843 18.2787C9.7938 18.6257 9.53213 18.9305 9.21864 19.1754C8.90515 19.4203 8.5461 19.6004 8.16236 19.7053L8.15536 19.6704ZM13.9056 15.0114C14.11 15.7812 14.5387 16.4729 15.1372 16.9984C15.7356 17.524 16.4769 17.8597 17.2667 17.9628C18.0565 18.0659 18.8591 17.9318 19.5725 17.5776C20.2859 17.2234 20.8778 16.6649 21.2729 15.9734C21.6681 15.2818 21.8487 14.4884 21.7917 13.694C21.7347 12.8995 21.4428 12.1399 20.953 11.5119C20.4631 10.8838 19.7976 10.4156 19.041 10.1668C18.2843 9.91795 17.4708 9.89979 16.7038 10.1146C15.6809 10.4004 14.8129 11.0798 14.2898 12.0041C13.7667 12.9284 13.6311 14.0223 13.9126 15.0464L13.9056 15.0114ZM18.5786 16.8442C18.0064 17.0012 17.4006 16.985 16.8376 16.7978C16.2746 16.6105 15.7797 16.2606 15.4155 15.7923C15.0513 15.3239 14.8341 14.7581 14.7914 14.1663C14.7486 13.5745 14.8822 12.9834 15.1753 12.4675C15.4684 11.9517 15.9079 11.5343 16.4381 11.2681C16.9683 11.0019 17.5656 10.8988 18.1544 10.9719C18.7432 11.045 19.2971 11.291 19.7461 11.6788C20.1951 12.0665 20.5192 12.5787 20.6772 13.1506C20.7877 13.5328 20.8212 13.9331 20.7756 14.3283C20.73 14.7234 20.6063 15.1056 20.4117 15.4526C20.217 15.7995 19.9554 16.1043 19.6419 16.3492C19.3284 16.5941 18.9693 16.7743 18.5856 16.8792L18.5786 16.8442ZM12.8843 9.47798L15.5635 8.73647C15.6452 8.72739 15.7238 8.70068 15.7941 8.65819C15.8644 8.6157 15.9246 8.55844 15.9705 8.49038C16.0165 8.42232 16.0471 8.34509 16.0602 8.26403C16.0734 8.18296 16.0688 8.10002 16.0467 8.02092C16.0246 7.94183 15.9856 7.86847 15.9323 7.80595C15.8791 7.74342 15.8129 7.69322 15.7383 7.65881C15.6638 7.6244 15.5826 7.60661 15.5005 7.60668C15.4184 7.60674 15.3373 7.62465 15.2627 7.65917L12.9542 8.29576L10.7787 6.33003C10.6352 6.19974 10.4619 6.10672 10.2741 6.05914C10.0862 6.01157 9.88953 6.01091 9.70136 6.05721C9.53594 6.08761 9.37978 6.15583 9.24509 6.25655C9.11039 6.35727 9.0008 6.48776 8.92486 6.63783L6.82623 10.3734C6.69308 10.6375 6.66315 10.9418 6.74228 11.2268C6.79922 11.4339 6.91022 11.6221 7.06388 11.772C7.21755 11.922 7.40835 12.0284 7.61672 12.0803L11.0515 12.9128L11.9119 16.0327C11.9704 16.2442 12.1104 16.4239 12.3013 16.5321C12.4922 16.6403 12.7183 16.6683 12.9298 16.6098C13.1413 16.5514 13.3209 16.4113 13.4291 16.2205C13.5374 16.0296 13.5653 15.8035 13.5069 15.592L12.4366 11.6955C12.4 11.4863 12.295 11.2951 12.138 11.152C11.981 11.0089 11.7809 10.922 11.5691 10.9051L9.60342 10.4713L10.9535 8.12786L12.2337 9.28911C12.3143 9.38045 12.4174 9.44915 12.5328 9.48842C12.6481 9.52768 12.7717 9.53614 12.8913 9.51296L12.8843 9.47798ZM11.9049 6.13416C12.167 6.05483 12.3999 5.90038 12.575 5.68992C12.7501 5.47947 12.8597 5.22228 12.89 4.9502C12.9204 4.67811 12.8702 4.40311 12.7458 4.15924C12.6214 3.91538 12.4281 3.71338 12.19 3.57826C11.9519 3.44315 11.6794 3.38086 11.4063 3.39911C11.1331 3.41736 10.8713 3.51535 10.6533 3.68095C10.4353 3.84654 10.2706 4.07245 10.1798 4.3307C10.0889 4.58895 10.0758 4.86818 10.1421 5.13381C10.1893 5.31861 10.2726 5.49221 10.3874 5.64454C10.5022 5.79687 10.6461 5.9249 10.8107 6.0212C10.9753 6.11751 11.1575 6.18017 11.3465 6.20557C11.5355 6.23096 11.7277 6.21858 11.9119 6.16914L11.9049 6.13416Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        mask="url(#path-1-outside-1)"
      />
    </svg>
  )
}

MountainBikingIcon.defaultProps = {
  stroke: palette.grey?.[500],
}

export default MountainBikingIcon