'use strict'

const generateRandomInt = (min, max) => {
	return (min < max)?
    Math.floor(Math.random() * (max - min + 1)) + min:
    Math.floor(Math.random() * (min - max + 1)) + max;
};

export { generateRandomInt, };
