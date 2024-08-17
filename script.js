const query = new URLSearchParams(window.location.search);
document.write(JSON.stringify(query.get("json")))
