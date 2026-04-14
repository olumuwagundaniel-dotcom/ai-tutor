exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.CLAUDE_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 500,
      messages: [
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: data.content[0].text
    })
  };
};
