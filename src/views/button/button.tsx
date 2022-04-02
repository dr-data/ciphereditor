
import './button.scss'
import IconView, { Icon } from 'views/icon/icon'
import useClassName, { mergeModifiers, ViewModifiers } from 'hooks/useClassName'

type ButtonViewProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> & {
  icon?: Icon
  modifiers?: ViewModifiers
}

/**
 * Button component with an optional icon and label (via children).
 */
export default function ButtonView (props: ButtonViewProps): JSX.Element {
  const { icon, modifiers = [], children, ...buttonProps } = props
  const buttonModifiers = icon !== undefined ? mergeModifiers(modifiers, ['icon']) : modifiers
  return (
    <button
      className={useClassName('button', buttonModifiers)}
      {...buttonProps}
    >
      {icon !== undefined && (
        <div className='button__icon'>
          <IconView icon={icon} />
        </div>
      )}
      {children !== undefined && (
        <span className='button__label'>
          {children}
        </span>
      )}
    </button>
  )
}
