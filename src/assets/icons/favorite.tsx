import * as React from 'react'
import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
const Favorite = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 22}
    viewBox="0 0 24 22"
    fill="none"
    color={props.color}
    {...props}
  >
    <Path
      fill={props.color || '#1D1E1C'}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.490737 9.8105C-0.477091 9.00086 0.0829086 7.45536 1.33125 7.38255L7.49323 6.96576C7.84932 6.94085 8.18055 6.72048 8.33374 6.37747L10.6762 0.858505C10.9308 0.294148 11.466 0 12.0001 0C12.5353 0 13.0694 0.294148 13.324 0.858505L15.6665 6.37747C15.7938 6.69654 16.1251 6.9169 16.507 6.96576L22.669 7.38255C23.9163 7.45633 24.4773 9.00184 23.5095 9.8105L18.6714 13.6125C18.3909 13.8328 18.2636 14.2008 18.3402 14.5687L19.7914 20.3079C19.9953 21.2402 19.2821 22 18.4416 22C18.187 22 17.9323 21.9262 17.7036 21.7796L12.4328 18.6647C12.1274 18.4683 11.7196 18.4683 11.4143 18.6647L6.19417 21.7796C5.96539 21.9272 5.68489 22 5.43026 22C4.58975 22 3.82583 21.2392 4.08047 20.3079L5.5317 14.5687C5.60829 14.2257 5.50584 13.8577 5.20047 13.6364L0.490737 9.8105Z"
    />
  </Svg>
)
const Memo = memo(Favorite)
export default Memo
