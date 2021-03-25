import { AttributeValue } from "@aws-sdk/client-dynamodb";

export interface RankingRecord {
    Username: { S: string };
    Score: { N: string };
    CategoryId: { N: string };
}
