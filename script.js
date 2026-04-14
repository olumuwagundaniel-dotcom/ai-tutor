async function askAI() {
  let input = document.getElementById("input").value;

  const res = await fetch("/.netlify/functions/ai", {
    method: "POST",
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();

  document.getElementById("output").innerText = data.reply;
}
