export default function decorate(block) {
    let dropdown = block.firstElementChild;
    dropdown.classList.add("dropdown");
    let button = document.createElement('button')
    button.classList.add('dropbtn')

    // let accordionTitle = block.firstElementChild;
    // accordionTitle.classList.add("accordion-title");
    // let accordionBody = accordionTitle.nextElementSibling;
    // accordionBody.classList.add("accordion-body");
    // accordionBody.classList.add("collapsed");

    // accordionTitle.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   if(accordionBody.classList.contains("collapsed")) {
    //     accordionBody.classList.remove('collapsed');
    //     accordionTitle.classList.add('active');
    //   } else {
    //     accordionBody.classList.add('collapsed');
    //     accordionTitle.classList.remove('active');
    //   }
    // })
}