class Dispersion {
    constructor(data) {
      this.data = data;
    }
  
    range() {
      return Math.max(...this.data) - Math.min(...this.data);
    }
  
    iqr() {
      this.data.sort((a, b) => a - b);
      const lowerQuartile = this.data.slice(0, Math.floor(this.data.length / 2));
      const upperQuartile = this.data.slice(Math.ceil(this.data.length / 2));
      return Math.max(...upperQuartile) - Math.min(...lowerQuartile);
    }
  
    standardDeviation() {
      const mean = this.data.reduce((a, b) => a + b) / this.data.length;
      return Math.sqrt(this.data.map(x => (x - mean) ** 2).reduce((a, b) => a + b) / this.data.length);
    }
  }
  
  const dispersion = new Dispersion([1, 2, 3, 4, 5]);
  console.log(dispersion.range());
  console.log(dispersion.iqr()); 
  console.log(dispersion.standardDeviation()); 
  