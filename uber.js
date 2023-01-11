class Uber {
  constructor(costPerMile, milesTraveled) {
    this.baseFare = 30;
    this.costPerMile = costPerMile;
    this.bookingFee = 20;
    this.milesTraveled = milesTraveled;
  }

  setmilesTraveled(milesTraveled) {
    this.milesTraveled = milesTraveled;
  }

  setCostPerMile(mile) {
    this.costPerMile = mile;
  }

  getRideFee() {
    const totalPrice = `Your total ride cost is: RS. ${
      this.baseFare + this.costPerMile * this.milesTraveled + this.bookingFee
    }.00`;
    return totalPrice;
  }
}

//Instantiation
const uberRide1 = new Uber(20, 5);
console.log(uberRide1);
console.log(uberRide1.getRideFee());

const uberRide2 = new Uber(20, 5);
uberRide2.setCostPerMile(30);
uberRide2.setmilesTraveled(8);
console.log(uberRide2);
console.log(uberRide2.getRideFee());
