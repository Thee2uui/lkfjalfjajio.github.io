function readFile() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
  
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContents = event.target.result;
      const linesArray = fileContents.split('\n');
      var lines = [];
      var domains = [];
  
      for (let i = 0; i < linesArray.length; i++) {
        lines.push(linesArray[i].trim());
      }
  
      for (let i = 0; i < lines.length; i++) {
        if (i !== lines.length - 1 && /^-/.test(lines[i + 1])) {
          domains.push(lines[i]);
        }
      }
  
      let extractedNames = domains.map((leo) => {
        const match = leo.match(/\.([^.]+)\.[^.]+$/);
        return match ? match[1] : leo;
      });

      extractedNames = Array.from(new Set(extractedNames));

      document.getElementById('outputText').innerHTML = extractedNames.join('<br>');
    };
  
    reader.readAsText(file);
  }
  




  /*
  function readFile() {
    var file = document.getElementById('fileUpload').files[0];
    if(file){
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = function (evt) {
            document.getElementById('outputText').innerHTML = evt.target.result;
        }
        reader.onerror = function (evt) {
            document.getElementById('outputText').innerHTML = 'error reading file';
        }
    }
}
*/