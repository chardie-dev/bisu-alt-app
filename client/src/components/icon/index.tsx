import React from 'react'
import IcomoonReact from 'icomoon-react'
import iconSet from './icomoon/selection.json'

type IconProps = {
  color?: string,
  size?: string | number,
  icon: string,
  className?: string,
  style?: object
}

const Icon: React.FC<IconProps> = ({ className, color, size, icon, style }) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      style={style}
    />
  )
}

export default Icon