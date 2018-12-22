/**
 * @description 用户信息实体类
 * @author Sun Qisong
 * @date 2018-12-15
 * @export
 * @class User
 */
export class User {
    id: string;
    username: string;
    password: string;
    age: number;
    gender: string;
    department: string;
    position: number;//3以下代表普通员工，3以上代表行政人员、经理
    remainAnnualLeave: number;
    AnnualLeaveLength: number;
}
