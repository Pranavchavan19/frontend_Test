// export async function fetchContent() {
//   const res = await fetch("/api/humipak");
//   if (!res.ok) throw new Error(`Failed to load content (${res.status})`);
//   return res.json();
// }

// export async function submitSampleRequest(data) {
//   const res = await fetch("/api/sample-requests", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   const body = await res.json().catch(() => ({}));
//   if (!res.ok) throw Object.assign(new Error("Validation failed"), { fields: body });
//   return body;
// }



// export async function fetchContent() {
//   const res = await fetch("/api/humipak");

//   if (!res.ok) {
//     throw new Error(`API Error: ${res.status}`);
//   }

//   const contentType = res.headers.get("content-type");

//   if (!contentType || !contentType.includes("application/json")) {
//     throw new Error(
//       "API JSON return karat nahi. Spring Boot backend check kar."
//     );
//   }

//   return res.json();
// }

// export async function submitSampleRequest(data) {
//   const res = await fetch("/api/sample-requests", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   const body = await res.json().catch(() => ({}));

//   if (!res.ok) {
//     throw Object.assign(new Error("Validation failed"), {
//       fields: body,
//     });
//   }

//   return body;
// }
// // 


const API_BASE_URL = "https://backend-test-1-sbca.onrender.com";

export async function fetchContent() {
  const res = await fetch(`${API_BASE_URL}/api/humipak`);

  if (!res.ok) {
    throw new Error(`Failed to load content (${res.status})`);
  }

  return res.json();
}

export async function submitSampleRequest(data) {
  const res = await fetch(`${API_BASE_URL}/api/sample-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || `Request failed (${res.status})`);
  }

  return res.json();
}
