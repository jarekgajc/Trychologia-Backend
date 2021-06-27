import { DbVisit } from "../library/model-db/DbVisit";
import queryMariaDb from "../utils/sql/MariaDbConnection";
import { TableName } from "./tables/TableName";
import VisitTable from "./tables/VisitTable";

const VisitRepository = {

    async insert(dbVisit: DbVisit) {
        dbVisit.id = (await queryMariaDb(sqlBuilder => sqlBuilder
            .insert(
                TableName.Visit,
                [VisitTable.start, VisitTable.end, VisitTable.type, VisitTable.visit_holder_id],
                [dbVisit.start, dbVisit.end, dbVisit.type, dbVisit.visitsHolderId]
            )
        )).getInsertId();
    },

    async selectByVisitsHolderId(visitsHolderId: number) {
        return (await queryMariaDb(sqlBuilder => sqlBuilder
            .selectAll(TableName.Visit)
            .whereEqual(VisitTable.visit_holder_id, visitsHolderId)
            .orderBy(VisitTable.start)
        )).toObjects<DbVisit>();
    },

};

export default VisitRepository;