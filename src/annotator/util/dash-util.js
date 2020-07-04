// Search for an existing annotation through the API
export async function getAnnotation(searchParams) {
  let base = 'https://api.hypothes.is/api/search';
  console.log("DASH Querying:" + base + searchParams );
  let response = await fetch(base + searchParams);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('DASH: Error in GET request');
  }
}

// Edit the text of an existing annotation through the API
export async function editAnnotation(annotationID, newText, apiKey) {
  const base = 'https://api.hypothes.is/api/annotations/';
  const request = base + annotationID;
  const response = await fetch(request, {
    method: 'PATCH',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
        text: newText
    })
  });

  if (response.ok) {
      return response.json();
  } else {
      throw new Error('DASH: PATCH request error');
  }
} 