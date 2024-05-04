let numbers = ["chittak", "jack", "john", "chittak", "jack", "john"];
function removeDuplicates(arr) {
    const kiritilganraqam = [];
    arr.forEach(function(item) {
        if (!kiritilganraqam.includes(item)) {
            kiritilganraqam.push(item);
        }
    });
    return kiritilganraqam;
}
const newArray = removeDuplicates(numbers);
document.write(newArray);