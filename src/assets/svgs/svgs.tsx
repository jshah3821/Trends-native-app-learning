import * as React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

export const BackIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width ?? 24.014}
    height={props?.height ?? 24}
    viewBox="0 0 24.014 24"
    {...props}
  >
    <G id="Back" transform="translate(-15.986 -56)">
      <Rect
        id="Rectangle_11"
        data-name="Rectangle 11"
        width={24}
        height={24}
        transform="translate(16 56)"
        fill="none"
      />
      <G
        id="Iconly_Light_Arrow_-_Left_2"
        data-name="Iconly Light Arrow - Left 2"
        transform="translate(-1415.042 -1089.878)"
      >
        <G
          id="Arrow_-_Left_2-4"
          data-name="Arrow - Left 2-4"
          transform="translate(1432.278 1148.351)"
        >
          <Path
            id="Stroke_1-90"
            data-name="Stroke 1-90"
            d="M1441.805,1167.406l-9.527-9.527,9.527-9.527"
            transform="translate(-1432.278 -1148.351)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
          />
        </G>
      </G>
    </G>
  </Svg>
);
