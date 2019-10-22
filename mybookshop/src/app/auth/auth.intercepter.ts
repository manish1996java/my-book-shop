import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor{
    constructor(private authsvc:AuthService){}
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        const token = this.authsvc.getTokken();
        let clonerequest = req.clone({
            headers: req.headers.set("Authorization","berar "+token)
        });
        console.log(clonerequest);
        return next.handle(clonerequest);
    }

}