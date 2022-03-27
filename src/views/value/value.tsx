
import './value.scss'
import ValueBooleanView from 'views/value-boolean/value-boolean'
import ValueNumberView from 'views/value-number/value-number'
import ValueTextView from 'views/value-text/value-text'
import { TypedValue } from 'slices/blueprint/types/value'
import { ViewModifiers } from 'hooks/useClassName'
import { BaseSyntheticEvent } from 'react'

export type ValueViewProps = {
  id?: string
  value: TypedValue
  readOnly?: boolean
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onChange?: (value: TypedValue, event?: BaseSyntheticEvent) => void
  modifiers?: ViewModifiers
}

export default function ValueView(props: ValueViewProps) {
  // Choose underlying view based on type
  let TypedValueView = undefined
  switch (props.value.type) {
    case 'boolean':
      TypedValueView = ValueBooleanView
      break
    case 'integer':
    case 'number':
      TypedValueView = ValueNumberView
      break
    case 'text':
      TypedValueView = ValueTextView
      break
  }

  if (TypedValueView !== undefined) {
    return <TypedValueView {...props} />
  }

  return (
    <div
      id={props.id}
      className="value"
      tabIndex={0}
      onFocus={props.onFocus}
    >
      <p className="value__meta">Value type not viewable.</p>
    </div>
  )
}
