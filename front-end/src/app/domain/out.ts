/**
 * @description 外出申请记录实体类
 * @author Wu Kexin
 * @date 2018-12-15
 * @export
 * @class Out
 */
export class Out {
    id: string;
    userId: string;
    days: number;
    state: number; // 此条申请的状态，1 -> 已提交，未审批， 2 -> 已审批
    reason: string;
    approve_reason:string;
}
