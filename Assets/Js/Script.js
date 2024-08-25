const tiggerpopup = () => {
    const pop = document.getElementById('NavPopUp');
    pop.style.display = "block";

}


const ClosePopUp = () => {
    const pop = document.getElementById('NavPopUp');
    pop.style.display = "none";
}

document.getElementById('ridedate').addEventListener('click', function (event) {
    // Open the date picker
    this.showPicker();
});

// Optional: To ensure the input field is not manually editable
document.getElementById('ridedate').addEventListener('keydown', function (event) {
    event.preventDefault();
});


document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('dropdown-input');
    const dropdownList = document.getElementById('dropdown-list');
    const items = dropdownList.getElementsByClassName('dropdown-item');

    input.addEventListener('input', function () {
        const filter = input.value.toLowerCase();
        let hasVisibleItems = false;

        for (let item of items) {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = '';
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        }

        dropdownList.classList.toggle('hidden', !hasVisibleItems);
    });

    input.addEventListener('focus', function () {
        dropdownList.classList.remove('hidden');
    });

    input.addEventListener('blur', function () {
        setTimeout(() => {
            dropdownList.classList.add('hidden');
        }, 200); // Delay to allow click event on dropdown items
    });

    for (let item of items) {
        item.addEventListener('click', function () {
            input.value = '';
            input.placeholder = item.textContent;
            dropdownList.classList.add('hidden');
        });
    }
});



document.getElementById('ridebookbtn').addEventListener('click', function () {
    document.getElementById('payment').submit();
});

function changeValue(id, delta) {
    var input = document.getElementById(id);
    var currentValue = parseInt(input.value, 10);
    var min = parseInt(input.min, 10);
    var max = parseInt(input.max, 10);
    var newValue = currentValue + delta;

    // Ensure the new value is within the min and max range
    if (newValue >= min && newValue <= max) {
        input.value = newValue;

        // Optionally update hidden inputs
        if (id === 'number') {
            document.getElementById('hiddenAdults').value = newValue;
        } else if (id === 'number2') {
            document.getElementById('hiddenChildren').value = newValue;
        }
    }
}
