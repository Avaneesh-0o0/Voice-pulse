import openai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# OpenAI API key setup
openai.api_key = ""

@app.route('/get-answer', methods=['POST'])
def get_answer():
    data = request.json
    query = data.get('query')

    if not query:
        return jsonify({"error": "No query provided"}), 400

    try:
        # Generate AI response
        response = openai.Completion.create(
            engine="text-davinci-003",  # Use a powerful language model
            prompt=query,
            max_tokens=100,
            n=1,
            stop=None,
            temperature=0.7,
        )
        answer = response.choices[0].text.strip()
        return jsonify({"answer": answer}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
