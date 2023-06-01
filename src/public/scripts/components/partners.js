const partnerCheckboxes = document.querySelectorAll('.filters input');
const partnerChips = document.querySelectorAll('.partner-chips .partner-chip')

const filter = document.querySelector('#partner-filter')

partnerCheckboxes.forEach(function (partnerCheckbox) {
    if (partnerCheckbox.checked) {
        document.querySelector(`#chip-${partnerCheckbox.value}`).classList.toggle('active')
    }
    partnerCheckbox.addEventListener('change', function () {
        document.querySelector(`#chip-${partnerCheckbox.value}`).classList.toggle('active')
    })
})

partnerChips.forEach(function (partnerChip) {
    partnerChip.addEventListener('click', function () {
        document.querySelector(`#checkbox-${partnerChip.getAttribute('data-id')}`).click()
    })
})

filter.addEventListener('change', () => {
    setTimeout(function() {filter.form.submit()}, 3000);
})