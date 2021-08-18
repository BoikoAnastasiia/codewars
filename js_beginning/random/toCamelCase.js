function toCamelCase(str) {
  if (str.includes("_")) {
    let ar = str.split("_");
    console.log(ar);

    let newAr = ar.map(
      (word, index) =>
        word.charAt(0)[index === 0 ? "toLowerCase" : "toUpperCase"]() +
        word.toLowerCase().slice(1)
    );
    return newAr.join("");
  }
  if (str.includes("-")) {
    let ar = str.split("-");
    console.log(ar);

    let newAr = ar.map(
      (word, index) =>
        word.charAt(0)[index === 0 ? "toLowerCase" : "toUpperCase"]() +
        word.toLowerCase().slice(1)
    );
    return newAr.join("");
  }

  return "";
}

console.log(toCamelCase("the_stealth_warrior"));
