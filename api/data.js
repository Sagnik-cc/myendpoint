export default function handler(req, res) {
  // Handle OPTIONS request for CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(204).end(); // No Content
  }

  // Handle GET request
  if (req.method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    return res.status(200).json({
      message: "Hello from Vercel Function! CORS is enabled."
    });
  }

  // Handle POST request
  if (req.method === "POST") {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    // Access the POST body
    const data = req.body;
    return res.status(200).json({
      message: "POST request received!",
      receivedData: data
    });
  }

  // Handle other methods
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(405).json({ error: "Method Not Allowed" });
}
