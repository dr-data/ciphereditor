
import './modal-stack.scss'
import AddModalView from '../../views/modal-add/modal-add'
import OperationModalView from '../modal-operation/modal-operation'
import ReportModalView from '../../views/modal-report/modal-report'
import SettingsModalView from '../../views/modal-settings/modal-settings'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { ModalType } from '../../slices/ui/types'
import { MouseEvent, useCallback } from 'react'
import { cancelTopModalAction } from '../../slices/ui'
import { getModalStack } from '../../slices/ui/selectors'

const modalViewMap = {
  [ModalType.Add]: AddModalView,
  [ModalType.Settings]: SettingsModalView,
  [ModalType.Report]: ReportModalView,
  [ModalType.Operation]: OperationModalView
}

export default function ModalStackView (): JSX.Element {
  const dispatch = useAppDispatch()
  const modals = useAppSelector(state => getModalStack(state.ui))

  const onBackdropClick = useCallback((event: MouseEvent) => {
    dispatch(cancelTopModalAction({}))
  }, [dispatch])

  if (modals.length === 0) {
    return <></>
  }

  return (
    <div className='modal-stack'>
      {modals.map((payload, index) => {
        const ModalView = modalViewMap[payload.type]
        return (
          <div
            className='modal-stack__layer'
            role='dialog'
            aria-modal
            tabIndex={-1}
            key={index}
          >
            <div className='modal-stack__backdrop' onClick={onBackdropClick} />
            <div className='modal-stack__modal'>
              <ModalView {...(payload as any)} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
