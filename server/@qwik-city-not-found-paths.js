const notFounds = [
  [
    "/",
    "\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"Status\" content=\"500\">\n  <title>500 Internal Server Error</title>\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <style>\n    body { color: #713fc2; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }\n    p { max-width: 600px; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px #713fc2; overflow: hidden; }\n    strong { display: inline-block; padding: 15px; background: #713fc2; color: white; }\n    span { display: inline-block; padding: 15px; }\n  </style>\n</head>\n<body><p><strong>500</strong> <span>Internal Server Error</span></p></body>\n"
  ]
];
function getNotFound(p) {
  for (const r of notFounds) {
    if (p.startsWith(r[0])) {
      return r[1];
    }
  }
  return "Resource Not Found";
}
export { getNotFound };