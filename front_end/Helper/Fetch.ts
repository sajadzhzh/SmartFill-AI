const postFetch = async (
  url: string,
  body: object,
  headers: HeadersInit = {},
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};



export { postFetch };
