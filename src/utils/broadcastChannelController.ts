export type BroadcastChannelActionHandler<PayloadType = any> = (event: MessageEvent, payload: PayloadType) => any

export class BroadcastChannelController<ActionHandlersMap> extends BroadcastChannel {
  constructor (channelName: string, public actionHandlersMap: ActionHandlersMap) {
    super(channelName)
    this.addEventListener('message', this.onMessage.bind(this))
  }

  public emit<PayloadType = any>(actionType: keyof ActionHandlersMap, payload: PayloadType): void {
    this.postMessage(JSON.stringify([actionType, payload]))
  }

  private onMessage (event: MessageEvent<string>): void {
    try {
      const [actionType, actionPayload] = JSON.parse(event.data)
      if (typeof actionType === 'undefined') return

      const handlerOfCurrentAction = this.actionHandlersMap[actionType as keyof ActionHandlersMap] as BroadcastChannelActionHandler
      if (typeof handlerOfCurrentAction === 'undefined') return

      handlerOfCurrentAction(event, actionPayload)
    } catch (e) {}
  }
}
