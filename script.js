const query = new URLSearchParams(window.location.search);
document.write(JSON.stringify(atob(query.get("json"))))
