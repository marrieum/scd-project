class FlightBooking {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer.update(this));
    }
  
    // ... other properties and methods for flight booking
  }
  
  class BookingConfirmation {
    update(flightBooking) {
      // Update the confirmation message based on the new flight booking information
      console.log(`Flight ${flightBooking.flightNumber} confirmed for ${flightBooking.departureDate}`);
    }
  }
  
  class Payment {
    update(flightBooking) {
      // Update the payment status based on the new flight booking information
      console.log(`Payment for Flight ${flightBooking.flightNumber} processed`);
    }
  }
  
  