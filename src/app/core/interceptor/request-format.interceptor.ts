import { HttpInterceptorFn } from '@angular/common/http';
import { map } from 'rxjs';

export const requestFormatInterceptor: HttpInterceptorFn = (req, next) => {
  const body: any = req.body;
  if(body && body.data){
    return next(req.clone({body: body.data}))
  }
  return next(req);
};
