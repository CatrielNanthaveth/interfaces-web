function bounce() {
    return new Promise((resolve) => {
        setTimeout(resolve(Math.ceil(Math.random() * 10)), 1000);
    })
}

function sum(x, y) {
    return x + y
}
async function get_value() {
    try {
        x = await bounce();
        y = await bounce();
        console.log(number = await sum(x, y));
    } catch (error) {
        console.log(error);
    }

}

get_value()