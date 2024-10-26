import { createContextId, Signal } from '@builder.io/qwik'

export const ShowContext = createContextId<Signal<boolean>>('common.show')
export const SnowContext = createContextId<Signal<any[] | null>>('common.snow')
// export const show = useSignal(false)
// export const snows: Signal<any[] | null> = useSignal(null)
