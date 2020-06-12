let arra = [1, 2, 3];
let ele = document.createElement("p");
document.body.appendChild(ele);

let first = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];

function list(names) {
    let str = '';
    if ( names.length === 1) {
        str = names[0].name;
    } else if ( names.length === 2) {
        str = names[0].name + " & " + names[1].name;
    } else if ( names.length >= 3 ) {
        for (i = 0; i < names.length - 2; i++ ) {
            str += names[i].name + ', ';
            if (i === names.length - 2) {
                break;
            }
        }
        
        let secondLast = names.length - 2;
        let last = names.length - 1;
        str += names[secondLast].name + ' & ' + names[last].name;
    }
    
    return str;
}


ele.innerHTML = list(first);
