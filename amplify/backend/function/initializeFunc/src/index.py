import json
import boto3
import requests


def getLocationFromIP(ip_address):
    response = requests.get(f'http://api.ipstack.com/{ip_address}?access_key=7a58a7dba16297193f3030b21f85a35c')
    return response.json() 


def handler(event, context):
    # https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
    dynamodb = boto3.resource("dynamodb")
    payload = event.get("body")
    ip_address = event["headers"]['X-Forwarded-For'].split(', ')[0]
    location_json = getLocationFromIP(ip_address)
    location_json["latitude"] = int(location_json["latitude"])
    location_json["longitude"] = int(location_json["longitude"])

    print("request event: ", json.dumps(event))
    print("location json: ", json.dumps(location_json))

    # build payload to be inserted to DynamoDB for analytics
    insertPayload = {
      "ip": ip_address,
      "origin": event.get("headers",{}).get("Origin",""),
      "referer": event.get("headers",{}).get("Referer",""),
      "country_name": location_json["country_name"],
      "country_code": location_json["country_code"],
      "city": location_json["city"],
      "cookie": event,
      "location_details": location_json
    }

    table = dynamodb.Table('web-visit-cookie')

    response = table.put_item(
        Item=insertPayload
    )

    print("dyanomo db insert response: ", response)

    response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }

    return response
