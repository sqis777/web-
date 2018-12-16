/**
 * @description 打卡记录实体类
 * @author Wu Kexin
 * @date 2018-12-15
 * @export
 * @class Record
 */
export class Record {
    id: number;
    userId: number;
    time: Date;
    mood: string;
    isLate: boolean;
}