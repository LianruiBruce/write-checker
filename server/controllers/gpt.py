import sys
import openai

openai.api_key = "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"

cmd = sys.argv[1]
temp = sys.argv[2]


while True:
    request = str(input().split("\n"))

    completion = openai.ChatCompletion.create(
        # The main input is the messages parameter
        # Messages must be an array of message objects,
        # where each object has a role (either “system”, “user”, or “assistant”) and content (message content).
        # Conversations can be as short as 1 message or fill many pages.
        # Typically, a conversation is formatted with a system message first, followed by alternating user and assistant messages.
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": request},
        ],
        temperature=temp,
    )

    print(completion.choices[0].message.content + "\n")
