/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

type LocationProps = {
  fill?: string;
  width: string | number;
  height: string | number;
};

const Location = ({ fill, width, height, ...props }: LocationProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 17}
    height={height || 22}
    fill={fill}
    {...props}
  >
    <path
      fill={fill || '#383838'}
      fillRule="evenodd"
      d="M16.591 8.664c0-4.643-3.496-8.421-7.96-8.602A8.503 8.503 0 0 0 2.44 2.41C.867 3.919.001 5.925 0 8.054c0 7.063 7.273 12.552 7.583 12.783l.39.29.4-.274c.336-.23 8.218-5.713 8.218-12.189Zm-8.295 3.99a4.527 4.527 0 1 0 0-9.053 4.527 4.527 0 0 0 0 9.053Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Location;
