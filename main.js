document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.classList.add('pop-out')
    })
    link.addEventListener('mouseout', () => {
        link.classList.remove('pop-out')
    })
})
