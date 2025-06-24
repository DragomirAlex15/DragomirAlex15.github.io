function search() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('text');

    for (i = 0; i < x.length; i++) {
        let textContent = x[i].innerHTML.toLowerCase();
        let startIndex = textContent.indexOf(input);

        if (startIndex === -1) {
            x[i].style.display = "none";
        } else {
            let highlightedText = x[i].innerHTML.substring(0, startIndex) +
                '<span style="background-color: yellow;">' +
                x[i].innerHTML.substring(startIndex, startIndex + input.length) +
                '</span>' +
                x[i].innerHTML.substring(startIndex + input.length);

            x[i].innerHTML = highlightedText;
            x[i].style.display = "list-item";
        }
    }
}
