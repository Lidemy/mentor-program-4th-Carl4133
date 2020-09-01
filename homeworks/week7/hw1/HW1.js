/* eslint-disable max-len */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable eol-last */
// form 才有 submit action
// 因為 enter 也會submit 所以用 form+submit 才對
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('form');
    submit.addEventListener('submit', (e) => {
        const values = {};
        let hasError = false;
        const requiredInputs = document.querySelectorAll('.required input[type=text], .required input[type=email], .required input[type=tel]');
        for (const input of requiredInputs) {
            if (!input.value) {
                input.nextElementSibling.style.visibility = 'visible';
                hasError = true;
            } else {
                input.nextElementSibling.style.visibility = 'hidden';
                values[input.name] = input.value;
            }
        }

        const requireds = document.querySelectorAll('.required');
        for (const radios of requireds) {
            const requiredRadio = radios.querySelectorAll('input[type=radio]');
            if (!requiredRadio.length) continue; // 會抓到不是radio的,但是為空
            const hasValue = [...requiredRadio].some(radio => radio.checked); // 技巧[...XXX]將不是Array展開裝在Array裡;some
            const alertDiv = radios.querySelector('.insert__empty');
            if (!hasValue) {
                alertDiv.style.visibility = 'visible';
                hasError = true;
            } else {
                alertDiv.style.visibility = 'hidden';
            }
        }

        const inputTexts = document.querySelectorAll('input:not([type=radio]) , input[type=radio]:checked');
        if (inputTexts.value !== '') {
            // console.log(inputTexts);
            for (const content of inputTexts) {
                values[content.name] = content.value;
            }
        }


        if (hasError) {
            e.preventDefault();
        } else {
            alert(JSON.stringify(values));
        }
        e.preventDefault();
    });
});