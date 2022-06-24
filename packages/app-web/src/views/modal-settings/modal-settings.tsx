
import './modal-settings.scss'
import ModalView from '../../views/modal/modal'
import SelectView from '../../views/select/select'
import useAppDispatch from '../../hooks/useAppDispatch'
import useSettingsSelector from '../../hooks/useSettingsSelector'
import { ModalState } from '../../slices/ui/types'
import { ReducedMotionPreferenceOption, ThemeOption } from '../../slices/settings/types'
import { applyReducedMotionPreference, applyTheme } from '../../slices/settings'
import { getAccessibilitySettings } from '../../slices/settings/selectors'

export default function SettingsModalView (props: {
  modal: ModalState
}): JSX.Element {
  const dispatch = useAppDispatch()
  const accessibilitySettings = useSettingsSelector(getAccessibilitySettings)
  return (
    <ModalView modal={props.modal} title='Settings'>
      <div>
        Theme:
        <SelectView
          elements={[
            { type: 'option', value: ThemeOption.SystemDefault, label: 'System default' },
            { type: 'option', value: ThemeOption.Light, label: 'Light' },
            { type: 'option', value: ThemeOption.Dark, label: 'Dark' }
          ]}
          value={accessibilitySettings.theme}
          onChange={event => dispatch(applyTheme({
            theme: event.currentTarget.value as ThemeOption
          }))}
        />
      </div>
      <div>
        Reduced motion:
        <SelectView
          elements={[
            { type: 'option', value: ReducedMotionPreferenceOption.SystemDefault, label: 'System default' },
            { type: 'option', value: ReducedMotionPreferenceOption.Reduce, label: 'Reduce' }
          ]}
          value={accessibilitySettings.reducedMotionPreference}
          onChange={event => dispatch(applyReducedMotionPreference({
            reducedMotionPreference: event.currentTarget.value as ReducedMotionPreferenceOption
          }))}
        />
      </div>
      <div>
        Scaling: This app scales according to your Browser settings for zoom and text size.
      </div>
    </ModalView>
  )
}
