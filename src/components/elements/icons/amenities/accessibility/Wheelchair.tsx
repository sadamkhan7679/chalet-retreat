import React from 'react'
import {palette} from 'src/components/foundation/palette'

const WheelchairIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        x="2.33594"
        y="9.66309"
        width="12"
        height="12"
        fill="black"
      >
        <rect fill="white" x="2.33594" y="9.66309" width="12" height="12" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33381 10.6631C5.57356 10.6631 3.33594 12.9007 3.33594 15.661C3.33594 18.4212 5.57356 20.6588 8.33381 20.6588C11.0941 20.6588 13.3317 18.4212 13.3317 15.661C13.3286 12.902 11.0928 10.6662 8.33381 10.6631ZM8.33372 19.9924C5.9415 19.9924 4.00222 18.0531 4.00222 15.6609C4.00222 13.2687 5.9415 11.3294 8.33372 11.3294C10.7259 11.3294 12.6652 13.2687 12.6652 15.6609C12.6625 18.0519 10.7248 19.9896 8.33372 19.9924Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33381 10.6631C5.57356 10.6631 3.33594 12.9007 3.33594 15.661C3.33594 18.4212 5.57356 20.6588 8.33381 20.6588C11.0941 20.6588 13.3317 18.4212 13.3317 15.661C13.3286 12.902 11.0928 10.6662 8.33381 10.6631ZM8.33372 19.9924C5.9415 19.9924 4.00222 18.0531 4.00222 15.6609C4.00222 13.2687 5.9415 11.3294 8.33372 11.3294C10.7259 11.3294 12.6652 13.2687 12.6652 15.6609C12.6625 18.0519 10.7248 19.9896 8.33372 19.9924Z"
        fill={fill}
      />
      <path
        d="M8.33381 10.6631L8.33398 10.5131H8.33381V10.6631ZM13.3317 15.661H13.4817V15.6608L13.3317 15.661ZM8.33372 19.9924V20.1424L8.33389 20.1424L8.33372 19.9924ZM12.6652 15.6609L12.8152 15.661V15.6609H12.6652ZM8.33381 10.5131C5.49072 10.5131 3.18594 12.8179 3.18594 15.661H3.48594C3.48594 12.9836 5.6564 10.8131 8.33381 10.8131V10.5131ZM3.18594 15.661C3.18594 18.5041 5.49072 20.8088 8.33381 20.8088V20.5088C5.65641 20.5088 3.48594 18.3384 3.48594 15.661H3.18594ZM8.33381 20.8088C11.1769 20.8088 13.4817 18.504 13.4817 15.661H13.1817C13.1817 18.3384 11.0112 20.5088 8.33381 20.5088V20.8088ZM13.4817 15.6608C13.4785 12.8191 11.1756 10.5163 8.33398 10.5131L8.33364 10.8131C11.0099 10.8161 13.1787 12.9849 13.1817 15.6611L13.4817 15.6608ZM8.33372 19.8424C6.02434 19.8424 4.15222 17.9702 4.15222 15.6609H3.85222C3.85222 18.1359 5.85866 20.1424 8.33372 20.1424V19.8424ZM4.15222 15.6609C4.15222 13.3515 6.02434 11.4794 8.33372 11.4794V11.1794C5.85866 11.1794 3.85222 13.1858 3.85222 15.6609H4.15222ZM8.33372 11.4794C10.6431 11.4794 12.5152 13.3515 12.5152 15.6609H12.8152C12.8152 13.1858 10.8088 11.1794 8.33372 11.1794V11.4794ZM12.5152 15.6607C12.5126 17.9691 10.6419 19.8397 8.33354 19.8424L8.33389 20.1424C10.8077 20.1395 12.8124 18.1348 12.8152 15.661L12.5152 15.6607Z"
        fill={fill}
        mask="url(#path-1-outside-1)"
      />
      <mask
        id="path-3-outside-2"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="22"
        height="22"
        fill="black"
      >
        <rect fill="white" x="1" y="1" width="22" height="22" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.6613 17.5537V13.6617H20.9945C21.1785 13.6617 21.3277 13.5125 21.3277 13.3285C21.3262 12.041 20.2829 10.9976 18.9954 10.9962H15.9966V8.99703H16.663C17.2151 8.99703 17.6626 8.5495 17.6626 7.99745C17.6626 7.4454 17.2151 6.99788 16.663 6.99788H8.99962V4.33234C8.99815 3.04483 7.95478 2.00147 6.66727 2H3.00216C2.45011 2 2.00259 2.44753 2.00259 2.99957C2.00259 3.55162 2.45011 3.99915 3.00216 3.99915H6.33408V9.65874C3.38586 10.6378 1.58436 13.6121 2.08244 16.6785C2.58052 19.7448 5.23084 21.9961 8.33736 21.9916C11.4439 21.9871 14.0877 19.7282 14.5769 16.6604H18.6622V17.5541C17.6749 18.0216 17.1437 19.1111 17.3833 20.1769C17.6229 21.2427 18.5693 22 19.6617 22C20.7541 22 21.7006 21.2427 21.9402 20.1769C22.1798 19.1111 21.6486 18.0216 20.6613 17.5541L20.6613 17.5537ZM20.628 12.9951H14.0675C13.8467 12.5181 13.5674 12.0704 13.2362 11.6623H18.9954C19.7868 11.6632 20.4687 12.2199 20.628 12.9951H20.628ZM18.6622 14.6613H14.577C14.5239 14.3221 14.4432 13.9878 14.3354 13.6618H18.6623L18.6622 14.6613ZM15.3302 10.9963H12.598C11.6042 10.0813 10.3427 9.5098 8.99953 9.36602V8.99717H15.3302V10.9963ZM16.6629 7.66405C16.847 7.66405 16.9961 7.81322 16.9961 7.99724C16.9961 8.18126 16.847 8.33043 16.6629 8.33043H8.99953V7.66405L16.6629 7.66405ZM3.00211 3.33268C2.81809 3.33268 2.66892 3.18351 2.66892 2.99949C2.66892 2.81547 2.81809 2.6663 3.00211 2.6663H6.33403V3.33268L3.00211 3.33268ZM7.00037 2.69956C7.77559 2.85886 8.33227 3.54079 8.33314 4.3322V9.33008C7.88504 9.33068 7.43827 9.37893 7.00037 9.47401V2.69956ZM8.33335 21.3252C5.49619 21.3253 3.0966 19.2264 2.71917 16.4145C2.34174 13.6025 4.10292 10.9451 6.83969 10.1971C9.57646 9.44908 12.4445 10.8412 13.5498 13.4542C14.2863 15.2035 14.0988 17.2052 13.0503 18.7873C12.0018 20.3693 10.2313 21.3219 8.33335 21.3252ZM14.647 15.9939C14.6703 15.7724 14.6703 15.549 14.647 15.3275H18.6623V15.9939H14.647ZM19.3284 13.6618H19.9948V17.3539C19.774 17.3196 19.5492 17.3196 19.3284 17.3539V13.6618ZM21.3193 19.8278C21.2284 20.7209 20.4463 21.3814 19.5505 21.3214C18.6548 21.2614 17.9677 20.5025 17.9968 19.6053C18.0258 18.708 18.7606 17.9951 19.6583 17.9932C20.1301 17.9922 20.5802 18.1913 20.8969 18.5411C21.2135 18.8908 21.367 19.3584 21.3193 19.8278L21.3193 19.8278Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6613 17.5537V13.6617H20.9945C21.1785 13.6617 21.3277 13.5125 21.3277 13.3285C21.3262 12.041 20.2829 10.9976 18.9954 10.9962H15.9966V8.99703H16.663C17.2151 8.99703 17.6626 8.5495 17.6626 7.99745C17.6626 7.4454 17.2151 6.99788 16.663 6.99788H8.99962V4.33234C8.99815 3.04483 7.95478 2.00147 6.66727 2H3.00216C2.45011 2 2.00259 2.44753 2.00259 2.99957C2.00259 3.55162 2.45011 3.99915 3.00216 3.99915H6.33408V9.65874C3.38586 10.6378 1.58436 13.6121 2.08244 16.6785C2.58052 19.7448 5.23084 21.9961 8.33736 21.9916C11.4439 21.9871 14.0877 19.7282 14.5769 16.6604H18.6622V17.5541C17.6749 18.0216 17.1437 19.1111 17.3833 20.1769C17.6229 21.2427 18.5693 22 19.6617 22C20.7541 22 21.7006 21.2427 21.9402 20.1769C22.1798 19.1111 21.6486 18.0216 20.6613 17.5541L20.6613 17.5537ZM20.628 12.9951H14.0675C13.8467 12.5181 13.5674 12.0704 13.2362 11.6623H18.9954C19.7868 11.6632 20.4687 12.2199 20.628 12.9951H20.628ZM18.6622 14.6613H14.577C14.5239 14.3221 14.4432 13.9878 14.3354 13.6618H18.6623L18.6622 14.6613ZM15.3302 10.9963H12.598C11.6042 10.0813 10.3427 9.5098 8.99953 9.36602V8.99717H15.3302V10.9963ZM16.6629 7.66405C16.847 7.66405 16.9961 7.81322 16.9961 7.99724C16.9961 8.18126 16.847 8.33043 16.6629 8.33043H8.99953V7.66405L16.6629 7.66405ZM3.00211 3.33268C2.81809 3.33268 2.66892 3.18351 2.66892 2.99949C2.66892 2.81547 2.81809 2.6663 3.00211 2.6663H6.33403V3.33268L3.00211 3.33268ZM7.00037 2.69956C7.77559 2.85886 8.33227 3.54079 8.33314 4.3322V9.33008C7.88504 9.33068 7.43827 9.37893 7.00037 9.47401V2.69956ZM8.33335 21.3252C5.49619 21.3253 3.0966 19.2264 2.71917 16.4145C2.34174 13.6025 4.10292 10.9451 6.83969 10.1971C9.57646 9.44908 12.4445 10.8412 13.5498 13.4542C14.2863 15.2035 14.0988 17.2052 13.0503 18.7873C12.0018 20.3693 10.2313 21.3219 8.33335 21.3252ZM14.647 15.9939C14.6703 15.7724 14.6703 15.549 14.647 15.3275H18.6623V15.9939H14.647ZM19.3284 13.6618H19.9948V17.3539C19.774 17.3196 19.5492 17.3196 19.3284 17.3539V13.6618ZM21.3193 19.8278C21.2284 20.7209 20.4463 21.3814 19.5505 21.3214C18.6548 21.2614 17.9677 20.5025 17.9968 19.6053C18.0258 18.708 18.7606 17.9951 19.6583 17.9932C20.1301 17.9922 20.5802 18.1913 20.8969 18.5411C21.2135 18.8908 21.367 19.3584 21.3193 19.8278L21.3193 19.8278Z"
        fill={fill}
      />
      <path
        d="M20.6613 17.5537L20.8113 17.561V17.5537H20.6613ZM20.6613 13.6617V13.5117H20.5113V13.6617H20.6613ZM21.3277 13.3285H21.4777V13.3283L21.3277 13.3285ZM18.9954 10.9962L18.9955 10.8462H18.9954V10.9962ZM15.9966 10.9962H15.8466V11.1462H15.9966V10.9962ZM15.9966 8.99703V8.84703H15.8466V8.99703H15.9966ZM8.99962 6.99788H8.84962V7.14788H8.99962V6.99788ZM8.99962 4.33234H9.14962V4.33217L8.99962 4.33234ZM6.66727 2L6.66744 1.85H6.66727V2ZM6.33408 3.99915H6.48408V3.84915H6.33408V3.99915ZM6.33408 9.65874L6.38135 9.8011L6.48408 9.76698V9.65874H6.33408ZM14.5769 16.6604V16.5104H14.4489L14.4288 16.6368L14.5769 16.6604ZM18.6622 16.6604H18.8122V16.5104H18.6622V16.6604ZM18.6622 17.5541L18.7264 17.6896L18.8122 17.649V17.5541H18.6622ZM20.6613 17.5541L20.5115 17.5468L20.5066 17.6468L20.5971 17.6896L20.6613 17.5541ZM14.0675 12.9951L13.9313 13.0581L13.9716 13.1451H14.0675V12.9951ZM13.2362 11.6623V11.5124H12.9212L13.1197 11.7569L13.2362 11.6623ZM18.9954 11.6623L18.9955 11.5124H18.9954V11.6623ZM20.628 12.9951V13.1451H20.812L20.775 12.9649L20.628 12.9951ZM18.6622 14.6613V14.8113H18.8122V14.6614L18.6622 14.6613ZM14.577 14.6613L14.4288 14.6845L14.4486 14.8113H14.577V14.6613ZM14.3354 13.6618V13.5118H14.1279L14.193 13.7088L14.3354 13.6618ZM18.6623 13.6618L18.8123 13.6618L18.8123 13.5118H18.6623V13.6618ZM15.3302 10.9963V11.1463H15.4802V10.9963H15.3302ZM12.598 10.9963L12.4964 11.1067L12.5395 11.1463H12.598V10.9963ZM8.99953 9.36602H8.84953V9.50082L8.98356 9.51517L8.99953 9.36602ZM8.99953 8.99717V8.84717H8.84953V8.99717H8.99953ZM15.3302 8.99717H15.4802V8.84717H15.3302V8.99717ZM16.6629 7.66405V7.51405V7.66405ZM8.99953 8.33043H8.84953V8.48043H8.99953V8.33043ZM8.99953 7.66405V7.51405H8.84953V7.66405H8.99953ZM3.00211 3.33268V3.48268H3.00211L3.00211 3.33268ZM6.33403 2.6663H6.48403V2.5163H6.33403V2.6663ZM6.33403 3.33268V3.48268L6.48403 3.48268V3.33268H6.33403ZM7.00037 2.69956L7.03056 2.55263L6.85037 2.51561V2.69956H7.00037ZM8.33314 4.3322H8.48314V4.33204L8.33314 4.3322ZM8.33314 9.33008L8.33334 9.48008L8.48314 9.47987V9.33008H8.33314ZM7.00037 9.47401H6.85037V9.66008L7.0322 9.6206L7.00037 9.47401ZM8.33335 21.3252L8.33336 21.4752H8.33361L8.33335 21.3252ZM6.83969 10.1971L6.87924 10.3418H6.87924L6.83969 10.1971ZM13.5498 13.4542L13.688 13.396L13.688 13.3958L13.5498 13.4542ZM14.647 15.9939L14.4978 15.9782L14.4803 16.1439H14.647V15.9939ZM14.647 15.3275V15.1775H14.4803L14.4978 15.3432L14.647 15.3275ZM18.6623 15.3275H18.8123V15.1775H18.6623V15.3275ZM18.6623 15.9939V16.1439H18.8123V15.9939H18.6623ZM19.3284 13.6618V13.5118H19.1784V13.6618H19.3284ZM19.9948 13.6618H20.1448V13.5118H19.9948V13.6618ZM19.9948 17.3539L19.9718 17.5021L20.1448 17.529V17.3539H19.9948ZM19.3284 17.3539H19.1784V17.529L19.3514 17.5021L19.3284 17.3539ZM21.3193 19.8278L21.4253 19.7217L21.202 19.4984L21.17 19.8126L21.3193 19.8278ZM17.9968 19.6053L18.1467 19.6101L17.9968 19.6053ZM19.6583 17.9932L19.6586 18.1432H19.6586L19.6583 17.9932ZM20.8969 18.5411L21.0081 18.4404V18.4404L20.8969 18.5411ZM21.3193 19.8278L21.2132 19.9339L21.4365 20.1572L21.4685 19.843L21.3193 19.8278ZM20.8113 17.5537V13.6617H20.5113V17.5537H20.8113ZM20.6613 13.8117H20.9945V13.5117H20.6613V13.8117ZM20.9945 13.8117C21.2614 13.8117 21.4777 13.5954 21.4777 13.3285H21.1777C21.1777 13.4297 21.0957 13.5117 20.9945 13.5117V13.8117ZM21.4777 13.3283C21.4761 11.9581 20.3658 10.8477 18.9955 10.8462L18.9952 11.1462C20.2 11.1476 21.1763 12.1239 21.1777 13.3287L21.4777 13.3283ZM18.9954 10.8462H15.9966V11.1462H18.9954V10.8462ZM16.1466 10.9962V8.99703H15.8466V10.9962H16.1466ZM15.9966 9.14703H16.663V8.84703H15.9966V9.14703ZM16.663 9.14703C17.2979 9.14703 17.8126 8.63235 17.8126 7.99745H17.5126C17.5126 8.46666 17.1322 8.84703 16.663 8.84703V9.14703ZM17.8126 7.99745C17.8126 7.36256 17.2979 6.84788 16.663 6.84788V7.14788C17.1322 7.14788 17.5126 7.52825 17.5126 7.99745H17.8126ZM16.663 6.84788H8.99962V7.14788H16.663V6.84788ZM9.14962 6.99788V4.33234H8.84962V6.99788H9.14962ZM9.14962 4.33217C9.14805 2.96195 8.03766 1.85156 6.66744 1.85L6.6671 2.15C7.8719 2.15137 8.84824 3.12771 8.84962 4.33251L9.14962 4.33217ZM6.66727 1.85H3.00216V2.15H6.66727V1.85ZM3.00216 1.85C2.36727 1.85 1.85259 2.36468 1.85259 2.99957H2.15259C2.15259 2.53037 2.53295 2.15 3.00216 2.15V1.85ZM1.85259 2.99957C1.85259 3.63447 2.36727 4.14915 3.00216 4.14915V3.84915C2.53295 3.84915 2.15259 3.46878 2.15259 2.99957H1.85259ZM3.00216 4.14915H6.33408V3.84915H3.00216V4.14915ZM6.18408 3.99915V9.65874H6.48408V3.99915H6.18408ZM6.28681 9.51638C3.26869 10.5186 1.42449 13.5635 1.93438 16.7025L2.2305 16.6544C1.74423 13.6608 3.50302 10.7569 6.38135 9.8011L6.28681 9.51638ZM1.93438 16.7025C2.44426 19.8415 5.15742 22.1462 8.33757 22.1416L8.33714 21.8416C5.30427 21.846 2.71677 19.6481 2.2305 16.6544L1.93438 16.7025ZM8.33757 22.1416C11.5177 22.137 14.2242 19.8245 14.725 16.6841L14.4288 16.6368C13.9512 19.6318 11.37 21.8372 8.33714 21.8416L8.33757 22.1416ZM14.5769 16.8104H18.6622V16.5104H14.5769V16.8104ZM18.5122 16.6604V17.5541H18.8122V16.6604H18.5122ZM18.598 17.4185C17.5473 17.9161 16.9819 19.0756 17.2369 20.2098L17.5296 20.144C17.3054 19.1467 17.8025 18.1272 18.7264 17.6896L18.598 17.4185ZM17.2369 20.2098C17.4919 21.3441 18.4992 22.15 19.6617 22.15V21.85C18.6395 21.85 17.7539 21.1414 17.5296 20.144L17.2369 20.2098ZM19.6617 22.15C20.8243 22.15 21.8315 21.3441 22.0865 20.2098L21.7939 20.144C21.5696 21.1414 20.684 21.85 19.6617 21.85V22.15ZM22.0865 20.2098C22.3416 19.0756 21.7762 17.9161 20.7255 17.4185L20.5971 17.6896C21.521 18.1272 22.0181 19.1467 21.7939 20.144L22.0865 20.2098ZM20.8111 17.5613L20.8112 17.561L20.5115 17.5465L20.5115 17.5468L20.8111 17.5613ZM20.628 12.8451H14.0675V13.1451H20.628V12.8451ZM14.2036 12.9321C13.9776 12.4438 13.6917 11.9856 13.3526 11.5678L13.1197 11.7569C13.4431 12.1553 13.7158 12.5924 13.9313 13.0581L14.2036 12.9321ZM13.2362 11.8123H18.9954V11.5124H13.2362V11.8123ZM18.9952 11.8123C19.7155 11.8131 20.3361 12.3198 20.4811 13.0253L20.775 12.9649C20.6013 12.12 19.8581 11.5133 18.9955 11.5124L18.9952 11.8123ZM20.628 12.8451H20.628V13.1451H20.628V12.8451ZM18.6622 14.5113H14.577V14.8113H18.6622V14.5113ZM14.7252 14.6382C14.6709 14.2908 14.5882 13.9485 14.4778 13.6147L14.193 13.7088C14.2982 14.0271 14.377 14.3534 14.4288 14.6845L14.7252 14.6382ZM14.3354 13.8118H18.6623V13.5118H14.3354V13.8118ZM18.5123 13.6618L18.5122 14.6613L18.8122 14.6614L18.8123 13.6618L18.5123 13.6618ZM15.3302 10.8463H12.598V11.1463H15.3302V10.8463ZM12.6996 10.886C11.6822 9.94919 10.3907 9.36407 9.01549 9.21687L8.98356 9.51517C10.2948 9.65552 11.5263 10.2134 12.4964 11.1067L12.6996 10.886ZM9.14953 9.36602V8.99717H8.84953V9.36602H9.14953ZM8.99953 9.14717H15.3302V8.84717H8.99953V9.14717ZM15.1802 8.99717V10.9963H15.4802V8.99717H15.1802ZM16.6629 7.81405C16.7641 7.81405 16.8461 7.89606 16.8461 7.99724H17.1461C17.1461 7.73038 16.9298 7.51405 16.6629 7.51405V7.81405ZM16.8461 7.99724C16.8461 8.09842 16.7641 8.18043 16.6629 8.18043V8.48043C16.9298 8.48043 17.1461 8.2641 17.1461 7.99724H16.8461ZM16.6629 8.18043H8.99953V8.48043H16.6629V8.18043ZM9.14953 8.33043V7.66405H8.84953V8.33043H9.14953ZM8.99953 7.81405L16.6629 7.81405V7.51405L8.99953 7.51405V7.81405ZM3.00211 3.18268C2.90094 3.18268 2.81892 3.10067 2.81892 2.99949H2.51892C2.51892 3.26635 2.73525 3.48268 3.00211 3.48268V3.18268ZM2.81892 2.99949C2.81892 2.89832 2.90094 2.8163 3.00211 2.8163V2.5163C2.73525 2.5163 2.51892 2.73263 2.51892 2.99949H2.81892ZM3.00211 2.8163H6.33403V2.5163H3.00211V2.8163ZM6.18403 2.6663V3.33268H6.48403V2.6663H6.18403ZM6.33403 3.18268L3.00211 3.18268L3.00211 3.48268L6.33403 3.48268L6.33403 3.18268ZM6.97018 2.84649C7.67571 2.99147 8.18235 3.6121 8.18314 4.33237L8.48314 4.33204C8.48219 3.46949 7.87546 2.72625 7.03056 2.55263L6.97018 2.84649ZM8.18314 4.3322V9.33008H8.48314V4.3322H8.18314ZM8.33294 9.18008C7.8742 9.18069 7.41683 9.23009 6.96854 9.32743L7.0322 9.6206C7.45971 9.52777 7.89587 9.48066 8.33334 9.48008L8.33294 9.18008ZM7.15037 9.47401V2.69956H6.85037V9.47401H7.15037ZM8.33334 21.1752C5.57132 21.1753 3.23527 19.132 2.86783 16.3945L2.5705 16.4344C2.95792 19.3208 5.42107 21.4753 8.33336 21.4752L8.33334 21.1752ZM2.86783 16.3945C2.5004 13.657 4.21494 11.07 6.87924 10.3418L6.80014 10.0524C3.9909 10.8202 2.18307 13.548 2.5705 16.4344L2.86783 16.3945ZM6.87924 10.3418C9.54354 9.61359 12.3356 10.9689 13.4117 13.5127L13.688 13.3958C12.5534 10.7136 9.60939 9.28458 6.80014 10.0524L6.87924 10.3418ZM13.4116 13.5124C14.1286 15.2154 13.946 17.1642 12.9253 18.7044L13.1753 18.8701C14.2516 17.2462 14.444 15.1915 13.688 13.396L13.4116 13.5124ZM12.9253 18.7044C11.9045 20.2446 10.1809 21.172 8.33309 21.1752L8.33361 21.4752C10.2818 21.4718 12.0991 20.494 13.1753 18.8701L12.9253 18.7044ZM14.7961 16.0096C14.8206 15.7776 14.8206 15.5438 14.7961 15.3118L14.4978 15.3432C14.52 15.5543 14.52 15.7671 14.4978 15.9782L14.7961 16.0096ZM14.647 15.4775H18.6623V15.1775H14.647V15.4775ZM18.5123 15.3275V15.9939H18.8123V15.3275H18.5123ZM18.6623 15.8439H14.647V16.1439H18.6623V15.8439ZM19.3284 13.8118H19.9948V13.5118H19.3284V13.8118ZM19.8448 13.6618V17.3539H20.1448V13.6618H19.8448ZM20.0178 17.2056C19.7818 17.169 19.5415 17.169 19.3054 17.2056L19.3514 17.5021C19.557 17.4702 19.7663 17.4702 19.9718 17.5021L20.0178 17.2056ZM19.4784 17.3539V13.6618H19.1784V17.3539H19.4784ZM21.17 19.8126C21.0874 20.6253 20.3756 21.2263 19.5606 21.1718L19.5405 21.4711C20.5169 21.5365 21.3695 20.8165 21.4685 19.843L21.17 19.8126ZM19.5606 21.1718C18.7455 21.1172 18.1203 20.4266 18.1467 19.6101L17.8469 19.6004C17.8152 20.5784 18.5642 21.4057 19.5405 21.4711L19.5606 21.1718ZM18.1467 19.6101C18.1731 18.7937 18.8418 18.145 19.6586 18.1432L19.658 17.8432C18.6795 17.8453 17.8785 18.6224 17.8469 19.6004L18.1467 19.6101ZM19.6586 18.1432C20.088 18.1423 20.4975 18.3235 20.7857 18.6417L21.0081 18.4404C20.6629 18.0591 20.1723 17.8421 19.658 17.8432L19.6586 18.1432ZM20.7857 18.6417C21.0738 18.96 21.2135 19.3855 21.1701 19.8126L21.4685 19.843C21.5206 19.3313 21.3532 18.8216 21.0081 18.4404L20.7857 18.6417ZM21.4253 19.7217L21.4253 19.7217L21.2132 19.9338L21.2132 19.9339L21.4253 19.7217Z"
        fill={fill}
        mask="url(#path-3-outside-2)"
      />
      <path
        d="M17.0535 17.7656C17.4498 17.7656 17.771 17.4444 17.771 17.0482C17.771 16.652 17.4498 16.3308 17.0535 16.3308C16.6573 16.3308 16.3361 16.652 16.3361 17.0482C16.3361 17.4444 16.6573 17.7656 17.0535 17.7656Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.15"
      />
      <mask
        id="path-6-outside-3"
        maskUnits="userSpaceOnUse"
        x="6"
        y="13.3276"
        width="4"
        height="4"
        fill="black"
      >
        <rect fill="white" x="6" y="13.3276" width="4" height="4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33277 14.3276C7.5967 14.3276 7 14.9243 7 15.6604C7 16.3965 7.5967 16.9932 8.33277 16.9932C9.06884 16.9932 9.66554 16.3965 9.66554 15.6604C9.66554 14.9243 9.06884 14.3276 8.33277 14.3276ZM8.33268 16.3267C7.96464 16.3267 7.66629 16.0283 7.66629 15.6603C7.66629 15.2923 7.96464 14.9939 8.33268 14.9939C8.70071 14.9939 8.99906 15.2923 8.99906 15.6603C8.99906 16.0283 8.70071 16.3267 8.33268 16.3267Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33277 14.3276C7.5967 14.3276 7 14.9243 7 15.6604C7 16.3965 7.5967 16.9932 8.33277 16.9932C9.06884 16.9932 9.66554 16.3965 9.66554 15.6604C9.66554 14.9243 9.06884 14.3276 8.33277 14.3276ZM8.33268 16.3267C7.96464 16.3267 7.66629 16.0283 7.66629 15.6603C7.66629 15.2923 7.96464 14.9939 8.33268 14.9939C8.70071 14.9939 8.99906 15.2923 8.99906 15.6603C8.99906 16.0283 8.70071 16.3267 8.33268 16.3267Z"
        fill={fill}
      />
      <path
        d="M8.33277 14.1776C7.51386 14.1776 6.85 14.8415 6.85 15.6604H7.15C7.15 15.0072 7.67954 14.4776 8.33277 14.4776V14.1776ZM6.85 15.6604C6.85 16.4793 7.51386 17.1432 8.33277 17.1432V16.8432C7.67954 16.8432 7.15 16.3136 7.15 15.6604H6.85ZM8.33277 17.1432C9.15168 17.1432 9.81554 16.4793 9.81554 15.6604H9.51554C9.51554 16.3136 8.98599 16.8432 8.33277 16.8432V17.1432ZM9.81554 15.6604C9.81554 14.8415 9.15168 14.1776 8.33277 14.1776V14.4776C8.98599 14.4776 9.51554 15.0072 9.51554 15.6604H9.81554ZM8.33268 16.1767C8.04749 16.1767 7.81629 15.9455 7.81629 15.6603H7.51629C7.51629 16.1112 7.8818 16.4767 8.33268 16.4767V16.1767ZM7.81629 15.6603C7.81629 15.3751 8.04749 15.1439 8.33268 15.1439V14.8439C7.8818 14.8439 7.51629 15.2094 7.51629 15.6603H7.81629ZM8.33268 15.1439C8.61787 15.1439 8.84906 15.3751 8.84906 15.6603H9.14906C9.14906 15.2094 8.78355 14.8439 8.33268 14.8439V15.1439ZM8.84906 15.6603C8.84906 15.9455 8.61787 16.1767 8.33268 16.1767V16.4767C8.78355 16.4767 9.14906 16.1112 9.14906 15.6603H8.84906Z"
        fill={fill}
        mask="url(#path-6-outside-3)"
      />
    </svg>
  )
}

WheelchairIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
}

export default WheelchairIcon