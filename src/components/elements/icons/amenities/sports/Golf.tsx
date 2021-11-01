import React from 'react'
import {palette} from 'src/components/foundation/palette'

const GolfIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({fill, stroke}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.20059 1.99084L8.20078 1.98977L8.19034 1.99001C7.87196 1.99728 7.55345 1.98401 7.23678 1.95028L7.22942 1.9495L7.22216 1.95088L6.59015 2.07088L6.59015 2.07087L6.58939 2.07103C5.46104 2.30357 4.42647 2.8641 3.61544 3.68231C2.8044 4.50052 2.25301 5.53999 2.03042 6.67034L2.03041 6.67034L2.03021 6.67149C1.8388 7.77968 1.97961 8.91972 2.43488 9.94804C2.88993 10.9758 3.63879 11.8461 4.58722 12.4493C4.66335 12.5052 4.75041 12.5531 4.83522 12.5998L4.84437 12.6048C4.91923 12.646 4.99236 12.6867 5.05924 12.7326C4.93699 12.9269 4.87849 13.155 4.89268 13.385C4.90785 13.6306 5.00507 13.8639 5.16872 14.0477C5.52049 14.5194 5.87059 14.989 6.18078 15.498L6.1799 15.4986L6.18688 15.5061C6.25685 15.5812 6.29504 15.6806 6.29348 15.7832V15.784V20.5823C6.28648 20.6896 6.30175 20.7971 6.33836 20.8981C6.37516 20.9997 6.4327 21.0924 6.50733 21.1705L6.50708 21.1708L6.5116 21.1745C6.62548 21.2688 6.73183 21.3751 6.84013 21.4834L6.84095 21.4842C6.9474 21.5906 7.05577 21.699 7.17235 21.7958C7.23738 21.8707 7.31765 21.931 7.40782 21.9724C7.49929 22.0145 7.59879 22.0363 7.69948 22.0363C7.80017 22.0363 7.89967 22.0145 7.99115 21.9724C8.08198 21.9307 8.16276 21.8699 8.22805 21.7942L8.77799 21.2522C8.77809 21.2521 8.77819 21.252 8.77829 21.2519C8.87375 21.1608 8.94873 21.0504 8.99824 20.9281C9.04768 20.8059 9.0706 20.6747 9.06548 20.543L9.06549 15.824L9.06548 15.8232C9.06392 15.7206 9.10212 15.6212 9.17208 15.5461L9.17283 15.5468L9.17815 15.5381C9.48254 15.04 9.79288 14.5899 10.0997 14.145C10.1468 14.0767 10.1938 14.0085 10.2407 13.9403L10.2407 13.9403L10.2416 13.939C10.3508 13.7684 10.4191 13.5748 10.4412 13.3734L10.4422 13.3736L10.4413 13.3635C10.4217 13.1465 10.3892 12.931 10.3442 12.7179C10.3676 12.7168 10.3906 12.7112 10.4121 12.7016L10.4121 12.7017L10.4152 12.7C11.3974 12.1699 12.2022 11.363 12.7299 10.3796C13.2575 9.39611 13.4847 8.27934 13.3833 7.16789C13.2819 6.05644 12.8562 4.99925 12.1593 4.12754C11.4624 3.25583 10.5247 2.60799 9.46287 2.26443L9.46288 2.2644L9.46122 2.26392C9.06692 2.15127 8.63299 2.07091 8.20196 1.99109L8.20059 1.99084ZM9.3226 12.2941L9.32261 12.294H9.31948H7.71948H6.097C5.97953 12.2868 5.86394 12.261 5.75449 12.2177C4.78665 11.805 3.97582 11.094 3.44004 10.1885C2.90414 9.28269 2.67138 8.22951 2.77566 7.18227C2.87995 6.13503 3.31582 5.14842 4.01981 4.36613C4.72379 3.58385 5.6591 3.04673 6.68956 2.83297C7.89639 2.58536 9.15219 2.79668 10.2115 3.42563C11.2709 4.05458 12.0576 5.05596 12.418 6.23407C12.7783 7.41217 12.6864 8.68231 12.1602 9.79626C11.6341 10.9099 10.7117 11.7875 9.57327 12.2574C9.49317 12.2869 9.4078 12.2994 9.3226 12.2941ZM6.02517 13.0576L6.02512 13.058H6.03148H7.71948H7.72001C8.27121 13.058 8.82379 13.058 9.35262 13.034C9.4303 13.034 9.48901 13.0346 9.53843 13.0514C9.58323 13.0665 9.62316 13.0963 9.65761 13.1641C9.68103 13.2273 9.68692 13.2957 9.67463 13.3621C9.66219 13.4292 9.63159 13.4917 9.58615 13.5427L9.58597 13.5426L9.58312 13.5465C9.37219 13.8349 9.17172 14.1179 8.96934 14.4037C8.79678 14.6473 8.62283 14.893 8.43979 15.1456C8.41686 15.1737 8.38716 15.1955 8.35347 15.209C8.3194 15.2226 8.2824 15.2272 8.24602 15.2224L8.24607 15.222H8.23948H7.05548V15.222L7.0533 15.222C7.01664 15.2236 6.98016 15.2161 6.94712 15.2002C6.91407 15.1842 6.8855 15.1603 6.86395 15.1306L6.86399 15.1306L6.86271 15.129C6.61992 14.8218 6.39366 14.4947 6.16076 14.1579C6.01834 13.952 5.87344 13.7425 5.72075 13.5317C5.68857 13.4817 5.67145 13.4235 5.67145 13.364C5.67145 13.3042 5.68873 13.2457 5.72121 13.1955C5.75408 13.1467 5.79986 13.1079 5.85346 13.0836C5.90718 13.0591 5.96664 13.0502 6.02517 13.0576ZM8.34146 20.48L8.3415 20.4813C8.34414 20.5856 8.30647 20.687 8.23637 20.7643C8.05399 20.9253 7.88004 21.0956 7.71521 21.2746C7.50533 21.0934 7.31199 20.8939 7.13748 20.6784V20.6781V20.6778V20.6776V20.6773V20.677V20.6767V20.6764V20.6761V20.6758V20.6755V20.6752V20.6749V20.6746V20.6743V20.674V20.6737V20.6734V20.6731V20.6728V20.6725V20.6722V20.6719V20.6716V20.6713V20.671V20.6707V20.6704V20.6701V20.6698V20.6695V20.6692V20.6689V20.6686V20.6683V20.668V20.6677V20.6673V20.667V20.6667V20.6664V20.6661V20.6658V20.6655V20.6652V20.6648V20.6645V20.6642V20.6639V20.6636V20.6633V20.663V20.6626V20.6623V20.662V20.6617V20.6614V20.661V20.6607V20.6604V20.6601V20.6597V20.6594V20.6591V20.6588V20.6585V20.6581V20.6578V20.6575V20.6572V20.6568V20.6565V20.6562V20.6559V20.6555V20.6552V20.6549V20.6545V20.6542V20.6539V20.6535V20.6532V20.6529V20.6526V20.6522V20.6519V20.6516V20.6512V20.6509V20.6506V20.6502V20.6499V20.6496V20.6492V20.6489V20.6486V20.6482V20.6479V20.6475V20.6472V20.6469V20.6465V20.6462V20.6459V20.6455V20.6452V20.6448V20.6445V20.6442V20.6438V20.6435V20.6431V20.6428V20.6425V20.6421V20.6418V20.6414V20.6411V20.6407V20.6404V20.6401V20.6397V20.6394V20.639V20.6387V20.6383V20.638V20.6377V20.6373V20.637V20.6366V20.6363V20.6359V20.6356V20.6352V20.6349V20.6345V20.6342V20.6339V20.6335V20.6332V20.6328V20.6325V20.6321V20.6318V20.6314V20.6311V20.6307V20.6304V20.63V20.6297V20.6293V20.629V20.6286V20.6283V20.6279V20.6276V20.6272V20.6269V20.6265V20.6262V20.6258V20.6255V20.6251V20.6248V20.6244V20.6241V20.6237V20.6234V20.623V20.6227V20.6223V20.622V20.6216V20.6213V20.6209V20.6206V20.6202V20.6199V20.6195V20.6192V20.6188V20.6185V20.6181V20.6178V20.6174V20.6171V20.6167V20.6164V20.616V20.6156V20.6153V20.6149V20.6146V20.6142V20.6139V20.6135V20.6132V20.6128V20.6125V20.6121V20.6118V20.6114V20.6111V20.6107V20.6104V20.61V20.6097V20.6093V20.609V20.6086V20.6083V20.6079V20.6076V20.6072V20.6069V20.6065V20.6062V20.6058V20.6055V20.6051V20.6048V20.6044V20.6041V20.6037V20.6034V20.603V20.6027V20.6023V20.602V20.6016V20.6013V20.6009V20.6006V20.6002V20.5999V20.5995V20.5992V20.5988V20.5985V20.5982V20.5978V20.5975V20.5971V20.5968V20.5964V20.5961V20.5957V20.5954V20.595V20.5947V20.5943V20.594V20.5937V20.5933V20.593V20.5926V20.5923V20.5919V20.5916V20.5913V20.5909V20.5906V20.5902V20.5899V20.5895V20.5892V20.5889V20.5885V20.5882V20.5878V20.5875V20.5872V20.5868V20.5865V20.5861V20.5858V20.5855V20.5851V20.5848V20.5845V20.5841V20.5838V20.5834V20.5831V20.5828V20.5824V20.5821V20.5818V20.5814V20.5811V20.5808V20.5804V20.5801V20.5798V20.5794V20.5791V20.5788V20.5785V20.5781V20.5778V20.5775V20.5771V20.5768V20.5765V20.5761V20.5758V20.5755V20.5752V20.5748V20.5745V20.5742V20.5739V20.5735V20.5732V20.5729V20.5726V20.5723V20.5719V20.5716V20.5713V20.571V20.5706V20.5703V20.57V20.5697V20.5694V20.5691V20.5687V20.5684V20.5681V20.5678V20.5675V20.5672V20.5668V20.5665V20.5662V20.5659V20.5656V20.5653V20.565V20.5647V20.5643V20.564V20.5637V20.5634V20.5631V20.5628V20.5625V20.5622V20.5619V20.5616V20.5613V20.561V20.5607V20.5604V20.5601V20.5598V20.5595V20.5592V20.5589V20.5586V20.5583V20.558V20.5577V20.5574V20.5571V20.5568V20.5565V20.5562V20.5559V20.5556V20.5553V20.555V20.5547V20.5544V20.5542V20.5539V20.5536V20.5533V20.553V20.5527V20.5524V20.5521V20.5519V20.5516V20.5513V20.551V20.5507V20.5505V20.5502V20.5499V20.5496V20.5493V20.5491V20.5488V20.5485V20.5482V20.548V20.5477V20.5474V20.5471V20.5469V20.5466V20.5463V20.5461V20.5458V20.5455V20.5453V20.545V20.5447V20.5445V20.5442V20.544V20.5437V20.5434V20.5432V20.5429V20.5427V20.5424V20.5421V20.5419V20.5416V20.5414V20.5411V20.5409V20.5406V20.5404V20.5401V20.5399V20.5396V20.5394V20.5391V20.5389V20.5386V20.5384V20.5381V20.5379V20.5377V20.5374V20.5372V20.5369V20.5367V20.5365V20.5362V20.536V16.026H8.34148L8.34146 20.48Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M6.33383 7.97421L6.3338 7.97421L6.33379 7.97587C6.33333 8.07836 6.36787 8.17794 6.4317 8.25813C6.49553 8.33833 6.58481 8.39433 6.68479 8.41687L6.68453 8.41805L6.6956 8.4181C6.75265 8.41832 6.80912 8.40664 6.8614 8.3838C6.91367 8.36095 6.96061 8.32745 6.9992 8.28543C7.03779 8.24341 7.06718 8.1938 7.0855 8.13977C7.10344 8.08688 7.11037 8.03089 7.1059 7.97525C7.11823 7.73934 7.2195 7.51681 7.38938 7.35254C7.55939 7.18815 7.78541 7.0944 8.02179 7.09014C8.07586 7.09517 8.1304 7.08849 8.18167 7.07054C8.23391 7.05226 8.28149 7.02273 8.32107 6.98404C8.36064 6.94534 8.39123 6.89844 8.41068 6.84662C8.43013 6.79481 8.43797 6.73936 8.43364 6.68419L8.4337 6.68418L8.43339 6.68179C8.41973 6.57442 8.36418 6.47682 8.27884 6.41025C8.19405 6.34411 8.08669 6.31395 7.97992 6.32621C7.54876 6.343 7.13977 6.52179 6.83463 6.82693C6.52902 7.13254 6.35014 7.54232 6.33383 7.97421Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M5.65989 8.64604C5.66041 8.64601 5.66093 8.64598 5.66146 8.64595L5.66421 8.69587C5.71048 8.69031 5.7574 8.694 5.80224 8.70671C5.84708 8.71943 5.88895 8.74092 5.92542 8.76995C5.96189 8.79897 5.99222 8.83495 6.01468 8.87579C6.03713 8.91664 6.05125 8.96153 6.05621 9.00788C6.05997 9.05575 6.05317 9.10387 6.03629 9.14883C6.01941 9.19378 5.99286 9.23449 5.95853 9.26806C5.92419 9.30164 5.8829 9.32726 5.83757 9.34312C5.79225 9.35899 5.74399 9.36471 5.69621 9.35987M5.65989 8.64604C5.7122 8.63997 5.76521 8.64424 5.81588 8.65861C5.86709 8.67313 5.91491 8.69768 5.95656 8.73083C5.9982 8.76397 6.03285 8.80506 6.05849 8.85171C6.08413 8.89835 6.10026 8.94963 6.10593 9.00255L6.10608 9.00396L6.10606 9.00396C6.11039 9.05914 6.10255 9.11459 6.0831 9.1664C6.06364 9.21821 6.03305 9.26512 5.99348 9.30381C5.95391 9.3425 5.90633 9.37203 5.85409 9.39032C5.8032 9.40813 5.74911 9.41484 5.69545 9.41003M5.65989 8.64604C5.23131 8.67007 4.82658 8.85114 4.52303 9.15469C4.22013 9.45759 4.03918 9.86123 4.01453 10.2888M5.65989 8.64604L4.06421 10.2959M5.69545 9.41003C5.69674 9.40994 5.69804 9.40986 5.69933 9.40978L5.69621 9.35987M5.69545 9.41003C5.69402 9.4099 5.6926 9.40976 5.69118 9.40962L5.69621 9.35987M5.69545 9.41003C5.45058 9.42634 5.22085 9.53449 5.05224 9.71294C4.88274 9.89233 4.78766 10.1294 4.78621 10.3762L4.78619 10.379L4.78611 10.379C4.77947 10.4842 4.73411 10.5831 4.65878 10.6568C4.58345 10.7304 4.48351 10.7736 4.37824 10.7778L4.37185 10.7781L4.37188 10.7777C4.31435 10.7727 4.25857 10.7553 4.20834 10.7269C4.15811 10.6984 4.11461 10.6594 4.08079 10.6126C4.04698 10.5657 4.02365 10.5122 4.0124 10.4556C4.00144 10.4004 4.00217 10.3436 4.01453 10.2888M5.69621 9.35987C5.43725 9.37609 5.1941 9.49 5.01589 9.6786C4.83769 9.8672 4.73773 10.1164 4.73621 10.3759C4.73035 10.4687 4.69031 10.556 4.62383 10.621C4.55734 10.686 4.46912 10.7241 4.37621 10.7279C4.32583 10.7235 4.27699 10.7083 4.23301 10.6834C4.18903 10.6584 4.15093 10.6243 4.12133 10.5833C4.09172 10.5423 4.0713 10.4954 4.06144 10.4458C4.05158 10.3962 4.05253 10.3451 4.06421 10.2959M4.01453 10.2888C4.01445 10.2902 4.01437 10.2917 4.01429 10.2931L4.06421 10.2959M4.01453 10.2888C4.01487 10.2873 4.01521 10.2858 4.01556 10.2843L4.06421 10.2959"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M5.63971 4.30985L5.63848 4.30988C5.42656 4.31511 5.21785 4.36277 5.02466 4.45003C4.83148 4.5373 4.65776 4.66241 4.51375 4.81797C4.36975 4.97353 4.25839 5.15637 4.18625 5.3557C4.11426 5.55462 4.0828 5.76594 4.09371 5.97719C4.0943 6.22766 4.26066 6.41786 4.45571 6.41786C4.54821 6.41786 4.63935 6.38311 4.70737 6.31391C4.77572 6.24438 4.81771 6.14322 4.81772 6.01586L4.8177 6.01502C4.81363 5.77283 4.90544 5.53884 5.07313 5.36405C5.24027 5.18982 5.4693 5.08848 5.71059 5.08191C5.7651 5.0856 5.81978 5.07767 5.87101 5.05864C5.92306 5.03932 5.97032 5.00899 6.00958 4.96973C6.04884 4.93048 6.07916 4.88321 6.09849 4.83117C6.11782 4.77912 6.12569 4.72352 6.12157 4.66815L6.12181 4.66814L6.12098 4.66337C6.09978 4.54036 6.05555 4.44767 5.97166 4.3881C5.88979 4.32995 5.77888 4.30986 5.63971 4.30985Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M8.65417 5.57353L8.6541 5.57353V5.57607C8.6541 5.71969 8.67825 5.81808 8.74071 5.88436C8.80189 5.94929 8.8912 5.97328 8.99029 5.9931C9.10761 6.01657 9.20518 5.98062 9.27684 5.90299C9.34605 5.82802 9.38859 5.71726 9.40942 5.59229L9.40976 5.59235L9.41004 5.58649C9.42161 5.34724 9.52387 5.12138 9.69604 4.95486C9.86821 4.78834 10.0974 4.69365 10.3368 4.69007L10.3369 4.69064L10.3443 4.68939C10.4703 4.66839 10.5713 4.6254 10.6412 4.55673C10.7121 4.48692 10.7461 4.39534 10.7461 4.28807C10.7461 4.17671 10.699 4.08419 10.6179 4.0207C10.538 3.95813 10.4282 3.92607 10.3041 3.92607V3.92601L10.3016 3.92614C9.87173 3.94802 9.4653 4.12861 9.16097 4.43294C8.85664 4.73727 8.67605 5.1437 8.65417 5.57353Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M3.62972 8.25457L3.62969 8.25457V8.25623C3.62969 8.40141 3.66851 8.49948 3.74389 8.56497C3.81591 8.62754 3.91413 8.65331 4.01388 8.67326C4.13123 8.69673 4.22699 8.66077 4.29674 8.5838C4.3634 8.51025 4.40372 8.40243 4.42459 8.28284C4.44175 8.21701 4.45514 8.15025 4.46468 8.0829C4.5231 7.88779 4.64027 7.71542 4.80027 7.58932C4.96042 7.4631 5.15561 7.38943 5.35917 7.37833C5.41322 7.38208 5.46746 7.37417 5.51821 7.35512C5.57002 7.33566 5.61693 7.30507 5.65562 7.2655C5.69432 7.22593 5.72385 7.17835 5.74213 7.12611C5.76041 7.07387 5.767 7.01826 5.76143 6.9632L5.76167 6.96317L5.76071 6.9584C5.7388 6.84916 5.67645 6.75223 5.58613 6.687C5.49642 6.62221 5.38571 6.59345 5.27586 6.60633C4.84407 6.62125 4.43399 6.79945 4.12845 7.10499C3.82239 7.41104 3.64411 7.82198 3.62972 8.25457Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
      <path
        d="M6.73319 5.70579C6.7872 5.71114 6.84174 5.70453 6.89294 5.68643C6.94497 5.66804 6.99222 5.63824 7.03125 5.59922C7.07027 5.5602 7.10007 5.51294 7.11846 5.46091C7.1365 5.40989 7.14312 5.35555 7.13787 5.30172C7.14251 5.06667 7.23794 4.84249 7.40423 4.6762C7.5707 4.50973 7.7952 4.41427 8.03053 4.40983C8.0843 4.41342 8.13824 4.40571 8.18887 4.38719C8.24023 4.3684 8.28701 4.33892 8.32611 4.30068C8.36522 4.26245 8.39575 4.21634 8.41569 4.16541C8.43547 4.11488 8.44438 4.06075 8.44183 4.00655C8.44149 3.89218 8.39474 3.79958 8.31201 3.73694C8.23066 3.67534 8.11883 3.6458 7.99183 3.64579L7.99084 3.64581C7.56463 3.65425 7.15822 3.82732 6.85679 4.12876C6.55535 4.4302 6.38228 4.8366 6.37384 5.26281L6.37383 5.26281V5.2638C6.37383 5.39155 6.40573 5.50163 6.46867 5.5809C6.5321 5.66077 6.62385 5.70509 6.73319 5.70579ZM6.73319 5.70579C6.73231 5.70571 6.73143 5.70562 6.73055 5.70552L6.73583 5.6558M6.73319 5.70579C6.73407 5.7058 6.73495 5.7058 6.73583 5.7058V5.6558M6.73583 5.6558C6.54383 5.6558 6.42383 5.5038 6.42383 5.2638M6.73583 5.6558C6.78329 5.66084 6.83128 5.6552 6.87627 5.63929C6.92127 5.62339 6.96214 5.59761 6.99589 5.56386C7.02964 5.53012 7.05541 5.48925 7.07132 5.44425C7.08723 5.39925 7.09287 5.35126 7.08783 5.3038C7.09195 5.05472 7.19272 4.817 7.36887 4.64085C7.54502 4.4647 7.78275 4.36392 8.03183 4.3598L6.42383 5.2638M6.42383 5.2638C6.43201 4.85051 6.59984 4.45642 6.89214 4.16412C7.18444 3.87181 7.57853 3.70399 7.99183 3.6958M6.42383 5.2638L7.99183 3.6958M7.99183 3.6958C8.23183 3.6958 8.39183 3.8078 8.39183 4.0078L7.99183 3.6958Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.1"
      />
    </svg>
  )
}

GolfIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
}

export default GolfIcon
