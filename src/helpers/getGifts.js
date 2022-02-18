export const getGifts = async (category)=>{
    const api_key='XyWhSnKUXuPwWqkxFKv14pyW2rTGCuVP';
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
    const resp =  await fetch(url);
    const {data} =  await resp.json();
  console.log(url);
    const gift =  data.map(img =>{
      return {
        id:img.id,
        title:img.title,
        url:img.images?.downsized_medium.url
      }
    })

  return gift;

  }