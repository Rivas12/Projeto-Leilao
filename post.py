import json
import boto3
from datetime import datetime
from boto3.dynamodb.conditions import Key 



dynamodb = boto3.resource('dynamodb')


tabela = dynamodb.Table('Qualidade')


def lambda_handler(event, context):
    response = tabela.query(
        KeyConditionExpression=Key('comeco').eq(event['from']))

    body=[
        {
            'data_hora': (datetime.now()).strftime("%Y-%m-%d %H:%M:%S"),
            'mensagem': event['mensagem']
        }
    ]

    for x in response['Items']:
        if x['curso'] == event['to']:
            body.append(x)
            break

    return tabela.put_item(
        Item = {
            'comeco': event['from'],
            'curso': event['to'],
            'body': body
        }
    )