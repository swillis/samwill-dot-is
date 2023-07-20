import * as React from "react";
import classNames from "classnames";

export const iconMap = Object.freeze({
  dribbble: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99991 0C4.47935 0 0 4.47935 0 9.99991C0 15.5205 4.47935 19.9998 9.99991 19.9998C15.5096 19.9998 19.9998 15.5205 19.9998 9.99991C19.9998 4.47935 15.5096 0 9.99991 0ZM16.605 4.6095C17.7981 6.06285 18.514 7.91749 18.5356 9.92397C18.2537 9.86979 15.4337 9.29492 12.5921 9.65285C12.527 9.51185 12.4728 9.35998 12.4077 9.20817C12.2341 8.79605 12.039 8.37305 11.8437 7.97174C14.989 6.69194 16.4207 4.84811 16.605 4.6095ZM9.99991 1.47504C12.1691 1.47504 14.1539 2.28849 15.6615 3.62253C15.5096 3.83945 14.2189 5.56394 11.1821 6.70275C9.78298 4.13228 8.23205 2.02818 7.99343 1.7028C8.6333 1.55096 9.30579 1.47504 9.99991 1.47504ZM6.36657 2.27764C6.59432 2.58132 8.11274 4.69627 9.53354 7.2125C5.54225 8.27543 2.01734 8.25374 1.63773 8.25374C2.19087 5.60733 3.98044 3.40561 6.36657 2.27764ZM1.45335 10.0108C1.45335 9.92397 1.45335 9.83723 1.45335 9.75048C1.82211 9.76129 5.96524 9.81554 10.2277 8.53574C10.4772 9.01292 10.7049 9.50098 10.9218 9.98904C10.8133 10.0216 10.694 10.0542 10.5856 10.0867C6.18216 11.5075 3.83945 15.3903 3.64422 15.7157C2.28848 14.2081 1.45335 12.2016 1.45335 10.0108ZM9.99991 18.5465C8.02593 18.5465 6.20385 17.874 4.76135 16.746C4.91319 16.4315 6.6485 13.091 11.4641 11.4099C11.4858 11.399 11.4966 11.399 11.5183 11.3882C12.7222 14.5009 13.2103 17.1148 13.3404 17.8632C12.3101 18.3078 11.1821 18.5465 9.99991 18.5465ZM14.7612 17.0823C14.6745 16.5617 14.2189 14.0671 13.1018 10.9977C15.7808 10.5747 18.1235 11.2689 18.4163 11.3665C18.0476 13.7418 16.681 15.7916 14.7612 17.0823Z"
    />
  ),
  email: (
    <path d="M10 20C8.62214 20 7.32322 19.7389 6.10325 19.2166C4.88327 18.6943 3.8222 17.9821 2.92006 17.0799C2.0179 16.1778 1.30569 15.1167 0.783423 13.8967C0.261141 12.6768 0 11.3779 0 10C0 8.60459 0.261141 7.30129 0.783423 6.0901C1.30569 4.87888 2.0179 3.8222 2.92006 2.92006C3.8222 2.0179 4.88327 1.30569 6.10325 0.783424C7.32322 0.261142 8.62214 0 10 0C11.3954 0 12.6987 0.261142 13.9099 0.783424C15.1211 1.30569 16.1778 2.0179 17.0799 2.92006C17.9821 3.8222 18.6943 4.87888 19.2166 6.0901C19.7389 7.30129 20 8.60459 20 10V11.2834C20 12.2442 19.67 13.06 19.0101 13.7307C18.3502 14.4015 17.5398 14.7368 16.5789 14.7368C15.9136 14.7368 15.3242 14.5813 14.8107 14.2702C14.2972 13.9592 13.892 13.5452 13.5951 13.0283C13.1619 13.5425 12.6538 13.9558 12.0708 14.2682C11.4879 14.5806 10.7976 14.7368 10 14.7368C8.68557 14.7368 7.56749 14.276 6.64575 13.3542C5.72403 12.4325 5.26317 11.3144 5.26317 10C5.26317 8.68558 5.72403 7.56749 6.64575 6.64575C7.56749 5.72403 8.68557 5.26317 10 5.26317C11.3144 5.26317 12.4325 5.72403 13.3542 6.64575C14.276 7.56749 14.7368 8.68558 14.7368 10V11.2834C14.7368 11.8394 14.9183 12.2908 15.2814 12.6377C15.6444 12.9845 16.0769 13.1579 16.5789 13.1579C17.081 13.1579 17.5135 12.9845 17.8765 12.6377C18.2396 12.2908 18.4211 11.8394 18.4211 11.2834V10C18.4211 7.70175 17.5921 5.72367 15.9342 4.06577C14.2763 2.40788 12.2983 1.57893 10 1.57893C7.70175 1.57893 5.72367 2.40788 4.06577 4.06577C2.40787 5.72367 1.57893 7.70175 1.57893 10C1.57893 12.2983 2.40787 14.2763 4.06577 15.9342C5.72367 17.5921 7.70175 18.4211 10 18.4211H15.2632V20H10ZM10 13.1579C10.8772 13.1579 11.6228 12.8509 12.2368 12.2368C12.8509 11.6228 13.1579 10.8772 13.1579 10C13.1579 9.1228 12.8509 8.37719 12.2368 7.76315C11.6228 7.14912 10.8772 6.8421 10 6.8421C9.1228 6.8421 8.37719 7.14912 7.76315 7.76315C7.14912 8.37719 6.8421 9.1228 6.8421 10C6.8421 10.8772 7.14912 11.6228 7.76315 12.2368C8.37719 12.8509 9.1228 13.1579 10 13.1579Z" />
  ),
  linkedin: (
    <path d="M18.5194 0H1.47655C0.66015 0 0 0.644526 0 1.44139V18.5545C0 19.3514 0.66015 19.9998 1.47655 19.9998H18.5194C19.3358 19.9998 19.9998 19.3514 19.9998 18.5584V1.44139C19.9998 0.644526 19.3358 0 18.5194 0ZM5.93354 17.0428H2.96482V7.49603H5.93354V17.0428ZM4.44918 6.19526C3.49606 6.19526 2.72654 5.42573 2.72654 4.47652C2.72654 3.52731 3.49606 2.75779 4.44918 2.75779C5.39839 2.75779 6.16791 3.52731 6.16791 4.47652C6.16791 5.42183 5.39839 6.19526 4.44918 6.19526ZM17.0428 17.0428H14.078V12.4022C14.078 11.2968 14.0585 9.87101 12.535 9.87101C10.9921 9.87101 10.7577 11.078 10.7577 12.3241V17.0428H7.79681V7.49603H10.6405V8.8007H10.6796C11.0741 8.05071 12.0429 7.25775 13.4843 7.25775C16.4881 7.25775 17.0428 9.23429 17.0428 11.8046V17.0428V17.0428Z" />
  ),
  threads: (
    <path d="M14.7428 9.26961C14.6566 9.22832 14.5691 9.18858 14.4805 9.15053C14.3261 6.30606 12.7718 4.6776 10.162 4.66094C10.1502 4.66086 10.1385 4.66086 10.1266 4.66086C8.56564 4.66086 7.26738 5.32718 6.46831 6.53966L7.90362 7.52425C8.50056 6.61857 9.43739 6.4255 10.1273 6.4255C10.1353 6.4255 10.1433 6.4255 10.1512 6.42557C11.0105 6.43105 11.6589 6.6809 12.0786 7.16813C12.384 7.52284 12.5883 8.01302 12.6895 8.63165C11.9276 8.50216 11.1036 8.46234 10.2228 8.51284C7.7415 8.65577 6.14634 10.1029 6.25347 12.1137C6.30784 13.1337 6.81598 14.0112 7.68424 14.5845C8.41835 15.0691 9.36383 15.306 10.3465 15.2524C11.6441 15.1813 12.6622 14.6861 13.3724 13.7808C13.9117 13.0933 14.2529 12.2024 14.4035 11.0798C15.022 11.453 15.4803 11.9442 15.7334 12.5346C16.1638 13.5382 16.1889 15.1875 14.8432 16.5321C13.6641 17.71 12.2468 18.2196 10.1049 18.2353C7.72895 18.2177 5.93204 17.4557 4.76373 15.9705C3.66971 14.5798 3.10432 12.571 3.08322 10C3.10432 7.42894 3.66971 5.42017 4.76373 4.02945C5.93204 2.54426 7.72892 1.78229 10.1049 1.76464C12.4981 1.78243 14.3263 2.54806 15.5393 4.04042C16.1341 4.77225 16.5826 5.69258 16.8782 6.76566L18.5602 6.3169C18.2018 4.99606 17.638 3.85789 16.8707 2.91396C15.3156 1.0007 13.0412 0.0203279 10.1108 0H10.099C7.17452 0.0202573 4.92561 1.00435 3.4148 2.92493C2.07038 4.634 1.37689 7.01205 1.35359 9.99297L1.35352 10L1.35359 10.007C1.37689 12.9879 2.07038 15.366 3.4148 17.0751C4.92561 18.9956 7.17452 19.9798 10.099 20H10.1108C12.7108 19.982 14.5435 19.3013 16.0533 17.7928C18.0286 15.8194 17.9691 13.3457 17.3181 11.8272C16.851 10.7382 15.9605 9.85377 14.7428 9.26961ZM10.2536 13.4903C9.16607 13.5516 8.03627 13.0634 7.98056 12.0179C7.93927 11.2427 8.53224 10.3777 10.3203 10.2747C10.5251 10.2629 10.726 10.2571 10.9234 10.2571C11.5729 10.2571 12.1805 10.3202 12.7329 10.4409C12.5268 13.0141 11.3183 13.4319 10.2536 13.4903Z" />
  ),
  twitter: (
    <path d="M6.29174 18.125C13.837 18.125 17.9651 11.8723 17.9651 6.45163C17.9651 6.27585 17.9612 6.09617 17.9534 5.92039C18.7564 5.33964 19.4494 4.62031 19.9998 3.79619C19.2519 4.12894 18.4579 4.34625 17.6448 4.44071C18.5009 3.92753 19.1419 3.12134 19.449 2.17159C18.6436 2.64891 17.7628 2.98562 16.8444 3.16729C16.2256 2.50975 15.4074 2.07438 14.5163 1.9285C13.6252 1.78261 12.7109 1.93433 11.9147 2.3602C11.1185 2.78607 10.4847 3.46236 10.1114 4.28453C9.73816 5.10669 9.6461 6.02893 9.84952 6.90866C8.21867 6.82682 6.62322 6.40317 5.16661 5.66517C3.70999 4.92717 2.42472 3.8913 1.39413 2.62471C0.870325 3.52781 0.710041 4.59647 0.945851 5.6135C1.18166 6.63053 1.79587 7.51961 2.66365 8.10005C2.01217 8.07937 1.37497 7.90397 0.80468 7.58834V7.63912C0.804097 8.58685 1.13174 9.50554 1.73191 10.239C2.33208 10.9725 3.16774 11.4755 4.09684 11.6625C3.49335 11.8276 2.85996 11.8517 2.24568 11.7328C2.50786 12.5479 3.01795 13.2608 3.70478 13.772C4.3916 14.2832 5.22089 14.5672 6.0769 14.5844C4.62365 15.7259 2.82845 16.3451 0.98046 16.3422C0.652733 16.3417 0.32533 16.3216 0 16.282C1.87736 17.4864 4.06124 18.1261 6.29174 18.125Z" />
  ),
});

export type IconName = keyof typeof iconMap;

const getIconPath = (name: IconName) => {
  if (!(name in iconMap)) {
    console.warn(`The icon ${name} was not found.`);
    return null;
  }
  return iconMap[name];
};

interface IconProps {
  name: IconName;
  className?: string;
  size?: 12 | 16 | 18 | 20 | 24 | 36;
}

export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size,
  className,
}) => (
  <svg
    className={classNames("ff-icon", className)}
    width={size || 20}
    height={size || 20}
    viewBox="0 0 20 20"
  >
    {getIconPath(name)}

    <style jsx>{`
      .ff-icon {
        display: block;
        // fill: currentColor;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
    `}</style>
  </svg>
);
