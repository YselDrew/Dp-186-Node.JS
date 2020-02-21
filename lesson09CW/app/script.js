function loadData(link = './data/data.json', isJSON = false) {
  //Creation of AJAX object
  const aja = new XMLHttpRequest();

  //Getting data options
  // aja.onreadystatechange = function() {
  //   if (this.readyState === 4 && this.status === 200)
  //   console.log(`readyState: ${this.readyState}, status: ${this.status}`)
  //   console.log(this.responseText)
  // }

  aja.onload = function() {
    if(this.status === 200) {
      showData(this.responseText, isJSON)
    }
  }

  //Sending data options
  aja.open('GET', link)

  //Send
  aja.send();

  return `Ok, message has sent to ${link}`
}

function showData(data, isJSON) {
  const phones = isJSON ? JSON.parse(data): data.split('\n').map(str => str.split(','));
  console.table(phones);
}
