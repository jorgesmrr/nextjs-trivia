import {
    DynamoDBClient,
    ScanCommand,
    PutItemCommand,
} from "@aws-sdk/client-dynamodb";

export default async function handler(req, res) {
    const dbclient = new DynamoDBClient({ region: "us-east-2" });

    if (req.method === "GET") {
        const condition = req.query.username
            ? "CategoryId = :c AND Username = :u"
            : "CategoryId = :c";

        const values = {
            ":c": { N: req.query.category_id },
        };

        if (req.query.username) {
            values[":u"] = { S: req.query.username };
        }

        const params = {
            TableName: "Trivia.Ranking",
            KeyConditionExpression: condition,
            FilterExpression: condition,
            ExpressionAttributeValues: values,
        };

        const data = await dbclient.send(new ScanCommand(params));
        res.status(200).json(data.Items);
    } else if (req.method === "POST") {
        const params = {
            TableName: "Trivia.Ranking",
            Item: JSON.parse(req.body),
        };
        await dbclient.send(new PutItemCommand(params));
        res.status(200).json();
    } else {
        res.status(404).send();
    }
}
