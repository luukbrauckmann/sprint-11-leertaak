const partnerCheckboxes = document.querySelectorAll('.filters input');
const partnerChips = document.querySelectorAll('.partner-chips .partner-chip')

partnerCheckboxes.forEach(function (partnerCheckbox) {
    partnerCheckbox.addEventListener('change', function() {
        document.querySelector(`#chip-${partnerCheckbox.value}`).classList.toggle('active')
    }) 
})

partnerChips.forEach(function (partnerChip) {
    partnerChip.addEventListener('click', function() {
        document.querySelector(`#checkbox-${partnerChip.getAttribute('data-id')}`).click()
    }) 
})