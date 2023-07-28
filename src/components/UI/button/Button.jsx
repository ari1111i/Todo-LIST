import React, { Children } from 'react'

export const Button = ({children, onClick, disabled, variant, size, ...restProps}) => {
  return  <button onClick={onClick} disabled={disabled} {...restProps}>{children}</button>

}

