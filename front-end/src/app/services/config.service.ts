import { Injectable } from '@angular/core';

/**
 * @description 配置类
 * @author Wu Kexin
 * @date 2018-12-18
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
