const dom = {
  inp: document.querySelector('#input-info'),
  btn: document.querySelector('#btn-memo')
};

dom.btn.addEventListener('click', () => {
  const arr = JSON.parse(localStorage.getItem('inputs')) || [];
  arr.push(dom.inp.value)
  localStorage.setItem('inputs', JSON.stringify(arr));
  // Cookie.set(Date.now(), dom.inp.value, 2);
  dom.inp.value = '';
})

//COOKIE
class Cookie {
  static del(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    return true;
  }

  static get(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      c = c.trim();
      if (c.indexOf(name) == 0) {
        return c.slice(name.length);
      }
    }
    return "";
  }

  static set(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname} = ${cvalue}; ${expires};path=/`;
  }
}

// localStorage.setItem('name', 'Nick');

// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   const expires = `expires=${d.toUTCString()}`;

//   document.cookie = `${cname} = ${cvalue}; ${expires};path=/`;
// }

// function getCookie(cname) {
//   const name = cname + "=";
//   const ca = document.cookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     c = c.trim();
//     if (c.indexOf(name) == 0) {
//       return c.slice(name.length);
//     }
//   }
//   return "";
// }

// function deleteCookie(cname) {
//     document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//     return true;
// }


// COOKIE

// LocalStorage
// SessionStrage

// IndexedDB
