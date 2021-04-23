import {
    DynamoDBClient,
    ScanCommand,
    PutItemCommand,
} from "@aws-sdk/client-dynamodb";

export default async function handler(req, res) {
    const dbclient = new DynamoDBClient({
        region: "us-east-2",
        credentials: {
            accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
        },
    });

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

        // sorts locally because DynamoDB does not support it
        // todo: migrate to another free DB
        const sortedData = data.Items.sort((a, b) =>
            parseInt(a.Score.N) > parseInt(b.Score.N) ? -1 : 1
        );
        res.status(200).json(sortedData);
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
