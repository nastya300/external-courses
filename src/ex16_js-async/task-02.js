let regularInp = document.getElementById('regular');
let regularLbl = document.getElementById('current_regular');
let debouncedInp = document.getElementById('debounced');
let debouncedLbl = document.getElementById('current_debounced');

function regularOnChange(e) {
    regularLbl.textContent = e.target.value;
}

function debouncedOnChange(e) {
    debouncedLbl.textContent = e.target.value;
}

function debounced(fn, ms) {
    let timeout;

    return function () {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    };
}

regularInp.addEventListener('keyup', regularOnChange);
debouncedInp.addEventListener('keyup', debounced(debouncedOnChange, 500));