from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from openai import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()




client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
# Create your views here.

@api_view(['POST'])
def chat(request):
    messages = request.data.get("messages", [])

    if not messages:
        return Response({"error" : "No messages provided"}, status=400)
    
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=messages
        )

        reply = response.choices[0].message.content
        return Response({"reply" : reply})
    
    except Exception as e:
        return Response({"error" : str(e)}, status=500)
