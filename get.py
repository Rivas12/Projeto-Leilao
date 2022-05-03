import json
import boto3
from boto3.dynamodb.conditions import Key


dynamodb = boto3.resource('dynamodb')

tabela = dynamodb.Table('Qualidade') 


def lambda_handler(event, context):
    response = tabela.query(
        KeyConditionExpression = Key('comeco').eq(event['from'])
    )

    for x in response['Items']:
        if x['curso'] == event['to']:
            return x

    return None