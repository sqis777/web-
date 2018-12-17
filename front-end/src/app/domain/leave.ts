/**
 * @description 请假申请实体类
 * @author Wu Kexin
 * @date 2018-12-15
 * @export
 * @class Leave
 */
export class Leave {
    id: number; // 此条记录ID
    userId: number; // 此条记录关联的用户id
    days: number;
    state: number;  // 申请状态
    reason: string; // 请假原因
  approve_reason:string;
}
