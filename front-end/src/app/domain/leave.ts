export class Leave {
    id: number; // 此条记录ID
    userId: number; // 此条记录关联的用户id
    days: number;   // 请假天数
    state: number;  // 申请状态
    reason: string; // 请假原因
}