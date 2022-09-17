export default class CALC {
  static kToC(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  static kToF(kelvin) {
    return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  }

  static msToKmH(ms) {
    return Math.round(ms * 3.6);
  }

  static msToMH(ms) {
    return Math.round(ms * 2.237);
  }
}
