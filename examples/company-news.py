import requests


url = "https://api.akta.pro/api/v1/company/news/"
headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "company": "tesla",
    "start_date": "2026-03-01",
    "end_date": "2026-05-05",
    "limit": 10,
    "offset": 0,
    "blacklisted": "wokelo.ai",
}

response = requests.get(url, headers=headers, params=params, timeout=30)
response.raise_for_status()

payload = response.json()

for article in payload["data"]:
    print(article["title"])
    print(article["published_date"], article["publisher"])
    print(article["primary_tag"], "|", article["sentiment"])
    print(article["ai_summary"])
    print(article["url"])
    print()
