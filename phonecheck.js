function telephoneCheck(str) {
    var check = /^1?[ -]?(\((\d{3})\)|\d{3})[ -]?(\d{3})[ -]?(\d{4})$/;
    return check.test(str);
    }
    
    telephoneCheck("555-555-5555");