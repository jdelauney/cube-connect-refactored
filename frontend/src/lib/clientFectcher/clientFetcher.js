export async function clientFetcher(url, { data, method, signal, customHeaders, customConfig }) {
  const config = {
    method: method ?? (data ? 'POST' : 'GET'),
    body: data ? JSON.stringify(data) : null,
    headers: {
      'Content-Type': data ? 'application/json' : '',
      Accept: 'application/json',
      ...customHeaders,
    },
    signal,
    ...customConfig,
  };

  return window.fetch(url, config).then(async response => {
    // on gères le status 401
    if (response.status === 401) {
      return Promise.reject(new Error("You're not authenticated"));
    }

    let result = null;
    try {
      result = response.status === 204 ? null : await response.json();
    } catch (error) {
      return Promise.reject(error);
    }

    if (response.ok) {
      //return zodSchema && result ? zodSchema.parse(result) : result;
      return result;
    } else {
      return Promise.reject(result);
    }
  });
}

export const fetcherGet = async url => {
  return clientFetcher(url, { method: 'GET' });
};

export const fetcherPost = async (url, data) => {
  return clientFetcher(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, data: data });
};

export const fetcherPut = async (url, data) => {
  return clientFetcher(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: data });
};

export const fetcherDelete = async (url, data) => {
  return clientFetcher(url, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, data: data });
};
