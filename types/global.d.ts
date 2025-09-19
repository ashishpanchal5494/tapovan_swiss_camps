// types/global.d.ts

// Extend Window interface for requestIdleCallback
interface IdleDeadline {
  readonly didTimeout: boolean;
  timeRemaining(): DOMHighResTimeStamp;
}

type RequestIdleCallbackHandle = number;
type RequestIdleCallbackOptions = {
  timeout?: number;
};

interface Window {
  requestIdleCallback?(
    callback: (deadline: IdleDeadline) => void,
    options?: RequestIdleCallbackOptions
  ): RequestIdleCallbackHandle;
  cancelIdleCallback?(handle: RequestIdleCallbackHandle): void;
}
