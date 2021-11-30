import React, { useState, FunctionComponent } from 'react'
import 'regenerator-runtime/runtime';
import { useAsyncDebounce } from 'react-table'
interface Props {
    filter:any,
    setFilter:any
}

export const GlobalFilter:FunctionComponent<Props> = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1)

  return (
    <span>
      Search:
      <input
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  )
}