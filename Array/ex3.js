const styles = ["Jass", "Blues"];

console.log(styles);

styles.push("Rock roll")

console.log(styles);

styles.splice(Math.floor(styles.length) / 2, 1 ,"Classic")

console.log(styles);

styles.splice(0,1)

console.log(styles);

styles.unshift("Rap" , "Reggae")

console.log(styles)