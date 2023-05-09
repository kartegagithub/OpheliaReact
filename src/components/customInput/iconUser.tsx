import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconUser = (props) => (
  <Svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    {...props}
  >
    <Path
      d="M198.016 667.35A202.667 202.667 0 0 1 341.333 608h341.334a202.667 202.667 0 0 1 202.666 202.667V896a32 32 0 0 1-64 0v-85.333A138.667 138.667 0 0 0 682.667 672H341.333a138.667 138.667 0 0 0-138.666 138.667V896a32 32 0 0 1-64 0v-85.333a202.643 202.643 0 0 1 59.349-143.318zM512 160a138.667 138.667 0 1 0 0 277.333A138.667 138.667 0 0 0 512 160zM309.333 298.667a202.667 202.667 0 1 1 405.334 0 202.667 202.667 0 0 1-405.334 0z"
      fill={props?.color || "#005BBB"}
    />
  </Svg>
)

export default IconUser