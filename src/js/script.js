let x = document.querySelector('.text');
// console.log(x.textContent);

document.body.addEventListener('keydown', (event) => {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        document.body.innerHTML = `<textarea></textarea>`;
        let y = document.getElementsByTagName('textarea')[0];
        // console.log(y);
        y.insertAdjacentHTML('beforeend', `${x.textContent}`);
    }

    let v = document.querySelector('textarea');
    // console.log(v.textContent);
    let b = v.value

    if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        document.body.innerHTML = `<div></div>`;
        let c = document.querySelector('div');
        // console.log(c);
        c.insertAdjacentHTML('beforeend', `${b}`)
    }
})