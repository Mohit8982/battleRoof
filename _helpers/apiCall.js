

exports.getData = async (url) => {
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse
    } catch (error) {
        throw new Error(error);
    }
}

exports.postData = async (data, url) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }
    try {
        const response = await fetch(url, options)
        const jsonResponse = await response.json();
        return jsonResponse
    } catch(err) {
        throw new Error(error);
    }
  }