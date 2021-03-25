import {
    DynamoDBClient,
    ScanCommand,
    PutItemCommand,
} from "@aws-sdk/client-dynamodb";

export default async function handler(req, res) {
    const dbclient = new DynamoDBClient({ region: "us-east-2" });

    switch (req.method) {
        case "GET":
            const retrievedData = await dbclient.send(
                new ScanCommand({ TableName: "Trivia.Ranking" })
            );
            res.status(200).json(retrievedData.Items);
            break;
        case "POST":
            const params = {
                TableName: "Trivia.Ranking",
                Item: JSON.parse(req.body),
            };
            await dbclient.send(new PutItemCommand(params));
            res.status(200).json();
            break;
        default:
            res.status(404).send();
    }
}
