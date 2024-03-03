//this program creates classes and uses them to subcribe phone number classes
//the parent class can allow adding of numbers, removing and
//calling of only phone numbers that were added

class Subject {// the parent class
    constructor() {
        this.observers = [];
        var obv = this.observers;
        return {
            AddPhoneNumber: function (observer) {
                obv.push(observer);
            },
            RemovePhoneNumber: function (observer) {
                var index = obv.indexOf(observer);
                if (index > -1) {
                    obv.splice(index, 1);
                }
            },
            DialPhoneNumber: function (observer) {
                var index = obv.indexOf(observer);
                if (index > -1) {
                    obv[index].inform(observer.bean);
                }
            },
            
            DialAllPhoneNumbers: function (observer) {
                for (var i = 0; i < obv.length; i++) {
                    obv[i].inform(observer.bean);
                };
            }
        };
    }
}

class Observer {
    constructor(number) {//the class for the ones being dialed
        this.number = number;
        return {
    
            inform: function (numbe) {
                console.log(`${numbe} is calling`)
            },
            bean: this.number
        };
    }
}

class DialerObserver {//the class for the one dialing the call
    constructor(number) {
        this.number = number;
        return {
            inform: function (numbe) {
                console.log(`Now Dialing 2347023232`);
            },
            bean: this.number
        };
    }
}

//intializing the parent class
var subject = new Subject();

//creating new phone numbers
var observer1 = new Observer("123");
var observerDial = new DialerObserver("234")

//subcribing the phone numbers
subject.AddPhoneNumber(observer1);
subject.AddPhoneNumber(observerDial);

//informing all phone numbers of the call. the parameter is the phone number making the call
subject.DialAllPhoneNumbers(observer1);
