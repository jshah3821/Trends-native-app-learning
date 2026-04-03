import React from 'react';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Svg, {
  Path,
  G,
  Rect,
  Ellipse,
  TSpan,
  Circle,
  Line,
  Defs,
  Text,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
import { getColors } from '../../utility';

export const BackSvg = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path fill="none" d="M.014 0h24v24h-24z" data-name="Rectangle 11" />
      <G data-name="Iconly Light Arrow - Left 2">
        <G data-name="Arrow - Left 2-4">
          <Path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M10.777 21.528 1.25 12.001l9.527-9.527"
            data-name="Stroke 1-90"
          />
        </G>
      </G>
    </Svg>
  );
};

export const TrendSvg = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <G
        data-name="Trends SVG White Logo-01"
        transform="translate(-214.99 -244.5)"
      >
        <Rect
          width={20.4}
          height={6.439}
          fill="#188bff"
          data-name="Rectangle 17738"
          rx={3.22}
          transform="translate(280.837 244.5)"
        />
        <Rect
          width={20.4}
          height={6.439}
          fill="#188bff"
          data-name="Rectangle 17739"
          rx={3.22}
          transform="translate(280.837 267.061)"
        />
        <Path
          fill="#fff"
          d="M237.878 245.051H214.99v5.321h7.929v22.649h7.03v-22.65h7.929Z"
          data-name="Path 28003"
        />
        <Path
          fill="#188bff"
          d="M271.526 248.348v21.271a2.134 2.134 0 0 0 3.37 1.759l15.32-10.636a2.167 2.167 0 0 0 0-3.518l-15.32-10.636a2.134 2.134 0 0 0-3.37 1.76Z"
          data-name="Path 28004"
        />
        <Path
          fill="#fff"
          d="M324.285 245.051V260.4l-10.988-15.349h-6.956v27.97h6.956v-15.47l10.988 15.471h6.955v-27.971Z"
          data-name="Path 28005"
        />
        <Path
          fill="#fff"
          d="m249.27 245.015-.011.036h.034Z"
          data-name="Path 28006"
        />
        <Path
          fill="#fff"
          d="M260.424 262.801a8.274 8.274 0 0 0 4.85-7.552v-1.928a8.229 8.229 0 0 0-8.19-8.269h-15.44v27.969h6.956v-9.5h4.024l5.465 9.467h8.724Zm-11.53-4.645v-8.244h6.142a4.1 4.1 0 0 1 4.082 4.122 4.1 4.1 0 0 1-4.082 4.122Z"
          data-name="Path 28007"
        />
        <Path
          fill="#fff"
          d="M350.239 245.051h-13.52v27.97h13.963a11.363 11.363 0 0 0 11.308-11.417v-4.69a11.808 11.808 0 0 0-11.751-11.863Zm4.753 15.6a7.22 7.22 0 0 1-7.185 7.254h-4.02v-17.74h4.5a6.733 6.733 0 0 1 6.7 6.765Z"
          data-name="Path 28008"
        />
      </G>
    </Svg>
  );
};

export const AppleSvg = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <Path
        d="M5.238 19.26C2.371 19.243 0 13.392 0 10.412c0-4.868 3.652-5.934 5.059-5.934a5.822 5.822 0 0 1 1.909.469 4.267 4.267 0 0 0 1.09.312 3.392 3.392 0 0 0 .782-.253 6.267 6.267 0 0 1 2.357-.57h.005a4.831 4.831 0 0 1 4.043 2.043l.295.443-.424.32a3.571 3.571 0 0 0-1.712 2.944 3.323 3.323 0 0 0 1.854 3.072c.266.16.541.325.541.685 0 .235-1.878 5.288-4.605 5.288a3.7 3.7 0 0 1-1.555-.377 3.154 3.154 0 0 0-1.384-.333 3.561 3.561 0 0 0-1.1.3 5.368 5.368 0 0 1-1.9.444Z"
        data-name="Path 2"
      />
      <Path
        d="M11.486 0c.071 2.561-1.76 4.338-3.59 4.226A4.081 4.081 0 0 1 11.486 0Z"
        data-name="Path 3"
      />
    </Svg>
  );
};

export const EmailSvg = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <Path
        d="M13.06 15.736H4.422a4.424 4.424 0 0 1-4.424-4.415V4.414A4.425 4.425 0 0 1 4.422-.001h8.637a4.452 4.452 0 0 1 3.13 1.295 4.38 4.38 0 0 1 1.295 3.12v6.907a4.424 4.424 0 0 1-4.424 4.415ZM3.526 4.586a.647.647 0 0 0-.467.2.67.67 0 0 0-.062.874l.115.114 3.978 3.1a2.734 2.734 0 0 0 1.7.594 2.774 2.774 0 0 0 1.712-.594l3.945-3.156.07-.07a.676.676 0 0 0-.01-.874.729.729 0 0 0-.462-.227h-.037a.67.67 0 0 0-.454.175L9.612 7.869a1.363 1.363 0 0 1-.874.315 1.4 1.4 0 0 1-.874-.315L3.93 4.722a.682.682 0 0 0-.408-.136Z"
        data-name="Iconly Bold Message"
      />
    </Svg>
  );
};

export const GoogleSvg = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <Path
        fill="#fbbb00"
        d="m4.211 11.482-.661 2.469-2.417.051a9.517 9.517 0 0 1-.07-8.871l2.152.395.943 2.139a5.67 5.67 0 0 0 .053 3.817Z"
        data-name="Path 11073"
      />
      <Path
        fill="#518ef8"
        d="M18.834 7.725a9.5 9.5 0 0 1-3.387 9.183l-2.711-.138-.384-2.395a5.662 5.662 0 0 0 2.436-2.891h-5.08V7.726h9.125Z"
        data-name="Path 11074"
      />
      <Path
        fill="#28b446"
        d="M15.447 16.908a9.5 9.5 0 0 1-14.315-2.906l3.079-2.52a5.65 5.65 0 0 0 8.142 2.893Z"
        data-name="Path 11075"
      />
      <Path
        fill="#f14336"
        d="m15.564 2.187-3.078 2.52a5.649 5.649 0 0 0-8.329 2.958L1.063 5.131a9.5 9.5 0 0 1 14.5-2.944Z"
        data-name="Path 11076"
      />
    </Svg>
  );
};

export const FacebookSvg = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <G data-name="Group 15431">
        <Path
          fill="#1877f2"
          d="M9.5 0C-2.279.345-3.48 16.873 8.008 19h2.984C22.483 16.871 21.276.344 9.5 0Z"
          data-name="Path 27817"
        />
        <Path
          fill="#f1f1f1"
          d="M10.992 12.321h2.225l.423-2.763h-2.648V7.767a1.381 1.381 0 0 1 1.556-1.493h1.2V3.921c-2.579-.465-5.677-.323-5.744 3.532v2.106H5.583v2.763h2.425v6.679h2.984Z"
          data-name="Path 27818"
        />
      </G>
    </Svg>
  );
};

export const EyeIconOpen = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G data-name="Iconly Light Show">
      <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17737" />
      <G
        fill="none"
        stroke="#a6a6a6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        data-name="Iconly Light Show"
      >
        <Path
          d="M14.734 12.316a2.735 2.735 0 1 1-2.735-2.735 2.734 2.734 0 0 1 2.735 2.735Z"
          data-name="Stroke 1-53"
        />
        <Path
          d="M11.998 18.627c3.293 0 6.306-2.368 8-6.313-1.7-3.946-4.708-6.313-8-6.313h0c-3.29 0-6.3 2.368-8 6.313 1.7 3.947 4.708 6.313 8 6.313Z"
          data-name="Stroke 3-41"
        />
      </G>
    </G>
  </Svg>
);

export const EyeIconClose = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <G data-name="Iconly Light hide">
        <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17737" />
        <G
          fill="none"
          stroke="#a6a6a6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          data-name="Iconly Light Hide"
        >
          <Path
            d="M10.064 13.751a2.706 2.706 0 0 1-.8-1.928 2.733 2.733 0 0 1 4.666-1.938"
            data-name="Stroke 1-63"
          />
          <Path
            d="M14.686 12.308a2.73 2.73 0 0 1-2.194 2.2"
            data-name="Stroke 3-51"
          />
          <Path
            d="M7.372 16.436a11.615 11.615 0 0 1-3.373-4.617 11.768 11.768 0 0 1 3.4-4.638 7.142 7.142 0 0 1 9.214.016"
            data-name="Stroke 5-33"
          />
          <Path
            d="M18.443 9.101A13.263 13.263 0 0 1 20 11.822c-1.7 3.942-4.708 6.314-8 6.314a6.869 6.869 0 0 1-2.188-.355"
            data-name="Stroke 7-17"
          />
          <Path d="M18.823 4.999 5.179 18.643" data-name="Stroke 9-3" />
        </G>
      </G>
    </Svg>
  );
};

export const TrendsBaseIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <G data-name="Group 15551">
      <Path fill="none" d="M0 0h32v32H0z" data-name="Rectangle 17704" />
      <G
        fill="#188bff"
        data-name="Group 15550"
        transform="translate(2.23 2.995)"
      >
        <Path
          d="M18.992 11.805a2 2 0 0 1 0 3.409L2.816 25.14A2 2 0 0 1-.23 23.431V3.579a2 2 0 0 1 3.046-1.7Z"
          data-name="Polygon 1"
        />
        <Rect
          width={19}
          height={5}
          data-name="Rectangle 17701"
          rx={2.5}
          transform="translate(8.77 22.005)"
        />
        <Rect
          width={19}
          height={5}
          data-name="Rectangle 17702"
          rx={2.5}
          transform="translate(8.77 .005)"
        />
      </G>
    </G>
  </Svg>
);

export const NotInterestedIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      data-name="Group 15579"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17732" />
      <Path
        fill="#fff"
        d="M17.048 2a5.626 5.626 0 0 0-3.893 1.595l2.46 2.46-4.055 4.055 3.6 3.6-3.343 3.343-1.266-1.266 2.064-2.064-3.6-3.6 4.055-4.055-2.583-2.581a4.782 4.782 0 0 0-3.325-1.469h-.027a6.077 6.077 0 0 0-5.857 6.29c0 6.236 9.876 13.156 10.3 13.445l.514.36.514-.36c.424-.288 10.3-7.209 10.3-13.445A6.1 6.1 0 0 0 17.048 2Z"
      />
    </Svg>
  );
};

export const ReportIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      data-name="Group 15579"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17732" />
      <Path
        fill="#fff"
        d="M21.532 5.209v10.429h-8.825a2.407 2.407 0 0 1-2.259-1.6h3.061a1.6 1.6 0 0 0 1.6-1.6V5.209Zm-17.654 7.22h9.627V4.407A2.407 2.407 0 0 0 11.103 2H2.278v19.254h1.6Z"
      />
    </Svg>
  );
};

export const BlockUserIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      data-name="Group 15579"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17732" />
      <Path
        fill="#fff"
        d="m22.035 20.577-8.694-8.693a5 5 0 1 0-5.946-5.947L3.701 2.244a.833.833 0 0 0-1.178 1.178l18.333 18.334a.833.833 0 0 0 1.178-1.178Zm-11.442-6.712L18.728 22H5.612a.834.834 0 0 1-.833-.833 7.508 7.508 0 0 1 5.814-7.302Z"
      />
    </Svg>
  );
};

export const CancelIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      data-name="Group 15579"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17732" />
      <Path
        fill="#fff"
        d="m15.454 10.315-1.964 1.964 1.964 1.964a.856.856 0 1 1-1.211 1.211l-1.964-1.964-1.964 1.964A.858.858 0 0 1 9.1 14.243l1.964-1.964L9.1 10.315A.86.86 0 0 1 10.315 9.1l1.964 1.964L14.243 9.1a.856.856 0 1 1 1.211 1.211Zm7.1 1.964A10.279 10.279 0 1 1 12.279 2a10.29 10.29 0 0 1 10.279 10.279Zm-1.713 0a8.566 8.566 0 1 0-8.566 8.566 8.575 8.575 0 0 0 8.569-8.566Z"
        data-name="circle-xmark (1)"
      />
    </Svg>
  );
};

export const CloseIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      {...props}
    >
      <G id="close" transform="translate(-5 -5)">
        <G id="cross">
          <Path
            id="Path_184"
            data-name="Path 184"
            d="M18.707,5.293a1,1,0,0,1,0,1.414l-12,12a1,1,0,0,1-1.414-1.414l12-12A1,1,0,0,1,18.707,5.293Z"
            fill="#fff"
            fillRule="evenodd"
          />
          <Path
            id="Path_185"
            data-name="Path 185"
            d="M5.293,5.293a1,1,0,0,1,1.414,0l12,12a1,1,0,0,1-1.414,1.414l-12-12A1,1,0,0,1,5.293,5.293Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </G>
      </G>
    </Svg>
  );
};

export const BorderedCloseIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        id="circle-xmark_1_"
        data-name="circle-xmark (1)"
        d="M15.707,9.707,13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414ZM24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12Zm-2,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12Z"
        fill="#fff"
      />
    </Svg>
  );
};

export const TickIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={11}
      viewBox="0 0 11.697 8.193"
      {...props}
    >
      <Path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m1.061 4.252 3.193 3.191 6.383-6.383"
        data-name="Stroke 3-48"
      />
    </Svg>
  );
};

export const VoteIcon = props => {
  return (viewBox =
    ' 0 0 50 50' >
    (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={moderateScale(30)}
        height={moderateScale(30)}
        viewBox="0 0 40 40"
        {...props}
      >
        <G
          fill="#fff"
          data-name="Group 11803"
          transform="translate(-25.95 -737)"
        >
          <Rect
            width={40}
            height={40}
            data-name="Rectangle 22"
            rx={20}
            transform="translate(25.95 737)"
          />
          <G data-name="Group 15580">
            <Text
              fontFamily="Roboto-Bold, Roboto"
              fontSize={12}
              fontWeight={700}
              transform="translate(45.95 767.552)"
            >
              <TSpan x={-14} y={0}>
                {'VOTE'}
              </TSpan>
            </Text>
            <Path d="m52.011 747.577-3.586-3.586a3.585 3.585 0 0 0-4.95 0l-3.586 3.586a1.5 1.5 0 0 0 2.122 2.121l2.439-2.439v7.793a1.5 1.5 0 0 0 3 0v-7.793l2.439 2.439a1.5 1.5 0 0 0 2.122-2.121Z" />
          </G>
        </G>
      </Svg>
    ));
};

export const VoteIconFilled = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={moderateScale(30)}
          height={moderateScale(30)}
          viewBox="0 0 40 40"
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
          fill="none"
        />
        <G data-name="Group 15580" transform="translate(45.95 767.552)">
          <Text fontFamily="Roboto-Bold" fontSize={12} fontWeight="bold">
            <TSpan
              x={-14}
              y={3}
              fill={'#000'}
              fontFamily={
                Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold, Roboto'
              }
              fontSize={12}
              fontWeight="bold"
            >
              {'VOTE'}
            </TSpan>
          </Text>
          <Path
            d="m6.061-19.975-3.586-3.586a3.585 3.585 0 0 0-4.95 0l-3.586 3.586a1.5 1.5 0 0 0 2.122 2.121l2.439-2.439v7.793a1.5 1.5 0 0 0 3 0v-7.793l2.439 2.439a1.5 1.5 0 0 0 2.122-2.121Z"
            fill="#34a043"
          />
        </G>
      </G>
    </Svg>
  );
};

export const LikeIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G fill="#fff" data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={40}
          height={40}
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <Path d="M50.811 747.105a5.657 5.657 0 0 0-4.861 2.917 5.657 5.657 0 0 0-4.861-2.917 6.01 6.01 0 0 0-5.745 6.231c0 5.988 9.684 12.9 10.1 13.2l.511.362.511-.362c.412-.292 10.1-7.21 10.1-13.2a6.01 6.01 0 0 0-5.755-6.231Z" />
      </G>
    </Svg>
  );
};

export const LikeIconFilled = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={40}
          height={40}
          fill="#fff"
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <Path
          fill="red"
          d="M50.811 747.105a5.657 5.657 0 0 0-4.861 2.917 5.657 5.657 0 0 0-4.861-2.917 6.01 6.01 0 0 0-5.745 6.231c0 5.988 9.684 12.9 10.1 13.2l.511.362.511-.362c.412-.292 10.1-7.21 10.1-13.2a6.01 6.01 0 0 0-5.755-6.231Z"
        />
      </G>
    </Svg>
  );
};

export const ChatIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G fill="#fff" data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={40}
          height={40}
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <Path d="M44.95 745.685a10.316 10.316 0 0 0 0 20.631h10.316V756a10.327 10.327 0 0 0-10.316-10.315Zm-4.3 11.6a1.289 1.289 0 1 1 1.289-1.289 1.29 1.29 0 0 1-1.287 1.289Zm4.3 0A1.289 1.289 0 1 1 46.235 756a1.29 1.29 0 0 1-1.285 1.285Zm4.3 0A1.289 1.289 0 1 1 50.535 756a1.29 1.29 0 0 1-1.286 1.285Z" />
      </G>
    </Svg>
  );
};

export const SavedIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G fill="#fff" data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={40}
          height={40}
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <Path d="M38.008 767.005a2.562 2.562 0 0 0 2.833-.559l5.1-5.077 5.1 5.077a2.564 2.564 0 0 0 1.822.764 2.646 2.646 0 0 0 1.015-.206 2.562 2.562 0 0 0 1.6-2.4v-13.69a4.342 4.342 0 0 0-4.324-4.337H40.745a4.342 4.342 0 0 0-4.337 4.337v13.688a2.562 2.562 0 0 0 1.6 2.4Z" />
      </G>
    </Svg>
  );
};

export const SavedIconFilled = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={40}
          height={40}
          fill="#fff"
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <Path d="M38.008 767.005a2.562 2.562 0 0 0 2.833-.559l5.1-5.077 5.1 5.077a2.564 2.564 0 0 0 1.822.764 2.646 2.646 0 0 0 1.015-.206 2.562 2.562 0 0 0 1.6-2.4v-13.69a4.342 4.342 0 0 0-4.324-4.337H40.745a4.342 4.342 0 0 0-4.337 4.337v13.688a2.562 2.562 0 0 0 1.6 2.4Z" />
      </G>
    </Svg>
  );
};

export const ShareIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={41} height={65.5} {...props}>
      <Defs></Defs>
      <G data-name="Group 11803" transform="translate(-25.45 -737)">
        <Rect
          width={40}
          height={40}
          fill="#fff"
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <G fill="#fff">
          <Path
            d="M40.222 764.784h4.709l3.113 3.11a1.8 1.8 0 0 0 1.277.531 1.858 1.858 0 0 0 .463-.059 1.792 1.792 0 0 0 1.286-1.253l5.491-18.675Z"
            data-name="Path 12279"
          />
          <Path
            d="m38.953 763.545 16.354-16.357-18.662 5.504a1.812 1.812 0 0 0-.784 3.026l3.092 3.09Z"
            data-name="Path 12280"
          />
        </G>
        <G filter="url(#a)" transform="translate(25.45 737)">
          <Text
            fill="#fff"
            data-name="1.2K"
            fontFamily="Roboto-Medium, Roboto"
            fontSize={12}
            fontWeight={500}
            transform="translate(20.5 53)"
          >
            <TSpan x={-12} y={0}>
              {'1.2K'}
            </TSpan>
          </Text>
        </G>
      </G>
    </Svg>
  );
};

export const MenuOptionsIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G fill="#fff" data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={40}
          height={40}
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
        />
        <G transform="translate(35.95 541.667)">
          <Circle
            cx={1.713}
            cy={1.713}
            r={1.713}
            data-name="Ellipse 254"
            transform="translate(1 213.333)"
          />
          <Circle
            cx={1.713}
            cy={1.713}
            r={1.713}
            data-name="Ellipse 255"
            transform="translate(8.565 213.333)"
          />
          <Circle
            cx={1.713}
            cy={1.713}
            r={1.713}
            data-name="Ellipse 256"
            transform="translate(16.13 213.333)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const TrendsIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G
          data-name="Group 15550"
          transform="translate(-129.552 638.439)"
          fill="#188bff"
        >
          <Path
            data-name="Polygon 1"
            d="M8.772 2.962a2 2 0 013.455 0l7.018 12.031A2 2 0 0117.518 18H3.482a2 2 0 01-1.728-3.008z"
            transform="rotate(90 43.495 143.057)"
          />
          <Rect
            data-name="Rectangle 17701"
            width={12}
            height={3}
            rx={1.5}
            transform="translate(178.552 117.561)"
          />
          <Rect
            data-name="Rectangle 17702"
            width={12}
            height={3}
            rx={1.5}
            transform="translate(178.552 99.561)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const TrendsWhiteIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G
          data-name="Group 15550"
          transform="translate(-129.552 638.439)"
          fill="#fff"
        >
          <Path
            data-name="Polygon 1"
            d="M8.772 2.962a2 2 0 013.455 0l7.018 12.031A2 2 0 0117.518 18H3.482a2 2 0 01-1.728-3.008z"
            transform="rotate(90 43.495 143.057)"
          />
          <Rect
            data-name="Rectangle 17701"
            width={12}
            height={3}
            rx={1.5}
            transform="translate(178.552 117.561)"
          />
          <Rect
            data-name="Rectangle 17702"
            width={12}
            height={3}
            rx={1.5}
            transform="translate(178.552 99.561)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const MarketIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G fill="#fff">
          <Path
            data-name="Path 27987"
            d="M15.375 13a4.792 4.792 0 01-7.667 0A4.749 4.749 0 011 13.936v4.814a4.8 4.8 0 004.792 4.792h11.5a4.8 4.8 0 004.792-4.792v-4.817A4.749 4.749 0 0115.375 13z"
            transform="translate(38.458 737) translate(0 -.542)"
          />
          <Path
            data-name="Path 27988"
            d="M20.837 3a3.809 3.809 0 00-3.745-3h-.759v2.875a.958.958 0 11-1.917 0V0H8.667v2.875a.958.958 0 11-1.917 0V0h-.759a3.809 3.809 0 00-3.745 3L1.021 8.529 1 9.6a2.875 2.875 0 105.75-.019.958.958 0 011.917 0 2.875 2.875 0 005.75 0 .958.958 0 111.917 0 2.875 2.875 0 005.75 0v-.854z"
            transform="translate(38.458 737)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const MarketIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G fill="#188bff">
          <Path
            data-name="Path 27987"
            d="M15.375 13a4.792 4.792 0 01-7.667 0A4.749 4.749 0 011 13.936v4.814a4.8 4.8 0 004.792 4.792h11.5a4.8 4.8 0 004.792-4.792v-4.817A4.749 4.749 0 0115.375 13z"
            transform="translate(38.458 737) translate(0 -.542)"
          />
          <Path
            data-name="Path 27988"
            d="M20.837 3a3.809 3.809 0 00-3.745-3h-.759v2.875a.958.958 0 11-1.917 0V0H8.667v2.875a.958.958 0 11-1.917 0V0h-.759a3.809 3.809 0 00-3.745 3L1.021 8.529 1 9.6a2.875 2.875 0 105.75-.019.958.958 0 011.917 0 2.875 2.875 0 005.75 0 .958.958 0 111.917 0 2.875 2.875 0 005.75 0v-.854z"
            transform="translate(38.458 737)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const MyCurrentLocation = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <G id="crosshair" transform="translate(1 1)">
        <Circle
          id="Ellipse_78"
          data-name="Ellipse 78"
          cx="9"
          cy="9"
          r="9"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Line
          id="Line_26"
          data-name="Line 26"
          x1="3"
          transform="translate(15 9)"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Line
          id="Line_27"
          data-name="Line 27"
          x1="3"
          transform="translate(0 9)"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Line
          id="Line_28"
          data-name="Line 28"
          y1="3"
          transform="translate(9)"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Line
          id="Line_29"
          data-name="Line 29"
          y1="3"
          transform="translate(9 15)"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </G>
    </Svg>
  );
};

export const HomeIcon = props => {
  return (
    <Svg
      id="Group_15589"
      data-name="Group 15589"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <Rect
        id="Rectangle_17437"
        data-name="Rectangle 17437"
        width="24"
        height="24"
        fill="none"
      />
      <G id="home_3_" data-name="home (3)" transform="translate(2 1.84)">
        <Path
          id="Path_28009"
          data-name="Path 28009"
          d="M194.444,319.841A2.444,2.444,0,0,0,192,322.285v4.888h4.888v-4.888A2.444,2.444,0,0,0,194.444,319.841Z"
          transform="translate(-184.668 -307.473)"
          fill="#fff"
        />
        <G
          id="Group_15590"
          data-name="Group 15590"
          transform="translate(0 0.16)"
        >
          <Path
            id="Path_28010"
            data-name="Path 28010"
            d="M13.849,14.812V19.7h3.259a2.444,2.444,0,0,0,2.444-2.444V9.825a1.629,1.629,0,0,0-.459-1.134L12.17,1.207a3.259,3.259,0,0,0-4.6-.181q-.094.087-.181.181L.473,8.689A1.629,1.629,0,0,0,0,9.837v7.418A2.444,2.444,0,0,0,2.444,19.7H5.7V14.812a4.073,4.073,0,1,1,8.147,0Z"
            transform="translate(0 -0.16)"
            fill="#fff"
          />
          <Path
            id="Path_28011"
            data-name="Path 28011"
            d="M194.444,319.841A2.444,2.444,0,0,0,192,322.285v4.888h4.888v-4.888A2.444,2.444,0,0,0,194.444,319.841Z"
            transform="translate(-184.668 -307.633)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
};

export const SearchIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      width={16}
      viewBox="0 0 24 24"
    >
      <G
        id="Group_15563"
        data-name="Group 15563"
        transform="translate(-26 -737)"
      >
        <Rect
          id="Rectangle_22"
          data-name="Rectangle 22"
          width="24"
          height="24"
          transform="translate(26 737)"
          fill="none"
        />
        <Path
          id="search_3_"
          data-name="search (3)"
          d="M19.724,18.547,14.757,13.58a8.336,8.336,0,1,0-1.177,1.177l4.968,4.968a.832.832,0,1,0,1.177-1.177ZM8.317,14.975a6.658,6.658,0,1,1,6.658-6.658,6.658,6.658,0,0,1-6.658,6.658Z"
          transform="translate(28.032 739.032)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const UploadIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      {...props}
      viewBox="0 2 32 32"
    >
      <G data-name="Group 15551">
        <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17704" />
        <Path
          fill="#188bff"
          d="M13.669 7.827V2.369a5.824 5.824 0 0 1 2.057 1.327l2.908 2.91a5.8 5.8 0 0 1 1.329 2.054h-5.459a.836.836 0 0 1-.835-.835Zm6.657 2.5h-5.822a2.507 2.507 0 0 1-2.5-2.5V2.003c-.134-.009-.269-.02-.4-.02H7.826a4.179 4.179 0 0 0-4.173 4.174v11.686a4.178 4.178 0 0 0 4.173 4.173h8.347a4.178 4.178 0 0 0 4.173-4.173v-7.108c.001-.136-.01-.266-.019-.404Zm-5.232 5.742a.834.834 0 0 1-1.18 0l-1.079-1.079v3.679a.835.835 0 0 1-1.669 0v-3.675l-1.08 1.075a.835.835 0 0 1-1.18-1.18l1.347-1.343a2.475 2.475 0 0 1 3.495 0l1.347 1.347a.834.834 0 0 1 0 1.18Z"
        />
      </G>
    </Svg>
  );
};

export const NotificationIcon = props => {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 2 30 30"
    >
      <G data-name="Group 15551">
        <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17704" />
        <G fill="#fff" data-name="bell (3)">
          <Path
            d="M5.906 16.944h12.506a2.4 2.4 0 0 0 2.253-3.212l-2.278-6.3a6.648 6.648 0 0 0-6.404-4.866 6.647 6.647 0 0 0-6.489 5.2l-1.877 6.07a2.4 2.4 0 0 0 2.289 3.1Z"
            data-name="Path 27990"
          />
          <Path
            d="M8.328 18.541a3.994 3.994 0 0 0 7.828 0Z"
            data-name="Path 27991"
          />
        </G>
      </G>
    </Svg>
  );
};

export const NotificationIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      {...props}
      viewBox="0 2 30 30"
    >
      <G data-name="Group 15551">
        <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17704" />
        <G fill="#188bff" data-name="bell (3)">
          <Path
            d="M5.906 16.944h12.506a2.4 2.4 0 0 0 2.253-3.212l-2.278-6.3a6.648 6.648 0 0 0-6.404-4.866 6.647 6.647 0 0 0-6.489 5.2l-1.877 6.07a2.4 2.4 0 0 0 2.289 3.1Z"
            data-name="Path 27990"
          />
          <Path
            d="M8.328 18.541a3.994 3.994 0 0 0 7.828 0Z"
            data-name="Path 27991"
          />
        </G>
      </G>
    </Svg>
  );
};

export const ProfileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G transform="translate(-22.758 736.036)" fill="#fff">
          <Ellipse
            data-name="Ellipse 689"
            cx={6.029}
            cy={5.694}
            rx={6.029}
            ry={5.694}
            transform="translate(66.729 .431)"
          />
          <Path
            data-name="Path 27989"
            d="M72.758 298.667A8.768 8.768 0 0064 307.425a.973.973 0 00.973.973h15.57a.973.973 0 00.973-.973 8.768 8.768 0 00-8.758-8.758z"
            transform="translate(0 -284.901)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const ProfileIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G transform="translate(-22.758 736.036)" fill="#188bff">
          <Ellipse
            data-name="Ellipse 689"
            cx={6.029}
            cy={5.694}
            rx={6.029}
            ry={5.694}
            transform="translate(66.729 .431)"
          />
          <Path
            data-name="Path 27989"
            d="M72.758 298.667A8.768 8.768 0 0064 307.425a.973.973 0 00.973.973h15.57a.973.973 0 00.973-.973 8.768 8.768 0 00-8.758-8.758z"
            transform="translate(0 -284.901)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const HeartIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={moderateScale(22)}
      height={moderateScale(22)}
      viewBox=" 0 0 22 18"
      {...props}
    >
      <Path
        fill="#fff"
        d="M15.472 0a5.657 5.657 0 0 0-4.861 2.917A5.657 5.657 0 0 0 5.75 0 6.01 6.01 0 0 0 .005 6.231c0 5.988 9.684 12.9 10.1 13.2l.511.362.511-.362c.412-.292 10.1-7.21 10.1-13.2A6.01 6.01 0 0 0 15.472 0Z"
      />
    </Svg>
  );
};

export const HeartIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={moderateScale(22)}
      height={moderateScale(22)}
      viewBox="0 0 22 18"
      {...props}
    >
      <Path
        fill="red"
        d="M15.472 0a5.657 5.657 0 0 0-4.861 2.917A5.657 5.657 0 0 0 5.75 0 6.01 6.01 0 0 0 .005 6.231c0 5.988 9.684 12.9 10.1 13.2l.511.362.511-.362c.412-.292 10.1-7.21 10.1-13.2A6.01 6.01 0 0 0 15.472 0Z"
      />
    </Svg>
  );
};

export const CommentDotIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={moderateScale(22)}
      height={moderateScale(22)}
      viewBox=" 0 0 22 22"
      {...props}
    >
      <Path
        fill="#fff"
        d="M10.315 0a10.315 10.315 0 0 0 0 20.631h10.316V10.315A10.327 10.327 0 0 0 10.315 0Zm-4.3 11.6a1.289 1.289 0 1 1 1.289-1.289A1.29 1.29 0 0 1 6.017 11.6Zm4.3 0a1.289 1.289 0 1 1 1.285-1.285 1.29 1.29 0 0 1-1.285 1.285Zm4.3 0a1.289 1.289 0 1 1 1.285-1.285 1.29 1.29 0 0 1-1.286 1.285Z"
      />
    </Svg>
  );
};

export const BookmarkIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={moderateScale(22)}
      height={moderateScale(22)}
      viewBox=" 0 0 18 22"
      {...props}
    >
      <Path
        fill="#000"
        d="M1.6 20.428a2.562 2.562 0 0 0 2.833-.559l5.1-5.077 5.1 5.077a2.564 2.564 0 0 0 1.822.764 2.646 2.646 0 0 0 1.015-.206 2.562 2.562 0 0 0 1.6-2.4V4.337A4.342 4.342 0 0 0 14.746 0H4.337A4.342 4.342 0 0 0 0 4.337v13.688a2.562 2.562 0 0 0 1.6 2.4Z"
      />
    </Svg>
  );
};

export const LocationIcon = props => {
  return (
    <Svg
      id="Group_15567"
      data-name="Group 15567"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <Rect
        id="Rectangle_22"
        data-name="Rectangle 22"
        width="20"
        height="20"
        fill="none"
      />
      <G id="marker" transform="translate(3 2)">
        <Path
          id="Path_27998"
          data-name="Path 27998"
          d="M10.211,6a2.211,2.211,0,1,0,2.211,2.211A2.211,2.211,0,0,0,10.211,6Zm0,3.317a1.106,1.106,0,1,1,1.106-1.106A1.106,1.106,0,0,1,10.211,9.317Z"
          transform="translate(-3.154 -1.34)"
          fill="#a7a7a7"
        />
        <Path
          id="Path_27999"
          data-name="Path 27999"
          d="M9,16.845A3.7,3.7,0,0,1,5.977,15.3C3.3,11.611,1.945,8.837,1.945,7.056a7.058,7.058,0,1,1,14.115,0c0,1.781-1.357,4.555-4.032,8.245A3.7,3.7,0,0,1,9,16.845ZM9,1.53A5.533,5.533,0,0,0,3.476,7.057c0,1.411,1.329,4.02,3.74,7.346a2.207,2.207,0,0,0,3.573,0c2.412-3.326,3.74-5.935,3.74-7.346A5.533,5.533,0,0,0,9,1.53Z"
          transform="translate(-1.945 0.002)"
          fill="#a7a7a7"
        />
      </G>
    </Svg>
  );
};

export const WishlistIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15570" transform="translate(-24 -306)">
        <Rect
          data-name="Rectangle 17706"
          width={24}
          height={24}
          rx={4}
          transform="translate(24 306)"
          fill="none"
        />
        <G data-name="Component 50 \u2013 5">
          <G data-name="01 align center">
            <Path
              data-name="Path 27995"
              d="M11.256.917A4.117 4.117 0 007.718 3.04 4.117 4.117 0 004.18.917 4.375 4.375 0 000 5.452c0 4.358 7.048 9.392 7.348 9.606l.372.263.372-.263c.3-.212 7.348-5.248 7.348-9.606A4.375 4.375 0 0011.256.917zM7.718 13.738c-2.093-1.563-6.433-5.4-6.433-8.285A3.088 3.088 0 014.18 2.2a3.088 3.088 0 012.895 3.252h1.286A3.088 3.088 0 0111.256 2.2a3.088 3.088 0 012.895 3.249c0 2.886-4.34 6.725-6.433 8.289z"
              transform="translate(28 311) translate(.005 -.917)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const WishlistFilledIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15570" transform="translate(-24 -306)">
        <Rect
          data-name="Rectangle 17706"
          width={24}
          height={24}
          rx={4}
          transform="translate(24 306)"
          fill="none"
        />
        <G data-name="Component 50 \u2013 5">
          <Path
            data-name="heart (2)"
            d="M11.256.917A4.117 4.117 0 007.718 3.04 4.117 4.117 0 004.18.917 4.375 4.375 0 000 5.452c0 4.358 7.048 9.392 7.348 9.606l.372.263.372-.263c.3-.212 7.348-5.248 7.348-9.606A4.375 4.375 0 0011.256.917z"
            transform="translate(28 311) translate(.005 -.917)"
            fill="red"
          />
        </G>
      </G>
    </Svg>
  );
};

export const WishlistBigIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
      <G
        id="Group_15557"
        data-name="Group 15557"
        transform="translate(-26 -737)"
      >
        <Rect
          id="Rectangle_22"
          data-name="Rectangle 22"
          width="24"
          height="24"
          transform="translate(26 737)"
          fill="none"
        />
        <G
          id="_01_align_center"
          data-name="01 align center"
          transform="translate(27 739)"
        >
          <Path
            id="Path_27995"
            data-name="Path 27995"
            d="M15.631.917a5.717,5.717,0,0,0-4.913,2.948A5.717,5.717,0,0,0,5.805.917,6.074,6.074,0,0,0,0,7.214c0,6.052,9.786,13.041,10.2,13.338l.516.365.516-.365c.416-.295,10.2-7.286,10.2-13.337a6.074,6.074,0,0,0-5.806-6.3Zm-4.913,17.8c-2.906-2.171-8.932-7.5-8.932-11.5A4.287,4.287,0,0,1,5.805,2.7,4.287,4.287,0,0,1,9.825,7.214h1.786A4.287,4.287,0,0,1,15.631,2.7,4.287,4.287,0,0,1,19.65,7.214C19.65,11.217,13.624,16.547,10.718,18.718Z"
            transform="translate(0.005 -0.917)"
            fill={props.color || '#fff'}
          />
        </G>
      </G>
    </Svg>
  );
};

export const WishlistFilledBigIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.446"
      height="18.231"
      viewBox="0 0 18.446 18.231"
      {...props}
    >
      <G
        id="Group_15575"
        data-name="Group 15575"
        transform="translate(0 0.091)"
      >
        <Rect
          id="Rectangle_17706"
          data-name="Rectangle 17706"
          width="18"
          height="18"
          rx="4"
          transform="translate(0 -0.091)"
          fill="none"
        />
        <G
          id="Component_47_1"
          data-name="Component 47 – 1"
          transform="translate(3 3.736)"
        >
          <Path
            id="heart_2_"
            data-name="heart (2)"
            d="M11.256.917A4.117,4.117,0,0,0,7.718,3.04,4.117,4.117,0,0,0,4.18.917,4.375,4.375,0,0,0,0,5.452c0,4.358,7.048,9.392,7.348,9.606l.372.263.372-.263c.3-.212,7.348-5.248,7.348-9.606A4.375,4.375,0,0,0,11.256.917Z"
            transform="translate(0.005 -0.917)"
            fill="red"
          />
        </G>
      </G>
    </Svg>
  );
};

export const MenuIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.556}
      height={6.426}
      {...props}
    >
      <G fill="#fff" transform="translate(-1 -213.333)">
        <Circle
          cx={1.713}
          cy={1.713}
          r={1.713}
          data-name="Ellipse 254"
          transform="translate(1 213.333)"
        />
        <Circle
          cx={1.713}
          cy={1.713}
          r={1.713}
          data-name="Ellipse 255"
          transform="translate(8.565 213.333)"
        />
        <Circle
          cx={1.713}
          cy={1.713}
          r={1.713}
          data-name="Ellipse 256"
          transform="translate(16.13 213.333)"
        />
      </G>
    </Svg>
  );
};

export const DeleteIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
    >
      <G
        id="Group_15575"
        data-name="Group 15575"
        transform="translate(-8 -233)"
      >
        <Rect
          id="Rectangle_17706"
          data-name="Rectangle 17706"
          width={props?.width ?? 24}
          height={props?.height ?? 24}
          rx="4"
          transform="translate(8 233)"
          fill="none"
        />
        <G id="trash" transform="translate(11 236)">
          <Path
            id="Path_28000"
            data-name="Path 28000"
            d="M15.3,2.8H13.13A3.506,3.506,0,0,0,9.7,0H8.3A3.506,3.506,0,0,0,4.87,2.8H2.7a.7.7,0,1,0,0,1.4h.7v9.1a3.5,3.5,0,0,0,3.5,3.5h4.2a3.5,3.5,0,0,0,3.5-3.5V4.2h.7a.7.7,0,1,0,0-1.4Zm-7-1.4H9.7a2.1,2.1,0,0,1,1.98,1.4H6.32A2.1,2.1,0,0,1,8.3,1.4Zm4.9,11.9a2.1,2.1,0,0,1-2.1,2.1H6.9a2.1,2.1,0,0,1-2.1-2.1V4.2h8.4Z"
            fill={props?.color ? props?.color : '#fff'}
          />
          <Path
            id="Path_28001"
            data-name="Path 28001"
            d="M9.77,16.163a.77.77,0,0,0,.77-.77V10.77A.77.77,0,0,0,9,10.77v4.622A.77.77,0,0,0,9.77,16.163Z"
            transform="translate(-2.155 -3.352)"
            fill={props?.color ? props?.color : '#fff'}
          />
          <Path
            id="Path_28002"
            data-name="Path 28002"
            d="M13.77,16.163a.77.77,0,0,0,.77-.77V10.77a.77.77,0,1,0-1.541,0v4.622A.77.77,0,0,0,13.77,16.163Z"
            transform="translate(-3.386 -3.352)"
            fill={props?.color ? props?.color : '#fff'}
          />
        </G>
      </G>
    </Svg>
  );
};

export const FilterBy = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="14.4"
      height="12"
      viewBox="0 0 14.4 12"
    >
      <Path
        id="bars-filter"
        d="M14.4,2.6a.6.6,0,0,1-.6.6H.6A.6.6,0,1,1,.6,2H13.8A.6.6,0,0,1,14.4,2.6ZM9,12.8H5.4a.6.6,0,0,0,0,1.2H9a.6.6,0,1,0,0-1.2Zm2.4-5.4H3A.6.6,0,1,0,3,8.6h8.4a.6.6,0,0,0,0-1.2Z"
        transform="translate(0 -2)"
        fill="#fff"
      />
    </Svg>
  );
};

export const BookmarkIconWhite = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={moderateScale(22)}
      height={moderateScale(22)}
      viewBox=" 0 0 18 22"
      {...props}
    >
      <Path
        fill="#fff"
        d="M1.6 20.428a2.562 2.562 0 0 0 2.833-.559l5.1-5.077 5.1 5.077a2.564 2.564 0 0 0 1.822.764 2.646 2.646 0 0 0 1.015-.206 2.562 2.562 0 0 0 1.6-2.4V4.337A4.342 4.342 0 0 0 14.746 0H4.337A4.342 4.342 0 0 0 0 4.337v13.688a2.562 2.562 0 0 0 1.6 2.4Z"
      />
    </Svg>
  );
};

export const OfficeIcon = props => {
  return (
    <Svg
      id="Group_15589"
      data-name="Group 15589"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <Rect
        id="Rectangle_17437"
        data-name="Rectangle 17437"
        width="24"
        height="24"
        fill="none"
      />
      <G id="briefcase" transform="translate(2 2)">
        <Path
          id="Path_28012"
          data-name="Path 28012"
          d="M15.833,3.333h-.917A4.174,4.174,0,0,0,10.833,0H9.167A4.174,4.174,0,0,0,5.083,3.333H4.167A4.172,4.172,0,0,0,0,7.5V10H20V7.5a4.172,4.172,0,0,0-4.167-4.167Zm-9.013,0A2.5,2.5,0,0,1,9.167,1.667h1.667A2.5,2.5,0,0,1,13.18,3.333Z"
          fill="#fff"
        />
        <Path
          id="Path_28013"
          data-name="Path 28013"
          d="M10.833,14.833a.833.833,0,0,1-1.667,0V14H0v4.167a4.172,4.172,0,0,0,4.167,4.167H15.833A4.172,4.172,0,0,0,20,18.167V14H10.833Z"
          transform="translate(0 -2.333)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};
export const DownIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.002}
      height={9.173}
      {...props}
    >
      <Path
        fill="#fff"
        d="M13.711.296a1 1 0 0 0-1.42 0l-4.58 4.58a1 1 0 0 1-1.42 0L1.711.296a1 1 0 0 0-1.42 1.41l4.59 4.59a3 3 0 0 0 4.24 0l4.59-4.59a1 1 0 0 0 0-1.41Z"
      />
    </Svg>
  );
};

export const BarFilterIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} {...props}>
      <Path
        fill="#fff"
        d="M24 1a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Zm-9 17H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm4-9H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"
      />
    </Svg>
  );
};

export const PaperPlaneIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={moderateScale(22)}
      height={moderateScale(22)}
      viewBox=" 0 0 22 22"
      {...props}
    >
      <G fill="#fff">
        <Path
          d="M4.894 17.596h4.709l3.113 3.11a1.8 1.8 0 0 0 1.277.531 1.858 1.858 0 0 0 .463-.059 1.792 1.792 0 0 0 1.286-1.253L21.233 1.25Z"
          data-name="Path 12279"
        />
        <Path
          d="M3.625 16.357 19.979 0 1.317 5.504A1.812 1.812 0 0 0 .533 8.53l3.092 3.09Z"
          data-name="Path 12280"
        />
      </G>
    </Svg>
  );
};

export const TagPlaneIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 31572">
        <Path
          data-name="Path 51183"
          d="M12.558-1h7.673A2.772 2.772 0 0123 1.771v7.675a3.458 3.458 0 01-.923 2.228l-10.52 10.519a2.773 2.773 0 01-3.915 0l-7.833-7.832a2.774 2.774 0 010-3.916l10.52-10.52A3.46 3.46 0 0112.558-1zM9.6 21.156a.916.916 0 00.653-.268l10.52-10.519a1.691 1.691 0 00.382-.923V1.771a.924.924 0 00-.923-.923h-7.674a1.693 1.693 0 00-.923.382L1.115 11.75a.928.928 0 000 1.3l7.834 7.833a.913.913 0 00.651.273zm6.938-18.462a2.769 2.769 0 11-2.769 2.769 2.773 2.773 0 012.769-2.769zm0 3.692a.923.923 0 10-.923-.923.917.917 0 00.923.924z"
          transform="translate(1 .998) translate(-1 -.998) translate(1 .998)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const UploadIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      {...props}
      viewBox="0 2 32 32"
    >
      <G data-name="Group 15551">
        <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17704" />
        <Path
          fill="#fff"
          d="M13.669 7.827V2.369a5.824 5.824 0 0 1 2.057 1.327l2.908 2.91a5.8 5.8 0 0 1 1.329 2.054h-5.459a.836.836 0 0 1-.835-.835Zm6.657 2.5h-5.822a2.507 2.507 0 0 1-2.5-2.5V2.003c-.134-.009-.269-.02-.4-.02H7.826a4.179 4.179 0 0 0-4.173 4.174v11.686a4.178 4.178 0 0 0 4.173 4.173h8.347a4.178 4.178 0 0 0 4.173-4.173v-7.108c.001-.136-.01-.266-.019-.404Zm-5.232 5.742a.834.834 0 0 1-1.18 0l-1.079-1.079v3.679a.835.835 0 0 1-1.669 0v-3.675l-1.08 1.075a.835.835 0 0 1-1.18-1.18l1.347-1.343a2.475 2.475 0 0 1 3.495 0l1.347 1.347a.834.834 0 0 1 0 1.18Z"
        />
      </G>
    </Svg>
  );
};

export const AddNewAddress = props => {
  return (
    <Svg
      id="address_book"
      data-name="address book"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <Rect
        id="Rectangle_17437"
        data-name="Rectangle 17437"
        width="24"
        height="24"
        fill="none"
      />
      <G id="book" transform="translate(5 3)">
        <Path
          id="Path_11930"
          data-name="Path 11930"
          d="M4,19.5A2.314,2.314,0,0,1,6.064,17H17.208"
          transform="translate(-4 -4.048)"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Path_11931"
          data-name="Path 11931"
          d="M6.064,2H17.208V19.611H6.064A2.136,2.136,0,0,1,4,17.409V4.2A2.136,2.136,0,0,1,6.064,2Z"
          transform="translate(-4 -2)"
          fill="none"
          stroke="#188bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </G>
    </Svg>
  );
};
export const LargerSearchIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path
        fill="#fff"
        d="m23.707 22.295-5.961-5.963a10 10 0 1 0-1.414 1.414l5.961 5.961a1 1 0 1 0 1.412-1.412Zm-13.688-4.287a7.989 7.989 0 1 1 7.989-7.989 7.989 7.989 0 0 1-7.989 7.989Z"
        data-name="search (3)"
      />
    </Svg>
  );
};

export const NewVoteIcon = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <G data-name="Group 11803" transform="translate(-25.95 -737)">
        <Rect
          width={moderateScale(30)}
          height={moderateScale(30)}
          viewBox="0 0 40 40"
          data-name="Rectangle 22"
          rx={20}
          transform="translate(25.95 737)"
          fill="none"
        />
        <G data-name="Group 15580" transform="translate(45.95 767.552)">
          <Text fontFamily="Roboto-Bold" fontSize={12} fontWeight="bold">
            <TSpan
              x={-14}
              y={3}
              fill={'#ffffff'}
              fontFamily="Roboto-Bold"
              fontSize={12}
              fontWeight="bold"
            >
              {'VOTE'}
            </TSpan>
          </Text>
          <Path
            d="m6.061-19.975-3.586-3.586a3.585 3.585 0 0 0-4.95 0l-3.586 3.586a1.5 1.5 0 0 0 2.122 2.121l2.439-2.439v7.793a1.5 1.5 0 0 0 3 0v-7.793l2.439 2.439a1.5 1.5 0 0 0 2.122-2.121Z"
            fill="#ffffff"
          />
        </G>
      </G>
    </Svg>
  );
};

export const CommentLikeIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 14 14"
      {...props}
    >
      <G transform="translate(-717 -1002)">
        <Path
          fill="none"
          d="M717 1002h14v14h-14z"
          data-name="Rectangle 17353"
        />
        <Rect
          width={14}
          height={14}
          fill="#188bff"
          data-name="Rectangle 17392"
          rx={7}
          transform="translate(717 1002)"
        />
        <Path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M724.569 1007.044v-1.518a1.138 1.138 0 0 0-1.138-1.138l-1.515 3.415v4.173h4.28a.759.759 0 0 0 .759-.645l.524-3.415a.759.759 0 0 0-.763-.872Zm-2.653 4.932h-1.141a.759.759 0 0 1-.759-.759v-2.656a.759.759 0 0 1 .759-.759h1.141"
        />
      </G>
    </Svg>
  );
};
export const CloseCircleIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width}
      height={props?.height}
      viewBox="0 0 16 16"
    >
      <Path
        id="circle-xmark_1_"
        data-name="circle-xmark (1)"
        d="M10.471,6.471,8.943,8l1.529,1.529a.667.667,0,1,1-.943.943L8,8.943,6.471,10.471a.667.667,0,0,1-.943-.943L7.057,8,5.529,6.471a.667.667,0,0,1,.943-.943L8,7.057,9.529,5.529a.667.667,0,0,1,.943.943ZM16,8A8,8,0,1,1,8,0,8.009,8.009,0,0,1,16,8ZM14.667,8A6.667,6.667,0,1,0,8,14.667,6.674,6.674,0,0,0,14.667,8Z"
        fill={props?.color}
      />
    </Svg>
  );
};

export const PlayIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8.6"
      height="10.146"
      viewBox="0 0 8.6 10.146"
    >
      <Path
        id="play"
        d="M7.634,3.761,9.849,5.237c.976.65,1.463.976,1.633,1.385a1.461,1.461,0,0,1,0,1.119c-.17.41-.658.735-1.633,1.385L7.634,10.6h0c-1.181.787-1.771,1.181-2.26,1.151A1.461,1.461,0,0,1,4.3,11.178c-.3-.391-.3-1.1-.3-2.52V5.706c0-1.419,0-2.128.3-2.52a1.461,1.461,0,0,1,1.078-.577c.49-.029,1.08.364,2.26,1.151Z"
        transform="translate(-3.5 -2.109)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      />
    </Svg>
  );
};

export const VerifiedIcon = () => {
  return (
    <Svg
      id="checklist"
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
    >
      <Path
        id="Path_20617"
        data-name="Path 20617"
        d="M17,10.5c0,.555-.681,1.012-.818,1.523-.141.529.216,1.265-.052,1.728s-1.09.526-1.471.908-.438,1.2-.908,1.471-1.2-.089-1.728.052c-.511.137-.969.818-1.523.818s-1.012-.681-1.523-.818c-.529-.141-1.265.216-1.728-.052s-.527-1.09-.908-1.471-1.2-.438-1.471-.908.089-1.2-.052-1.728C4.681,11.512,4,11.055,4,10.5s.681-1.012.818-1.523c.141-.529-.216-1.265.052-1.728s1.09-.527,1.471-.908.438-1.2.908-1.471,1.2.089,1.728-.052C9.488,4.681,9.945,4,10.5,4s1.012.681,1.523.818c.529.141,1.265-.216,1.728.052s.526,1.09.908,1.471,1.2.438,1.471.908-.089,1.2.052,1.728C16.319,9.488,17,9.945,17,10.5Z"
        transform="translate(-4 -4)"
        fill="#5eff74"
      />
      <Path
        id="Path_20618"
        data-name="Path 20618"
        d="M40.473,44.4l-2.512,2.512-1.3-1.3a.724.724,0,0,0-1.024,1.024l1.827,1.827a.705.705,0,0,0,1,0L41.5,45.429A.724.724,0,1,0,40.473,44.4Z"
        transform="translate(-32.066 -39.873)"
        fill="#141414"
      />
    </Svg>
  );
};

export const ReviewCommentLikeIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.168"
      height="13"
      viewBox="0 0 15.168 13"
    >
      <Path
        id="social-network"
        d="M14.39,5.035a3.156,3.156,0,0,0-2.384-1.087H9.485L9.7,2.658A1.919,1.919,0,0,0,6.082,1.5L4.873,3.948H3.159A3.163,3.163,0,0,0,0,7.107v3.159a3.163,3.163,0,0,0,3.159,3.159h8.4a3.175,3.175,0,0,0,3.128-2.717l.445-3.159A3.159,3.159,0,0,0,14.39,5.035ZM1.264,10.267V7.107a1.9,1.9,0,0,1,1.9-1.9H4.423v6.951H3.159A1.9,1.9,0,0,1,1.264,10.267ZM13.883,7.372l-.446,3.159a1.9,1.9,0,0,1-1.873,1.631H5.687V5.044a.632.632,0,0,0,.145-.185l1.383-2.8A.676.676,0,0,1,8.3,1.926a.647.647,0,0,1,.147.531L8.117,4.479a.632.632,0,0,0,.624.733h3.265a1.9,1.9,0,0,1,1.877,2.16Z"
        transform="translate(0 -0.426)"
        fill="#a7a7a7"
      />
    </Svg>
  );
};

export const ReviewCommentLikedIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15.168}
      height={13}
      {...props}
    >
      <Path
        fill="#188bff"
        d="M14.39 4.609a3.156 3.156 0 0 0-2.384-1.087H9.485l.215-1.29a1.919 1.919 0 0 0-3.618-1.158L4.873 3.522H3.159A3.163 3.163 0 0 0 0 6.681V9.84a3.163 3.163 0 0 0 3.159 3.159h8.4a3.175 3.175 0 0 0 3.128-2.717l.445-3.159a3.159 3.159 0 0 0-.742-2.514ZM1.264 9.841v-3.16a1.9 1.9 0 0 1 1.9-1.9h1.259v6.951H3.159a1.9 1.9 0 0 1-1.895-1.891Zm12.619-2.895-.446 3.159a1.9 1.9 0 0 1-1.873 1.631H5.687V4.618a.632.632 0 0 0 .145-.185l1.383-2.8A.676.676 0 0 1 8.3 1.5a.647.647 0 0 1 .147.531l-.33 2.022a.632.632 0 0 0 .624.733h3.265a1.9 1.9 0 0 1 1.877 2.16Z"
      />
    </Svg>
  );
};

export const ReviewCommentDisLikeIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.165"
      height="13"
      viewBox="0 0 15.165 13"
    >
      <Path
        id="hand"
        d="M15.134,8.876l-.445-3.159A3.175,3.175,0,0,0,11.563,3h-8.4A3.163,3.163,0,0,0,0,6.159V9.319a3.163,3.163,0,0,0,3.159,3.159H4.873l1.209,2.45A1.919,1.919,0,0,0,9.7,13.768l-.212-1.29h2.521a3.159,3.159,0,0,0,3.128-3.6ZM3.159,4.264H4.423v6.951H3.159a1.9,1.9,0,0,1-1.9-1.9V6.159a1.9,1.9,0,0,1,1.9-1.9Zm10.277,6.3a1.9,1.9,0,0,1-1.431.652H8.741a.632.632,0,0,0-.624.734l.334,2.022A.647.647,0,0,1,8.3,14.5a.676.676,0,0,1-1.088-.134l-1.383-2.8a.632.632,0,0,0-.145-.185V4.264h5.876A1.9,1.9,0,0,1,13.44,5.895l.446,3.159a1.9,1.9,0,0,1-.45,1.508Z"
        transform="translate(0 -3)"
        fill={props?.fill ?? '#a7a7a7'}
      />
    </Svg>
  );
};

export const RightArrowIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={'10.414'}
    height={'18.829'}
    viewBox="0 0 10.414 18.829"
    {...props}
  >
    <G id="Group_137" data-name="Group 137" transform="translate(1.414 1.414)">
      <Path
        id="Path_8544"
        data-name="Path 8544"
        d="M-308.647,1154.314l8,8-8,8"
        transform="translate(308.647 -1154.314)"
        stroke={props?.color ? props?.color : '#FFFFFF'}
        fill={getColors().BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);
export const VisaCardIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="32"
      viewBox="0 0 46 32"
    >
      <G
        id="Group_11882"
        data-name="Group 11882"
        transform="translate(-266 -227)"
      >
        <Rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="46"
          height="32"
          rx="6"
          transform="translate(266 227)"
          fill="#188bff"
        />
        <G id="visa" transform="translate(271 237)">
          <Path
            id="Path_20866"
            data-name="Path 20866"
            d="M184.8,190.889l1.865-10.489h2.914l-1.806,10.489Z"
            transform="translate(-171.339 -180.05)"
            fill="#3c58bf"
          />
          <Path
            id="Path_20867"
            data-name="Path 20867"
            d="M184.8,190.889l2.389-10.489h2.389l-1.806,10.489Z"
            transform="translate(-171.339 -180.05)"
            fill="#fff"
          />
          <Path
            id="Path_20868"
            data-name="Path 20868"
            d="M256.915,176.066a7.391,7.391,0,0,0-2.68-.466c-2.914,0-5.011,1.457-5.011,3.555,0,1.573,1.457,2.389,2.622,2.914s1.515.874,1.515,1.34c0,.7-.932,1.049-1.748,1.049a6.333,6.333,0,0,1-2.8-.583l-.408-.175L248,186.089a9.449,9.449,0,0,0,3.321.583c3.088,0,5.128-1.457,5.128-3.671,0-1.224-.758-2.156-2.506-2.914-1.049-.524-1.69-.816-1.69-1.34,0-.466.524-.932,1.69-.932a5.345,5.345,0,0,1,2.214.408l.291.117.466-2.273Z"
            transform="translate(-229.936 -175.6)"
            fill="#3c58bf"
          />
          <Path
            id="Path_20869"
            data-name="Path 20869"
            d="M256.915,176.066a7.391,7.391,0,0,0-2.68-.466c-2.914,0-4.487,1.457-4.487,3.555a3.046,3.046,0,0,0,2.1,2.914c1.165.524,1.515.874,1.515,1.34,0,.7-.932,1.049-1.748,1.049a6.333,6.333,0,0,1-2.8-.583l-.408-.175L248,186.089a9.449,9.449,0,0,0,3.321.583c3.088,0,5.128-1.457,5.128-3.671,0-1.224-.758-2.156-2.506-2.914-1.049-.524-1.69-.816-1.69-1.34,0-.466.524-.932,1.69-.932a5.345,5.345,0,0,1,2.214.408l.291.117.466-2.273Z"
            transform="translate(-229.936 -175.6)"
            fill="#fff"
          />
          <Path
            id="Path_20870"
            data-name="Path 20870"
            d="M364.285,180.4c-.7,0-1.224.058-1.515.758l-4.37,9.731h3.147l.583-1.748h3.729l.35,1.748h2.8L366.558,180.4Zm-1.34,6.992c.175-.524,1.165-3.088,1.165-3.088s.233-.641.408-1.049l.175.991s.583,2.622.7,3.2h-2.447Z"
            transform="translate(-332.295 -180.05)"
            fill="#3c58bf"
          />
          <Path
            id="Path_20871"
            data-name="Path 20871"
            d="M364.985,180.4c-.7,0-1.224.058-1.515.758l-5.07,9.731h3.147l.583-1.748h3.729l.35,1.748h2.8L366.558,180.4Zm-2.039,6.992c.233-.583,1.165-3.088,1.165-3.088s.233-.641.408-1.049l.175.991s.583,2.622.7,3.2h-2.447Z"
            transform="translate(-332.295 -180.05)"
            fill="#fff"
          />
          <Path
            id="Path_20872"
            data-name="Path 20872"
            d="M55.57,188.484l-.291-1.515a8.447,8.447,0,0,0-4.079-4.6l2.622,9.323h3.147l4.72-10.489H58.542Z"
            transform="translate(-47.471 -180.792)"
            fill="#3c58bf"
          />
          <Path
            id="Path_20873"
            data-name="Path 20873"
            d="M55.57,188.484l-.291-1.515a8.447,8.447,0,0,0-4.079-4.6l2.622,9.323h3.147l4.72-10.489H59.125Z"
            transform="translate(-47.471 -180.792)"
            fill="#fff"
          />
          <Path
            id="Path_20874"
            data-name="Path 20874"
            d="M0,180.4l.524.117c3.729.874,6.293,3.088,7.284,5.711l-1.049-4.953c-.175-.7-.7-.874-1.34-.874Z"
            transform="translate(0 -180.05)"
            fill="#ffbc00"
          />
          <Path
            id="Path_20875"
            data-name="Path 20875"
            d="M0,180.4H0c3.729.874,6.818,3.147,7.808,5.769l-.991-4.137a1.422,1.422,0,0,0-1.4-1.107Z"
            transform="translate(0 -180.05)"
            fill="#f7981d"
          />
          <Path
            id="Path_20876"
            data-name="Path 20876"
            d="M0,180.4H0c3.729.874,6.818,3.147,7.808,5.769l-.7-2.273a2.055,2.055,0,0,0-1.224-1.69Z"
            transform="translate(0 -180.05)"
            fill="#ed7c00"
          />
        </G>
      </G>
    </Svg>
  );
};

export const MasterCardIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="32"
      viewBox="0 0 46 32"
    >
      <G
        id="Group_15606"
        data-name="Group 15606"
        transform="translate(-266 -227)"
      >
        <Rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="46"
          height="32"
          rx="6"
          transform="translate(266 227)"
          fill="#188bff"
        />
        <G id="card" transform="translate(272.106 232)">
          <G id="Master_Card_1_" transform="translate(0)">
            <G id="Master_Card">
              <Circle
                id="Red_x5F_Circle"
                cx="11"
                cy="11"
                r="11"
                transform="translate(0.211 0)"
                fill="#f93232"
              />
              <Path
                id="Yellow_x5F_Circle"
                d="M23,0A10.926,10.926,0,0,0,16.42,2.2H16.4v.015A11.062,11.062,0,0,0,15.181,3.3h2.434a10.666,10.666,0,0,1,.94,1.1H14.232A10.921,10.921,0,0,0,13.5,5.5h5.788a11.3,11.3,0,0,1,.57,1.1H12.939a10.812,10.812,0,0,0-.415,1.1H20.27c.114.358.2.727.284,1.1H12.238a10.908,10.908,0,0,0-.173,1.1h8.666A9.3,9.3,0,0,1,20.8,11H12a11,11,0,0,0,.066,1.1h8.667c-.042.373-.1.739-.178,1.1H12.239a10.753,10.753,0,0,0,.287,1.1h7.745a10.812,10.812,0,0,1-.415,1.1H12.939a10.753,10.753,0,0,0,.56,1.1h5.788a10.754,10.754,0,0,1-.736,1.1H14.232a11.02,11.02,0,0,0,.948,1.1h2.436A11.049,11.049,0,0,1,16.4,19.777,10.991,10.991,0,1,0,23,0Z"
                transform="translate(-0.415 0)"
                fill="#fed049"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const AmericanExpressCardIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={32}
      viewBox="0 0 46 32"
      {...props}
    >
      <G data-name="Group 15606" transform="translate(-266 -227)">
        <Rect
          data-name="Rectangle 5"
          width={46}
          height={32}
          rx={6}
          transform="translate(266 227)"
          fill="#188bff"
        />
        <G data-name="Group 15663" fill="#fff">
          <Path
            data-name="Path 28047"
            d="M74.59 202.933h1.3l-.65-1.655z"
            transform="translate(270 237) translate(-71.373 -199.741)"
          />
          <Path
            data-name="Path 28048"
            d="M155.946 286.107v.769h2.187v.828h-2.187v.887h2.424l1.123-1.242-1.064-1.242z"
            transform="translate(270 237) translate(-145.812 -277.358)"
          />
          <Path
            data-name="Path 28049"
            d="M349.263 201.278l-.71 1.655h1.36z"
            transform="translate(270 237) translate(-322.044 -199.741)"
          />
          <Path
            data-name="Path 28050"
            d="M213.805 284.611v-3.37l-1.537 1.655z"
            transform="translate(270 237) translate(-197.346 -272.906)"
          />
          <Path
            data-name="Path 28051"
            d="M244.059 286.639a.6.6 0 00-.651-.532h-1.241v1.064h1.3c.355 0 .592-.177.592-.532z"
            transform="translate(270 237) translate(-224.703 -277.358)"
          />
          <Path
            data-name="Path 28052"
            d="M295.276 287.692a.461.461 0 00.178-.414.329.329 0 00-.178-.414 1.15 1.15 0 00-.473-.059h-1.183v.946h1.18a1.151 1.151 0 00.476-.059z"
            transform="translate(270 237) translate(-271.782 -277.996)"
          />
          <Path
            data-name="Path 28053"
            d="M68.755 183.2v.709l-.355-.709h-2.778v.709l-.355-.709h-3.783a3.6 3.6 0 00-1.655.355v-.355h-2.66v.355a1.7 1.7 0 00-1.123-.355h-9.519l-.651 1.478-.65-1.478h-3.014v.709l-.3-.709h-2.6l-1.183 2.778-1.36 3.015-.025.059h3.078l.021-.059.355-.887h.768l.355.946h3.428v-.709l.3.709h1.714l.3-.709v.709h8.217v-1.537h.12c.118 0 .118 0 .118.177v1.3h4.252v-.355a3.536 3.536 0 001.6.355h1.774l.355-.946h.827l.355.946H68.1v-.892l.532.887h2.778V183.2h-2.66zm-20.04 4.966h-.946v-3.252l-.059.136-1.375 3.118h-.871l-1.419-3.252v3.252h-2.01l-.414-.887H39.61l-.414.887h-1.039l1.749-4.138h1.478l1.655 3.961v-3.961h1.566l.028.059.746 1.623.536 1.216.019-.061 1.182-2.838h1.6v4.138zm4.079-3.252h-2.306v.768h2.246v.828h-2.246v.828h2.306v.886h-3.311v-4.2h3.311v.887zm4.216 1.524h.005a.676.676 0 01.058.07 1.137 1.137 0 01.209.693v.959H56.4v-.473a1.407 1.407 0 00-.178-.828.538.538 0 00-.174-.119 1.18 1.18 0 00-.535-.058h-1.064v1.478h-1v-4.138h2.247a2.267 2.267 0 011.182.177 1 1 0 01.471.919 1.174 1.174 0 01-.708 1.091.792.792 0 01.369.228zm1.99 1.726h-1v-4.138h1zm11.528 0h-1.3l-1.892-3.133v2.6l-.006-.006v.541h-2.004l-.355-.887H62.9l-.355.946h-1.12a1.777 1.777 0 01-1.951-2.069 2.424 2.424 0 01.532-1.655 1.862 1.862 0 011.478-.473h.946v.887h-.946a1.09 1.09 0 00-.769.237 1.389 1.389 0 00-.3.946 1.287 1.287 0 00.3 1 .943.943 0 00.71.237h.414l1.36-3.251h1.478l1.655 3.961v-3.961h1.478l1.714 2.9v-2.9h1.005v4.079z"
            transform="translate(270 237) translate(-36.748 -183.198)"
          />
          <Path
            data-name="Path 28054"
            d="M246.664 204.2a.316.316 0 00.046-.063.639.639 0 00.082-.446.331.331 0 00-.009-.054v-.014a.332.332 0 00-.179-.2 1.158 1.158 0 00-.473-.059h-1.183v.946h1.183a1.151 1.151 0 00.473-.059.224.224 0 00.049-.035z"
            transform="translate(270 237) translate(-227.244 -201.65)"
          />
          <Path
            data-name="Path 28055"
            d="M162.721 268.513a2.265 2.265 0 00-.3-1.123v-2.838h-2.847a1.682 1.682 0 00-.816.355v-.355h-2.719a1.878 1.878 0 00-1.183.355v-.355h-4.847v.355a2.287 2.287 0 00-1.3-.355h-3.192v.355a2.246 2.246 0 00-1.36-.355h-3.546l-.828.887-.769-.887H133.7v5.971h5.2l.855-.855.741.855h3.304v-1.36h.3a3.591 3.591 0 001.36-.178v1.6h2.66v-1.537h.118c.178 0 .178 0 .178.177v1.36h8.04a2.317 2.317 0 001.36-.355v.355h2.542a2.655 2.655 0 001.419-.3 1.985 1.985 0 00.938-1.594c0-.02.005-.041.007-.061-.002-.04-.001-.078-.001-.117zm-18.622-.355h-1.183v1.542h-1.943l-1.131-1.3-.055-.064-1.3 1.36H134.7v-4.138h3.843l1.05 1.15.221.241.03-.031 1.242-1.36h3.133a1.534 1.534 0 011.547.769 1.673 1.673 0 01.049.413c-.001 1.182-.829 1.419-1.715 1.419zm5.912-.059a1.342 1.342 0 01.177.769v.827h-1v-.532a1.319 1.319 0 00-.178-.828c-.118-.177-.355-.177-.709-.177h-1.064v1.542h-1v-4.2h2.246a2.385 2.385 0 011.183.177 1.046 1.046 0 01.532.946 1.177 1.177 0 01-.709 1.123 1.007 1.007 0 01.522.354zm4.079-1.715h-2.306v.769h2.247v.828h-2.247v.828h2.306v.887h-3.31v-4.2h3.311zm2.483 3.311h-1.892v-.887h1.892a.5.5 0 00.414-.118.429.429 0 000-.591.5.5 0 00-.355-.118c-.946-.059-2.069 0-2.069-1.3 0-.591.355-1.242 1.419-1.242h1.951v1H156.1a.878.878 0 00-.414.059c-.118.059-.118.178-.118.3 0 .177.118.237.236.3a.749.749 0 00.355.059h.532a1.5 1.5 0 011.123.355 1.224 1.224 0 01.3.887c-.004.882-.536 1.301-1.541 1.301zm5.084-.414a1.722 1.722 0 01-1.242.414h-1.891v-.887h1.891a.5.5 0 00.414-.118.428.428 0 000-.591.5.5 0 00-.355-.118c-.946-.059-2.069 0-2.069-1.3a1.208 1.208 0 011.114-1.22 2.2 2.2 0 01.3-.022h1.951v1h-1.833a.875.875 0 00-.414.059.451.451 0 00-.119.3c0 .177.059.237.237.3a.748.748 0 00.355.059h.532a1.846 1.846 0 01.633.095 1.273 1.273 0 01.827.935 1.326 1.326 0 01.018.212 1.2 1.2 0 01-.349.882z"
            transform="translate(270 237) translate(-125.453 -257.635)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const DiscoverCardIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={32}
      viewBox="0 0 46 32"
      {...props}
    >
      <G data-name="Group 15606" transform="translate(-266 -227)">
        <Rect
          data-name="Rectangle 5"
          width={46}
          height={32}
          rx={6}
          transform="translate(266 227)"
          fill="#188bff"
        />
        <Path
          data-name="Path 28056"
          d="M240.406 221.492a3.06 3.06 0 00-3.1-3.091h-.006a3.108 3.108 0 103.108 3.108l-.002-.017z"
          transform="translate(51.81 21.599)"
          fill="#f26e21"
        />
        <G
          data-name="Group 15664"
          transform="translate(270 240)"
          fill="#e7e8e3"
        >
          <Path
            data-name="Path 28059"
            d="M176.559 222.16a1.91 1.91 0 01-1.355.657 1.93 1.93 0 01-1.952-2.031 2.255 2.255 0 01.585-1.507 1.826 1.826 0 011.268-.526 1.884 1.884 0 011.434.657v-1.375a3 3 0 00-1.434-.359 3.463 3.463 0 00-2.026.843 3.255 3.255 0 00-1.079 2.326 3.037 3.037 0 003.108 3.048h.06a3.381 3.381 0 001.435-.358l-.04-1.375c-.02.02.02.039 0 .058z"
            transform="translate(-160.579 -217.677)"
          />
          <Path
            data-name="Path 28060"
            d="M310.665 221.183l-1.354 3.328-1.554-3.945H306.5l2.451 6.037h.657l2.57-6.037h-1.255z"
            transform="translate(-283.967 -220.327)"
          />
          <Path
            data-name="Path 28061"
            d="M380.983 223.2v3.228h3.287v-.957h-2.092v-1.613h2.032v-1.016h-2.032v-1.255h2.092v-1.016h-3.287z"
            transform="translate(-352.292 -220.327)"
          />
          <Path
            data-name="Path 28062"
            d="M35.558 220.566h-1.674v5.858h1.674a3.242 3.242 0 002.092-.658 2.956 2.956 0 001.076-2.271 2.893 2.893 0 00-3.168-2.929zm1.375 4.423a2.3 2.3 0 01-1.554.478h-.359v-3.885h.3a2.03 2.03 0 011.554.478 1.91 1.91 0 01.658 1.435 1.787 1.787 0 01-.599 1.494z"
            transform="translate(-33.884 -220.327)"
          />
          <Path
            data-name="Rectangle 17836"
            transform="translate(5.38 .238)"
            d="M0 0H1.136V5.858H0z"
          />
          <Path
            data-name="Path 28063"
            d="M120.879 222.178c-.717-.239-.9-.419-.9-.717a.757.757 0 01.837-.657 1.156 1.156 0 01.956.478l.6-.777a2.6 2.6 0 00-1.733-.657 1.754 1.754 0 00-1.853 1.673c0 .837.359 1.2 1.435 1.614a2.324 2.324 0 01.777.359.658.658 0 01.358.6.833.833 0 01-.9.837 1.394 1.394 0 01-1.255-.777l-.717.717a2.345 2.345 0 002.037 1.129 1.885 1.885 0 002.032-1.913c-.001-1.013-.359-1.431-1.674-1.909z"
            transform="translate(-111.494 -219.668)"
          />
          <Path
            data-name="Path 28064"
            d="M432.6 223.973a1.577 1.577 0 001.375-1.673c0-1.076-.777-1.734-2.092-1.734h-1.734v5.858h1.136v-2.331h.18l1.613 2.331h1.375zm-.957-.717h-.358v-1.793h.358c.717 0 1.136.3 1.136.9s-.413.893-1.131.893z"
            transform="translate(-397.398 -220.327)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const AddNewCardIcon = () => {
  return (
    <Svg
      id="Group_11124"
      data-name="Group 11124"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <G id="Group_15588" data-name="Group 15588">
        <Rect
          id="Rectangle_17743"
          data-name="Rectangle 17743"
          width="24"
          height="24"
          fill="none"
        />
        <G id="credit-card" transform="translate(1 1)">
          <Ellipse
            id="Ellipse_693"
            data-name="Ellipse 693"
            cx="1.5"
            cy="1"
            rx="1.5"
            ry="1"
            transform="translate(3.727 13.045)"
            fill="#188bff"
          />
          <Path
            id="Path_28023"
            data-name="Path 28023"
            d="M16.984,3H4.469A4.475,4.475,0,0,0,0,7.469V14.62A4.475,4.475,0,0,0,4.469,19.09H16.984a4.475,4.475,0,0,0,4.469-4.469V7.469A4.475,4.475,0,0,0,16.984,3ZM4.469,4.788H16.984a2.682,2.682,0,0,1,2.682,2.682H1.788A2.682,2.682,0,0,1,4.469,4.788ZM16.984,17.3H4.469A2.682,2.682,0,0,1,1.788,14.62V9.257H19.665V14.62A2.682,2.682,0,0,1,16.984,17.3Z"
            fill="#188bff"
          />
        </G>
      </G>
    </Svg>
  );
};

export const LocationPin = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.496}
      height={46.208}
      viewBox="0 0 24 46.208"
      {...props}
    >
      <Path
        fill="#001833"
        d="M23.5 11.748a11.748 11.748 0 1 0-12.535 11.708v21.969a.783.783 0 0 0 1.566 0V23.456A11.753 11.753 0 0 0 23.5 11.748Zm-15.664 0a3.133 3.133 0 1 1 3.133-3.133 3.136 3.136 0 0 1-3.137 3.133Z"
        data-name="pin (1)"
      />
    </Svg>
  );
};

export const OverViewIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.239"
      height="19.239"
      viewBox="0 0 19.239 19.239"
    >
      <Path
        id="overview"
        d="M6.413,12.826a1.2,1.2,0,1,1-1.2-1.2A1.2,1.2,0,0,1,6.413,12.826Zm-1.2-9.219a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,5.211,3.607Zm0,4.008a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,5.211,7.616ZM15.231,0H4.008A4.013,4.013,0,0,0,0,4.008V14.43a4.013,4.013,0,0,0,4.008,4.008h2.4a.8.8,0,1,0,0-1.6h-2.4a2.408,2.408,0,0,1-2.4-2.4V4.008a2.408,2.408,0,0,1,2.4-2.4H15.231a2.408,2.408,0,0,1,2.4,2.4v7.215a.8.8,0,1,0,1.6,0V4.008A4.013,4.013,0,0,0,15.231,0ZM8.818,5.611H14.43a.8.8,0,1,0,0-1.6H8.818a.8.8,0,1,0,0,1.6Zm0,4.008H14.43a.8.8,0,1,0,0-1.6H8.818a.8.8,0,1,0,0,1.6ZM19,14.87a1.354,1.354,0,0,1,0,1.525,6.327,6.327,0,0,1-5.375,2.845,6.329,6.329,0,0,1-5.376-2.845,1.354,1.354,0,0,1,0-1.525,6.325,6.325,0,0,1,5.375-2.845A6.325,6.325,0,0,1,19,14.87Zm-1.423.762a4.749,4.749,0,0,0-3.952-2,4.75,4.75,0,0,0-3.952,2,4.748,4.748,0,0,0,3.952,2A4.749,4.749,0,0,0,17.58,15.632Zm-3.952-1.2a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,13.628,14.43Z"
        fill={props?.color || '#a7a7a7'}
      />
    </Svg>
  );
};

export const FollowersIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.249"
      height="20.284"
      viewBox="0 0 20.249 20.284"
    >
      <G id="followers" transform="translate(-0.44)">
        <G id="Group_15624" data-name="Group 15624" transform="translate(0.44)">
          <G id="Group_15623" data-name="Group 15623" transform="translate(0)">
            <Path
              id="Path_28029"
              data-name="Path 28029"
              d="M9.7,18.665H2.815a.791.791,0,0,1-.753-1.034,6.1,6.1,0,0,1,5.8-4.128,5.915,5.915,0,0,1,3.4,1.066.791.791,0,1,0,.9-1.3,7.515,7.515,0,0,0-1.577-.842A4.026,4.026,0,0,0,11.9,9.774a5.954,5.954,0,0,1,7.549-.617.791.791,0,1,0,.9-1.3,7.516,7.516,0,0,0-1.577-.842,4.033,4.033,0,1,0-5.431-.009q-.166.064-.329.135a7.509,7.509,0,0,0-1.393.8,4.033,4.033,0,1,0-6.471,4.471A7.606,7.606,0,0,0,.556,17.147a2.373,2.373,0,0,0,2.259,3.1H9.7a.791.791,0,0,0,0-1.582ZM16.062,1.582A2.452,2.452,0,1,1,13.61,4.033,2.454,2.454,0,0,1,16.062,1.582ZM7.876,6.994A2.452,2.452,0,1,1,5.425,9.446,2.454,2.454,0,0,1,7.876,6.994Z"
              transform="translate(-0.44)"
              fill={props?.color || '#a7a7a7'}
            />
            <Path
              id="Path_28030"
              data-name="Path 28030"
              d="M272.571,322.5a.791.791,0,0,0-1.1.183l-3.9,5.445a.452.452,0,0,1-.65.034l-2.524-2.423a.791.791,0,0,0-1.1,1.141l2.526,2.426a2.039,2.039,0,0,0,1.4.561q.067,0,.134,0a2.039,2.039,0,0,0,1.45-.755l.027-.035,3.914-5.467A.791.791,0,0,0,272.571,322.5Z"
              transform="translate(-252.653 -309.579)"
              fill={props?.color || '#a7a7a7'}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const FollowingIcon = props => {
  return (
    <Svg
      id="following"
      xmlns="http://www.w3.org/2000/svg"
      width="19.253"
      height="19.251"
      viewBox="0 0 19.253 19.251"
    >
      <Path
        id="Path_28026"
        data-name="Path 28026"
        d="M7.813,9.626A4.813,4.813,0,1,0,3,4.813,4.813,4.813,0,0,0,7.813,9.626Zm0-8.021A3.209,3.209,0,1,1,4.6,4.813,3.209,3.209,0,0,1,7.813,1.6Z"
        transform="translate(-0.594)"
        fill={props?.color || '#a7a7a7'}
      />
      <Path
        id="Path_28027"
        data-name="Path 28027"
        d="M7.219,14A7.228,7.228,0,0,0,0,21.219a.8.8,0,1,0,1.6,0,5.615,5.615,0,1,1,11.23,0,.8.8,0,1,0,1.6,0A7.228,7.228,0,0,0,7.219,14Z"
        transform="translate(0 -2.77)"
        fill={props?.color || '#a7a7a7'}
      />
      <Path
        id="Path_28028"
        data-name="Path 28028"
        d="M20.812,7.875a1.69,1.69,0,0,0-1.6,1.765A1.612,1.612,0,1,0,16,9.64c0,1.388,1.81,3.014,2.711,3.737a.8.8,0,0,0,.995,0c.9-.722,2.711-2.349,2.711-3.737a1.69,1.69,0,0,0-1.6-1.765Z"
        transform="translate(-3.165 -1.558)"
        fill={props?.color || '#a7a7a7'}
      />
    </Svg>
  );
};

export const BasketShoppingIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.46"
      height="19.429"
      viewBox="0 0 19.46 19.429"
    >
      <Path
        id="basket-shopping-simple_1_"
        data-name="basket-shopping-simple (1)"
        d="M18.84,7.313A2.424,2.424,0,0,0,17,6.479h-.073a7.29,7.29,0,0,0-14.489,0H2.4A2.42,2.42,0,0,0-.006,9.249l.858,6.009a4.878,4.878,0,0,0,4.811,4.171h8.074a4.878,4.878,0,0,0,4.811-4.171l.858-6.009A2.44,2.44,0,0,0,18.84,7.313ZM9.689,1.62A5.68,5.68,0,0,1,15.3,6.479H4.076A5.68,5.68,0,0,1,9.689,1.62Zm8.115,7.4-.858,6.009a3.25,3.25,0,0,1-3.207,2.778H5.664a3.257,3.257,0,0,1-3.207-2.778L1.6,9.022a.823.823,0,0,1,.186-.648A.806.806,0,0,1,2.4,8.091H17a.794.794,0,0,1,.607.275.786.786,0,0,1,.186.648Z"
        transform="translate(0.029)"
        fill="#a7a7a7"
      />
    </Svg>
  );
};

export const PlayProfileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.709"
      height="23.745"
      viewBox="0 0 19.709 23.745"
    >
      <G id="play" transform="translate(-4 -2.608)" fill="none">
        <Path
          d="M13.433,5.6,19.18,9.432c2.532,1.688,3.8,2.532,4.239,3.6a3.791,3.791,0,0,1,0,2.905c-.441,1.064-1.707,1.908-4.239,3.6L13.433,23.36h0c-3.064,2.043-4.6,3.064-5.867,2.988a3.792,3.792,0,0,1-2.8-1.5C4,23.836,4,21.994,4,18.312V10.649c0-3.683,0-5.524.768-6.539a3.792,3.792,0,0,1,2.8-1.5c1.271-.076,2.8.946,5.867,2.988Z"
          stroke="none"
        />
        <Path
          d="M 7.668264389038086 5.614686965942383 C 7.49207878112793 5.642513275146484 7.33073616027832 5.728872299194336 7.209861755371094 5.860027313232422 C 7.175714492797852 5.970607757568359 7.099052429199219 6.293033599853516 7.053134918212891 7.05963134765625 C 6.999996185302734 7.946741104125977 6.999996185302734 9.139039993286133 6.999996185302734 10.64855003356934 L 6.999996185302734 18.31151008605957 C 6.999996185302734 19.82101058959961 6.999996185302734 21.01330947875977 7.053125381469727 21.90044021606445 C 7.099035263061523 22.66695404052734 7.175687789916992 22.98941612243652 7.209844589233398 23.10004997253418 C 7.330780029296875 23.23125267028809 7.492179870605469 23.31760406494141 7.668193817138672 23.34538269042969 C 7.779079437255859 23.3124885559082 8.089849472045898 23.19747924804688 8.753305435180664 22.81038093566895 C 9.521045684814453 22.36244010925293 10.51301574707031 21.70112037658691 11.76889610290527 20.86386108398438 L 17.51626586914062 17.03219985961914 C 18.91027641296387 16.10293579101562 20.35064697265625 15.14276790618896 20.66646766662598 14.73528671264648 C 20.72335815429688 14.56907558441162 20.7233772277832 14.391188621521 20.66645050048828 14.22478008270264 C 20.35054206848145 13.81732559204102 18.91018676757812 12.85709571838379 17.51615524291992 11.92776107788086 L 11.7686653137207 8.096031188964844 C 10.51277542114258 7.258790969848633 9.520795822143555 6.597480773925781 8.753246307373047 6.149650573730469 C 8.089981079101562 5.762657165527344 7.779205322265625 5.647611618041992 7.668264389038086 5.614686965942383 M 7.699041366577148 2.607763290405273 C 8.944551467895508 2.607763290405273 10.4748420715332 3.627967834472656 13.43312549591064 5.600120544433594 L 13.43313598632812 5.600120544433594 L 19.18027496337891 9.431619644165039 C 21.71229553222656 11.11960029602051 22.97824478149414 11.96356964111328 23.41939544677734 13.0273904800415 C 23.80519485473633 13.95748043060303 23.80519485473633 15.00260066986084 23.41939544677734 15.93269062042236 C 22.97824478149414 16.99652099609375 21.71229553222656 17.84053039550781 19.18027496337891 19.52841186523438 L 13.43300533294678 23.36001014709473 C 10.36878776550293 25.40283966064453 8.836647033691406 26.42419815063477 7.566135406494141 26.34836006164551 C 6.459304809570312 26.28223991394043 5.436824798583984 25.73504066467285 4.767875671386719 24.850830078125 C 3.999996185302734 23.83580017089844 3.999996185302734 21.99433135986328 3.999996185302734 18.31151008605957 L 3.999996185302734 10.64855003356934 C 3.999996185302734 6.965740203857422 3.999996185302734 5.124349594116211 4.767875671386719 4.109291076660156 C 5.436824798583984 3.225000381469727 6.459304809570312 2.677801132202148 7.566135406494141 2.611700057983398 C 7.610105514526367 2.609075546264648 7.654392242431641 2.607763290405273 7.699041366577148 2.607763290405273 Z"
          stroke="none"
          fill={props.color || '#188bff'}
        />
      </G>
    </Svg>
  );
};

export const BookmarkIconProfile = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.197"
      height="24"
      viewBox="0 0 22.197 24"
    >
      <Path
        id="bookmark"
        d="M2.865,23.76a2.98,2.98,0,0,0,3.3-.65L12.1,17.205l5.938,5.905A2.982,2.982,0,0,0,20.154,24a3.077,3.077,0,0,0,1.18-.239,2.979,2.979,0,0,0,1.861-2.8V5.045A5.051,5.051,0,0,0,18.152,0H6.045A5.051,5.051,0,0,0,1,5.045v15.92a2.979,2.979,0,0,0,1.865,2.8Z"
        transform="translate(-1)"
        fill={props.color || '#a7a7a7'}
      />
    </Svg>
  );
};

export const ShopProfileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.845"
      height="23.831"
      viewBox="0 0 21.845 23.831"
    >
      <G id="shop" transform="translate(-1 0)">
        <Path
          id="Path_27987"
          data-name="Path 27987"
          d="M15.894,13a4.965,4.965,0,0,1-7.944,0A4.921,4.921,0,0,1,1,13.97v4.988a4.971,4.971,0,0,0,4.965,4.965H17.88a4.971,4.971,0,0,0,4.965-4.965V13.967A4.921,4.921,0,0,1,15.894,13Z"
          transform="translate(0 -0.091)"
          fill={props.color || '#a7a7a7'}
        />
        <Path
          id="Path_27988"
          data-name="Path 27988"
          d="M21.554,3.109A3.947,3.947,0,0,0,17.674,0h-.786V2.979a.993.993,0,1,1-1.986,0V0H8.944V2.979a.993.993,0,1,1-1.986,0V0H6.171A3.947,3.947,0,0,0,2.291,3.11L1.022,8.837,1,9.95a2.979,2.979,0,1,0,5.958-.02.993.993,0,1,1,1.986,0,2.979,2.979,0,0,0,5.958,0,.993.993,0,1,1,1.986,0,2.979,2.979,0,1,0,5.958,0V9.043Z"
          transform="translate(0 0)"
          fill={props.color || '#a7a7a7'}
        />
      </G>
    </Svg>
  );
};

export const WishlistFilledProfileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.735"
      height="24"
      viewBox="0 0 25.735 24"
    >
      <Path
        id="heart"
        d="M18.758.917a6.86,6.86,0,0,0-5.9,3.537A6.86,6.86,0,0,0,6.967.917,7.289,7.289,0,0,0,0,8.474c0,7.262,11.743,15.649,12.243,16.005l.62.438.62-.438c.5-.354,12.243-8.743,12.243-16.005A7.289,7.289,0,0,0,18.758.917Z"
        transform="translate(0.005 -0.917)"
        fill={props.color || '#a7a7a7'}
      />
    </Svg>
  );
};

export const HamburgerIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <G
        id="Group_15619"
        data-name="Group 15619"
        transform="translate(-335 -58)"
      >
        <Rect
          id="Rectangle_17752"
          data-name="Rectangle 17752"
          width="24"
          height="24"
          transform="translate(335 58)"
          fill="none"
        />
        <G id="menu-burger" transform="translate(338 59.333)">
          <Rect
            id="Rectangle_17753"
            data-name="Rectangle 17753"
            width="18"
            height="2"
            rx="1"
            transform="translate(0 9.667)"
            fill="#fff"
          />
          <Rect
            id="Rectangle_17754"
            data-name="Rectangle 17754"
            width="18"
            height="2"
            rx="1"
            transform="translate(0 3.667)"
            fill="#fff"
          />
          <Rect
            id="Rectangle_17755"
            data-name="Rectangle 17755"
            width="18"
            height="2"
            rx="1"
            transform="translate(0 15.667)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
};

export const CameraIcon = props => {
  return (
    <Svg
      id="camera"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      {...props}
      viewBox="0 0 12 12"
    >
      <Path
        id="Path_28024"
        data-name="Path 28024"
        d="M12,1.5,11.294.584A1.511,1.511,0,0,0,10.106,0H8.174A1.511,1.511,0,0,0,6.986.584L6.279,1.5Z"
        transform="translate(-3.139)"
        fill="#fff"
      />
      <Circle
        id="Ellipse_694"
        data-name="Ellipse 694"
        cx="2"
        cy="2"
        r="2"
        transform="translate(4 5)"
        fill="#fff"
      />
      <Path
        id="Path_28025"
        data-name="Path 28025"
        d="M9.5,5h-7A2.5,2.5,0,0,0,0,7.5V12a2.5,2.5,0,0,0,2.5,2.5h7A2.5,2.5,0,0,0,12,12V7.5A2.5,2.5,0,0,0,9.5,5ZM6,12.5a3,3,0,1,1,3-3,3,3,0,0,1-3,3Z"
        transform="translate(0 -2.5)"
        fill="#fff"
      />
    </Svg>
  );
};

export const IconCrossHair = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} {...props}>
      <G
        fill="none"
        stroke="#188bff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(.788 1.248)"
      >
        <Circle
          cx={11.5}
          cy={11.5}
          r={11.5}
          data-name="Ellipse 78"
          transform="translate(.212 -.248)"
        />
        <Path d="M23.212 11.752h-5" data-name="Line 26" />
        <Path d="M4.212 11.752h-4" data-name="Line 27" />
        <Path d="M11.212 4.752v-5" data-name="Line 28" />
        <Path d="M11.212 22.752v-4" data-name="Line 29" />
      </G>
    </Svg>
  );
};

export const MailIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G data-name="envelope (1)" fill="#fff">
          <Path
            data-name="Path 28034"
            d="M22.831 5.542l-8.023 8.023a4.772 4.772 0 01-6.741 0L.044 5.542C.031 5.693 0 5.829 0 5.979v11.437a4.771 4.771 0 004.766 4.766h13.343a4.771 4.771 0 004.766-4.766V5.979c0-.15-.03-.286-.044-.437z"
            transform="translate(38.562 736.516) translate(0 -.213)"
          />
          <Path
            data-name="Path 28035"
            d="M13.495 12L22.2 3.3A4.752 4.752 0 0018.144 1H4.8A4.752 4.752 0 00.744 3.3L9.45 12a2.866 2.866 0 004.045 0z"
            transform="translate(38.562 736.516) translate(-.035)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const MailIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15551" transform="translate(-38 -736)">
        <Path
          data-name="Rectangle 17704"
          transform="translate(38 736)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G data-name="envelope (1)" fill="#188bff">
          <Path
            data-name="Path 28034"
            d="M22.831 5.542l-8.023 8.023a4.772 4.772 0 01-6.741 0L.044 5.542C.031 5.693 0 5.829 0 5.979v11.437a4.771 4.771 0 004.766 4.766h13.343a4.771 4.771 0 004.766-4.766V5.979c0-.15-.03-.286-.044-.437z"
            transform="translate(38.562 736.516) translate(0 -.213)"
          />
          <Path
            data-name="Path 28035"
            d="M13.495 12L22.2 3.3A4.752 4.752 0 0018.144 1H4.8A4.752 4.752 0 00.744 3.3L9.45 12a2.866 2.866 0 004.045 0z"
            transform="translate(38.562 736.516) translate(-.035)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const CrossIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill={props?.color || '#fff'}
      d="M15.707 9.707 13.414 12l2.293 2.293a1 1 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414ZM24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12Zm-2 0a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Z"
      data-name="circle-xmark (1)"
    />
  </Svg>
);

export const UploadVideoPlayIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32.602}
    height={32.602}
    {...props}
  >
    <Path
      fill="#a7a7a7"
      d="M16.301 32.602a16.3 16.3 0 1 1 16.3-16.3v.01a16.312 16.312 0 0 1-16.3 16.29ZM14.444 9.829a2.208 2.208 0 0 0-.991.236 2.058 2.058 0 0 0-.882.978 10.634 10.634 0 0 0-.284 1.141 25.213 25.213 0 0 0-.266 4.116 28.989 28.989 0 0 0 .236 3.979 1.778 1.778 0 0 1 .039.179 6.482 6.482 0 0 0 .337 1.252 1.972 1.972 0 0 0 1.747 1.069h.064a5.188 5.188 0 0 0 1.467-.44 23.944 23.944 0 0 0 6.278-4.277l.094-.094a5.887 5.887 0 0 0 .44-.5 1.881 1.881 0 0 0 .377-1.141 1.985 1.985 0 0 0-.409-1.229l-.1-.111c-.1-.114-.264-.287-.414-.438a24.07 24.07 0 0 0-6.426-4.356 5.54 5.54 0 0 0-1.307-.364Z"
      data-name="Iconly Bold Play"
    />
  </Svg>
);

export const SearchMarketIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <G data-name="Group 15563" transform="translate(-26 -737)">
      <Path
        data-name="Rectangle 22"
        transform="translate(26 737)"
        fill="none"
        d="M0 0H24V24H0z"
      />
      <Path
        data-name="search (3)"
        d="M19.724 18.547l-4.967-4.967a8.336 8.336 0 10-1.177 1.177l4.968 4.968a.832.832 0 101.177-1.177zM8.317 14.975a6.658 6.658 0 116.658-6.658 6.658 6.658 0 01-6.658 6.658z"
        transform="translate(28.032 739.032)"
        fill="#fff"
      />
    </G>
  </Svg>
);

export const WishIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    {...props}
  >
    <G data-name="Group 15575" transform="translate(0 .091)">
      <Rect
        data-name="Rectangle 17706"
        width={18}
        height={18}
        rx={4}
        transform="translate(0 -.091)"
        fill="none"
      />
      <G data-name="Component 47 \u2013 1">
        <G data-name="01 align center">
          <Path
            data-name="Path 27995"
            d="M8.441.917A3.09 3.09 0 005.787 2.5 3.09 3.09 0 003.134.917 3.274 3.274 0 000 4.306c0 3.256 5.286 7.018 5.511 7.177l.279.2.279-.2c.225-.159 5.511-3.921 5.511-7.177A3.274 3.274 0 008.441.917zM5.787 10.5C4.218 9.328.962 6.459.962 4.306a2.31 2.31 0 012.172-2.428A2.31 2.31 0 015.3 4.306h.97a2.31 2.31 0 012.171-2.428 2.31 2.31 0 012.171 2.427c0 2.155-3.255 5.023-4.825 6.195z"
            transform="translate(3 3.736) translate(.005 -.917)"
            fill="#fff"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const WishIconFill = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      {...props}
    >
      <G data-name="Group 15575" transform="translate(0 .091)">
        <Rect
          data-name="Rectangle 17706"
          width={18}
          height={18}
          rx={4}
          transform="translate(0 -.091)"
          fill="none"
        />
        <G data-name="Component 47 \u2013 1">
          <Path
            data-name="heart (2)"
            d="M8.438.917A3.088 3.088 0 005.785 2.5 3.088 3.088 0 003.132.917 3.273 3.273 0 000 4.3c0 3.256 5.284 7.016 5.509 7.176l.279.2.279-.2c.225-.159 5.509-3.92 5.509-7.176A3.273 3.273 0 008.438.917z"
            transform="translate(3 3.736) translate(.005 -.917)"
            fill="red"
          />
        </G>
      </G>
    </Svg>
  );
};

export const UploadReelIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        data-name="Group 15551"
        transform="translate(-38 -736) translate(38 736)"
      >
        <Path data-name="Rectangle 17704" fill="none" d="M0 0H24V24H0z" />
        <Path
          data-name="add (4)"
          d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm4 13h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const UploadReelIconFilled = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        data-name="Group 15551"
        transform="translate(-38 -736) translate(38 736)"
      >
        <Path data-name="Rectangle 17704" fill="none" d="M0 0H24V24H0z" />
        <Path
          data-name="add (4)"
          d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm4 13h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z"
          fill="#188bff"
        />
      </G>
    </Svg>
  );
};

export const GalleryIcon = props => {
  return (
    <Svg
      id="package"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      {...props}
      viewBox="0 0 35 35"
    >
      <G id="Group_10701" data-name="Group 10701" transform="translate(0)">
        <Path
          id="Path_11966"
          data-name="Path 11966"
          d="M381.047,390.749h-3.39a.883.883,0,1,0,0,1.765h3.39a.883.883,0,0,0,0-1.765Z"
          transform="translate(-343.517 -356.259)"
          fill={props?.fill ?? '#fff'}
        />
        <Path
          id="Path_11967"
          data-name="Path 11967"
          d="M354.413,351.043h5.442a.883.883,0,1,0,0-1.765h-5.442a.883.883,0,1,0,0,1.765Z"
          transform="translate(-322.325 -318.449)"
          fill={props?.fill ?? '#fff'}
        />
        <Path
          id="Path_11968"
          data-name="Path 11968"
          d="M90.773,341.88h-9.24a1.856,1.856,0,0,0-1.854,1.854v2.372a1.856,1.856,0,0,0,1.854,1.854h9.24a1.856,1.856,0,0,0,1.854-1.854v-2.372A1.856,1.856,0,0,0,90.773,341.88Zm.088,4.225a.091.091,0,0,1-.088.088h-9.24a.091.091,0,0,1-.088-.088v-2.372a.09.09,0,0,1,.088-.088h9.24a.093.093,0,0,1,.088.088v2.372Z"
          transform="translate(-72.647 -311.704)"
          fill={props?.fill ?? '#fff'}
        />
        <Path
          id="Path_11969"
          data-name="Path 11969"
          d="M44.31,38.578H42.245V.883A.883.883,0,0,0,41.362,0H20.416a.883.883,0,0,0-.883.883V14.124H3.83a.883.883,0,0,0-.883.883V38.578H.883A.883.883,0,0,0,0,39.461V44.31a.883.883,0,0,0,.883.883H18.632a.883.883,0,1,0,0-1.765H1.765V40.343H43.427v3.084H26.558a.883.883,0,1,0,0,1.765H44.31a.883.883,0,0,0,.883-.883V39.461A.883.883,0,0,0,44.31,38.578ZM28.9,1.765h3.967V5.942L31.357,5a.883.883,0,0,0-.936,0L28.9,5.943V1.765Zm-7.606,0h5.841v5.77a.883.883,0,0,0,1.35.749l2.4-1.5,2.4,1.5a.883.883,0,0,0,1.351-.748V1.765H40.48V38.578H29.167V15.006a.883.883,0,0,0-.883-.883H21.3ZM13.755,15.889h4.6V20.8l-1.834-1.147a.883.883,0,0,0-.936,0L13.755,20.8Zm-9.042,0H11.99V22.4a.883.883,0,0,0,1.351.748l2.717-1.7,2.717,1.7a.883.883,0,0,0,1.351-.748V15.889H27.4V38.578H4.713Z"
          transform="translate(0)"
          fill={props?.fill ?? '#fff'}
        />
        <Path
          id="Path_11970"
          data-name="Path 11970"
          d="M246.869,492a.883.883,0,1,0,0,1.765h.005a.883.883,0,1,0-.005-1.765Z"
          transform="translate(-224.274 -448.573)"
          fill={props?.fill ?? '#fff'}
        />
      </G>
    </Svg>
  );
};

export const ViewMore = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <G data-name="Iconly Light Show">
      <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 17737" />
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        data-name="Iconly Light Show"
      >
        <Path
          d="M14.734 12.316a2.735 2.735 0 1 1-2.735-2.735 2.734 2.734 0 0 1 2.735 2.735Z"
          data-name="Stroke 1-53"
        />
        <Path
          d="M11.998 18.627c3.293 0 6.306-2.368 8-6.313-1.7-3.946-4.708-6.313-8-6.313h0c-3.29 0-6.3 2.368-8 6.313 1.7 3.947 4.708 6.313 8 6.313Z"
          data-name="Stroke 3-41"
        />
      </G>
    </G>
  </Svg>
);
export const NoProductCart = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={86.308}
      height={93.973}
      viewBox="0 0 86.308 93.973"
      {...props}
    >
      <G
        data-name="remove_15478131 (1)"
        fill="#a7a7a7"
        stroke="#a7a7a7"
        strokeWidth={2}
      >
        <Path
          data-name="Path 28036"
          d="M79.137 15.328h-1.493a1.916 1.916 0 000 3.832h1.493a2.342 2.342 0 012.339 2.339v.543a2.344 2.344 0 01-.223 1L67.884 51.45a3.852 3.852 0 01-3.469 2.2H27.346L17.287 19.164h6.706a1.916 1.916 0 000-3.832h-7.824l-1.833-6.289A1.915 1.915 0 0012.5 7.664H2.916a1.916 1.916 0 100 3.832h8.144l12.731 43.651-6.111 7.639a6.172 6.172 0 004.82 10.025h53.228a1.916 1.916 0 000-3.832H22.5a2.339 2.339 0 01-1.826-3.8l6.158-7.7h37.583a7.7 7.7 0 006.936-4.4l13.372-28.415a6.221 6.221 0 00.586-2.625v-.543a6.177 6.177 0 00-6.171-6.171z"
          transform="translate(0 1)"
        />
        <Path
          data-name="Path 28037"
          d="M23.993 76.644a7.664 7.664 0 107.664 7.664 7.664 7.664 0 00-7.664-7.664zm0 11.5a3.832 3.832 0 113.836-3.836 3.832 3.832 0 01-3.836 3.836z"
          transform="translate(0 1)"
        />
        <Path
          data-name="Path 28038"
          d="M69.979 76.644a7.664 7.664 0 107.664 7.664 7.664 7.664 0 00-7.664-7.664zm0 11.5a3.832 3.832 0 113.836-3.836 3.832 3.832 0 01-3.836 3.836z"
          transform="translate(0 1)"
        />
        <Path
          data-name="Path 28039"
          d="M50.818 45.986a22.993 22.993 0 10-22.993-22.993 22.993 22.993 0 0022.993 22.993zm0-42.154a19.161 19.161 0 11-19.161 19.161A19.161 19.161 0 0150.818 3.832z"
          transform="translate(0 1)"
        />
        <Path
          data-name="Path 28040"
          d="M41.238 24.909h19.161a1.916 1.916 0 100-3.832H41.238a1.916 1.916 0 000 3.832z"
          transform="translate(0 1)"
        />
      </G>
    </Svg>
  );
};
export const HeadWishlistIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 15557" transform="translate(-26 -737)">
        <Path
          data-name="Rectangle 22"
          transform="translate(26 737)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G data-name="01 align center">
          <Path
            data-name="Path 27995"
            d="M15.631.917a5.717 5.717 0 00-4.913 2.948A5.717 5.717 0 005.805.917 6.074 6.074 0 000 7.214c0 6.052 9.786 13.041 10.2 13.338l.516.365.516-.365c.416-.295 10.2-7.286 10.2-13.337a6.074 6.074 0 00-5.806-6.3zm-4.913 17.8c-2.906-2.171-8.932-7.5-8.932-11.5A4.287 4.287 0 015.805 2.7a4.287 4.287 0 014.02 4.514h1.786a4.287 4.287 0 014.02-4.514 4.287 4.287 0 014.019 4.514c0 4.003-6.026 9.333-8.932 11.504z"
            transform="translate(27 739) translate(.005 -.917)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
};

export const SearchWishHeadIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        id="Group_15563"
        data-name="Group 15563"
        transform="translate(-26 -737)"
      >
        <Rect
          id="Rectangle_22"
          data-name="Rectangle 22"
          width={24}
          height={24}
          transform="translate(26 737)"
          fill="none"
        />
        <Path
          id="search_3_"
          data-name="search (3)"
          d="M19.724,18.547,14.757,13.58a8.336,8.336,0,1,0-1.177,1.177l4.968,4.968a.832.832,0,1,0,1.177-1.177ZM8.317,14.975a6.658,6.658,0,1,1,6.658-6.658,6.658,6.658,0,0,1-6.658,6.658Z"
          transform="translate(28.032 739.032)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const WishLikeHeadIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        id="Group_15557"
        data-name="Group 15557"
        transform="translate(-26 -737)"
      >
        <Rect
          id="Rectangle_22"
          data-name="Rectangle 22"
          width={24}
          height={24}
          transform="translate(26 737)"
          fill="none"
        />
        <G
          id="_01_align_center"
          data-name="01 align center"
          transform="translate(27 739)"
        >
          <Path
            id="Path_27995"
            data-name="Path 27995"
            d="M15.631.917a5.717,5.717,0,0,0-4.913,2.948A5.717,5.717,0,0,0,5.805.917,6.074,6.074,0,0,0,0,7.214c0,6.052,9.786,13.041,10.2,13.338l.516.365.516-.365c.416-.295,10.2-7.286,10.2-13.337a6.074,6.074,0,0,0-5.806-6.3Zm-4.913,17.8c-2.906-2.171-8.932-7.5-8.932-11.5A4.287,4.287,0,0,1,5.805,2.7,4.287,4.287,0,0,1,9.825,7.214h1.786A4.287,4.287,0,0,1,15.631,2.7,4.287,4.287,0,0,1,19.65,7.214C19.65,11.217,13.624,16.547,10.718,18.718Z"
            transform="translate(0.005 -0.917)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
};

export const ProductDetailsFillIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        id="Group_15646"
        data-name="Group 15646"
        transform="translate(-54 -741)"
      >
        <Rect
          id="Rectangle_17706"
          data-name="Rectangle 17706"
          width={24}
          height={24}
          transform="translate(54 741)"
          fill="none"
        />
        <G
          id="Component_47_24"
          data-name="Component 47 \u2013 24"
          transform="translate(56 743.677)"
        >
          <Path
            id="heart_2_"
            data-name="heart (2)"
            d="M14.693.917a5.361,5.361,0,0,0-4.618,2.822A5.361,5.361,0,0,0,5.457.917,5.774,5.774,0,0,0,0,6.947C0,12.741,9.2,19.433,9.59,19.717l.485.35.485-.35c.391-.282,9.591-6.976,9.591-12.771A5.774,5.774,0,0,0,14.693.917Z"
            transform="translate(0.005 -0.917)"
            fill="red"
          />
        </G>
      </G>
    </Svg>
  );
};

export const ProductDetailsIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        id="Group_15575"
        data-name="Group 15575"
        transform="translate(0 0.091)"
      >
        <Rect
          id="Rectangle_17706"
          data-name="Rectangle 17706"
          width={24}
          height={24}
          transform="translate(0 -0.091)"
          fill="none"
        />
        <G
          id="Component_47_20"
          data-name="Component 47 \u2013 20"
          transform="translate(2 2.586)"
        >
          <G id="_01_align_center" data-name="01 align center">
            <Path
              id="Path_27995"
              data-name="Path 27995"
              d="M14.692.917A5.36,5.36,0,0,0,10.074,3.74,5.36,5.36,0,0,0,5.457.917,5.774,5.774,0,0,0,0,6.948c0,5.8,9.2,12.489,9.59,12.773l.485.35.485-.35c.391-.282,9.59-6.978,9.59-12.773A5.774,5.774,0,0,0,14.692.917ZM10.074,17.965c-2.731-2.079-8.4-7.186-8.4-11.017a4.079,4.079,0,0,1,3.778-4.32,4.079,4.079,0,0,1,3.778,4.32h1.679a4.079,4.079,0,0,1,3.778-4.32,4.079,4.079,0,0,1,3.778,4.32C18.47,10.781,12.806,15.886,10.074,17.965Z"
              transform="translate(0.005 -0.917)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const ReadMsgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.419}
      height={7.699}
      viewBox="0 0 14.419 7.699"
      {...props}
    >
      <G data-name="Group 8655">
        <Path
          data-name="Path 11087"
          d="M10.445 1.152L3.95 7.66a.146.146 0 01-.2 0L.04 3.964a.146.146 0 010-.2l.9-.911a.146.146 0 01.2 0l2.69 2.691L9.347.04a.146.146 0 01.2 0l.9.9a.139.139 0 010 .212z"
          fill="#188bff"
        />
      </G>
      <G data-name="Group 8656">
        <Path
          data-name="Path 11088"
          d="M54.555 1.152L48.047 7.66a.146.146 0 01-.2 0L46.44 6.24a.146.146 0 010-.2l.9-.9a.146.146 0 01.2 0l.4.4 5.517-5.5a.146.146 0 01.2 0l.9.9a.139.139 0 010 .212z"
          transform="translate(6.214) translate(-46.4)"
          fill="#188bff"
        />
      </G>
    </Svg>
  );
};

export const SentMsgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.419}
      height={7.699}
      viewBox="0 0 14.419 7.699"
      {...props}
    >
      <G data-name="Group 8655">
        <Path
          data-name="Path 11087"
          d="M10.445 1.152L3.95 7.66a.146.146 0 01-.2 0L.04 3.964a.146.146 0 010-.2l.9-.911a.146.146 0 01.2 0l2.69 2.691L9.347.04a.146.146 0 01.2 0l.9.9a.139.139 0 010 .212z"
          fill="#a7a7a7"
        />
      </G>
      <G data-name="Group 8656">
        <Path
          data-name="Path 11088"
          d="M54.555 1.152L48.047 7.66a.146.146 0 01-.2 0L46.44 6.24a.146.146 0 010-.2l.9-.9a.146.146 0 01.2 0l.4.4 5.517-5.5a.146.146 0 01.2 0l.9.9a.139.139 0 010 .212z"
          transform="translate(6.214) translate(-46.4)"
          fill="#a7a7a7"
        />
      </G>
    </Svg>
  );
};

export const SendMsgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10.495}
      height={7.699}
      viewBox="0 0 10.495 7.699"
      {...props}
    >
      <G data-name="Group 8655">
        <Path
          data-name="Path 11087"
          d="M10.445 1.152L3.95 7.66a.146.146 0 01-.2 0L.04 3.964a.146.146 0 010-.2l.9-.911a.146.146 0 01.2 0l2.69 2.691L9.347.04a.146.146 0 01.2 0l.9.9a.139.139 0 010 .212z"
          fill="#a7a7a7"
        />
      </G>
    </Svg>
  );
};

export const SoundOnIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.height ?? 24}
      height={props?.width ?? 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G id="Sound_On" transform="translate(-618 -1220)">
        <Rect
          id="Rectangle_4787"
          data-name="Rectangle 4787"
          width={props?.height ?? 24}
          height={props?.width ?? 24}
          transform="translate(618 1220)"
          fill="none"
        />
        <G
          id="Iconly_Light_Volume_Down"
          data-name="Iconly Light Volume Down"
          transform="translate(2 125)"
        >
          <G id="Volume_Down-4" data-name="Volume Down-4">
            <Path
              id="Stroke_1-75"
              data-name="Stroke 1-75"
              d="M619.778,1107.351c0,1.23-.058,2.907.7,3.534.71.585,1.209.434,2.5.529s4.033,3.907,6.142,2.7c1.1-.854,1.178-2.648,1.178-6.763s-.081-5.909-1.169-6.764c-2.109-1.207-4.845,2.6-6.142,2.7s-1.794-.055-2.509.529C619.722,1104.444,619.778,1106.121,619.778,1107.351Z"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
            <Path
              id="Stroke_5-37"
              data-name="Stroke 5-37"
              d="M634.359,1103.665a7.4,7.4,0,0,1,0,7.372"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const SoundOffIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G id="Sound_Off" transform="translate(-648 -1220)">
        <Rect
          id="Rectangle_4788"
          data-name="Rectangle 4788"
          width={24}
          height={24}
          transform="translate(648 1220)"
          fill="none"
        />
        <G
          id="Iconly_Light_Volume_Off"
          data-name="Iconly Light Volume Off"
          transform="translate(-16 125)"
        >
          <G id="Volume_Off-4" data-name="Volume Off-4">
            <Path
              id="Stroke_1-76"
              data-name="Stroke 1-76"
              d="M678.311,1104.818l-6.819,6.82a1.194,1.194,0,0,0-.494-.177c-1.3-.093-1.8.056-2.509-.55-.766-.655-.711-2.4-.711-3.677s-.055-3.022.71-3.678c.709-.606,1.213-.448,2.509-.55s4.04-4.056,6.157-2.806C678.013,1100.9,678.246,1102.206,678.311,1104.818Z"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
            <Path
              id="Stroke_3-62"
              data-name="Stroke 3-62"
              d="M678.311,1109.268c-.037,2.873-.261,4.273-1.157,5-.98.578-2.09.047-3.134-.709"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
            <Path
              id="Stroke_5-38"
              data-name="Stroke 5-38"
              d="M667.779,1115.351l3.713-3.713,6.819-6.82,5.468-5.467"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const MsgDeleteIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 11164" transform="translate(0 -.134)">
        <Path
          data-name="Rectangle 17421"
          transform="translate(0 .134)"
          fill="none"
          d="M0 0H24V24H0z"
        />
        <G fill="#fff">
          <Path
            data-name="Path 11842"
            d="M19.7 8.7a1.088 1.088 0 00-1.1.9c0 .1-.5 6.8-.9 9.6a1.181 1.181 0 01-1.3 1.2H8.5a1.3 1.3 0 01-1.3-1.2v-.1c-.3-2.8-.8-9.5-.9-9.5a.9.9 0 00-1.1-.9.9.9 0 00-.9 1.1c0 .1.5 6.8.9 9.6a3.159 3.159 0 003.3 3.1h8a3.2 3.2 0 003.2-3.1c.3-2.8.9-9.5.9-9.6a1.088 1.088 0 00-.9-1.1z"
            transform="translate(3 2) translate(-3 -2)"
          />
          <Path
            data-name="Path 11843"
            d="M21 5.5h-3.3a.56.56 0 01-.6-.5l-.3-1.3A2.341 2.341 0 0014.6 2h-4.2a2.32 2.32 0 00-2.2 1.8L7.9 5a.634.634 0 01-.6.5H4a.945.945 0 00-1 1 .945.945 0 001 1h17a.945.945 0 001-1 1 1 0 00-1-1zM9.9 5.4l.2-1.2c0-.1.1-.2.3-.2h4.2c.1 0 .2.1.3.1l.2 1.2v.1H9.9z"
            transform="translate(3 2) translate(-3 -2)"
          />
        </G>
      </G>
    </Svg>
  );
};

export const ProductOrderedSvg = ({ color }) => {
  return (
    <Svg
      id="online-shopping"
      xmlns="http://www.w3.org/2000/svg"
      width="45.193"
      height="45.186"
      viewBox="0 0 45.193 45.186"
    >
      <G
        id="https:_www.flaticon.com_packs_delivery-196"
        data-name="https://www.flaticon.com/packs/delivery-196"
        transform="translate(0)"
      >
        <Path
          id="Path_11961"
          data-name="Path 11961"
          d="M42.462,23.841a2.839,2.839,0,0,0-.968.171,2.68,2.68,0,0,0-2.725-2.669,2.83,2.83,0,0,0-1.125.233,2.664,2.664,0,0,0-2.567-1.8,2.838,2.838,0,0,0-.964.169V2.442A2.409,2.409,0,0,0,31.707.036H11.589A2.409,2.409,0,0,0,9.183,2.442v6.4H5.554L5.142,6.656a.882.882,0,0,0-.98-.711c-.038,0-3.279-.008-3.279-.008a.883.883,0,1,0,0,1.765h2.66l2.516,13.35a.883.883,0,0,0,.867.719h.963a3.23,3.23,0,0,0,1.294,1.782V36.742a2.407,2.407,0,0,0,2.4,2.4l16.3.032c.034.034.066.068.1.1a5.247,5.247,0,0,1,1.276,4.144,1.8,1.8,0,0,0,1.8,1.8h1.5a.883.883,0,1,0,0-1.765h-1.5a.035.035,0,0,1-.03-.033A6.9,6.9,0,0,0,29.3,38.1a8.867,8.867,0,0,0-1.412-1.19c-.927-.677-1.49-1.13-1.49-1.717V28.812a.652.652,0,0,1,.142-.484,1.043,1.043,0,0,1,.815.075,2.021,2.021,0,0,1,1.3,1.9V33.09a.883.883,0,0,0,1.765,0V18.047a.969.969,0,1,1,1.927,0V28.159a.883.883,0,1,0,1.765,0V22.608a.946.946,0,0,1,.964-1.07.975.975,0,0,1,.665.249,1.079,1.079,0,0,1,.3.822v6.477a.883.883,0,0,0,1.765,0V24.179a.946.946,0,0,1,.964-1.07.975.975,0,0,1,.665.249,1.079,1.079,0,0,1,.3.822V30.01a.883.883,0,0,0,1.765,0V26.678a.97.97,0,1,1,1.93,0v8.817a5.842,5.842,0,0,1-.711,2.351,5.186,5.186,0,0,0-.687,2.749v2.829a.037.037,0,0,1-.033.033H40.485a.883.883,0,1,0,0,1.765H42a1.8,1.8,0,0,0,1.8-1.8V40.595a3.476,3.476,0,0,1,.492-1.942,7.565,7.565,0,0,0,.9-3.013.883.883,0,0,0,.005-.1V26.678a2.694,2.694,0,0,0-2.731-2.837ZM16.575,1.8H26.722V2.73a.932.932,0,0,1-.931.931H17.506a.932.932,0,0,1-.931-.931V1.8ZM7.889,20.006H7.658l-1.771-9.4H24.639l-1.769,9.4h-.233a3.215,3.215,0,0,0-6.182,0H14.071a3.215,3.215,0,0,0-6.182,0ZM21,20.889a1.45,1.45,0,1,1-1.449-1.449A1.452,1.452,0,0,1,21,20.889Zm-11.465,0a1.45,1.45,0,1,1,1.451,1.451A1.452,1.452,0,0,1,9.53,20.889ZM11.589,37.38a.648.648,0,0,1-.641-.638V34.733H24.63V35.2a3.019,3.019,0,0,0,1.058,2.212Zm20.758-22a2.839,2.839,0,0,0-.964-.169,2.693,2.693,0,0,0-2.728,2.837v9.042a3.846,3.846,0,0,0-.668-.334,2.605,2.605,0,0,0-2.437.109,2.21,2.21,0,0,0-.92,1.927s0,.009,0,.013v4.163H10.949V24.105h.033a3.22,3.22,0,0,0,3.09-2.334h2.383a3.214,3.214,0,0,0,6.183,0H23.6a.883.883,0,0,0,.867-.719l2.1-11.165A.883.883,0,0,0,25.7,8.842H10.949v-6.4a.641.641,0,0,1,.641-.641h3.22V2.73a2.7,2.7,0,0,0,2.7,2.7h8.285a2.7,2.7,0,0,0,2.7-2.7V1.8h3.22a.642.642,0,0,1,.641.641V15.38Z"
          transform="translate(0 -0.036)"
          fill={color ? color : '#188bff'}
        />
        <Path
          id="Path_11962"
          data-name="Path 11962"
          d="M163.816,146.95a.883.883,0,0,0,.883-.883v-3.242a.883.883,0,0,0-1.765,0v3.242A.883.883,0,0,0,163.816,146.95Z"
          transform="translate(-148.551 -129.417)"
          fill={color ? color : '#188bff'}
        />
        <Path
          id="Path_11963"
          data-name="Path 11963"
          d="M116.178,144.217v-1.391a.883.883,0,0,0-1.765,0v1.391a.883.883,0,0,0,1.765,0Z"
          transform="translate(-104.314 -129.417)"
          fill={color ? color : '#188bff'}
        />
        <Path
          id="Path_11964"
          data-name="Path 11964"
          d="M212.335,145.1a.883.883,0,0,0,.883-.883v-1.391a.883.883,0,0,0-1.765,0v1.391A.883.883,0,0,0,212.335,145.1Z"
          transform="translate(-192.788 -129.417)"
          fill={color ? color : '#188bff'}
        />
        <Path
          id="Path_11965"
          data-name="Path 11965"
          d="M404.657,491.964a.883.883,0,0,0,0,1.765h0a.883.883,0,0,0,0-1.765Z"
          transform="translate(-368.134 -448.543)"
          fill={color ? color : '#188bff'}
        />
      </G>
    </Svg>
  );
};

export const ProductPackedSvg = ({ color }) => {
  return (
    <Svg
      id="package"
      xmlns="http://www.w3.org/2000/svg"
      width="45.192"
      height="45.192"
      viewBox="0 0 45.192 45.192"
    >
      <G id="Group_10701" data-name="Group 10701" transform="translate(0)">
        <Path
          id="Path_11966"
          data-name="Path 11966"
          d="M381.047,390.749h-3.39a.883.883,0,1,0,0,1.765h3.39a.883.883,0,0,0,0-1.765Z"
          transform="translate(-343.517 -356.259)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11967"
          data-name="Path 11967"
          d="M354.413,351.043h5.442a.883.883,0,1,0,0-1.765h-5.442a.883.883,0,1,0,0,1.765Z"
          transform="translate(-322.325 -318.449)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11968"
          data-name="Path 11968"
          d="M90.773,341.88h-9.24a1.856,1.856,0,0,0-1.854,1.854v2.372a1.856,1.856,0,0,0,1.854,1.854h9.24a1.856,1.856,0,0,0,1.854-1.854v-2.372A1.856,1.856,0,0,0,90.773,341.88Zm.088,4.225a.091.091,0,0,1-.088.088h-9.24a.091.091,0,0,1-.088-.088v-2.372a.09.09,0,0,1,.088-.088h9.24a.093.093,0,0,1,.088.088v2.372Z"
          transform="translate(-72.647 -311.704)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11969"
          data-name="Path 11969"
          d="M44.31,38.578H42.245V.883A.883.883,0,0,0,41.362,0H20.416a.883.883,0,0,0-.883.883V14.124H3.83a.883.883,0,0,0-.883.883V38.578H.883A.883.883,0,0,0,0,39.461V44.31a.883.883,0,0,0,.883.883H18.632a.883.883,0,1,0,0-1.765H1.765V40.343H43.427v3.084H26.558a.883.883,0,1,0,0,1.765H44.31a.883.883,0,0,0,.883-.883V39.461A.883.883,0,0,0,44.31,38.578ZM28.9,1.765h3.967V5.942L31.357,5a.883.883,0,0,0-.936,0L28.9,5.943V1.765Zm-7.606,0h5.841v5.77a.883.883,0,0,0,1.35.749l2.4-1.5,2.4,1.5a.883.883,0,0,0,1.351-.748V1.765H40.48V38.578H29.167V15.006a.883.883,0,0,0-.883-.883H21.3ZM13.755,15.889h4.6V20.8l-1.834-1.147a.883.883,0,0,0-.936,0L13.755,20.8Zm-9.042,0H11.99V22.4a.883.883,0,0,0,1.351.748l2.717-1.7,2.717,1.7a.883.883,0,0,0,1.351-.748V15.889H27.4V38.578H4.713Z"
          transform="translate(0)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11970"
          data-name="Path 11970"
          d="M246.869,492a.883.883,0,1,0,0,1.765h.005a.883.883,0,1,0-.005-1.765Z"
          transform="translate(-224.274 -448.573)"
          fill={color ? color : '#a7a7a7'}
        />
      </G>
    </Svg>
  );
};

export const ProductShippedSvg = ({ color }) => {
  return (
    <Svg
      id="delivery-truck_1_"
      data-name="delivery-truck (1)"
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="36.918"
      viewBox="0 0 51 36.918"
    >
      <G
        id="Group_10698"
        data-name="Group 10698"
        transform="translate(10.839 30.223)"
      >
        <Path
          id="Path_11955"
          data-name="Path 11955"
          d="M109.819,376.1a1,1,0,1,1-.006-1.992h.006a1,1,0,1,1,0,1.992Z"
          transform="translate(-108.82 -374.103)"
          fill={color ? color : '#a7a7a7'}
        />
      </G>
      <G id="Group_10699" data-name="Group 10699" transform="translate(0)">
        <Path
          id="Path_11956"
          data-name="Path 11956"
          d="M49.489,98.116v-8.6a1.007,1.007,0,0,0-.069-.365L44.44,76.5a1,1,0,0,0-.927-.631H33.966V71.682a1,1,0,0,0-1-1H20.563a1,1,0,1,0,0,1.992h11.41v3.186H29.135a1,1,0,0,0-1,1V97.909H15.866a5.622,5.622,0,0,0-8.061,0H3.5V83.578H16.625v1.651a1,1,0,0,0,1.573.812l6.511-4.629a1,1,0,0,0,0-1.624L18.2,75.16a1,1,0,0,0-1.573.812v1.651H3.5V72.678h8.115a1,1,0,1,0,0-1.992H2.507a1,1,0,0,0-1,1V98.116A2.52,2.52,0,0,0,0,100.425v1.059A2.516,2.516,0,0,0,2.507,104H6.574A5.644,5.644,0,0,0,17.1,104H32.471a5.644,5.644,0,0,0,10.523,0h5.5A2.516,2.516,0,0,0,51,101.484v-1.059a2.52,2.52,0,0,0-1.511-2.308ZM3.5,79.615H17.621a1,1,0,0,0,1-1V77.9l3.8,2.7-3.8,2.7v-.717a1,1,0,0,0-1-1H3.5Zm2.675,22.4H2.507a.528.528,0,0,1-.514-.527v-1.059a.526.526,0,0,1,.514-.524H6.537a5.7,5.7,0,0,0-.362,2c0,.035,0,.07,0,.105Zm5.658,3.6a3.707,3.707,0,1,1,3.668-3.707A3.692,3.692,0,0,1,11.836,105.612Zm35.2-17.091H36.93V82.075h7.564Zm-16.9-10.664h12.7l.876,2.227H35.934a1,1,0,0,0-1,1v8.438a1,1,0,0,0,1,1H47.5v2.7H46.031a1,1,0,1,0,0,1.992H47.5v2.7H41.763a5.622,5.622,0,0,0-8.061,0H30.131ZM17.493,102.011c0-.035,0-.07,0-.106a5.705,5.705,0,0,0-.362-2h15.3a5.7,5.7,0,0,0-.362,2c0,.035,0,.07,0,.106Zm20.239,3.6a3.707,3.707,0,1,1,3.668-3.707A3.692,3.692,0,0,1,37.733,105.612Zm11.275-4.128a.528.528,0,0,1-.514.527h-5.1c0-.035,0-.07,0-.106a5.705,5.705,0,0,0-.362-2h5.462a.526.526,0,0,1,.514.524v1.059Z"
          transform="translate(0 -70.686)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11957"
          data-name="Path 11957"
          d="M369.807,374.1H369.8a1,1,0,1,0,.006,0Z"
          transform="translate(-332.071 -343.88)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11958"
          data-name="Path 11958"
          d="M61.486,286.739a1,1,0,1,0,0,1.992h4.9a1,1,0,1,0,0-1.992Z"
          transform="translate(-54.465 -265.218)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11959"
          data-name="Path 11959"
          d="M70.365,247.267a1,1,0,0,0-1-1H61.486a1,1,0,1,0,0,1.992h7.883A1,1,0,0,0,70.365,247.267Z"
          transform="translate(-54.465 -228.781)"
          fill={color ? color : '#a7a7a7'}
        />
        <Path
          id="Path_11960"
          data-name="Path 11960"
          d="M152.533,72.678h0a1,1,0,1,0-1-1A.995.995,0,0,0,152.536,72.678Z"
          transform="translate(-136.443 -70.686)"
          fill={color ? color : '#a7a7a7'}
        />
      </G>
    </Svg>
  );
};

export const ProductDeliveredSvg = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.985"
      height="45.17"
      viewBox="0 0 39.985 45.17"
    >
      <G
        id="delivery-box_1_"
        data-name="delivery-box (1)"
        transform="translate(0)"
      >
        <G id="Group_10697" data-name="Group 10697" transform="translate(0)">
          <Path
            id="Path_11944"
            data-name="Path 11944"
            d="M69.26,241.566l-3.162-6.21a.883.883,0,0,0-.787-.482h-31.9a.883.883,0,0,0-.787.482l-3.162,6.21a.883.883,0,0,0,.787,1.283h1.1V258.43a.883.883,0,0,0,.883.883H66.487a.883.883,0,0,0,.883-.883v-15.58h1.1a.883.883,0,0,0,.787-1.283Zm-4.489-4.927,2.263,4.445H53.067L50.8,236.639Zm-30.814,0H47.924l-2.263,4.445H31.694ZM65.6,257.547H50.247v-4.892a.883.883,0,0,0-1.765,0v4.892H33.122v-14.7H46.2a.883.883,0,0,0,.787-.482l1.492-2.931v5.293a.883.883,0,1,0,1.765,0v-5.293l1.492,2.931a.883.883,0,0,0,.787.482H65.6Z"
            transform="translate(-29.372 -214.143)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11945"
            data-name="Path 11945"
            d="M109.327,436.98H104.3a.883.883,0,1,0,0,1.765h5.026a.883.883,0,1,0,0-1.765Z"
            transform="translate(-96.882 -398.409)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11946"
            data-name="Path 11946"
            d="M162.285,18.136a9.068,9.068,0,1,0-9.06-9.069A9.074,9.074,0,0,0,162.285,18.136Zm0-16.371a7.3,7.3,0,1,1-7.3,7.3A7.305,7.305,0,0,1,162.285,1.765Z"
            transform="translate(-142.293)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11947"
            data-name="Path 11947"
            d="M207.817,67.635l2.349,1.991a.883.883,0,0,0,.571.209q.038,0,.075,0a.883.883,0,0,0,.6-.313l4.421-5.284a.883.883,0,1,0-1.354-1.133l-3.851,4.6-1.672-1.417a.883.883,0,0,0-1.142,1.347Z"
            transform="translate(-191.782 -57.244)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11948"
            data-name="Path 11948"
            d="M50.3,94.485h3.819a.883.883,0,1,0,0-1.765H50.3a.883.883,0,1,0,0,1.765Z"
            transform="translate(-47.65 -84.536)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11949"
            data-name="Path 11949"
            d="M49.889,25.954l3.819,2.014a.883.883,0,1,0,.824-1.561l-3.819-2.014a.883.883,0,0,0-.824,1.561Z"
            transform="translate(-47.649 -22.146)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11950"
            data-name="Path 11950"
            d="M49.52,141.661a.882.882,0,0,0,1.192.37l3.819-2.012a.883.883,0,0,0-.823-1.562l-3.819,2.012a.883.883,0,0,0-.37,1.192Z"
            transform="translate(-47.649 -126.143)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11951"
            data-name="Path 11951"
            d="M399.914,94.485h3.819a.883.883,0,1,0,0-1.765h-3.819a.883.883,0,0,0,0,1.765Z"
            transform="translate(-366.402 -84.536)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11952"
            data-name="Path 11952"
            d="M399.913,28.069a.879.879,0,0,0,.411-.1l3.819-2.014a.883.883,0,1,0-.824-1.561L399.5,26.406a.883.883,0,0,0,.412,1.664Z"
            transform="translate(-366.401 -22.146)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11953"
            data-name="Path 11953"
            d="M399.5,140.017l3.819,2.012a.883.883,0,0,0,.823-1.562l-3.819-2.012a.883.883,0,0,0-.823,1.562Z"
            transform="translate(-366.4 -126.141)"
            fill={color ? color : '#a7a7a7'}
          />
          <Path
            id="Path_11954"
            data-name="Path 11954"
            d="M246.756,381.423a.883.883,0,0,0-.883.883v.005a.883.883,0,1,0,.883-.888Z"
            transform="translate(-226.763 -347.756)"
            fill={color ? color : '#a7a7a7'}
          />
        </G>
      </G>
    </Svg>
  );
};

export const InstagramSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.004}
      height={20.004}
      {...props}
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={0.084}
          x2={0.916}
          y1={0.916}
          y2={0.084}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffd600" />
          <Stop offset={0.5} stopColor="#ff0100" />
          <Stop offset={1} stopColor="#d800b9" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={0.146}
          x2={0.854}
          y1={0.854}
          y2={0.146}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ff6400" />
          <Stop offset={0.5} stopColor="#ff0100" />
          <Stop offset={1} stopColor="#fd0056" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={0.146}
          x2={0.854}
          y1={0.854}
          y2={0.146}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#f30072" />
          <Stop offset={1} stopColor="#e50097" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#a)"
        d="M19.944 5.878a7.343 7.343 0 0 0-.465-2.428 4.9 4.9 0 0 0-1.154-1.772A4.9 4.9 0 0 0 16.553.525 7.342 7.342 0 0 0 14.126.06C13.059.011 12.718 0 10 0S6.945.011 5.878.06A7.344 7.344 0 0 0 3.45.525a4.9 4.9 0 0 0-1.771 1.154A4.9 4.9 0 0 0 .525 3.45 7.343 7.343 0 0 0 .06 5.878C.011 6.945 0 7.285 0 10s.012 3.057.06 4.124a7.341 7.341 0 0 0 .465 2.428 4.9 4.9 0 0 0 1.154 1.771 4.9 4.9 0 0 0 1.771 1.156 7.339 7.339 0 0 0 2.428.465C6.945 19.992 7.286 20 10 20s3.057-.011 4.124-.06a7.34 7.34 0 0 0 2.428-.465 5.114 5.114 0 0 0 2.925-2.925 7.341 7.341 0 0 0 .465-2.428c.049-1.067.06-1.407.06-4.124s-.012-3.057-.06-4.124Zm-1.8 8.166A5.534 5.534 0 0 1 17.8 15.9a3.312 3.312 0 0 1-1.9 1.9 5.534 5.534 0 0 1-1.857.344c-1.054.048-1.371.058-4.042.058s-2.987-.01-4.042-.058A5.536 5.536 0 0 1 4.1 17.8a3.1 3.1 0 0 1-1.15-.748A3.1 3.1 0 0 1 2.2 15.9a5.534 5.534 0 0 1-.344-1.857C1.812 12.989 1.8 12.673 1.8 10s.01-2.987.058-4.042A5.538 5.538 0 0 1 2.2 4.1a3.1 3.1 0 0 1 .748-1.15A3.1 3.1 0 0 1 4.1 2.2a5.533 5.533 0 0 1 1.86-.34C7.015 1.812 7.331 1.8 10 1.8c2.671 0 2.987.01 4.042.058A5.535 5.535 0 0 1 15.9 2.2a3.1 3.1 0 0 1 1.15.748A3.1 3.1 0 0 1 17.8 4.1a5.529 5.529 0 0 1 .344 1.857c.048 1.055.058 1.371.058 4.042s-.01 2.987-.058 4.042Zm0 0"
        data-name="Path 28041"
      />
      <Path
        fill="url(#b)"
        d="M129.675 124.539a5.136 5.136 0 1 0 5.136 5.136 5.136 5.136 0 0 0-5.136-5.136Zm0 8.47a3.334 3.334 0 1 1 3.334-3.334 3.334 3.334 0 0 1-3.334 3.334Zm0 0"
        data-name="Path 28042"
        transform="translate(-119.673 -119.673)"
      />
      <Path
        fill="url(#c)"
        d="M364.33 89.826a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2Zm0 0"
        data-name="Path 28043"
        transform="translate(-347.789 -85.163)"
      />
    </Svg>
  );
};

export const LiveStreamIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 40 40"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={0.546}
          y1={1}
          x2={0.551}
          y2={0.02}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#188bff" />
          <Stop offset={1} stopColor="#a126ff" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 15650">
        <G data-name="Group 15649">
          <Rect
            data-name="Rectangle 22"
            width={40}
            height={40}
            rx={20}
            transform="translate(-319 -50) translate(301 -679) translate(18 729)"
            fill="#fff"
          />
        </G>
        <Path
          d="M12 4a6.952 6.952 0 014.949 2.05 1 1 0 11-1.414 1.414 5 5 0 00-7.07 0A1 1 0 117.051 6.05 6.952 6.952 0 0112 4zm-6.364.636a9.012 9.012 0 0112.729 0 1 1 0 001.414-1.414 11.013 11.013 0 00-15.557 0 1 1 0 001.414 1.414zM24 14v6a4 4 0 01-4 4H4a4 4 0 01-4-4v-6a4 4 0 014-4h16a4 4 0 014 4zM6 20a1 1 0 00-1-1v-5a1 1 0 00-2 0v6a1 1 0 001 1h1a1 1 0 001-1zm3-6a1 1 0 00-2 0v6a1 1 0 002 0zm6.316-.949a1 1 0 00-1.265.632L13 16.837l-1.052-3.154a1 1 0 00-1.9.633l2 6a1 1 0 001.9 0l2-6a1 1 0 00-.632-1.265zM19 16v-1h1a1 1 0 000-2h-1.5a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5H20a1 1 0 000-2h-1v-1h1a1 1 0 000-2z"
          transform="translate(-319 -50) translate(327 57.995)"
          fill="url(#a)"
        />
      </G>
    </Svg>
  );
};

export const TotalUserIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      viewBox="0 0 38 38"
      {...props}
    >
      <Path
        data-name="users-alt (1)"
        d="M19 25.333A6.333 6.333 0 1125.333 19 6.333 6.333 0 0119 25.333zm-10 0H1.583A1.583 1.583 0 010 23.75a9.535 9.535 0 018.124-9.367 1.583 1.583 0 011.742 2A9.514 9.514 0 009.5 19a9.4 9.4 0 00.928 4.069A1.583 1.583 0 019 25.333zM26.917 38H11.083A1.583 1.583 0 019.5 36.417a9.5 9.5 0 0119 0A1.583 1.583 0 0126.917 38zM28.5 12.667a6.333 6.333 0 116.333-6.333 6.333 6.333 0 01-6.333 6.333zm-19 0a6.333 6.333 0 116.333-6.333A6.333 6.333 0 019.5 12.667zm26.917 12.666H29a1.583 1.583 0 01-1.425-2.264A9.4 9.4 0 0028.5 19a9.514 9.514 0 00-.374-2.613 1.583 1.583 0 011.75-2A9.535 9.535 0 0138 23.75a1.583 1.583 0 01-1.583 1.583z"
        fill="#fff"
      />
    </Svg>
  );
};

export const UserIcon = props => {
  return (
    <Svg
      data-name="Group 15589"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path data-name="Rectangle 17437" fill="none" d="M0 0H24V24H0z" />
      <G data-name="user (2)" transform="translate(-60 1.813)" fill="#fff">
        <Ellipse
          data-name="Ellipse 692"
          cx={5.579}
          cy={5.114}
          rx={5.579}
          ry={5.114}
          transform="translate(66.204 .187)"
        />
        <Path
          data-name="Path 28014"
          d="M71.782 298.667A7.79 7.79 0 0064 306.449a.865.865 0 00.865.865H78.7a.865.865 0 00.865-.865 7.79 7.79 0 00-7.783-7.782z"
          transform="translate(0 -286.498)"
        />
      </G>
    </Svg>
  );
};

export const TotalEarnIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.081}
      height={39}
      viewBox="0 0 39.081 39"
      {...props}
    >
      <Path
        d="M11.887 31.885h3.094v7.165H4.885A4.891 4.891 0 010 34.165v-8.142a8.113 8.113 0 013.307-6.514h17.807a8.222 8.222 0 012.609 3.257H11.887v9.119zm3.257-3.257h3.094V39.05h2.605V28.628H24.1v-2.605h-8.956zm6.025-17.261h-3.257a4.885 4.885 0 00-9.77 0H3.257v4.885h17.912zM24.467.05a4.844 4.844 0 104.844 4.844A4.845 4.845 0 0024.467.05zm1.588 39h2.605V26.023h-2.606zm13.027-8.956a4.07 4.07 0 01-4.071 4.071h-1.466v4.885h-2.606V26.023h4.071a4.07 4.07 0 014.071 4.071zm-2.605 0a1.466 1.466 0 00-1.466-1.466h-1.466v2.933h1.465a1.466 1.466 0 001.466-1.461z"
        transform="translate(0 -.05)"
        fill="#fff"
      />
    </Svg>
  );
};

export const TrendBoardingSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={147}
      height={29}
      viewBox="0 0 147 29"
      {...props}
    >
      <G
        id="Trends_SVG_White_Logo-01"
        data-name="Trends SVG White Logo-01"
        transform="translate(-214.99 -244.5)"
      >
        <Rect
          id="Rectangle_17738"
          data-name="Rectangle 17738"
          width={20.4}
          height={6.439}
          rx={3.22}
          transform="translate(280.837 244.5)"
          fill="#188bff"
        />
        <Rect
          id="Rectangle_17739"
          data-name="Rectangle 17739"
          width={20.4}
          height={6.439}
          rx={3.22}
          transform="translate(280.837 267.061)"
          fill="#188bff"
        />
        <Path
          id="Path_28003"
          data-name="Path 28003"
          d="M237.878,255.73H214.99v5.321h7.929V283.7h7.03v-22.65h7.929Z"
          transform="translate(0 -10.679)"
          fill="#fff"
        />
        <Path
          id="Path_28004"
          data-name="Path 28004"
          d="M1378.27,281.049V302.32a2.134,2.134,0,0,0,3.37,1.759l15.32-10.636a2.167,2.167,0,0,0,0-3.518l-15.32-10.636A2.134,2.134,0,0,0,1378.27,281.049Z"
          transform="translate(-1106.744 -32.701)"
          fill="#188bff"
        />
        <Path
          id="Path_28005"
          data-name="Path 28005"
          d="M2112.593,255.73v15.349l-10.988-15.349h-6.956V283.7h6.956V268.23l10.988,15.471h6.955V255.73Z"
          transform="translate(-1788.308 -10.679)"
          fill="#fff"
        />
        <Path
          id="Path_28006"
          data-name="Path 28006"
          d="M920.111,254.99l-.011.036h.034Z"
          transform="translate(-670.841 -9.975)"
          fill="#fff"
        />
        <Path
          id="Path_28007"
          data-name="Path 28007"
          d="M782.2,273.48a8.274,8.274,0,0,0,4.85-7.552V264a8.229,8.229,0,0,0-8.19-8.269H763.42V283.7h6.956v-9.5H774.4l5.465,9.467h8.724Zm-11.53-4.645v-8.244h6.142a4.1,4.1,0,0,1,4.082,4.122h0a4.1,4.1,0,0,1-4.082,4.122Z"
          transform="translate(-521.776 -10.679)"
          fill="#fff"
        />
        <Path
          id="Path_28008"
          data-name="Path 28008"
          d="M2733.2,255.73h-13.52V283.7h13.963a11.363,11.363,0,0,0,11.308-11.417v-4.69A11.808,11.808,0,0,0,2733.2,255.73Zm4.753,15.6a7.22,7.22,0,0,1-7.185,7.254h-4.02v-17.74h4.5a6.733,6.733,0,0,1,6.7,6.765Z"
          transform="translate(-2382.961 -10.679)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const RefreshIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="#ffff"
      {...props}
    >
      <G id="_01_align_center" data-name="01 align center">
        <Path d="M12,2a10.032,10.032,0,0,1,7.122,3H15V7h5.143A1.859,1.859,0,0,0,22,5.143V0H20V3.078A11.982,11.982,0,0,0,0,12H2A10.011,10.011,0,0,1,12,2Z" />
        <Path d="M22,12A9.986,9.986,0,0,1,4.878,19H9V17H3.857A1.859,1.859,0,0,0,2,18.857V24H4V20.922A11.982,11.982,0,0,0,24,12Z" />
      </G>
    </Svg>
  );
};

export const CameraSlash = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      fill="#ffff"
      {...props}
    >
      <Path d="m23.707,22.293l-1.536-1.536c.538-.813.829-1.771.829-2.757v-8c0-2.757-2.243-5-5-5h-.017l-1.834-2.69c-.559-.82-1.485-1.31-2.479-1.31h-3.34c-.993,0-1.92.489-2.479,1.31l-1.673,2.455L1.707.293C1.316-.098.684-.098.293.293S-.098,1.316.293,1.707l22,22c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414Zm-2.707-12.293v8c0,.451-.102.892-.293,1.293l-3.903-3.903c.13-.45.196-.915.196-1.39,0-2.757-2.243-5-5-5-.474,0-.94.066-1.39.196l-2.196-2.196h9.586c1.654,0,3,1.346,3,3ZM10.33,3h3.34c.331,0,.64.163.826.437l1.066,1.563h-7.124l1.066-1.563c.187-.273.495-.437.826-.437Zm6.67,19c0,.553-.447,1-1,1H6c-2.757,0-5-2.243-5-5v-8c0-.881.231-1.745.67-2.502.277-.478.887-.642,1.367-.363.478.277.641.889.363,1.367-.262.451-.4.97-.4,1.498v8c0,1.654,1.346,3,3,3h10c.553,0,1,.447,1,1Zm-5-3c-2.757,0-5-2.243-5-5,0-.553.447-1,1-1s1,.447,1,1c0,1.654,1.346,3,3,3,.553,0,1,.447,1,1s-.447,1-1,1Z" />
    </Svg>
  );
};

export const CameraIcon1 = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      fill="#ffff"
      {...props}
    >
      <Path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z" />
      <Path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z" />
    </Svg>
  );
};

export const EmptyStar = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || '24'}
      height={props?.size || '24'}
      viewBox="0 0 18 18"
      {...props}
    >
      <Path
        data-name="\uD83D\uDD39-Icon-Color"
        d="M12.443 18.647l4.365 2.762a1.061 1.061 0 001.567-1.189l-1.157-5.194 3.86-3.5a1.11 1.11 0 00-.6-1.926L15.4 9.149l-1.989-4.908a1.035 1.035 0 00-1.935 0l-1.988 4.9-5.08.451a1.11 1.11 0 00-.6 1.926l3.86 3.5-1.157 5.192a1.061 1.061 0 001.567 1.19z"
        transform="translate(-3.443 -3.573)"
        fill="#a7a7a7"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const FullStar = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || '24'}
      height={props?.size || '24'}
      viewBox="0 0 18 18"
      {...props}
    >
      <Path
        data-name="\uD83D\uDD39-Icon-Color"
        d="M12.443 18.647l4.365 2.762a1.061 1.061 0 001.567-1.189l-1.157-5.194 3.86-3.5a1.11 1.11 0 00-.6-1.926L15.4 9.149l-1.989-4.908a1.035 1.035 0 00-1.935 0l-1.988 4.9-5.08.451a1.11 1.11 0 00-.6 1.926l3.86 3.5-1.157 5.192a1.061 1.061 0 001.567 1.19z"
        transform="translate(-3.443 -3.573)"
        fill="#ffdc00"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const HalfStar = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || '24'}
      height={props?.size || '24'}
      viewBox="0 0 18.007 17.989"
      {...props}
    >
      <G data-name="Group 15669" fillRule="evenodd">
        <Path
          data-name="\uD83D\uDD39-Icon-Color"
          d="M12.443 18.647c.01-8.673.008-13.288 0-15.059-.615-.136-.965.653-.965.653l-1.988 4.9-5.08.451a1.11 1.11 0 00-.6 1.926l3.86 3.5-1.159 5.192a1.061 1.061 0 001.567 1.19z"
          transform="translate(-103.945 -1041) translate(100.502 1037.428)"
          fill="#ffdc00"
        />
        <Path
          data-name="\uD83D\uDD39-Icon-Color"
          d="M3.45 18.647c-.01-8.673-.008-13.288 0-15.059.615-.136.965.653.965.653l1.988 4.9 5.08.451a1.11 1.11 0 01.6 1.926l-3.86 3.5 1.159 5.192a1.061 1.061 0 01-1.567 1.19z"
          transform="translate(-103.945 -1041) translate(109.502 1037.428)"
          fill="#a7a7a7"
        />
      </G>
    </Svg>
  );
};

export const ExtraaMenuIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      {...props}
      height={24}
      width={24}
    >
      <G fill="#ffffff" clipPath="url(#a)">
        <Path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const FacebookSvgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <G data-name="Group 15670">
        <Path
          data-name="Path 28065"
          d="M17.5 2.5c-18.6.545-20.494 26.641-2.356 30h4.712C38 29.138 36.094 3.043 17.5 2.5z"
          transform="translate(0 .796) translate(0 -.796) translate(-2.5 -2.5)"
          fill="#1877f2"
        />
        <Path
          data-name="Path 28066"
          d="M38.957 34.726h3.513l.669-4.362h-4.182v-2.831a2.18 2.18 0 012.457-2.357h1.9v-3.714c-4.072-.734-8.964-.51-9.07 5.577v3.325h-3.827v4.362h3.828v10.546h4.712z"
          transform="translate(0 .796) translate(0 -.796) translate(-21.601 -15.272)"
          fill="#f1f1f1"
        />
      </G>
    </Svg>
  );
};

export const TwitterSvgIcon = props => {
  return (
    <Svg
      data-name="twitter (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <Path data-name="Path 28069" d="M15 0a15 15 0 1015 15A15 15 0 0015 0z" />
      <Path
        data-name="Path 28070"
        d="M271.025 260.156l6.421-7.464h-1.522l-5.576 6.481-4.453-6.481h-5.136l6.734 9.8-6.734 7.827h1.522l5.888-6.844 4.7 6.844h5.136l-6.984-10.164zm-8.2-6.319h2.337l10.759 15.389h-2.337z"
        transform="translate(-254.384 -246.514)"
        fill="#fff"
      />
    </Svg>
  );
};

export const LinkedinSvgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <G data-name="Layer 2">
        <G data-name="10.linkedin" transform="translate(.477) translate(-.477)">
          <Circle cx={15} cy={15} r={15} fill="#0b69c7" />
          <G transform="translate(8 8)" fill="#fff">
            <Path
              data-name="Path 28067"
              d="M41.913 39.835A1.836 1.836 0 1140.078 38a1.836 1.836 0 011.835 1.835z"
              transform="translate(-38.24 -38)"
            />
            <Rect
              data-name="Rectangle 17841"
              width={2.841}
              height={9.01}
              rx={1.421}
              transform="translate(.417 4.435)"
            />
            <Path
              data-name="Path 28068"
              d="M72.711 67.123v3.922a.418.418 0 01-.418.418H70.22a.417.417 0 01-.417-.418v-3.8c0-.568.165-2.477-1.482-2.477-1.277 0-1.537 1.313-1.592 1.9v4.384a.418.418 0 01-.414.409h-2.008a.416.416 0 01-.417-.418v-8.171a.418.418 0 01.417-.419h2.006a.419.419 0 01.426.419v.708a2.853 2.853 0 012.677-1.26c3.314-.002 3.295 3.099 3.295 4.803z"
              transform="translate(-59.352 -58.018)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const WhatsappSvgIcon = props => {
  return (
    <Svg
      data-name="whatsapp (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30.131}
      viewBox="0 0 30 30.131"
      {...props}
    >
      <Path
        data-name="Path 28071"
        d="M.641 30.13a.641.641 0 01-.618-.81l1.959-7.153a14.941 14.941 0 1113.078 7.716h-.006a14.97 14.97 0 01-6.913-1.7L.8 30.109a.645.645 0 01-.163.021zm0 0"
        transform="translate(0 .001)"
        fill="#e5e5e5"
      />
      <Path
        data-name="Path 28072"
        d="M10.894 39.743l2.028-7.407A14.3 14.3 0 1125.313 39.5h-.006a14.287 14.287 0 01-6.833-1.74zm7.931-4.576l.434.257a11.869 11.869 0 006.049 1.657 11.884 11.884 0 10-10.068-5.568l.283.45-1.2 4.384zm0 0"
        transform="translate(-10.253 -10.254)"
        fill="#fff"
      />
      <Path
        data-name="Path 28073"
        d="M19.344 47.233l1.956-7.151a13.8 13.8 0 1111.962 6.912h-.006a13.8 13.8 0 01-6.6-1.68zm0 0"
        transform="translate(-18.205 -18.242)"
        fill="#64b161"
      />
      <G data-name="Group 15671" fill="#fff">
        <Path
          data-name="Path 28074"
          d="M10.894 39.743l2.028-7.407A14.3 14.3 0 1125.313 39.5h-.006a14.287 14.287 0 01-6.833-1.74zm7.931-4.576l.434.257a11.869 11.869 0 006.049 1.657 11.884 11.884 0 10-10.068-5.568l.283.45-1.2 4.384zm0 0"
          transform="translate(.641 .641) translate(-10.894 -10.895)"
        />
        <Path
          data-name="Path 28075"
          d="M136.138 142.239c-.268-.595-.549-.607-.8-.617-.208-.009-.447-.008-.685-.008a1.313 1.313 0 00-.953.447 4 4 0 00-1.251 2.98 6.949 6.949 0 001.459 3.7c.179.238 2.472 3.961 6.1 5.393 3.018 1.19 3.632.954 4.287.894a3.608 3.608 0 002.411-1.7 2.984 2.984 0 00.208-1.7c-.089-.149-.328-.238-.685-.417s-2.114-1.043-2.441-1.162-.566-.179-.8.179-.922 1.162-1.131 1.4-.417.269-.774.09a9.769 9.769 0 01-2.873-1.773 10.765 10.765 0 01-1.988-2.474c-.208-.357 0-.534.157-.729a10.768 10.768 0 00.893-1.222.658.658 0 00-.03-.626c-.092-.182-.787-1.949-1.104-2.655zm0 0"
          transform="translate(.641 .641) translate(-125.292 -133.92)"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
};

export const CopyLinkSvgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <Path
        data-name="link (1)"
        d="M15 0a15 15 0 1015 15A15.017 15.017 0 0015 0zm-.972 20l-1.363 1.363a3.779 3.779 0 01-2.679 1.11 3.761 3.761 0 01-2.638-6.426l3.46-3.46a3.764 3.764 0 012.666-1.108h.013a3.73 3.73 0 013.668 2.984.7.7 0 01-1.378.282 2.323 2.323 0 00-2.291-1.86h-.008a2.367 2.367 0 00-1.677.7l-3.46 3.46a2.366 2.366 0 00-.7 1.677 2.326 2.326 0 002.339 2.347h.008a2.366 2.366 0 001.677-.7l1.363-1.363a.7.7 0 11.994.994zm8.634-6.057l-3.437 3.437a3.756 3.756 0 01-6.335-1.886.7.7 0 011.377-.286 2.332 2.332 0 00.636 1.178 2.356 2.356 0 003.328 0l3.437-3.437a2.353 2.353 0 00-3.328-3.328l-1.354 1.354a.7.7 0 11-.994-.994l1.354-1.354a3.76 3.76 0 015.317 5.317z"
        fill="#d4d4d4"
      />
    </Svg>
  );
};

export const TagListSvgIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G data-name="Group 31572">
        <Path
          data-name="Path 51183"
          d="M22 0h-8.312a2.785 2.785 0 00-1.707.707l-11.4 11.4a2 2 0 000 2.828l8.489 8.484a2 2 0 002.827 0l11.4-11.395A2.787 2.787 0 0024 10.317V2a2.006 2.006 0 00-2-2zm-4 8a2 2 0 112-2 2 2 0 01-2 2z"
          transform="translate(0 -.002) translate(0 .002) translate(0 -.002)"
          fill={props?.color}
        />
      </G>
    </Svg>
  );
};

export const RightSvgIcon = props => {
  return (
    <Svg
      fill="#A6A6A6"
      height="100px"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
      stroke="#fff"
      {...props}
    >
      <Path d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 000-21.213z" />
    </Svg>
  );
};

export const ImageUploadIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <G data-name="Group 31643" transform="translate(-8 -233)">
        <Rect
          data-name="Rectangle 17706"
          width={20}
          height={20}
          rx={4}
          transform="translate(8 233)"
          fill="none"
        />
        <G data-name="Group 31644">
          <Path
            data-name="Path 53004"
            d="M15.106 15.268a5.32 5.32 0 00-7.535 0l-6.459 6.483a3.834 3.834 0 000 5.4 3.8 3.8 0 005.382 0l5.92-5.942a2.288 2.288 0 10-3.229-3.241l-3.871 3.887a.763.763 0 101.076 1.08l3.872-3.886a.762.762 0 111.076 1.08l-5.92 5.943a2.288 2.288 0 01-3.229-3.241l6.459-6.483a3.813 3.813 0 015.382 5.4l-6.459 6.486a.766.766 0 000 1.08.759.759 0 001.076 0l6.458-6.483a5.362 5.362 0 000-7.563z"
            transform="translate(9.666 235.5) translate(0 -13.704)"
            fill="#a7a7a7"
          />
        </G>
      </G>
    </Svg>
  );
};

export const UploadCrossIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <Path
        data-name="circle-xmark (1)"
        d="M10.471 6.471L8.943 8l1.529 1.529a.667.667 0 11-.943.943L8 8.943l-1.529 1.528a.667.667 0 01-.943-.943L7.057 8 5.529 6.471a.667.667 0 01.943-.943L8 7.057l1.529-1.528a.667.667 0 11.943.943zM16 8a8 8 0 11-8-8 8.009 8.009 0 018 8zm-1.333 0A6.667 6.667 0 108 14.667 6.674 6.674 0 0014.667 8z"
        fill="#454545"
      />
    </Svg>
  );
};

export const UploadFileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width={22}
      height={22}
      {...props}
    >
      <Path
        d="M12.5 4A4.505 4.505 0 008 8.5v31c0 2.481 2.019 4.5 4.5 4.5h23c2.481 0 4.5-2.019 4.5-4.5V20H28.5a4.505 4.505 0 01-4.5-4.5V4zm14.5.879V15.5c0 .827.673 1.5 1.5 1.5h10.621z"
        transform="scale(5.33333)"
        fill="#454545"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      />
    </Svg>
  );
};

export const PlusIcon = props => {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 12h12m-6-6v12"
        stroke="#A7A7A7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EmojiIcon = props => {
  return (
    <Svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} stroke="#757575" strokeWidth={1.5} />
      <Path
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
        stroke="#757575"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5z"
        fill="#757575"
      />
      <Ellipse cx={9} cy={10.5} rx={1} ry={1.5} fill="#757575" />
    </Svg>
  );
};

export const EditIcon = props => {
  return (
    <Svg
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 12h16m-8-8v16"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
