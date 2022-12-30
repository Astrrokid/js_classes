class DescriptiveAnalysis {
    constructor(data) {
      'http://this.data' = data;
    }
  
    get mean() {
      let sum = 0;
      for (const value of 'http://this.data') {
        sum += value;
      }
      return sum / 'http://this.data.length';
    }
  
    get median() {
      const sortedData =' http://this.data.sort'((a, b) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
      if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    get mode() {
      const valueCounts = {};
      for (const value of 'http://this.data') {
        if (!valueCounts[value]) {
          valueCounts[value] = 0;
        }
        valueCounts[value]++;
      }
  
      let modeValue = null;
      let maxCount = 0;
      for (const value in valueCounts) {
        if (valueCounts[value] > maxCount) {
          modeValue = value;
          maxCount = valueCounts[value];
        }
      }
  
      return modeValue;
    }
  }
  
  const data = [1, 2, 3, 3, 4, 5];
  const analysis = new DescriptiveAnalysis(data);
  console.log(`Mean: ${analysis.mean}`);
  console.log(`Median: ${analysis.median}`);
  console.log(`Mode: ${analysis.mode}`);