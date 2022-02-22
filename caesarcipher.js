function rot13(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        /* A = 65, Z = 90; a = 97, z = 122; */
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
            arr.push(str.charCodeAt(i) + 13);
        } else if (str.charCodeAt(i) >= 77 && str.charCodeAt(i) <= 90) {
            arr.push(str.charCodeAt(i) - 13);
        } else {
            arr.push(str.charCodeAt(i));
        }
    }
    console.log(String.fromCharCode(...arr));
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
 
