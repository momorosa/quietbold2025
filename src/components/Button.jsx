import React from 'react'

export default function Button({
  children,
  href = null, // if present, renders <a>
  onClick,
  type = "button",
  className = "",
  leftIcon = null,
  rightIcon = null,
  iconSize = "md-18",
  ...rest
}) {
  const Tag = href ? 'a' : 'button'
  const baseProps = {
    className: `${className}`,
    onClick,
    type: href ? undefined : type,
    href,
    ...rest
  }

  const renderMaterialIcon = (iconName) => (
    <span className={`material-icons ${iconSize}`}>{iconName}</span>
  )

  return (
    <Tag {...baseProps}>
      <span className="flex items-center justify-center gap-2">
        {leftIcon && renderMaterialIcon(leftIcon)}
        {children}
        {rightIcon && renderMaterialIcon(rightIcon)}
      </span>
    </Tag>
  )
}
