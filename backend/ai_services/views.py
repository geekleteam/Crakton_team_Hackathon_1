from django.shortcuts import render
from rest_framework.views import APIView
from groq import Groq
from rest_framework.response import Response
from pydantic import BaseModel
import json
# from django.http import StreamingHttpResponse
# Create your views here.

client = Groq(
    api_key="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"
)

class Compare(BaseModel):
    category : str
    field1: str
    field2:str

class ChatReadRetrive(APIView):

    def post(self, request, *args, **kwargs):
        # print(request)
        prompt= request.data['question']
        print(prompt)
        try:
            completion = client.chat.completions.create(
                model="llama3-8b-8192",
               messages=[
                    {
                        "role": "system",
                        "content": """You are an assistant that helps me compare things and return the data in a structured JSON format suitable for displaying in an HTML table. The table should have the following structure:

                        - The first row contains headers: "Comparable Things", "Property1", "Property2", ..., "PropertyN".
                        - Subsequent rows contain the items to compare and their respective properties.

                        The JSON response should have a structure similar to this:
                        {
                        "headers": ["Comparable Things", "Property1", "Property2", ..., "PropertyN"],
                        "data": [
                            ["Thing to Compare", "Value1", "Value2", ..., "ValueN"],
                            ["Thing to Compare", "Value1", "Value2", ..., "ValueN"],
                            ...
                        ]
                        }

                        For example, if I want to compare Samsung and Apple phones based on properties like price, screen size, and battery life, the response should look like this:

                        {
                        "headers": ["Comparable Things", "Price", "Screen Size", "Battery Life"],
                        "data": [
                            ["Samsung Phone Model", "$999", "6.5 inches", "24 hours"],
                            ["Apple Phone Model", "$1099", "6.1 inches", "20 hours"]
                        ]
                        }

                        Please provide your responses in this JSON format."""


                        # f"The JSON object must use the schema and add more fields in schema if required depending on your response change the field1 and field2 names to something meaningful: {json.dumps(Compare.model_json_schema(), indent=2)}"
                    },
                    {
                        "role": "user",
                        "content": prompt,
                    }
                ],
                temperature=1,
                max_tokens=1024,
                top_p=1,
                stream=True,
                stop=None,
            )

            ans = ""
            for chunk in completion:
                ans += str(chunk.choices[0].delta.content)


            start_index = ans.find("{")
            end_index = ans.rfind("}") + 1

            json_string = ans[start_index:end_index]

            # Parse the JSON string into a Python dictionary
            comparison_data = json.loads(json_string)

            # Now you can use comparison_data as a Python dictionary containing the JSON object
            new_ans = json.dumps(comparison_data, indent=4)
            return Response(new_ans, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=500)
