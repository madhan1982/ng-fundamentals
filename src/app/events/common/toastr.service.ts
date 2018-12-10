import { Injectable } from '@angular/core';

declare let toastr: any;
@Injectable()
export class ToastrService {

    toastrSuccess(message: string, title?: string) {
        toastr.success(message, title);
    }

    toastrInfo(message: string, title?: string) {
        toastr.info(message, title);
    }

    toastrWarning(message: string, title?: string) {
        toastr.warning(message, title);
    }

    toastrError(message: string, title?: string) {
        toastr.error(message, title);
    }

}
