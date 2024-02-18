import {CanActivateFn, Router} from '@angular/router';
import {ResponseDto} from "../../models/user/responseDto.module";

export const homeAutoRedrictionGuard: CanActivateFn = (route, state) => {

  const router: Router = new Router();
  const responseString: string | null = localStorage.getItem('user');
  const response: ResponseDto = responseString ? JSON.parse(responseString) : {};

  console.log(response.role === 'ADMIN' && state.url.startsWith('/admin'));

  if (response.role === 'ADMIN' ) {
    router.navigate(['/admin']);
    return false;

  } else if (response.role === 'USER' ) {
    router.navigate(['/user']);
    return false;
  } else {
    router.navigate(['/unauthorized']);
    return false;
  }
};
