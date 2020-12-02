export const lenStr = (str = '', defaultLenght = 150, endChar = '...') => {
  return str.length > defaultLenght
    ? str.substr(0, defaultLenght) + endChar
    : str;
};

export const formatData = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((item: any) => {
    formData.append(item, data[item]);
    if (item === 'image') {
      formData.append('image', data[item][0], data[item][0].name);
    }
  });

  return formData;
};

export const formatLinkImg = (str:any) =>{ 
  if(str) {
    return window.location.origin + '/' + str.replace(/\\/g, '/')
  } else {
    return ''
  }
}