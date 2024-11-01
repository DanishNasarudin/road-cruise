type IconProps = {
  fill?: string;
  filled?: string;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
  className?: string;
  [key: string]: any;
};

const SearchIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
    </svg>
  );
};
const CartIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
    </svg>
  );
};
const UserIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
    </svg>
  );
};

const DashboardIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
    </svg>
  );
};
const OrdersIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z"></path>
      <path d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></path>
    </svg>
  );
};
const CouponIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M21 5H3a1 1 0 0 0-1 1v4h.893c.996 0 1.92.681 2.08 1.664A2.001 2.001 0 0 1 3 14H2v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4h-1a2.001 2.001 0 0 1-1.973-2.336c.16-.983 1.084-1.664 2.08-1.664H22V6a1 1 0 0 0-1-1zM9 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-.8 6.4 6-8 1.6 1.2-6 8-1.6-1.2zM15 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"></path>
    </svg>
  );
};
const SettingIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
      <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
    </svg>
  );
};
const ArrowDoubleIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path>
      <path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path>
    </svg>
  );
};
const LogoIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 771.54 771.57"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path
        d="M671.23,483.65c12.23.29,24.6,0,37-.62,1.55-.09,1.64-.8,2-1.94,1.46-4.51,2.93-9.16,6.83-12.24a39.21,39.21,0,0,1,20.11-8.62A47,47,0,0,1,758,462.62c11.58,3.88,16.25,21.64,7.67,29.16-4.16,3.65-9.33,5.22-14.55,6.19-10,1.85-20.17,2.83-30.3,3.92-15.4,1.67-30.6,4.42-44.4,12-12.94,7.1-21,17.89-23.69,32.48-2,10.89-.68,21.15,5.4,30.66,6.24,9.76,15.66,15.35,26.41,17.26,13.24,2.35,26.81,2.65,40-1.94a60.1,60.1,0,0,0,25.1-16.8c.8,3.33.35,6.52.37,9.67a51.87,51.87,0,0,0,8.94,29.26c8.36,12.52,20,19.61,35,21.61,18.08,2.41,34.87-.6,49.94-11.25,11.27-8,17.86-19,20.79-32.31,3.31-15.08,7.23-30.06,9.53-45.29,2.08-13.77,5.54-27.22,7.86-40.92.64-3.79,1.65-7.52,2.55-11.53.56.4,1,.59,1,.78.06,6.9.23,13.81,0,20.71-.06,1.42.32,2.72.26,4.12-.31,8.1-2.19,16-2.88,24-.49,5.76-1.5,11.42-2.33,17.12-1.19,8.22-3.23,16.25-4.66,24.41a204.94,204.94,0,0,1-7.55,29.18A442.55,442.55,0,0,1,847.87,667,348,348,0,0,1,829,701.76a354.45,354.45,0,0,1-29.39,41c-7.44,8.78-14.6,17.82-22.8,25.94a439.64,439.64,0,0,1-44.23,38.94c-10.6,8-21.28,16-32.76,22.59-20.45,11.67-41.24,22.73-63.6,30.67-13,4.61-25.92,9.34-39.23,12.89-8,2.13-16.16,3.55-24.3,5-10.83,1.92-21.66,4-32.58,5.15-6.47.71-12.86,2-19.52,1.83-15.44-.47-30.91-.32-46.36-.08-7.48.12-14.56-2.2-22-2.55s-14.7-2.23-22-3.57c-6.7-1.24-13.37-2.67-20.05-4-20.89-4.09-40.53-12-60.3-19.56-15.91-6.07-30.51-14.73-45.44-22.76-12.86-6.91-24.33-15.95-36.45-24-6.83-4.54-12.61-10.64-19.14-15.68-9.43-7.28-17.11-16.39-25.88-24.33-7.36-6.66-13.16-14.6-19.7-21.94A292.18,292.18,0,0,1,172.76,706c-11.42-18.55-22.24-37.44-30-58-4.28-11.42-8.88-22.72-12.8-34.28-4.46-13.13-6.67-26.81-9.65-40.3-2.32-10.52-3.55-21.2-5.08-31.84a79.9,79.9,0,0,1-.92-11.1c0-20.61-.31-41.22.13-61.82.21-9.41,2-18.78,3.29-28.15,1.56-11.38,4.46-22.47,6.49-33.74,2-10.83,5.74-21.22,9.29-31.65,3.43-10.08,7.84-19.76,11.7-29.66,8.3-21.25,20-40.63,32.44-59.59,7.9-12.06,16.17-23.92,26.09-34.52,5.13-5.49,9.25-12,14.74-17,9.11-8.42,17.06-18,27-25.63,6.62-5.07,12.72-10.9,19.34-16A328,328,0,0,1,296.05,171c14.19-8.58,28.62-16.92,43.9-23.41C357.61,140,375.47,133,394,127.76c15.38-4.3,31.09-6.83,46.74-9.81,24.55-4.66,49.33-3.49,74.08-3.73,15.76-.15,31.25,1.86,46.75,4.45,8.78,1.47,17.39,3.8,26.13,5.16,17.16,2.67,33.23,8.84,49.3,14.77,19.78,7.29,38.6,16.76,56.89,27.4,11.07,6.43,21.38,13.83,31.93,20.95,16.06,10.83,30.26,23.76,44.07,37.25,9,8.82,17.27,18.29,25.62,27.72a319.59,319.59,0,0,1,34.74,48.17C841,318,851,336.49,858,356.39a146.66,146.66,0,0,0,6.29,15.82c2.46,5,1.85,10,.64,15.3-3.44,15.18-6.4,30.48-9.36,45.76-3.14,16.29-6.18,32.59-9.74,48.8-4,18.41-7.69,36.91-11.37,55.4-2.64,13.25-5,26.57-7.61,39.82a69.29,69.29,0,0,1-3.32,11.88c-2.21,5.61-6.91,7.88-12.68,9.06-8.36,1.7-17.85-2.22-19.94-9.3-1.75-5.92-1.35-12.12-.7-18.15,1.34-12.36,5-24.3,7.33-36.48s5.2-24,7.67-36c1.39-6.72,2.09-13.56,3-20.35.88-6.34-.08-12.17-1.76-18.05-2.19-7.72-7.48-13-14.13-17.13-10.08-6.23-21.25-8.5-32.9-9.7a146.59,146.59,0,0,0-20.93-.51c-17.19.71-33.47,4.77-47.73,15A39.36,39.36,0,0,0,679,461.11C675.19,468.21,672.05,475.48,671.23,483.65ZM433.57,595.07c3.51,1,6.59-.61,9.83-.56,9,.16,18.09.06,27.13,0,1.46,0,3.05.38,3.48-1.82,2-9.91,4.29-19.74,6-29.69,2.75-16.46,6.95-32.62,9.36-49.17,1.79-12.35,4.91-24.54,7.37-36.83,4.31-21.59,9.51-43,13-64.76,1.7-10.61,4.19-21.1,6.37-31.86h-39.3c-.92,0-1.84-.3-2.09,1.32-.55,3.72-1.53,7.38-2.18,11.09-1.77,10.07-4.13,20-5.62,30.17-1.7,11.63-4.73,23.08-7.26,34.59-.26,1.18-.26,3-1.48,3.32-1.45.33-1.69-1.61-2.17-2.61-4.15-8.57-11.05-13.94-19.64-17.62-10.11-4.33-20.46-4.93-31.33-3.87-11.81,1.15-22.33,5.45-32.52,10.9S355.23,461.86,348.94,471c-11.63,17-16.37,36.49-18,56.63-.89,10.78-.6,21.67,2.7,32.37,5.42,17.55,15.3,30.42,33.52,35.85a74.12,74.12,0,0,0,36.05,1.76c13.95-2.73,24.92-9.49,32.09-22,.18-.31-.21-1.68,1.28-1,1.19.58,1.39,1.14,1.13,2.24C436.31,583,435,589,433.57,595.07ZM621.19,525.2c9.16,0,18.33,0,27.5,0,1.12,0,2.35.53,2.58-1.61a190.74,190.74,0,0,0,1.48-24.13c-.25-12.17-2.81-23.6-9-34.25-3.21-5.58-6.5-11.17-11.6-15-11.77-8.83-25.13-14.37-39.85-15.36-17.2-1.15-33.92.39-49.66,9-11.86,6.5-21,15.42-28.94,26-4.22,5.63-6.65,12.1-9.54,18.36-5.18,11.18-7.49,23.13-8.25,35.33a91.32,91.32,0,0,0,1.31,21.86c2.08,11.65,6.52,22.11,14.14,31.08,11.27,13.28,26.22,19.26,43.23,20.26a150,150,0,0,0,34.27-1.53c15.9-2.75,29-10.77,39.74-22.79,6.6-7.4,10.54-16.26,14.51-25.16,1.33-3-.52-2.46-2.12-2.46-11.81,0-23.62,0-35.42,0a3.8,3.8,0,0,0-3.78,2.11c-5,7.81-11.2,14.61-20.1,17.88-9.87,3.63-19.81,2.27-29.36-1.59a26.83,26.83,0,0,1-13.86-12.48c-3.48-6.65-3.8-14.16-3.44-21.6.11-2.12.91-3.19,3.38-3.21,20.29-.13,40.59.55,60.87-.63C606.59,524.84,613.9,525.2,621.19,525.2ZM279.85,596.07c6.78,0,13.57,0,20.35,0,1.6,0,2.47,0,2.79-2.22.76-5.4,2.23-10.69,3.33-16,2.39-11.68,4.64-23.38,7.1-35,1.88-8.92,3.44-17.89,5.08-26.86,2.1-11.47,4.62-22.88,7-34.31,2.2-10.72,4.45-21.43,6.62-32.15q3.18-15.73,6.25-31.49c2.09-10.87,3.91-21.8,6.25-32.62.58-2.71.64-3.48-2.33-3.46-13.44.1-26.88.14-40.32-.05-2.31,0-3.05.93-3.42,2.69-.64,3.1-1.29,6.21-1.68,9.34-1.89,15.38-5.87,30.34-8.81,45.51-2.22,11.45-4.81,22.84-7,34.3-2.16,11.24-4.75,22.38-6.39,33.75-1.68,11.64-4.79,23.07-7.2,34.61q-5.28,25.35-10.45,50.72c-.41,2-.49,3.5,2.54,3.39C266.28,595.91,273.07,596.07,279.85,596.07Zm401.21,75.41c5.05.2,11.22.12,17.09-2.11,9.26-3.51,14.74-13.54,13.4-24.14-1-8.39-6.83-12.56-13.35-12.85-10.14-.43-20.33-.09-30.49-.14-1.45,0-2,.22-2.29,1.93-1.58,7.87-3.4,15.66-4.63,23.63-1.75,11.37-4.77,22.55-7.29,33.8-1.23,5.52-1.27,5.51,4.37,5.51,1.75,0,3.51,0,5.27,0,1,0,1.47-.12,1.68-1.35.88-5.28,2-10.52,3-15.78,1.6-8.51,1.59-8.51,10.64-8.51Zm72.48-40.72c-13.7,0-25,7.48-30,19.61-3.37,8.13-5.23,16.27-3.86,25.26,1.65,10.72,6.76,19.52,18.66,21.7,12.36,2.27,25.77-2.59,32.29-14.37,1.18-2.13,3.44-4.76,2.81-6.38s-4.17-1.48-6.58-1.36c-1,0-1.69-.89-2.81-.77-1.31.13-2.36.16-2.8,1.78-1,3.7-3.47,6.28-6.65,8.38-9,5.92-20.76,2.39-23.09-8a30.84,30.84,0,0,1,.4-15.14c2.67-9.34,6.92-17.48,17.22-20.46,6.79-2,14.92,1.23,16.57,9.11.39,1.9,1.3,2.07,2.42,1.68,2.31-.81,4.68-.42,7-.8,1-.16,2.92.34,2.27-2.7A22.76,22.76,0,0,0,753.54,630.76ZM590.69,656.5c.79-8.86,3.34-16.32,4.55-24.23-2.92,0-5.69.15-8.43,0-2.28-.16-3.47.17-3.83,2.87-.55,4.08-1.85,8-2.64,12.09-3.24,16.56-6.42,33.14-9.66,49.93,3.09,0,6.1-.09,9.1,0,1.65.07,1.83-.57,2.14-2.08,1.58-7.73,3.3-15.44,5.22-23.09,1.8-7.17,5.14-13.07,13.4-14.38,3.18-.5,6.78,1.35,6.86,4.07A24.41,24.41,0,0,1,607,668c-2.21,9.63-4.1,19.32-6.08,28.91,4.06,0,8.42,1.14,11.34-.42,1.88-1,1.69-6,2.35-9.17,1.92-9.36,4.12-18.66,4.18-28.31,0-4.91-4.58-9.15-9.31-9.46C602.55,649,596.88,651.61,590.69,656.5Zm-95,21c4.9,0,9.8-.06,14.7,0,1.61,0,2.23-.38,2.14-2.08-.13-2.76,0-5.53,0-8.29-.24-10.18-7-17.2-17.22-17.55-13.32-.45-23.53,9.18-26.48,21.09a23.22,23.22,0,0,0,3.94,20.11c8.47,11.5,26.54,10,34.39-.07,1.12-1.43,2.9-3.31,2.61-4.59-.34-1.53-2.91-1-4.59-1.15-.46,0-.88-.54-1.34-.57-2-.11-3.82-.72-5.28,1.95-2,3.69-8.17,5.27-11.93,3.85s-7.39-7-7.32-11c0-1.73.89-1.7,2.1-1.69C486.11,677.53,490.88,677.51,495.65,677.51Zm-66.72,20.36c3.59,0,7.1-.08,10.6,0,1.64.06,1.84-.55,2.14-2.07,1.43-7,3.13-14,4.06-21.11,1.22-9.36,3.84-18.52,5.59-27.82.68-3.56,1.7-5.64,5.93-4.92,2.8.48,5.75.09,8.64.09,5.93,0,6,0,7.24-5.78.46-2,.39-3.38-2.58-3.35-15.06.17-30.12.12-45.18,0-2.08,0-2.74.49-2.73,2.66s-.69,4.19-1.14,6.57h19.22Zm132.42-15.52c-5.4-.51-11.27-2.92-14.53,4.12a2.38,2.38,0,0,1-.79.79c-2.76,2.23-6.07,3.31-9.27,1.94a8.6,8.6,0,0,1-5.52-8.69,34.6,34.6,0,0,1,.86-7.69c1.63-6.45,3.64-12.65,11.26-14.58,4.28-1.08,9.68.39,10.55,5.62.12.71,0,1.91,1,1.51,3-1.25,6.35-.1,9.38-1.38,1-.42,1.18-1.09.88-1.64-1.83-3.41-2.79-7.56-6.45-9.6-8.48-4.76-17.16-4.49-25.31.54-10.18,6.29-14,16.26-13.27,27.69.51,8.54,5.48,14.87,12.84,16.82C545.5,701.13,557.31,695,561.35,682.35Z"
        transform="translate(-114.23 -114.21)"
      />
      <path
        d="M762.29,516.38c-1.34,5-2.54,10-4,14.91-2.51,8.21-4.89,16.47-10.51,23.34a36.73,36.73,0,0,1-24.21,13.67c-7.19,1-13.88.46-20.3-2.77-9.75-4.92-11.54-12.82-9.39-22.35,2.58-11.45,11.73-14.68,21.32-17.16,6.68-1.73,13.63-1.77,20.48-2.5C744.65,522.56,753.69,521.06,762.29,516.38Z"
        transform="translate(-114.23 -114.21)"
      />
      <path
        d="M449.91,502.55a82.34,82.34,0,0,1-7.23,36c-6.56,14.17-16.13,25.85-32.59,29-14.64,2.81-28.11-1.81-35-17.82-4.17-9.75-3.54-19.67-2.3-29.85a84.67,84.67,0,0,1,8.79-28.33c6.3-12.3,16-21.83,30-24.13,8.37-1.38,17.42-1.62,25.27,4.12,6.67,4.88,10.37,11.29,12.23,19.12C450.09,494.63,449.79,498.58,449.91,502.55Z"
        transform="translate(-114.23 -114.21)"
      />
      <path
        d="M593.71,499.56c-16.76.06-33.49,1.19-50.26.8-2.77-.07-3.74-.23-2.48-3.49,4.39-11.45,11.34-20.75,21.71-27.37,3.77-2.4,8.23-3.1,12.47-3.46,9.27-.79,18.77-1.78,27.07,4.13,5.83,4.15,8.1,10.4,9.8,17,.85,3.31.57,6.63.76,9.95.12,2-.56,2.53-2.51,2.48C604.75,499.48,599.23,499.56,593.71,499.56Z"
        transform="translate(-114.23 -114.21)"
      />
      <path
        d="M685.45,641.32c1.88,0,3.76,0,5.65,0,3.74,0,6.87,1,8.45,4.87s.23,7.08-1.94,10.2c-3.25,4.64-8.39,4.67-13.19,5.22-3.22.36-6.53-.09-9.78.12-2.18.14-2.66-.83-2.31-2.59,1-5.12,2.15-10.22,3.22-15.33.41-1.92,1.32-2.84,3.51-2.55A50.41,50.41,0,0,0,685.45,641.32Z"
        transform="translate(-114.23 -114.21)"
      />
      <path
        d="M491.37,670.72a55,55,0,0,0-7.15.06c-3.78.5-3.65-1.29-2.67-3.89,2.35-6.24,6.2-9.08,12.22-9a9.53,9.53,0,0,1,8.93,11.71c-.34,1.34-1.12,1.09-1.93,1.1C497.64,670.74,494.5,670.72,491.37,670.72Z"
        transform="translate(-114.23 -114.21)"
      />
    </svg>
  );
};
const ArrowCircleIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15 5 5h-4v5h-2v-5H7l5-5z"></path>
    </svg>
  );
};
const HouseIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      className={className}
      {...props}
    >
      <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
    </svg>
  );
};
const LightIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 16}
      height={size || height || 16}
      fill={fill}
      className={className}
      {...props}
    >
      <path
        className="fill-slate-400"
        d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
      />
      <path
        className="fill-slate-500"
        d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
      />
    </svg>
  );
};
const DarkIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 16}
      height={size || height || 16}
      fill={fill}
      className={className}
      {...props}
    >
      <path
        className="fill-slate-400"
        d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
      />
      <path
        className="fill-slate-500"
        d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
      />
    </svg>
  );
};

export {
  ArrowCircleIcon,
  ArrowDoubleIcon,
  CartIcon,
  CouponIcon,
  DarkIcon,
  DashboardIcon,
  HouseIcon,
  LightIcon,
  LogoIcon,
  OrdersIcon,
  SearchIcon,
  SettingIcon,
  UserIcon,
};
