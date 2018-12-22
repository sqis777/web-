import {Injectable} from '@angular/core';

/**
 * @description 配置类
 * @date 2018-12-18
 * @author Wu Kexin
 * @export
 * @class ConfigService
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl: string = "http://123.206.80.115:3000";

  constructor() { }
}
