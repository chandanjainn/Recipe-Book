import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private ngZone: NgZone) {}

  handleError(error: any) {
    const notificationService = this.injector.get(NotificationService);
    const GENERIC_ERROR_MESSAGE = 'Some error occured. ';
    const CONNECTIVITY_ERROR_MESSAGE = 'No Internet Connection. ';
    const ERROR_400 = 'auth/internal-error';

    if (error instanceof Error) {
      if (error['code'] === ERROR_400) {
        let errorMessage = JSON.parse(error.message).error.message;
        this.runNgZone(notificationService, errorMessage);
      } else {
        this.runNgZone(notificationService, error.message);
      }
    }
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        this.runNgZone(notificationService, CONNECTIVITY_ERROR_MESSAGE);
      } else {
        this.runNgZone(
          notificationService,
          GENERIC_ERROR_MESSAGE + error.message
        );
      }
    }
  }

  /**
   * This method is required to overcome the bug where snackbar is displayed twice on the screen.
   * This occurs because the ErrorHandler is not called within the Angular zone.
   *
   *  @param notificationService
   * @param errorMessage
   */
  private runNgZone(
    notificationService: NotificationService,
    errorMessage: string
  ) {
    this.ngZone.run(() => notificationService.showError(errorMessage));
  }
}
