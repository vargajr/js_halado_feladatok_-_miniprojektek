const calc_button = document.querySelector('.calculate_button');
const ft_input = document.querySelector('input[name=feet_input]');
const in_input = document.querySelector('input[name=inch_input]');
let ft_input_value, in_input_value, cm_output_value;

const readInputs = () => {
    ft_input_value = parseInt(ft_input.value);
    in_input_value = parseFloat(in_input.value);
    if (typeof ft_input_value !== 'number' || ft_input_value.toString() !== ft_input.value) {
        return false
    } else if (typeof in_input_value !== 'number' || in_input_value.toString() !== in_input.value) {
        return false
    } else {
        return true;
    }
}

const eraseInputs = () => {
    document.querySelector('input[name=feet_input]').value = '';
    document.querySelector('input[name=inch_input]').value = '';
}

const writeOutputs = () => {
    document.querySelector('.back_ft_input').textContent = ft_input_value.toString();
    document.querySelector('.back_in_input').textContent = in_input_value.toString();
    document.querySelector('.cm_output').textContent = cm_output_value.toString();
}

const calculator = () => {
    if (!readInputs()) {
        alert('Enter valid values!');
        eraseInputs();
    } else {
        cm_output_value = ((ft_input_value * 12 + in_input_value) * 2.54).toFixed(2);
        writeOutputs();
        eraseInputs();
    }
}

calc_button.addEventListener('click', calculator);
