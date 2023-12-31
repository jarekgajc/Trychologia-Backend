
export enum TableName {
    User = "user",
    WeekSchedule = "week_schedule",
    DaySchedule = "day_schedule",
    StaffMember = "staff_member",
    VisitsHolder = "visit_holder",
    Visit = "visit",
    Customer = "customer",
}

export function getTableNameAsPrefix(tableName: TableName) {
    return `${tableName}.`;
}