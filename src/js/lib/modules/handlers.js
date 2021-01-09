import $ from '../core';

$.prototype.on = function(eventName, callbaack) {
    if (!eventName || !callbaack) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callbaack);
    }
    return this;
};

$.prototype.off = function(eventName, callbaack) {
    if (!eventName || !callbaack) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callbaack);
    }
    return this;
};

$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};

