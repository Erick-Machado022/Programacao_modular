function metade(string, separador) {
  let meio = string.length / 2;
  let resp = "";

  if (separador === 1) {
    for (let i = 0; i < meio; i++) {
      resp += string[i];
    }
  } else {
    for (let i = meio; i < string.length; i++) {
      resp += string[i];
    }
  }

  return resp;
}

console.log(metade("Sistemas", 2));
