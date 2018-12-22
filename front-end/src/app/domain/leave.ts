/**
 * @description 请假申请实体类
 * @author Fan Lishui
 * @date 2018-12-15
 * @export
 * @class Leave
 */
export class Leave {
  id: string; // 此条记录ID
  userId: string; // 此条记录关联的用户id
  startTime: Date;
  endTime: Date;
  days: number;
  state: number;  // 申请状态
  reason: string; // 请假原因
  approve_reason: string;
}
